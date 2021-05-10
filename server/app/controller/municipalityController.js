const db = require("../db");
const {
  getAllMunicipality,
  getMunicipality,
  addMunicipality,
  updateMunicipality,
  deleteMunicipality,
} = require("../services/minicipalityServices");

module.exports = {
  getAllMunicipality: (req, res) => {
    getAllMunicipality((err, results) => {
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
  getMunicipality: (req, res) => {
    getMunicipality((err, results) => {
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
  addPMunicipality: (req, res) => {
    addMunicipality((err, results) => {
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
  updateMunicipality: (req, res) => {
    updateMunicipality((err, results) => {
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
  deleteMunicipality: (req, res) => {
    deleteMunicipality((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
