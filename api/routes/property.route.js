const express = require("express");
const {
  getAllProperties,
  postProperty,
  getPropertyById,
} = require("../controllers/property.controller");
const { verifyToken } = require("../utils/tokenValidaton");

const router = express.Router();

// Getting all
router.get("/", getAllProperties);
// Geting one
router.get("/:id", getPropertyById);

router.post("/", verifyToken, postProperty);

module.exports = router;
