const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  realEstateOwner: { type: mongoose.Schema.Types.ObjectId, ref: "RealEstate" },
  realEstateOwnerName: { type: String },
  name: {
    type: String,
    required: true,
  },
  property_type: { type: String, required: true },
  operation_type: { type: String, required: true },
  price: {
    type: Number,
    required: true,
  },
  currency: { type: String, required: true },
  departamento: { type: String, required: true },
  adress: {
    type: String,
    required: true,
  },
  year_built: {
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
  cover_area: {
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
  ambiences: { type: Number, required: true },
  base_image: { type: String, required: true },
  images: { type: Array, default: [] },
  tour_images: { type: Array, default: [] },
});

module.exports = mongoose.model("Property", propertySchema);
