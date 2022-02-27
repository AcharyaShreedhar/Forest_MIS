const pool = require("../db");

// controller for getting all KarmachariDarbandi
async function getAllKarmachariDarbandi(req, res) {

  let office_cond = "k.office_id like ?"
  const office_len=(Array.isArray(req.body.officeId)) ? req.body.officeId.length : 0
  if(office_len > 1){
    office_cond = "k.office_id in (?)"
  }

  let dist_cond = "k.dist_id like ?"
  const dist_len=(Array.isArray(req.body.distId)) ? req.body.distId.length : 0
  if(dist_len > 1){
    dist_cond = "k.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from karmachari_darbandis as k where ${dist_cond} and ${office_cond}`;
  const getAllKarmachariDarbandiQuery = `select * from karmachari_darbandis as k where ${dist_cond} and ${office_cond}ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.distId,req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllKarmachariDarbandiQuery,
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

// controller for getting a KarmachariDarbandi
async function getKarmachariDarbandi(req, res) {
  const getKarmachariDarbandiQuery =
    "select * from karmachari_darbandis where karmachari_darbandi_id=?";
  await pool.query(
    getKarmachariDarbandiQuery,
    [req.params.karmachariDarbandiId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Service for adding a KarmachariDarbandi

async function addKarmachariDarbandi(req, res, next) {
  const addKarmachariDarbandiQuery = `INSERT INTO karmachari_darbandis (dist_id,office_id,post,karyalaya,thegana,kayam_darbandi_sankhya,padpurti_sankhya, khali_sankhya, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?)`;
  await pool.query(
    addKarmachariDarbandiQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.post,
      req.body.karyalaya,
      req.body.thegana,
      req.body.kayam_darbandi_sankhya,
      req.body.padpurti_sankhya,
      req.body.khali_sankhya,
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

//Controller for updating a KarmachariDarbandi

async function updateKarmachariDarbandi(req, res, next) {
  const updateKarmachariDarbandiQuery = `UPDATE karmachari_darbandis SET dist_id=?,office_id=?, post=?,karyalaya=?,thegana=?,kayam_darbandi_sankhya=?,padpurti_sankhya=?, khali_sankhya=?, created_by=?, updated_by=? WHERE karmachari_darbandi_id=?`;
  await pool.query(
    updateKarmachariDarbandiQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.post,
      req.body.karyalaya,
      req.body.thegana,
      req.body.kayam_darbandi_sankhya,
      req.body.padpurti_sankhya,
      req.body.khali_sankhya,
      req.body.created_by,
      req.body.updated_by,
      req.params.karmachariDarbandiId,
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

//Controller for deleting a KarmachariDarbandi

async function deleteKarmachariDarbandi(req, res, next) {
  const deleteKarmachariDarbandiQuery = `DELETE  FROM karmachari_darbandis where karmachari_darbandi_id=?`;
  pool.query(
    deleteKarmachariDarbandiQuery,
    [req.params.karmachariDarbandiId],
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
  getAllKarmachariDarbandi,
  getKarmachariDarbandi,
  addKarmachariDarbandi,
  updateKarmachariDarbandi,
  deleteKarmachariDarbandi,
};
