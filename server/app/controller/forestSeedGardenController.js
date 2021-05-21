const db = require("../db");
const {
  getAllForestSeedGarden,
  getForestSeedGarden,
  addForestSeedGarden,
  updateForestSeedGarden,
  deleteForestSeedGarden,
} = require("../services/forestSeedGardenServices");

module.exports = {
  getAllForestSeedGarden: (req, res) => {
    getAllForestSeedGarden((err, results) => {
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
  getForestSeedGarden: (req, res) => {
    getForestSeedGarden((err, results) => {
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
  addForestSeedGarden: (req, res) => {
    addForestSeedGarden((err, results) => {
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
  updateForestSeedGarden: (req, res) => {
    updateForestSeedGarden((err, results) => {
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
  deleteForestSeedGarden: (req, res) => {
    deleteForestSeedGarden((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
