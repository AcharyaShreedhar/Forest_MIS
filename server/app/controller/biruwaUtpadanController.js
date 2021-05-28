const pool = require("../db");

//Controller for Listing all Biruwa Utpadans
async function getAllBiruwaUtpadans(req, res) {
  const getAllBiruwaUtpadansQuery = `select * from biruwa_utpadans`;
  pool.query(getAllBiruwaUtpadansQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for Listing a Biruwa Utpadan
async function getBiruwaUtpadans(req, res) {
  const getBiruwaUtpadansQuery = `select * from biruwa_utpadans where biruwa_utpadan_id=?`;
  pool.query(getBiruwaUtpadansQuery, [req.params.biruwaUtpadanId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a Biruwa Utpadan
async function addBiruwaUtpadans(req, res) {
  const addBiruwaUtpadansQuery = `INSERT INTO biruwa_utpadans (arthik_barsa,narsari_sankhya,barga,laxya,pragati,brixyaropan,remarks,created_by,updated_by) values (?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBiruwaUtpadansQuery,
    [
      req.body.arthik_barsa,
      req.body.narsari_sankhya,
      req.body.barga,
      req.body.laxya,
      req.body.pragati,
      req.body.brixyaropan,
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
  const updateBiruwaUtpadansQuery = `UPDATE biruwa_utpadans SET arthik_barsa=?,narsari_sankhya=?,barga=?,laxya=?,pragati=?,brixyaropan=?,remarks=?,created_by=?,updated_by=? WHERE biruwa_utpadan_id=?`;
  pool.query(
    updateBiruwaUtpadansQuery,
    [
      req.body.arthik_barsa,
      req.body.narsari_sankhya,
      req.body.barga,
      req.body.laxya,
      req.body.pragati,
      req.body.brixyaropan,
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