const pool = require("../db")
//Controller for Listing all NabikaranKaryayojana
async function getAllNabikaranKaryayojana(req, res) {
    const getAllNabikaranKaryayojanaQuery = `select * from nabikaran_karyayojanas`;
    pool.query(getAllNabikaranKaryayojanaQuery, [], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for Listing a NabikaranKaryayojana
  async function getNabikaranKaryayojana(req, res) {
    const getNabikaranKaryayojanaQuery = `select * from nabikaran_karyayojanas where nabikaran_id=?`;
    pool.query(getNabikaranKaryayojanaQuery, [req.params.nabikaranKaryayojanaId], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for adding a NabikaranKaryayojana
  async function addNabikaranKaryayojana(req, res) {
    const addNabikaranKaryayojanaQuery = `INSERT INTO nabikaran_karyayojanas (valid_miti, nabikaran_miti, nabikaran_abadhi, darta_id, created_by, updated_by) values (?,?,?,?,?,?)`;
    pool.query(
      addNabikaranKaryayojanaQuery,
      [
        req.body.valid_miti,
        req.body.nabikaran_miti,
        req.body.nabikaran_abadhi,
        req.body.darta_id, 
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
  
  //Controller for updating a NabikaranKaryayojana
  async function updateNabikaranKaryayojana(req, res) {
    const updateNabikaranKaryayojanaQuery = `UPDATE nabikaran_karyayojanas SET valid_miti=?, nabikaran_miti=?, nabikaran_abadhi=?, darta_id=?, created_by=?, updated_by=? WHERE nabikaran_id=?`;
    pool.query(
      updateNabikaranKaryayojanaQuery,
      [
        req.body.valid_miti,
        req.body.nabikaran_miti,
        req.body.nabikaran_abadhi,
        req.body.darta_id, 
        req.body.created_by, 
        req.body.updated_by,  
	      req.params.nabikaranKaryayojanaId,
      ],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  //Controller for deleting a NabikaranKaryayojana
  async function deleteNabikaranKaryayojana(req, res) {
    const deleteNabikaranKaryayojanaQuery = `DELETE  FROM nabikaran_karyayojanas where nabikaran_id=?`;
    pool.query(
      deleteNabikaranKaryayojanaQuery,
      [req.params.nabikaranKaryayojanaId],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  module.exports = {
    getAllNabikaranKaryayojana,
    getNabikaranKaryayojana,
    addNabikaranKaryayojana,
    updateNabikaranKaryayojana,
    deleteNabikaranKaryayojana,
  };