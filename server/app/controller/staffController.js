const db = require("../db");
const { getStaffs } = require("../services/staffServices");

module.exports = {
  getAllStaffs: (req, res) => {
    getStaffs((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
