const db = require("../db");
const { getAllProvince, getProvince } = require("../services/provinceServices");

module.exports = {
  getAllProvince: (req, res) => {
    getAllProvince((err, results) => {
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
  getProvince: (req, res) => {
    getProvince((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
