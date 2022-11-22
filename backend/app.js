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
app.use("/in-class-inst", require("./routes/inClassInstructor"));
app.use("/product", require("./routes/product"));
app.use("/in-car-inst", require("./routes/inCarInstructor"));
app.use("/course", require("./routes/course"));
app.use("/student", require("./routes/student"));

app.use("/db", require("./routes/db"));

app.use("/", (req, res) => {
  console.log("root");
  res.send();
});

module.exports = app;
