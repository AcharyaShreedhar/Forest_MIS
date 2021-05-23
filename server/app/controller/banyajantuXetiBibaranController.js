const db = require("../db");
const {
  getAllBanyajantuXetiBibaran,
  getBanyajantuXetiBibaran,
  addBanyajantuXetiBibaran,
  updateBanyajantuXetiBibaran,
  deleteBanyajantuXetiBibaran,
} = require("../services/banyajantuXetiBibaranServices");

module.exports = {
  getAllBanyajantuXetiBibaran: (req, res) => {
    getAllBanyajantuXetiBibaran((err, results) => {
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
  getBanyajantuXetiBibaran: (req, res) => {
    getBanyajantuXetiBibaran((err, results) => {
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
  addBanyajantuXetiBibaran: (req, res) => {
    addBanyajantuXetiBibaran((err, results) => {
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
  updateBanyajantuXetiBibaran: (req, res) => {
    updateBanyajantuXetiBibaran((err, results) => {
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
  deleteBanyajantuXetiBibaran: (req, res) => {
    deleteBanyajantuXetiBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};