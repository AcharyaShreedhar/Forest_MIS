const pool = require("../db")
//Controller for Listing all Banpaidawar
async function getAllBandadeloBibaran(req, res) {
    const getAllBandadeloBibaranQuery = `select * from bandadelo_bibarans`;
    pool.query(getAllBandadeloBibaranQuery, [], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for Listing a BandadeloBibaran
  async function getBandadeloBibaran(req, res) {
    const getBandadeloBibaranQuery = `select * from bandadelo_bibarans where bandadelo_bibaran_id=?`;
    pool.query(getBandadeloBibaranQuery, [req.params.bandadeloBibaranId], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for adding a BandadeloBibaran
  async function addBandadeloBibaran(req, res) {
    const addBandadeloBibaranQuery = `INSERT INTO bandadelo_bibarans (bandadelo_address, ban_type, ban_prajati, xeti_area, niyantran_karta, sahabhagi_mahila, sahabhagi_purus, created_by, updated_by) values (?,?,?,?,?,?,?,?,?)`;
    pool.query(
      addBandadeloBibaranQuery,
      [
        req.body.bandadelo_address,
        req.body.ban_type, 
        req.body.ban_prajati, 
        req.body.xeti_area, 
        req.body.niyantran_karta,
	      req.body.sahabhagi_mahila,
      	req.body.sahabhagi_purus,
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
  
  //Controller for updating a BandadeloBibaran
  async function updateBandadeloBibaran(req, res) {
    const updateBandadeloBibaranQuery = `UPDATE bandadelo_bibarans SET bandadelo_address=?, ban_type=?, ban_prajati=?, xeti_area=?, niyantran_karta=?, sahabhagi_mahila=?, sahabhagi_purus=?, created_by=?, updated_by=? WHERE bandadelo_bibaran_id=?`;
    pool.query(
      updateBandadeloBibaranQuery,
      [
        req.body.bandadelo_address,
        req.body.ban_type, 
        req.body.ban_prajati, 
        req.body.xeti_area, 
        req.body.niyantran_karta,
	      req.body.sahabhagi_mahila,
      	req.body.sahabhagi_purus,
        req.body.created_by, 
        req.body.updated_by,
        req.params.bandadeloBibaranId,
      ],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  //Controller for deleting a BandadeloBibaran
  async function deleteBandadeloBibaran(req, res) {
    const deleteBandadeloBibaranQuery = `DELETE  FROM bandadelo_bibarans where bandadelo_bibaran_id=?`;
    pool.query(
      deleteBandadeloBibaranQuery,
      [req.params.bandadeloBibaranId],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  module.exports = {
    getAllBandadeloBibaran,
    getBandadeloBibaran,
    addBandadeloBibaran,
    updateBandadeloBibaran,
    deleteBandadeloBibaran,
  };
  