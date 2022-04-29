const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(401).json({ error: "Invalid email" });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);

  if (!isPasswordCorrect) {
    res.status(401).json({ error: "Invalid Password" });
  }

  const userForToken = {
    id: user._id,
    email: user.email,
  };

  const token = jwt.sign(userForToken, process.env.TOKEN_SECRET_WORD);

  res.json({
    name: user.name,
    email: user.email,
    token,
  });
};

module.exports = { login };
