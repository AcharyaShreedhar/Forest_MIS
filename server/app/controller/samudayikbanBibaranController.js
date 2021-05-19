const db = require("../db");
const {
  getAllSamudayikbanBibaran,
  getSamudayikbanBibaran,
  addSamudayikbanBibaran,
  updateSamudayikbanBibaran,
  deleteSamudayikbanBibaran,
} = require("../services/SamudayikbanBibaranServices");

module.exports = {
  getAllSamudayikbanBibaran: (req, res) => {
    getAllSamudayikbanBibaran((err, results) => {
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
    samudayikbanBibaran: (req, res) => {
        samudayikbanBibaran((err, results) => {
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
  addSamudayikbanBibaran: (req, res) => {
    addSamudayikbanBibaran((err, results) => {
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
  updateSamudayikbanBibaran: (req, res) => {
    updateSamudayikbanBibaran((err, results) => {
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
  deleteSamudayikbanBibaran: (req, res) => {
    deleteSamudayikbanBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
