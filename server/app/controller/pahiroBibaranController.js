const pool = require("../db");
//Controller for Listing all pahiroBibaran
async function getAllPahiroBibaran(req, res) {

  let office_cond = "p.office_id like ?"
  const office_len=(Array.isArray(req.body.officeId)) ? req.body.officeId.length : 0
  if(office_len > 1){
    office_cond = "p.office_id in (?)"
  }

  let dist_cond = "p.dist_id like ?"
  const dist_len=(Array.isArray(req.body.distId)) ? req.body.distId.length : 0
  if(dist_len > 1){
    dist_cond = "p.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from pahiro_bibarans as p where p.pahiro_gayeko_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
  const getAllPahiroBibaranQuery = `select * from pahiro_bibarans as p where p.pahiro_gayeko_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllPahiroBibaranQuery,
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

//Controller for Listing a PaheroBibaran
async function getPahiroBibaran(req, res) {
  const getPahiroBibaranQuery = `select * from pahiro_bibarans where pahiro_bibaran_id=?`;
  pool.query(
    getPahiroBibaranQuery,
    [req.params.pahiroBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a PaheroBibaran
async function addPahiroBibaran(req, res, next) {
  const addPahiroBibaranQuery = `INSERT INTO pahiro_bibarans (pahiro_gayeko_sthan, dist_id, office_id, manab_ghaite, manab_mareko, uddar_sankhya, pahiro_gayeko_miti, xeti_bibaran, banyajantu_mareko, botbiruwa_xeti, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addPahiroBibaranQuery,
    [
      req.body.pahiro_gayeko_sthan,
      req.body.dist_id,
      req.body.office_id,
      req.body.manab_ghaite,
      req.body.manab_mareko,
      req.body.uddar_sankhya,
      req.body.pahiro_gayeko_miti,
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

//Controller for updating a PaheroBibaran
async function updatePahiroBibaran(req, res, next) {
  const updatePahiroBibaranQuery = `UPDATE pahiro_bibarans SET pahiro_gayeko_sthan=?, dist_id=?, office_id=?,  manab_ghaite=?, manab_mareko=?, uddar_sankhya=?, pahiro_gayeko_miti=?, xeti_bibaran=?, banyajantu_mareko=?, botbiruwa_xeti=?, created_by=?, updated_by=? WHERE pahiro_bibaran_id=?`;
  pool.query(
    updatePahiroBibaranQuery,
    [
      req.body.pahiro_gayeko_sthan,
      req.body.dist_id,
      req.body.office_id,
      req.body.manab_ghaite,
      req.body.manab_mareko,
      req.body.uddar_sankhya,
      req.body.pahiro_gayeko_miti,
      req.body.xeti_bibaran,
      req.body.banyajantu_mareko,
      req.body.botbiruwa_xeti,
      req.body.created_by,
      req.body.updated_by,
      req.params.pahiroBibaranId,
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

//Controller for deleting a PaheroBibaran
async function deletePahiroBibaran(req, res, next) {
  const deletePahiroBibaranQuery = `DELETE  FROM pahiro_bibarans where pahiro_bibaran_id=?`;
  pool.query(
    deletePahiroBibaranQuery,
    [req.params.pahiroBibaranId],
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
  getAllPahiroBibaran,
  getPahiroBibaran,
  addPahiroBibaran,
  updatePahiroBibaran,
  deletePahiroBibaran,
};
