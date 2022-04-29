const express = require("express");
const { getAllUsers, registerUser, getUserById } = require("../controllers/user.controller");

const router = express.Router();

// Getting all
router.get("/", getAllUsers);
// Geting one
router.get("/:id", getUserById);

router.post("/", registerUser);

module.exports = router;
