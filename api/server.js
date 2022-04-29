const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express(); //server

app.use(cors());
app.use(express.json()); //can accept json on the body of requests

//ROUTES
const propertyRoute = require("./routes/property.route.js");
const userRoute = require("./routes/user.route.js");
const loginRoute = require("./routes/login.route.js");

app.use("/properties", propertyRoute);
app.use("/users", userRoute);
app.use("/login", loginRoute);

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

module.exports = app;
