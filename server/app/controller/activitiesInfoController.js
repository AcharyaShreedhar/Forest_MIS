const db = require("../db");
const {
  getAllActivitiesInfo,
  getActivitiesInfo,
  addActivitiesInfo,
  updateActivitiesInfo,
  deleteActivitiesInfo,
} = require("../services/activitiesInfoServices");

module.exports = {
  getAllActivitiesInfo: (req, res) => {
    getAllActivitiesInfo((err, results) => {
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
  getActivitiesInfo: (req, res) => {
    getActivitiesInfo((err, results) => {
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
  addActivitiesInfo: (req, res) => {
    addActivitiesInfo((err, results) => {
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
  updateActivitiesInfo: (req, res) => {
    updateActivitiesInfo((err, results) => {
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
  deleteActivitiesInfo: (req, res) => {
    deleteActivitiesInfo((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
