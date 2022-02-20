const pool = require("../db");

//Controller for Listing all Exits
async function getAllExit(req, res) {
  const getTotalQuery = "SELECT count(*) as total from exits";
  const getAllExitQuery = `select * from exits ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllExitQuery,
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

//Controller for Listing a Exit
async function getExit(req, res) {
  const getExitQuery = `select * from exits where exit_id=?`;
  pool.query(getExitQuery, [req.params.exitId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a Exit
async function addExit(req, res, next) {
  const addExitQuery = `INSERT INTO exits (exit_qty, exit_rate, exit_amt, created_by, updated_by) values (?,?,?,?,?)`;
  pool.query(
    addExitQuery,
    [
      req.body.exit_qty,
      req.body.exit_rate,
      req.body.exit_amt,
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

//Controller for updating a Exit
async function updateExit(req, res, next) {
  const updateExitQuery = `UPDATE exits SET exit_qty=?, exit_rate=?, exit_amt=?, created_by=?,updated_by=? WHERE exit_id=?`;
  pool.query(
    updateExitQuery,
    [
      req.body.exit_qty,
      req.body.exit_rate,
      req.body.exit_amt,
      req.body.created_by,
      req.body.updated_by,
      req.params.exitId,
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

//Controller for deleting a Exit
async function deleteExit(req, res, next) {
  const deleteExitQuery = `DELETE  FROM exits WHERE exit_id=?`;
  pool.query(
    deleteExitQuery,
    [req.params.exitId],
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
  getAllExit,
  getExit,
  addExit,
  updateExit,
  deleteExit,
};