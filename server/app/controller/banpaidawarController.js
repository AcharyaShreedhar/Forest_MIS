const pool = require("../db")
//Controller for Listing all Banpaidawar
async function getAllBanpaidawar(req, res) {
    const getAllBanpaidawarQuery = `select * from ban_paidawars`;
    pool.query(getAllBanpaidawarQuery, [], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for Listing a Banpaidawar
  async function getBanpaidawar(req, res) {
    const getBanpaidawarQuery = `select * from ban_paidawars where paidawar_id=?`;
    pool.query(getBanpaidawarQuery, [req.params.banpaidawarId], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for adding a Banpaidawar
  async function addBanpaidawar(req, res) {
    const addBanpaidawarQuery = `INSERT INTO ban_paidawars (ban_id, arthik_barsa, mahina, kaath, daura, lavgrahi_sankhya, mulyaabhibridi_kar, created_by, updated_by) values (?,?,?,?,?,?,?,?,?)`;
    pool.query(
      addBanpaidawarQuery,
      [
        req.body.ban_id,
        req.body.arthik_barsa, 
        req.body.mahina, 
        req.body.kaath, 
        req.body.daura,
	    req.body.lavgrahi_sankhya,
	    req.body.mulyaabhibridi_kar,
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
  
  //Controller for updating a Banpaidawar
  async function updateBanpaidawar(req, res) {
    const updateBanpaidawarQuery = `UPDATE ban_paidawars SET ban_id=?, arthik_barsa=?, mahina=?, kaath=?, daura=?, lavgrahi_sankhya=?, mulyaabhibridi_kar=?, created_by=?, updated_by=? WHERE paidawar_id=?`;
    pool.query(
      updateBanpaidawarQuery,
      [
        req.body.ban_id,
        req.body.arthik_barsa, 
        req.body.mahina, 
        req.body.kaath, 
        req.body.daura,
	    req.body.lavgrahi_sankhya,
	    req.body.mulyaabhibridi_kar,
        req.body.created_by, 
        req.body.updated_by,  
        req.params.banpaidawarId,
      ],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  //Controller for deleting a Banpaidawar
  async function deleteBanpaidawar(req, res) {
    const deleteBanpaidawarQuery = `DELETE  FROM ban_paidawars where paidawar_id=?`;
    pool.query(
      deleteBanpaidawarQuery,
      [req.params.banpaidawarId],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  module.exports = {
    getAllBanpaidawar,
    getBanpaidawar,
    addBanpaidawar,
    updateBanpaidawar,
    deleteBanpaidawar,
  };