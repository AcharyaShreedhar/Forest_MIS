const db = require("../db");
const {
  getAllDepartment,
  getDepartment,
  addDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../services/departmentServices");

module.exports = {
  getAllDepartment: (req, res) => {
    getAllDepartment((err, results) => {
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
  getDepartment: (req, res) => {
    getDepartment((err, results) => {
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
  addDepartment: (req, res) => {
    addDepartment((err, results) => {
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
  updateDepartment: (req, res) => {
    updateDepartment((err, results) => {
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
  deleteDepartment: (req, res) => {
    deleteDepartment((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
