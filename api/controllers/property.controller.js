const jwt = require("jsonwebtoken");
const Property = require("../models/property");
const User = require("../models/user");

const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
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
