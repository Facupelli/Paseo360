const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  properties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
  name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
