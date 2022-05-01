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
      currency = 'all',
      price_start,
      price_end,
    } = req.query;

    // const properties = await Property.find();

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
    if (currency !== 'all') {
      matchPipeline.push({ currency });
    }

    if (price_start || price_end) {
      if (price_start && price_end) {
        matchPipeline.push({
          price: { $gt: Number(price_start), $lt: Number(price_end) },
        });
      }
      if (price_start && !price_end) {
        matchPipeline.push({ price: { $gt: Number(price_start) } });
      }
      if (price_end && !price_start) {
        matchPipeline.push({ price: { $lt: Number(price_end) } });
      }
    }

    console.log("PIPELINE", matchPipeline);

    let properties = [];

    matchPipeline.length > 0
      ? (properties = await Property.aggregate([
          {
            $match: {
              $and: matchPipeline,
            },
          },
        ]))
      : (properties = await Property.find());

    if (!properties)
      res.status(404).json({ error: "Not Found Any Properties" });
    res.json(properties);
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
      res.status(201).json(newProperty); // 201 succes when creating
    }
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { getAllProperties, postProperty, getPropertyById };
