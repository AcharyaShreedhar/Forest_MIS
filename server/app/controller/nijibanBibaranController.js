const pool = require("../db")
//Controller for Listing all NijibanBibaran
async function getAllNijibanBibaran(req, res) {
    const getAllNijibanBibaranQuery = `select * from nijiban_bibarans`;
    pool.query(getAllNijibanBibaranQuery, [], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for Listing a NijibanBibaran
  async function getNijibanBibaran(req, res) {
    const getNijibanBibaranQuery = `select * from nijiban_bibarans where nijiban_bibaran_id=?`;
    pool.query(getNijibanBibaranQuery, [req.params.nijibanBibaranId], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for adding a NijibanBibaran
  async function addNijibanBibaran(req, res) {
    const addNijibanBibaranQuery = `INSERT INTO nijiban_bibarans (swikrit_miti, nijiban_dhaniko_naam, perm_addr, curr_addr, area, main_species, created_by, updated_by) values (?,?,?,?,?,?,?,?)`;
    pool.query(
      addNijibanBibaranQuery,
      [
        req.body.swikrit_miti,
        req.body.nijiban_dhaniko_naam,
        req.body.perm_addr, 
        req.body.curr_addr, 
        req.body. area,
	req.body.main_species,
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
  
  //Controller for updating a NijibanBibaran
  async function updateNijibanBibaran(req, res) {
    const updateNijibanBibaranQuery = `UPDATE nijiban_bibarans SET swikrit_miti=?, nijiban_dhaniko_naam=?, perm_addr=?, curr_addr=?, area=?, main_species=?, created_by=?, updated_by=? WHERE nijiban_bibaran_id=?`;
    pool.query(
      updateNijibanBibaranQuery,
      [
        req.body.swikrit_miti,
        req.body.nijiban_dhaniko_naam,
        req.body.perm_addr, 
        req.body.curr_addr, 
        req.body. area,
	req.body.main_species,
        req.body.created_by, 
        req.body.updated_by,
	req.params.nijibanBibaranId,
      ],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  //Controller for deleting a NijibanBibaran
  async function deleteNijibanBibaran(req, res) {
    const deleteNijibanBibaranQuery = `DELETE  FROM nijiban_bibarans where nijiban_bibaran_id=?`;
    pool.query(
      deleteNijibanBibaranQuery,
      [req.params.nijibanBibaranId],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  module.exports = {
    getAllNijibanBibaran,
    getNijibanBibaran,
    addNijibanBibaran,
    updateNijibanBibaran,
    deleteNijibanBibaran,
  };
  
