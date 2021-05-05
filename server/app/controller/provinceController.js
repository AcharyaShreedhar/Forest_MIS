const db = require("../db");
const {
  getAllProvince,
  getProvince,
  addProvince,
  updateProvince,
  deleteProvince,
} = require("../services/provinceServices");

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

module.exports = {
  addProvince: (req, res) => {
    addProvince((err, results) => {
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
  updateProvince: (req, res) => {
    updateProvince((err, results) => {
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
  deleteProvince: (req, res) => {
    deleteProvince((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
