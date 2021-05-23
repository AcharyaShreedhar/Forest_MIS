const db = require("../db");
const {
  getAllBanxetraAnyaPrayojan,
  getBanxetraAnyaPrayojan,
  addBanxetraAnyaPrayojan,
  updateBanxetraAnyaPrayojan,
  deleteBanxetraAnyaPrayojan,
} = require("../services/banxetraAnyaPrayojanServices");

module.exports = {
  getAllBanxetraAnyaPrayojan: (req, res) => {
    getAllBanxetraAnyaPrayojan((err, results) => {
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
  getBanxetraAnyaPrayojan: (req, res) => {
    getBanxetraAnyaPrayojan((err, results) => {
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
  addBanxetraAnyaPrayojan: (req, res) => {
    addBanxetraAnyaPrayojan((err, results) => {
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
  updateBanxetraAnyaPrayojan: (req, res) => {
    updateBanxetraAnyaPrayojan((err, results) => {
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
  deleteBanxetraAnyaPrayojan: (req, res) => {
    deleteBanxetraAnyaPrayojan((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
