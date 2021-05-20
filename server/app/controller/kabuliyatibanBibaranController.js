const db = require("../db");
const {
  getAllKabuliyatibanBibaran,
  getKabuliyatibanBibaran,
  addKabuliyatibanBibaran,
  updateKabuliyatibanBibaran,
  deleteKabuliyatibanBibaran,
} = require("../services/kabuliyatibanBibaranServices");

module.exports = {
  getAllKabuliyatibanBibaran: (req, res) => {
    getAllKabuliyatibanBibaran((err, results) => {
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
  getKabuliyatibanBibaran: (req, res) => {
    getKabuliyatibanBibaran((err, results) => {
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
  addKabuliyatibanBibaran: (req, res) => {
    addKabuliyatibanBibaran((err, results) => {
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
  updateKabuliyatibanBibaran: (req, res) => {
    updateKabuliyatibanBibaran((err, results) => {
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
  deleteKabuliyatibanBibaran: (req, res) => {
    deleteKabuliyatibanBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
