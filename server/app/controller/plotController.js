const db = require("../db");
const {
  getAllPlot,
  getPlot,
  addPlot,
  updatePlot,
  deletePlot,
} = require("../services/plotServices");

module.exports = {
  getAllPlot: (req, res) => {
    getAllPlot((err, results) => {
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
  getPlot: (req, res) => {
    getPlot((err, results) => {
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
  addPlot: (req, res) => {
    addPlot((err, results) => {
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
  updatePlot: (req, res) => {
    updatePlot((err, results) => {
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
  deletePlot: (req, res) => {
    deletePlot((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
