const db = require("../db");
const {
  getAllUpavoktasamuhaBibaran,
  getUpavoktasamuhaBibaran,
  addUpavoktasamuhaBibaran,
  updateUpavoktasamuhaBibaran,
  deleteUpavoktasamuhaBibaran,
} = require("../services/upavoktasamuhaBibaranServices");

module.exports = {
  getAllUpavoktasamuhaBibaran: (req, res) => {
    getAllUpavoktasamuhaBibaran ((err, results) => {
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
  getUpavoktasamuhaBibaran: (req, res) => {
    getUpavoktasamuhaBibaran ((err, results) => {
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
  addUpavoktasamuhaBibaran: (req, res) => {
    addUpavoktasamuhaBibaran ((err, results) => {
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
  updateUpavoktasamuhaBibaran: (req, res) => {
    updateUpavoktasamuhaBibaran((err, results) => {
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
  deleteUpavoktasamuhaBibaran: (req, res) => {
    deleteUpavoktasamuhaBibaran ((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
