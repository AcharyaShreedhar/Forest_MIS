const db = require("../db");
const {
  getAllnijibanBibaran,
  getnijibanBibaran,
  addnijibanBibaran,
  updatenijibanBibaran,
  deletenijibanBibaran,
} = require("../services/nijibanBibaranServices");

module.exports = {
  getAllnijibanBibaran: (req, res) => {
    getAllnijibanBibaran((err, results) => {
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
  getnijibanBibaran: (req, res) => {
    getnijibanBibaran((err, results) => {
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
  addnijibanBibaran: (req, res) => {
    addnijibanBibaran((err, results) => {
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
  updatenijibanBibaran: (req, res) => {
    updatenijibanBibaran((err, results) => {
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
  deletenijibanBibaran: (req, res) => {
    deletenijibanBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
