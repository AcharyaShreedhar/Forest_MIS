const db = require("../db");
const {
  getAllreligiousForestBibaran,
  getreligiousForestBibaran,
  addreligiousForestBibaran,
  updatereligiousForestBibaran,
  deletereligiousForestBibaran,
} = require("../services/religiousForestBibaranServices");

module.exports = {
  getAllreligiousForestBibaran: (req, res) => {
    getAllreligiousForestBibaran((err, results) => {
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
  getreligiousForestBibaran: (req, res) => {
    getreligiousForestBibaran((err, results) => {
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
  addreligiousForestBibaran: (req, res) => {
    addreligiousForestBibaran((err, results) => {
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
  updatereligiousForestBibaran: (req, res) => {
    updatereligiousForestBibaran((err, results) => {
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
  deletereligiousForestBibaran: (req, res) => {
    deletereligiousForestBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};