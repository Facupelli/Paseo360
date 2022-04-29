const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  realEstateOwner: { type: mongoose.Schema.Types.ObjectId, ref: "RealEstate" },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  total_area: {
    type: Number,
    required: true,
  },
  semicover_area: {
    type: Number,
    required: true,
  },
  cover_area: {
    type: Number,
    required: true,
  },
  terrain_area: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  garage: {
    type: Number,
    required: true,
  },
  year_built: {
    type: Number,
    required: true,
  },
  base_image: { type: String },
  images: { type: Array, default: [] },
  tour_images: { type: Array, default: [] },
});

module.exports = mongoose.model("Property", propertySchema);
