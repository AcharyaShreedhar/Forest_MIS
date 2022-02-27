const pool = require("../db");
//Controller for Listing all SamrakshyanpokhariNirman
async function getAllSamrakshyanpokhariNirman(req, res) {

  let office_cond = "s.office_id like ?"
  const office_len=(Array.isArray(req.body.officeId)) ? req.body.officeId.length : 0
  if(office_len > 1){
    office_cond = "s.office_id in (?)"
  }

  let dist_cond = "s.dist_id like ?"
  const dist_len=(Array.isArray(req.body.distId)) ? req.body.distId.length : 0
  if(dist_len > 1){
    dist_cond = "s.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from samrakshyanpokharinirman_bibarans as s where s.karyakram_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
  const getAllSamrakshyanpokhariNirmanQuery = `select * from samrakshyanpokharinirman_bibarans as s where s.karyakram_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllSamrakshyanpokhariNirmanQuery,
        [
          req.body.fromDate,
          req.body.toDate,
          req.body.distId,
          req.body.officeId,
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

//Controller for Listing a SamrakshyanpokhariNirman
async function getSamrakshyanpokhariNirman(req, res) {
  const getSamrakshyanpokhariNirmanQuery = `select * from samrakshyanpokharinirman_bibarans where id=?`;
  pool.query(
    getSamrakshyanpokhariNirmanQuery,
    [req.params.samrakshyanpokhariNirmanId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a SamrakshyanpokhariNirman
async function addSamrakshyanpokhariNirman(req, res, next) {
  const addSamrakshyanpokhariNirmanQuery = `INSERT INTO samrakshyanpokharinirman_bibarans (dist_id,office_id, paalika, qty, karyakram_miti, laagat, created_by, updated_by) values (?,?,?,?,?,?,?)`;
  pool.query(
    addSamrakshyanpokhariNirmanQuery,
    [
      req.body.dist_id, 
      req.body.office_id, 
      req.body.paalika, 
      req.body.qty, 
      req.body.karyakram_miti, 
      req.body.laagat,  
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

//Controller for updating a SamrakshyanpokhariNirman
async function updateSamrakshyanpokhariNirman(req, res, next) {
  const updateSamrakshyanpokhariNirmanQuery = `UPDATE samrakshyanpokharinirman_bibarans SET dist_id=?,office_id=?, paalika=?, qty=?, karyakram_miti=?, laagat=?, created_by=?, updated_by=? WHERE id=?`;
  pool.query(
    updateSamrakshyanpokhariNirmanQuery,
    [
        req.body.dist_id,
        req.body.office_id,
        req.body.paalika, 
        req.body.qty, 
        req.body.karyakram_miti, 
        req.body.laagat, 
        req.body.created_by, 
        req.body.updated_by,
        req.params.samrakshyanpokhariNirmanId,
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

//Controller for deleting a SamrakshyanpokhariNirman
async function deleteSamrakshyanpokhariNirman(req, res, next) {
  const deleteSamrakshyanpokhariNirmanQuery = `DELETE  FROM samrakshyanpokharinirman_bibarans where id=?`;
  pool.query(
    deleteSamrakshyanpokhariNirmanQuery,
    [req.params.samrakshyanpokhariNirmanId],
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
  getAllSamrakshyanpokhariNirman,
  getSamrakshyanpokhariNirman,
  addSamrakshyanpokhariNirman,
  updateSamrakshyanpokhariNirman,
  deleteSamrakshyanpokhariNirman,
};
