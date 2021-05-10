const db = require("../db");
const {
  getAllDistrict,
  getDistrict,
  addDistrict,
  updateDistrict,
  deleteDistrict,
} = require("../services/districtServices");

module.exports = {
  getAllDistrict: (req, res) => {
    getAllDistrict((err, results) => {
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
  getDistrict: (req, res) => {
    getDistrict((err, results) => {
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
  addPDistrict: (req, res) => {
    addDistrict((err, results) => {
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
  updateDistrict: (req, res) => {
    updateDistrict((err, results) => {
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
  deleteDistrict: (req, res) => {
    deleteDistrict((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
