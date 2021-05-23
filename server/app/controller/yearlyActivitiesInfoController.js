const db = require("../db");
const {
  getAllYearlyActivitiesInfo,
  getYearlyActivitiesInfo,
  addYearlyActivitiesInfo,
  updateYearlyActivitiesInfo,
  deleteYearlyActivitiesInfo,
} = require("../services/yearlyActivitiesInfoServices");

module.exports = {
  getAllYearlyActivitiesInfo: (req, res) => {
    getAllYearlyActivitiesInfo((err, results) => {
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
  getYearlyActivitiesInfo: (req, res) => {
    getYearlyActivitiesInfo((err, results) => {
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
  addYearlyActivitiesInfo: (req, res) => {
    addYearlyActivitiesInfo((err, results) => {
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
  updateYearlyActivitiesInfo: (req, res) => {
    updateYearlyActivitiesInfo((err, results) => {
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
  deleteYearlyActivitiesInfo: (req, res) => {
    deleteYearlyActivitiesInfo((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
