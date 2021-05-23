const db = require("../db");
const {
  getAllBanyajantuXetiRahat,
  getBanyajantuXetiRahat,
  addBanyajantuXetiRahat,
  updateBanyajantuXetiRahat,
  deleteBanyajantuXetiRahat,
} = require("../services/banyajantuXetiRahatServices");

module.exports = {
  getAllBanyajantuXetiRahat: (req, res) => {
    getAllBanyajantuXetiRahat((err, results) => {
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
  getBanyajantuXetiRahat: (req, res) => {
    getBanyajantuXetiRahat((err, results) => {
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
  addBanyajantuXetiRahat: (req, res) => {
    addBanyajantuXetiRahat((err, results) => {
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
  updateBanyajantuXetiRahat: (req, res) => {
    updateBanyajantuXetiRahat((err, results) => {
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
  deleteBanyajantuXetiRahat: (req, res) => {
    deleteBanyajantuXetiRahat((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};