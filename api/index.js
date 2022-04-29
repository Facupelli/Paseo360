const app = require("./server.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const port = process.env.PORT || 8000; //create port number

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

mongoose
  .connect(process.env.PASEO360_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!");
});
