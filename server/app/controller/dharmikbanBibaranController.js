const db = require("../db");
const {
  getAllDharmikbanBibaran,
  getDharmikbanBibaran,
  addDharmikbanBibaran,
  updateDharmikbanBibaran,
  deleteDharmikbanBibaran,
} = require("../services/dharmikbanBibaranServices");

module.exports = {
  getAllDharmikbanBibaran: (req, res) => {
    getAllDharmikbanBibaran((err, results) => {
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
  getDharmikbanBibaran: (req, res) => {
    getDharmikbanBibaran((err, results) => {
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
  addDharmikbanBibaran: (req, res) => {
    addDharmikbanBibaran((err, results) => {
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
  updateDharmikbanBibaran: (req, res) => {
    updateDharmikbanBibaran((err, results) => {
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
  deleteDharmikbanBibaran: (req, res) => {
    deleteDharmikbanBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};