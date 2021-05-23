const db = require("../db");
const {
  getAllBanyajantuUddar,
  getBanyajantuUddar,
  addBanyajantuUddar,
  updateBanyajantuUddar,
  deleteBanyajantuUddar,
} = require("../services/banyajantuUddarServices");

module.exports = {
  getAllBanyajantuUddar: (req, res) => {
    getAllBanyajantuUddar((err, results) => {
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
  getBanyajantuUddar: (req, res) => {
    getBanyajantuUddar((err, results) => {
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
  addBanyajantuUddar: (req, res) => {
    addBanyajantuUddar((err, results) => {
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
  updateBanyajantuUddar: (req, res) => {
    updateBanyajantuUddar((err, results) => {
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
  deleteBanyajantuUddar: (req, res) => {
    deleteBanyajantuUddar((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
