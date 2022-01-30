const pool = require("../db");

//Controller for Listing all Anya_Sampati
async function getAllAnyaSampati(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from anya_sampatis as a where a.acquired_date BETWEEN ? and ? and a.dist_id like ? and a.office_id like ?";
  const getAllAnyaSampatiQuery = `select * from anya_sampatis as a where a.acquired_date BETWEEN ? and ? like ? and a.dist_id like ? and a.office_id ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllAnyaSampatiQuery,
        [
          req.body.fromDate,
          req.body.toDate,
          req.body.distId,
          req.body.officeId,
          req.body.sampati_name,
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

//Controller for Listing a Anya_Sampati
async function getAnyaSampati(req, res) {
  const getAnyaSampatiQuery = `select * from anya_sampatis where sampati_id = ?`;
  pool.query(
    getAnyaSampatiQuery,
    [req.params.sampatiId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a Anya_Samapti
async function addAnyaSampati(req, res) {
  const addAnyaSampatiQuery = `INSERT INTO anya_sampatis (dist_id,office_id,sampati_name,sampati_location,acquired_date,created_by,updated_by) values (?,?,?,?,?,?,?)`;
  pool.query(
    addAnyaSampatiQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.sampati_name,
      req.body.sampati_location,
      req.body.acquired_date,
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

//Controller for updating a Anya_Sampati
async function updateAnyaSampati(req, res) {
  const updateAnyaSampatiQuery = `UPDATE anya_sampatis SET dist_id=?, office_id=?, sampati_name=?, sampati_location=?, acquired_date=?, created_by=?,updated_by=? WHERE sampati_id=?`;
  pool.query(
    updateAnyaSampatiQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.sampati_name,
      req.body.sampati_location,
      req.body.acquired_date,
      req.body.created_by,
      req.body.updated_by,
      req.params.sampatiId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a AnyaSampati
async function deleteAnyaSampati(req, res) {
  const deleteAnyaSampatiQuery = `DELETE  FROM anya_sampatis where sampati_id=?`;
  pool.query(
    deleteAnyaSampatiQuery,
    [req.params.sampatiId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllAnyaSampati,
  getAnyaSampati,
  addAnyaSampati,
  updateAnyaSampati,
  deleteAnyaSampati,
};
