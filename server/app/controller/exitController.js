const pool = require("../db");

//Controller for Listing all Exits
async function getAllExit(req, res) {
  const getAllExitQuery = `select * from exits`;
  pool.query(getAllExitQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
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
async function addExit(req, res) {
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
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for updating a Exit
async function updateExit(req, res) {
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
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Exit
async function deleteExit(req, res) {
  const deleteExitQuery = `DELETE  FROM exits WHERE exit_id=?`;
  pool.query(
    deleteExitQuery,
    [req.params.exitId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
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