const jwt = require("jsonwebtoken");
const Property = require("../models/property");
const User = require("../models/user");

const getAllProperties = async (req, res) => {
  try {
    const {
      property_type = "all",
      operation_type = "all",
      departamento = "all",
      real_estate = "all",
      currency = "all",
      price_start,
      price_end,
      order,
      antiquity,
      ambiences,
      bedrooms,
      bathrooms,
      garage,
      total_area_start,
      total_area_end,
      cover_area_start,
      cover_area_end,
      date,
    } = req.query;

    //PIPELINE
    let matchPipeline = [];

    if (property_type !== "all") {
      matchPipeline.push({ property_type });
    }
    if (operation_type !== "all") {
      matchPipeline.push({ operation_type });
    }
    if (departamento !== "all") {
      matchPipeline.push({ departamento });
    }
    if (real_estate !== "all") {
      matchPipeline.push({ realEstateOwnerName: real_estate });
    }
    if (currency !== "all") {
      matchPipeline.push({ currency });
    }

    if (price_start || price_end) {
      if (price_start && price_end) {
        matchPipeline.push({
          price: { $gte: Number(price_start), $lte: Number(price_end) },
        });
      }
      if (price_start && !price_end) {
        matchPipeline.push({ price: { $gte: Number(price_start) } });
      }
      if (price_end && !price_start) {
        matchPipeline.push({ price: { $lte: Number(price_end) } });
      }
    }

    if (antiquity) {
      if (antiquity === "more50") {
        matchPipeline.push({ year_built: { $gte: Number(date) - 50 } });
      } else if (antiquity === "5") {
        matchPipeline.push({ year_built: { $gte: Number(date) - 5 } });
      } else {
        const antiquityArray = Array.from(antiquity.split("-")).map(Number);
        matchPipeline.push({
          year_built: {
            $gte: Number(date) - antiquityArray[antiquityArray.length - 1],
            $lte: Number(date) - antiquityArray[0],
          },
        });
      }
    }

    if (ambiences) {
      if (ambiences === "more6") {
        matchPipeline.push({ ambiences: { $gte: 6 } });
      } else {
        const ambiencesArray = Array.from(ambiences.split(",").map(Number));
        matchPipeline.push({ ambiences: { $in: ambiencesArray } });
      }
    }

    if (bedrooms) {
      if (bedrooms === "more5") {
        matchPipeline.push({ bedrooms: { $gte: 5 } });
      } else {
        const bedroomsArray = Array.from(bedrooms.split(",").map(Number));
        matchPipeline.push({ bedrooms: { $in: bedroomsArray } });
      }
    }

    if (bathrooms) {
      if (bathrooms === "more4") {
        matchPipeline.push({ bathrooms: { $gte: 4 } });
      } else {
        const bathroomsArray = Array.from(bathrooms.split(",").map(Number));
        matchPipeline.push({ bathrooms: { $in: bathroomsArray } });
      }
    }

    if (garage) {
      if (garage === "more5") {
        matchPipeline.push({ garage: { $gte: 5 } });
      } else {
        const garageArray = Array.from(garage.split(",").map(Number));
        matchPipeline.push({ garage: { $in: garageArray } });
      }
    }

    console.log("PIPELINE", matchPipeline);

    let aggregatePipeline = [
      {
        $match: {
          $and: matchPipeline,
        },
      },
    ];

    if (matchPipeline.length > 0 && order !== "relevants") {
      aggregatePipeline.push({
        $sort: { price: order === "price_asc" ? 1 : -1, _id: 1 },
      });
    }

    console.log("ORDER", order);

    let properties = [];

    if (matchPipeline.length > 0) {
      properties = await Property.aggregate(aggregatePipeline);
    } else {
      if (order) {
        properties = await Property.find().sort({
          price: order === "price_asc" ? 1 : -1,
          _id: 1,
        });
      } else {
        properties = await Property.find();
      }
    }

    if (!properties) {
      res.status(404).json({ error: "Not Found Any Properties" });
    }

    //REAL ESTATES
    const realEstates = await User.find({ "properties.0": { $exists: true } });
    const realEstatesNames = realEstates.map((realEstate) => realEstate.name);

    res.json({
      properties,
      totalProperties: properties.length,
      realEstates: realEstatesNames,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getPropertyById = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const property = await Property.findById(id);

      if (!property) {
        res.status(404).json({ error: "Recipe Not Found" });
      }

      res.send(property);
    } else {
      res.status(400).json({ error: "Missing ID" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const postProperty = async (req, res) => {
  try {
    const { data } = req.body;
    console.log("JWT VERIFY", req.user);

    const user = User.findById(req.user.id);

    if (user) {
      const property = new Property(data);
      const newProperty = await property.save();

      await User.findOneAndUpdate(
        { _id: req.user.id },
        { $push: { properties: newProperty._id } }
      );

      res.status(201).json(newProperty); // 201 succes when creating
    }
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { getAllProperties, postProperty, getPropertyById };
