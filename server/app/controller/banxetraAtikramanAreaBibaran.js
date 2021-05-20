const db = require("../db");
const {
  getAllBanxetraAtikramanAreaBibaran,
  getBanxetraAtikramanAreaBibaran,
  addBanxetraAtikramanAreaBibaran,
  updateBanxetraAtikramanAreaBibaran,
  deleteBanxetraAtikramanAreaBibaran,
} = require("../services/banxetraAtikramanAreaBibaranServices");

module.exports = {
  getAllBanxetraAtikramanAreaBibaran: (req, res) => {
    getAllBanxetraAtikramanAreaBibaran((err, results) => {
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
  getBanxetraAtikramanAreaBibaran: (req, res) => {
    getBanxetraAtikramanAreaBibaran((err, results) => {
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
  addBanxetraAtikramanAreaBibaran: (req, res) => {
    addBanxetraAtikramanAreaBibaran((err, results) => {
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
  updateBanxetraAtikramanAreaBibaran: (req, res) => {
    updateBanxetraAtikramanAreaBibaran((err, results) => {
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
  deleteBanxetraAtikramanAreaBibaran: (req, res) => {
    deleteBanxetraAtikramanAreaBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
