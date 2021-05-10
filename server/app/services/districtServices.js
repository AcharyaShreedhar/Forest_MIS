const pool = require("../db");

//Service for Listing all Districts
module.exports = {
  getAllDistrict: (callBack) => {
    const getAllDistrictQuery = `select * from district`;
    pool.query(getAllDistrictQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a District
module.exports = {
  getDistrict: (callBack) => {
    const getDistrictQuery = `select * from district where dist_id=$1`;
    pool.query(
      getDistrictQuery,
      [req.params.districtId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a District
module.exports = {
  addDistrict: (callBack) => {
    const addDistrictQuery = `INSERT INTO district (dist_name_eng,dist_name_nep,prov_id) values ($1,$2,$3) returning *`;
    pool.query(
      addDistrictQuery,
      [req.body.dist_name_eng, req.body.dist.name_nep, req.body.prov_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a District
module.exports = {
  updateDistrict: (callBack) => {
    const updateDistrictQuery = `UPDATE district SET dist_name_eng=$1, dist_name_nep=$2, prov_id=$3 WHERE dist_id=$3 returning *`;
    pool.query(
      updateDistrictQuery,
      [
        req.body.dist_name_eng,
        req.body.dist_name_nep,
        req.body.prov_id,
        req.params.districtId,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a District
module.exports = {
  deleteDistrict: (callBack) => {
    const deleteDistrictQuery = `DELETE  FROM district where dist_id=$1`;
    pool.query(
      deleteDistrictQuery,
      [req.params.districtId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
