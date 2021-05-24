const db = require("../db");
const {
  getAllExit,
  getExit,
  addExit,
  updateExit,
  deleteExit,
} = require("../services/exitServices");

module.exports = {
  getAllExit: (req, res) => {
    getAllExit((err, results) => {
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
  getExit: (req, res) => {
    getExit((err, results) => {
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
  addExit: (req, res) => {
    addExit((err, results) => {
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
  updateExit: (req, res) => {
    updateExit((err, results) => {
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
  deleteExit: (req, res) => {
    deleteExit((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};