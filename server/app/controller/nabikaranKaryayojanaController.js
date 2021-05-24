const db = require("../db");
const {
  getAllNabikaranKaryayojana,
  getNabikaranKaryayojana,
  addNabikaranKaryayojana,
  updateNabikaranKaryayojana,
  deleteNabikaranKaryayojana,
} = require("../services/nabikaranKaryayojanaServices");

module.exports = {
  getAllNabikaranKaryayojana: (req, res) => {
    getAllNabikaranKaryayojana((err, results) => {
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
  getNabikaranKaryayojana: (req, res) => {
    getNabikaranKaryayojana((err, results) => {
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
  addNabikaranKaryayojana: (req, res) => {
    addNabikaranKaryayojana((err, results) => {
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
  updateNabikaranKaryayojana: (req, res) => {
    updateNabikaranKaryayojana((err, results) => {
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
  deleteNabikaranKaryayojana: (req, res) => {
    deleteNabikaranKaryayojana((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
