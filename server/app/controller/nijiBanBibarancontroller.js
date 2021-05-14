const db = require("../db");
const {
  getAllnijiBanBibaran,
  getnijiBanBibaran,
  addnijiBanBibaran,
  updatenijiBanBibaran,
  deletenijiBanBibaran,
} = require("../services/provinceServices");

module.exports = {
  getAllnijiBanBibaran: (req, res) => {
    getAllnijiBanBibaran((err, results) => {
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
  getnijiBanBibaran: (req, res) => {
    getnijiBanBibaran((err, results) => {
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
  addnijiBanBibaran: (req, res) => {
    addnijiBanBibaran((err, results) => {
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
  updatenijiBanBibaran: (req, res) => {
    updatenijiBanBibaran((err, results) => {
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
  deletenijiBanBibaran: (req, res) => {
    deletenijiBanBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
