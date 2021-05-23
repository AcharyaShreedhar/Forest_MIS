const pool = require("../db");

//Service for Listing all Assets
module.exports = {
  getAllAssets: (callBack) => {
    const getAllAssetsQuery = `select * from assets`;
    pool.query(getAllAssetsQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a Asset
module.exports = {
  getLevel: (callBack) => {
    const getAssetsQuery = `select * from assets where asset_id=$1`;
    pool.query(
      getAssetsQuery,
      [req.params.assetsId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a Asset
module.exports = {
  addAssets: (callBack) => {
    const addAssetsQuery = `INSERT INTO assets (asset_type, asset_loc, kitta_no, home_area, land_area, unit, remarks) values ($1,$2,$3,$4,$5,$6,$7) returning *`;
    pool.query(
      addAssetsQuery,
      [req.body.asset_type, req.body.asset_loc, req.body.kitta_no, req.body.home_area, req.body.land_area, req.body.unit, req.body.remarks],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a Asset
module.exports = {
  updateAssets: (callBack) => {
    const updateAssetsQuery = `UPDATE Assets SET asset_type=$1, asset_loc=$2, kitta_no = $3, home_area=$4, land_area=$5, unit=$6, remarks=$7 WHERE asset_id=$8 returning *`;
    pool.query(
      updateAssetsQuery,
      [req.body.asset_type, req.body.asset_loc, req.body.kitta_no, req.body.home_area, req.body.land_area, req.body.unit, req.body.remarks, req.params.assetsId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a Asset
module.exports = {
  deleteAssets: (callBack) => {
    const deleteAssetsQuery = `DELETE  FROM assets where asset_id=$1`;
    pool.query(
      deleteAssetsQuery,
      [req.params.assetsId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
