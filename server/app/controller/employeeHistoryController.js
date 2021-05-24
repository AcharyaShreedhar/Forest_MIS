const db = require("../db");
const {
  getAllEmployeeHistory,
  getEmployeeHistory,
  addEmployeeHistory,
  updateEmployeeHistory,
  deleteEmployeeHistory,
} = require("../services/employeeHistoryServices");

module.exports = {
  getAllEmployeeHistory: (req, res) => {
    getAllEmployeeHistory((err, results) => {
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
  getEmployeeHistory: (req, res) => {
    getEmployeeHistory((err, results) => {
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
  addEmployeeHistory: (req, res) => {
    addEmployeeHistory((err, results) => {
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
  updateEmployeeHistory: (req, res) => {
    updateEmployeeHistory((err, results) => {
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
  deleteEmployeeHistory: (req, res) => {
    deleteEmployeeHistory((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};