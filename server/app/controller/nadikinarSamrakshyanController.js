const pool = require("../db");
//Controller for Listing all NadikinarSamrakshyan
async function getAllNadikinarSamrakshyan(req, res) {

  let office_cond = "n.office_id like ?"
  const office_len=(Array.isArray(req.body.officeId)) ? req.body.officeId.length : 0
  if(office_len > 1){
    office_cond = "n.office_id in (?)"
  }

  let dist_cond = "n.dist_id like ?"
  const dist_len=(Array.isArray(req.body.distId)) ? req.body.distId.length : 0
  if(dist_len > 1){
    dist_cond = "n.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from nadikinarsamrakshyan_bibarans as n where n.karyakram_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
  const getAllNadikinarSamrakshyanQuery = `select * from nadikinarsamrakshyan_bibarans as n where n.karyakram_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllNadikinarSamrakshyanQuery,
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

//Controller for Listing a NadikinarSamrakshyan
async function getNadikinarSamrakshyan(req, res) {
  const getNadikinarSamrakshyanQuery = `select * from nadikinarsamrakshyan_bibarans where nadikinarsamrakshyan_id=?`;
  pool.query(
    getNadikinarSamrakshyanQuery,
    [req.params.nadikinarSamrakshyanId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a NadikinarSamrakshyan
async function addNadikinarSamrakshyan(req, res, next) {
  const addNadikinarSamrakshyanQuery = `INSERT INTO nadikinarsamrakshyan_bibarans (dist_id, office_id, sthan, qty, karyakram_miti, conservation_area, affected_area, created_by, updated_by) values (?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addNadikinarSamrakshyanQuery,
    [
      req.body.dist_id, 
      req.body.office_id, 
      req.body.sthan, 
      req.body.qty, 
      req.body.karyakram_miti, 
      req.body.conservation_area, 
      req.body.affected_area, 
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

//Controller for updating a NadikinarSamrakshyan
async function updateNadikinarSamrakshyan(req, res, next) {
  const updateNadikinarSamrakshyanQuery = `UPDATE nadikinarsamrakshyan_bibarans SET dist_id=?, office_id=?, sthan=?, qty=?, karyakram_miti=?, conservation_area=?, affected_area=?, created_by=?, updated_by=? WHERE nadikinarsamrakshyan_id=?`;
  pool.query(
    updateNadikinarSamrakshyanQuery,
    [
        req.body.dist_id,
        req.body.office_id,
        req.body.sthan, 
        req.body.qty, 
        req.body.karyakram_miti, 
        req.body.conservation_area, 
        req.body.affected_area, 
        req.body.created_by, 
        req.body.updated_by,
        req.params.nadikinarSamrakshyanId,
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

//Controller for deleting a NadikinarSamrakshyan
async function deleteNadikinarSamrakshyan(req, res, next) {
  const deleteNadikinarSamrakshyanQuery = `DELETE  FROM nadikinarsamrakshyan_bibarans where nadikinarsamrakshyan_id=?`;
  pool.query(
    deleteNadikinarSamrakshyanQuery,
    [req.params.nadikinarSamrakshyanId],
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
  getAllNadikinarSamrakshyan,
  getNadikinarSamrakshyan,
  addNadikinarSamrakshyan,
  updateNadikinarSamrakshyan,
  deleteNadikinarSamrakshyan,
};
