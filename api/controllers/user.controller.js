const bcrypt = require("bcrypt");
const User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) res.status(404).json({ error: "Not Found Any Users" });
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const user = await User.findById(id);

      if (!user) {
        res.status(404).json({ error: "User Not Found" });
      }

      res.send(user);
    } else {
      res.status(400).json({ error: "Missing ID" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { data } = req.body;

    const isUserExist = await User.findOne({ email: data.email });

    if (isUserExist) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(data.password, salt);

    const user = new User({ ...data, passwordHash, });

    const newUser = await user.save();
    res.status(201).json(newUser); // 201 succes when creating
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = { getAllUsers, getUserById, registerUser };
