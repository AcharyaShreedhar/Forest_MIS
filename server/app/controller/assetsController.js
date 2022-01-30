const pool = require("../db");

//Controller for Listing all Assets
async function getAllAssets(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from assets as a where a.dist_id like ? and a.office_id like ?";
  const getAllAssetsQuery = `select * from assets as a where  a.dist_id like ? and office_id like ? ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllAssetsQuery,
        [req.body.distId, req.body.officeId, req.body.name, req.body.page, req.body.perPage],
        (error, results, fields) => {
          if (error) throw error;
          res.send(
            JSON.stringify({
              status: 200,
              error: null,
              data: {
                total: countresults[0].total,
                list: results,
              },
            })
          );
        }
      );
    }
  );
}

//Controller for Listing a Asset
async function getAssets(req, res) {
  const getAssetsQuery = `select * from assets where asset_id=?`;
  pool.query(getAssetsQuery, [req.params.assetId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a Asset
async function addAsets(req, res) {
  const addAssetsQuery = `INSERT INTO assets (dist_id, office_id, asset_type,asset_loc,kitta_no,home_area,land_area,unit,remarks,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addAssetsQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.asset_type,
      req.body.asset_loc,
      req.body.kitta_no,
      req.body.home_area,
      req.body.land_area,
      req.body.unit,
      req.body.remarks,
      req.body.created_by,
      req.body.updated_by,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for updating a Asset
async function updateAssets(req, res) {
  const updateAssetsQuery = `UPDATE assets SET dist_id=?, office_id=?, asset_type=?, asset_loc=?, kitta_no=?, home_area=?, land_area=?, unit=?, remarks=?, created_by=?,updated_by=? WHERE asset_id=?`;
  pool.query(
    updateAssetsQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.asset_type,
      req.body.asset_loc,
      req.body.kitta_no,
      req.body.home_area,
      req.body.land_area,
      req.body.unit,
      req.body.remarks,
      req.body.created_by,
      req.body.updated_by,
      req.params.assetId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Asset
async function deleteAssets(req, res) {
  const deleteAssetsQuery = `DELETE  FROM assets where asset_id=?`;
  pool.query(
    deleteAssetsQuery,
    [req.params.assetId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllAssets,
  getAssets,
  addAsets,
  updateAssets,
  deleteAssets,
};
