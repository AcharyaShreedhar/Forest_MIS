const db = require("../db");
const {
  getAllBiruwaUtpadan,
  getBiruwaUtpadan,
  addBiruwaUtpadan,
  updateBiruwaUtpadan,
  deleteBiruwaUtpadan,
} = require("../services/biruwaUtpadanServices");

module.exports = {
  getAllBiruwaUtpadan: (req, res) => {
    getAllBiruwaUtpadan((err, results) => {
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
  getBiruwaUtpadan: (req, res) => {
    getBiruwaUtpadan((err, results) => {
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
  addBiruwaUtpadan: (req, res) => {
    addBiruwaUtpadan((err, results) => {
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
  updateBiruwaUtpadan: (req, res) => {
    updateBiruwaUtpadan((err, results) => {
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
  deleteBiruwaUtpadan: (req, res) => {
    deleteBiruwaUtpadan((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
