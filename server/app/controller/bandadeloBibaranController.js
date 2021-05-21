const db = require("../db");
const {
  getAllBandadeloBibaran,
  getBandadeloBibaran,
  addBandadeloBibaran,
  updateBandadeloBibaran,
  deleteBandadeloBibaran,
} = require("../services/bandadeloBibaranServices");

module.exports = {
  getAllBandadeloBibaran: (req, res) => {
    getAllBandadeloBibaran((err, results) => {
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
  getBandadeloBibaran: (req, res) => {
    getBandadeloBibaran((err, results) => {
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
  addBandadeloBibaran: (req, res) => {
    addBandadeloBibaran((err, results) => {
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
  updateBandadeloBibaran: (req, res) => {
    updateBandadeloBibaran((err, results) => {
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
  deleteBandadeloBibaran: (req, res) => {
    deleteBandadeloBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
