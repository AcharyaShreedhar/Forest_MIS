const db = require("../db");
const {
  getAllBanpaidawar,
  getBanpaidawar,
  addBanpaidawar,
  updateBanpaidawar,
  deleteBanpaidawar,
} = require("../services/banpaidawarServices");

module.exports = {
  getAllBanpaidawar: (req, res) => {
    getAllBanpaidawar((err, results) => {
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
  getBanpaidawar: (req, res) => {
    getBanpaidawar((err, results) => {
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
  addBanpaidawar: (req, res) => {
    addBanpaidawar((err, results) => {
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
  updateBanpaidawar: (req, res) => {
    updateBanpaidawar((err, results) => {
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
  deleteBanpaidawar: (req, res) => {
    deleteBanpaidawar((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
