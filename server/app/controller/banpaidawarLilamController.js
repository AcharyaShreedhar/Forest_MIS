const db = require("../db");
const {
  getAllBanpaidawarLilam,
  getBanpaidawarLilam,
  addBanpaidawarLilam,
  updateBanpaidawarLilam,
  deleteBanpaidawarLilam,
} = require("../services/banpaidawarLilamServices");

module.exports = {
  getAllBanpaidawarLilam: (req, res) => {
    getAllBanpaidawarLilam((err, results) => {
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
  getBanpaidawarLilam: (req, res) => {
    getBanpaidawarLilam((err, results) => {
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
  addBanpaidawarLilam: (req, res) => {
    addBanpaidawarLilam((err, results) => {
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
  updateBanpaidawarLilam: (req, res) => {
    updateBanpaidawarLilam((err, results) => {
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
  deleteBanpaidawarLilam: (req, res) => {
    deleteBanpaidawarLilam((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
