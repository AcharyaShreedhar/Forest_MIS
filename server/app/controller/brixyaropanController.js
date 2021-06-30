const pool = require("../db")
//Controller for Listing all Brixyaropan
async function getAllBrixyaropan(req, res) {
  const getTotalQuery = "SELECT count(*) as total from brixyaropans"
    const getAllBrixyaropanQuery = `select * from brixyaropans ORDER BY ? ASC LIMIT ?, ?`;
    pool.query(getTotalQuery, [], (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllBrixyaropanQuery,
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
  
  //Controller for Listing a Brixyaropan
  async function getBrixyaropan(req, res) {
    const getBrixyaropanQuery = `select * from brixyaropans where brixyaropan_id=?`;
    pool.query(getBrixyaropanQuery, [req.params.brixyaropanId], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for adding a Brixyaropan
  async function addBrixyaropan(req, res) {
    const addBrixyaropanQuery = `INSERT INTO brixyaropans (brixyaropan_thegana,brixyaropan_kisim,brixyaropan_laxya,brixyaropan_prajati,brixyaropan_pragati,brixyaropan_sankhya,created_by, updated_by) values (?,?,?,?,?,?,?,?)`;
    pool.query(
      addBrixyaropanQuery,
      [
        req.body.brixyaropan_thegana,
        req.body.brixyaropan_kisim,
        req.body.brixyaropan_laxya,
        req.body.brixyaropan_prajati,
        req.body.brixyaropan_pragati,
        req.body.brixyaropan_sankhya,
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
  
  //Controller for updating a Brixyaropan
  async function updateBrixyaropan(req, res) {
    const updateBrixyaropanQuery = `UPDATE brixyaropans SET brixyaropan_thegana=?,brixyaropan_kisim=?,brixyaropan_laxya=?,brixyaropan_prajati=?,brixyaropan_pragati=?,brixyaropan_sankhya=?, created_by=?, updated_by=? WHERE brixyaropan_id=?`;
    pool.query(
      updateBrixyaropanQuery,
      [
        req.body.brixyaropan_thegana,
        req.body.brixyaropan_kisim,
        req.body.brixyaropan_laxya,
        req.body.brixyaropan_prajati,
        req.body.brixyaropan_pragati,
        req.body.brixyaropan_sankhya,
        req.body.created_by, 
        req.body.updated_by,
        req.params.brixyaropanId,
      ],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  //Controller for deleting a Brixyaropan
  async function deleteBrixyaropan(req, res) {
    const deleteBrixyaropanQuery = `DELETE  FROM brixyaropans where brixyaropan_id=?`;
    pool.query(
      deleteBrixyaropanQuery,
      [req.params.brixyaropanId],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  module.exports = {
    getAllBrixyaropan,
    getBrixyaropan,
    addBrixyaropan,
    updateBrixyaropan,
    deleteBrixyaropan,
  };
  