const pool = require("../db");
//Controller for Listing all PanimuhanSamrakshyan
async function getAllPanimuhanSamrakshyan(req, res) {

  const office_length = await req.body.officeId.length;
  let office_cond = "p.office_id like ?"
  if(office_length > 1){
    office_cond = "p.office_id in (?)"
  }

  const dist_length = await req.body.distId.length;
  let dist_cond = "p.dist_id like ?"
  if(dist_length > 1){
    dist_cond = "p.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from panimuhansamrakshyan_bibarans as p where p.karyakram_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
  const getAllPanimuhanSamrakshyanQuery = `select * from panimuhansamrakshyan_bibarans as p where p.karyakram_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllPanimuhanSamrakshyanQuery,
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

//Controller for Listing a PanimuhanSamrakshyan
async function getPanimuhanSamrakshyan(req, res) {
  const getPanimuhanSamrakshyanQuery = `select * from panimuhansamrakshyan_bibarans where panimuhansamrakshyan_id=?`;
  pool.query(
    getPanimuhanSamrakshyanQuery,
    [req.params.panimuhanSamrakshyanId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a PanimuhanSamrakshyan
async function addPanimuhanSamrakshyan(req, res, next) {
  const addPanimuhanSamrakshyanQuery = `INSERT INTO panimuhansamrakshyan_bibarans (dist_id, office_id, sthan, qty, karyakram_miti, laagat, created_by, updated_by) values (?,?,?,?,?,?,?,?)`;
  pool.query(
    addPanimuhanSamrakshyanQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.sthan,
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

//Controller for updating a PanimuhanSamrakshyan
async function updatePanimuhanSamrakshyan(req, res, next) {
  const updatePanimuhanSamrakshyanQuery = `UPDATE panimuhansamrakshyan_bibarans SET dist_id=?, office_id=?, sthan=?, qty=?, karyakram_miti=?, laagat=?, created_by=?, updated_by=? WHERE panimuhansamrakshyan_id=?`;
  pool.query(
    updatePanimuhanSamrakshyanQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.sthan,
      req.body.qty,
      req.body.karyakram_miti,
      req.body.laagat,
      req.body.created_by,
      req.body.updated_by,
      req.params.panimuhanSamrakshyanId,
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

//Controller for deleting a PanimuhanSamrakshyan
async function deletePanimuhanSamrakshyan(req, res, next) {
  const deletePanimuhanSamrakshyanQuery = `DELETE  FROM panimuhansamrakshyan_bibarans where panimuhansamrakshyan_id=?`;
  pool.query(
    deletePanimuhanSamrakshyanQuery,
    [req.params.panimuhanSamrakshyanId],
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
  getAllPanimuhanSamrakshyan,
  getPanimuhanSamrakshyan,
  addPanimuhanSamrakshyan,
  updatePanimuhanSamrakshyan,
  deletePanimuhanSamrakshyan,
};
