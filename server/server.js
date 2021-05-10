/**
 * Created by Shreedhar Acharya
 *
 */

require("dotenv").config();
const express = require("express");

const db = require("./app/db");
var cors = require("cors");
bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const staffRoutes = require("./app/routes/staffRoutes");
const provinceRoutes = require("./app/routes/provinceRoutes");
const districtRoutes = require("./app/routes/districtRoutes");

app.use("/api/v1", staffRoutes);
app.use("/api/v1", provinceRoutes);
app.use("/app/v1", districtRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
