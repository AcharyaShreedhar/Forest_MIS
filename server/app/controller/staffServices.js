const pool = require("../db");

module.exports = {
  getStaffs: (callBack) => {
    pool.query(`select * from staffs`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};
