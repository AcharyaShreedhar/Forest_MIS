const pool = require("../db")
//Controller for Listing all Bachat Bibaran
async function getAllBachatBibaran(req, res) {
  const getTotalQuery = "SELECT count(*) as total from bachat_bibarans"
    const getAllBachatBibaranQuery = `select * from bachat_bibarans ORDER BY ? ASC LIMIT ?, ?`;
    pool.query(getTotalQuery, [], (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllBachatBibaranQuery,
        [req.body.name, req.body.page, req.body.perPage],
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
    });
  }
  
  //Controller for Listing a Bachat Bibaran
  async function getBachatBibaran(req, res) {
    const getBachatBibaranQuery = `select * from bachat_bibarans where bachat_id=?`;
    pool.query(getBachatBibaranQuery, [req.params.bachatId], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for adding a BachatBibaran
  async function addBachatBibaran(req, res) {
    const addBachatBibaranQuery = `INSERT INTO bachat_bibarans (samuhako_naam, bachatma_gharduri, bachat_rakam, lagani_rakam, sahakariko_rakam, created_by, updated_by) values (?,?,?,?,?,?,?)`;
    pool.query(
      addBachatBibaranQuery,
      [
        req.body.samuhako_naam,
        req.body.bachatma_gharduri,
        req.body.bachat_rakam,
        req.body.lagani_rakam,
        req.body.sahakariko_rakam,
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
  
  //Controller for updating a BachatBibaran
  async function updateBachatBibaran(req, res) {
    const updateBachatBibaranQuery = `UPDATE bachat_bibarans SET samuhako_naam=?, bachatma_gharduri=?, bachat_rakam=?, lagani_rakam=?, sahakariko_rakam=?, created_by=?, updated_by=? WHERE bachat_id=?`;
    pool.query(
      updateBachatBibaranQuery,
      [
        req.body.samuhako_naam,
        req.body.bachatma_gharduri,
        req.body.bachat_rakam,
        req.body.lagani_rakam,
        req.body.sahakariko_rakam,
        req.body.created_by, 
        req.body.updated_by,
        req.params.bachatId,
      ],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  //Controller for deleting a BachatBibaran
  async function deleteBachatBibaran(req, res) {
    const deleteBachatBibaranQuery = `DELETE  FROM bachat_bibarans where bachat_id=?`;
    pool.query(
      deleteBachatBibaranQuery,
      [req.params.bachatId],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  module.exports = {
    getAllBachatBibaran,
    getBachatBibaran,
    addBachatBibaran,
    updateBachatBibaran,
    deleteBachatBibaran,
  };
  