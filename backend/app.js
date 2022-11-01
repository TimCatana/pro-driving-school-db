const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();
/**
 * Route setup.
 * Order of precedence matters
 */
app.use("/courses", require("./routes/courses"));
app.use("/products", require("./routes/products"));
app.use("/db", require("./routes/db"));

app.use("/", (req, res) => {
  console.log("root");
  res.send();
});

module.exports = app;
