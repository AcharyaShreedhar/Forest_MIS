const db = require("../db");
const {
  getAllAssets,
  getAssets,
  addAssets,
  updateAssets,
  deleteAssets,
} = require("../services/assetsServices");

module.exports = {
  getAllAssets: (req, res) => {
    getAllAssets((err, results) => {
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
  getAssets: (req, res) => {
    getAssets((err, results) => {
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
  addAssets: (req, res) => {
    addAssets((err, results) => {
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
  updateAssets: (req, res) => {
    updateAssets((err, results) => {
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
  deleteAssets: (req, res) => {
    deleteAssets((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
