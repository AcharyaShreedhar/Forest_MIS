const pool = require("../db");
//Controller for Listing all badhiBibaran
async function getAllBadhiBibaran(req, res) {

let office_cond = "b.office_id like ?"
  const office_len=(Array.isArray(req.body.officeId)) ? req.body.officeId.length : 0
  if(office_len > 1){
    office_cond = "b.office_id in (?)"
  }

  let dist_cond = "b.dist_id like ?"
  const dist_len=(Array.isArray(req.body.distId)) ? req.body.distId.length : 0
  if(dist_len > 1){
    dist_cond = "b.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from badhi_bibarans as b where b.badhi_aayeko_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
  const getAllBadhiBibaranQuery = `select * from badhi_bibarans as b where b.badhi_aayeko_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllBadhiBibaranQuery,
        [
          req.body.fromDate,
          req.body.toDate,
          req.body.distId,
          req.body.officeId,
          req.body.name,
          req.body.page,
          req.body.perPage,
        ],
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

//Controller for Listing a BadhiBibaran
async function getBadhiBibaran(req, res) {
  const getBadhiBibaranQuery = `select * from badhi_bibarans where badhi_bibaran_id=?`;
  pool.query(
    getBadhiBibaranQuery,
    [req.params.badhiBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a BadhiBibaran
async function addBadhiBibaran(req, res, next) {
  const addBadhiBibaranQuery = `INSERT INTO badhi_bibarans (badhi_aayeko_sthan, dist_id, office_id, manab_ghaite, manab_mareko, uddar_sankhya, badhi_aayeko_miti, xeti_bibaran, banyajantu_mareko, botbiruwa_xeti, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBadhiBibaranQuery,
    [
      req.body.badhi_aayeko_sthan,
      req.body.dist_id,
      req.body.office_id,
      req.body.manab_ghaite,
      req.body.manab_mareko,
      req.body.uddar_sankhya,
      req.body.badhi_aayeko_miti,
      req.body.xeti_bibaran,
      req.body.banyajantu_mareko,
      req.body.botbiruwa_xeti,
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

//Controller for updating a BadhiBibaran
async function updateBadhiBibaran(req, res, next) {
  const updateBadhiBibaranQuery = `UPDATE badhi_bibarans SET badhi_aayeko_sthan=?, dist_id=?, office_id=?,  manab_ghaite=?, manab_mareko=?, uddar_sankhya=?, badhi_aayeko_miti=?,  xeti_bibaran=?, banyajantu_mareko=?, botbiruwa_xeti=?, created_by=?, updated_by=? WHERE badhi_bibaran_id=?`;
  pool.query(
    updateBadhiBibaranQuery,
    [
      req.body.badhi_aayeko_sthan,
      req.body.dist_id,
      req.body.office_id,
      req.body.manab_ghaite,
      req.body.manab_mareko,
      req.body.uddar_sankhya,
      req.body.badhi_aayeko_miti,
      req.body.xeti_bibaran,
      req.body.banyajantu_mareko,
      req.body.botbiruwa_xeti,
      req.body.created_by,
      req.body.updated_by,
      req.params.badhiBibaranId,
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

//Controller for deleting a BadhiBibaran
async function deleteBadhiBibaran(req, res, next) {
  const deleteBadhiBibaranQuery = `DELETE  FROM badhi_bibarans where badhi_bibaran_id=?`;
  pool.query(
    deleteBadhiBibaranQuery,
    [req.params.badhiBibaranId],
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
  getAllBadhiBibaran,
  getBadhiBibaran,
  addBadhiBibaran,
  updateBadhiBibaran,
  deleteBadhiBibaran,
};
