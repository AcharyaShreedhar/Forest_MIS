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

//Service for adding a Province
module.exports = {
  addProvince: (callBack) => {
    const addProvinceQuery = `INSERT INTO province (prov_name_eng,prov_name_nep) values ($1,$2) returning *`;
    pool.query(
      addProvinceQuery,
      [req.body.prov_name_eng, req.body.prov.name_nep],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a Province
module.exports = {
  updateProvince: (callBack) => {
    const updateProvinceQuery = `UPDATE province SET prov_name_eng=$1, prov_name_nep=$2 WHERE province_id=$3 returning *`;
    pool.query(
      updateProvinceQuery,
      [req.body.prov_name_eng, req.body.prov_name_nep, req.params.provinceId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a Province
module.exports = {
  deleteProvince: (callBack) => {
    const deleteProvinceQuery = `DELETE  FROM province where province_id=$1`;
    pool.query(
      deleteProvinceQuery,
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
