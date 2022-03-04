const pool = require("../db");

//Controller for Listing all Assets
async function getAllAssets(req, res) {
  const office_length = await req.body.officeId.length;
  let office_cond = "a.office_id like ?"
  if(office_length > 1){
    office_cond = "a.office_id in (?)"
  }

  const dist_length = await req.body.distId.length;
  let dist_cond = "a.dist_id like ?"
  if(dist_length > 1){
    dist_cond = "a.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from assets as a where ${dist_cond} and ${office_cond}`;
  const getAllAssetsQuery = `select * from assets as a where  ${dist_cond} and ${office_cond} ORDER BY ? ASC LIMIT ?, ?`;
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
async function addAsets(req, res, next) {
  const addAssetsQuery = `INSERT INTO assets (dist_id, office_id, asset_type,asset_loc,kitta_no,home_area,land_area,unit,remarks,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?)`;
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
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for updating a Asset
async function updateAssets(req, res, next) {
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
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for deleting a Asset
async function deleteAssets(req, res, next) {
  const deleteAssetsQuery = `DELETE  FROM assets where asset_id=?`;
  pool.query(
    deleteAssetsQuery,
    [req.params.assetId],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
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
