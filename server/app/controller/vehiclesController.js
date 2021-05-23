const db = require("../db");
const {
  getAllVehicles,
  getVehicles,
  addVehicles,
  updateVehicles,
  deleteVehicles,
} = require("../services/vehiclesServices");

module.exports = {
  getAllVehicles: (req, res) => {
    getAllVehicles((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};

module.exports = {
  getVehicles: (req, res) => {
    getVehicles((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};

module.exports = {
  addVehicles: (req, res) => {
    addVehicles((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};

module.exports = {
  updateVehicles: (req, res) => {
    updateVehicles((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
module.exports = {
  deleteVehicles: (req, res) => {
    deleteVehicles((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
