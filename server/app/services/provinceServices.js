const pool = require("../db");

//Service for Listing all Province
module.exports = {
  getAllProvince: (callBack) => {
    const getAllProvinceQuery = `select * from province`;
    pool.query(getAllProvinceQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a Province
module.exports = {
  getProvince: (callBack) => {
    const getProvinceQuery = `select * from province where province_id=$1`;
    pool.query(
      getProvinceQuery,
      [req.params.provinceId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
