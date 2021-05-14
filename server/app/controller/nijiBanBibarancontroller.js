const db = require("../db");
const {
  getAllNijibanBibaran,
  getNijibanBibaran,
  addNijibanBibaran,
  updateNijibanBibaran,
  deleteNijibanBibaran,
} = require("../services/provinceServices");

module.exports = {
  getAllNijibanBibaran: (req, res) => {
    getAllNijibanBibaran((err, results) => {
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
  getNijibanBibaran: (req, res) => {
    getNijibanBibaran((err, results) => {
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
  addNijibanBibaran: (req, res) => {
    addNijibanBibaran((err, results) => {
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
  updateNijibanBibaran: (req, res) => {
    updateNijibanBibaran((err, results) => {
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
  deleteNijibanBibaran: (req, res) => {
    deleteNijibanBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
