const db = require("../db");
const {
  getAllReligiousForestBibaran,
  getReligiousForestBibaran,
  addReligiousForestBibaran,
  updateReligiousForestBibaran,
  deleteReligiousForestBibaran,
} = require("../services/religiousForestBibaranServices");

module.exports = {
  getAllReligiousForestBibaran: (req, res) => {
    getAllReligiousForestBibaran((err, results) => {
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
  getReligiousForestBibaran: (req, res) => {
    getReligiousForestBibaran((err, results) => {
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
  addReligiousForestBibaran: (req, res) => {
    addReligiousForestBibaran((err, results) => {
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
  updateReligiousForestBibaran: (req, res) => {
    updateReligiousForestBibaran((err, results) => {
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
  deleteReligiousForestBibaran: (req, res) => {
    deleteReligiousForestBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};