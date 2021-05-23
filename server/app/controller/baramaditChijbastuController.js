const db = require("../db");
const {
  getAllBaramaditChijbastu,
  getBaramaditChijbastu,
  addBaramaditChijbastu,
  updateBaramaditChijbastu,
  deleteBaramaditChijbastu,
} = require("../services/baramaditChijbastuServices");

module.exports = {
  getAllBaramaditChijbastu: (req, res) => {
    getAllBaramaditChijbastu((err, results) => {
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
  getBaramaditChijbastu: (req, res) => {
    getBaramaditChijbastu((err, results) => {
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
  addBaramaditChijbastu: (req, res) => {
    addBaramaditChijbastu((err, results) => {
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
  updateBaramaditChijbastu: (req, res) => {
    updateBaramaditChijbastu((err, results) => {
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
  deleteBaramaditChijbastu: (req, res) => {
    deleteBaramaditChijbastu((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};