const pool = require("../db");

//Controller for Listing all Biruwa Utpadans
async function getAllBiruwaUtpadans(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from biruwa_utpadans as b where b.arthik_barsa BETWEEN ? and ? and b.dist_id like ?";
  const getAllBiruwaUtpadansQuery = `select * from biruwa_utpadans as b where b.arthik_barsa BETWEEN ? and ? and b.dist_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllBiruwaUtpadansQuery,
        [
          req.body.fromDate,
          req.body.toDate,
          req.body.distId,
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

//Controller for Listing a Biruwa Utpadan
async function getBiruwaUtpadans(req, res) {
  const getBiruwaUtpadansQuery = `select * from biruwa_utpadans where biruwa_utpadan_id=?`;
  pool.query(
    getBiruwaUtpadansQuery,
    [req.params.biruwaUtpadanId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a Biruwa Utpadan
async function addBiruwaUtpadans(req, res) {
  const addBiruwaUtpadansQuery = `INSERT INTO biruwa_utpadans (dist_id, arthik_barsa,biruwa_type,utpadan_medium,biruwa_sankhya,narsari_sankhya,barga,laxya,pragati,remarks,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBiruwaUtpadansQuery,
    [
      req.body.dist_id,
      req.body.arthik_barsa,
      req.body.biruwa_type,
      req.body.utpadan_medium,
      req.body.biruwa_sankhya,
      req.body.narsari_sankhya,
      req.body.barga,
      req.body.laxya,
      req.body.pragati,
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

//Controller for updating a Biruwa utpadan
async function updateBiruwaUtpadans(req, res) {
  const updateBiruwaUtpadansQuery = `UPDATE biruwa_utpadans SET dist_id=?,arthik_barsa=?,biruwa_type=?,utpadan_medium=?,biruwa_sankhya=?,narsari_sankhya=?,barga=?,laxya=?,pragati=?,remarks=?,created_by=?,updated_by=? WHERE biruwa_utpadan_id=?`;
  pool.query(
    updateBiruwaUtpadansQuery,
    [
      req.body.dist_id,
      req.body.arthik_barsa,
      req.body.biruwa_type,
      req.body.utpadan_medium,
      req.body.biruwa_sankhya,
      req.body.narsari_sankhya,
      req.body.barga,
      req.body.laxya,
      req.body.pragati,
      req.body.remarks,
      req.body.created_by,
      req.body.updated_by,
      req.params.biruwaUtpadanId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Biruwa Utpadan
async function deleteBiruwaUtpadans(req, res) {
  const deleteBiruwaUtpadansQuery = `DELETE  FROM biruwa_utpadans WHERE biruwa_utpadan_id=?`;
  pool.query(
    deleteBiruwaUtpadansQuery,
    [req.params.biruwaUtpadanId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllBiruwaUtpadans,
  getBiruwaUtpadans,
  addBiruwaUtpadans,
  updateBiruwaUtpadans,
  deleteBiruwaUtpadans,
};
