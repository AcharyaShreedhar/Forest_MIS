const pool = require("../db");

// controller for getting all KarmachariDarbandi
async function getAllKarmachariDarbandi(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from karmachari_darbandis as k where  k.dist_id like ?";
  const getAllKarmachariDarbandiQuery = `select * from karmachari_darbandis as k where  k.dist_id like ? ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllKarmachariDarbandiQuery,
        [req.body.distId, req.body.name, req.body.page, req.body.perPage],
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

async function addKarmachariDarbandi(req, res) {
  const addKarmachariDarbandiQuery = `INSERT INTO karmachari_darbandis (dist_id,post,kayam_darbandi_sankhya,padpurti_sankhya, khali_sankhya, created_by, updated_by) values (?,?,?,?,?,?,?)`;
  await pool.query(
    addKarmachariDarbandiQuery,
    [
      req.body.dist_id,
      req.body.post,
      req.body.kayam_darbandi_sankhya,
      req.body.padpurti_sankhya,
      req.body.khali_sankhya,
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

//Controller for updating a KarmachariDarbandi

async function updateKarmachariDarbandi(req, res) {
  const updateKarmachariDarbandiQuery = `UPDATE karmachari_darbandis SET dist_id=?, post=?,kayam_darbandi_sankhya=?,padpurti_sankhya=?, khali_sankhya=?, created_by=?, updated_by=? WHERE karmachari_darbandi_id=?`;
  await pool.query(
    updateKarmachariDarbandiQuery,
    [
      req.body.dist_id,
      req.body.post,
      req.body.kayam_darbandi_sankhya,
      req.body.padpurti_sankhya,
      req.body.khali_sankhya,
      req.body.created_by,
      req.body.updated_by,
      req.params.karmachariDarbandiId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a KarmachariDarbandi

async function deleteKarmachariDarbandi(req, res) {
  const deleteKarmachariDarbandiQuery = `DELETE  FROM karmachari_darbandis where karmachari_darbandi_id=?`;
  pool.query(
    deleteKarmachariDarbandiQuery,
    [req.params.karmachariDarbandiId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
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
