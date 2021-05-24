const db = require("../db");
const {
  getAllMuddaAnusandhanDayari,
  getMuddaAnusandhanDayari,
  addMuddaAnusandhanDayari,
  updateMuddaAnusandhanDayari,
  deleteMuddaAnusandhanDayari,
} = require("../services/muddaAnusandhanDayariServices");

module.exports = {
  getAllMuddaAnusandhanDayari: (req, res) => {
    getAllMuddaAnusandhanDayari((err, results) => {
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
  getMuddaAnusandhanDayari: (req, res) => {
    getMuddaAnusandhanDayari((err, results) => {
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
  addMuddaAnusandhanDayari: (req, res) => {
    addMuddaAnusandhanDayari((err, results) => {
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
  updateMuddaAnusandhanDayari: (req, res) => {
    updateMuddaAnusandhanDayari((err, results) => {
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
  deleteMuddaAnusandhanDayari: (req, res) => {
    deleteMuddaAnusandhanDayari((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};

