const pool = require("../db");

//Controller for Listing all Entries
async function getAllEntry(req, res) {
  const getAllEntryQuery = `select * from entries`;
  pool.query(getAllEntryQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for Listing a Entry
async function getEntry(req, res) {
  const getEntryQuery = `select * from entries where entry_id=?`;
  pool.query(getEntryQuery, [req.params.entryId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a Entry
async function addEntry(req, res) {
  const addEntryQuery = `INSERT INTO entries (entry_qty, entry_rate, entry_amt, created_by, updated_by) values (?,?,?,?,?)`;
  pool.query(
    addEntryQuery,
    [
      req.body.entry_qty,
      req.body.entry_rate,
      req.body.entry_amt,
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

//Controller for updating a Entry
async function updateEntry(req, res) {
  const updateEntryQuery = `UPDATE entries SET entry_qty=?, entry_rate=?, entry_amt=?, created_by=?,updated_by=? WHERE entry_id=?`;
  pool.query(
    updateEntryQuery,
    [
      req.body.entry_qty,
      req.body.entry_rate,
      req.body.entry_amt,
      req.body.created_by,
      req.body.updated_by,
      req.params.entryId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Entry
async function deleteEntry(req, res) {
  const deleteEntryQuery = `DELETE  FROM entries where entry_id=?`;
  pool.query(
    deleteEntryQuery,
    [req.params.entryId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllEntry,
  getEntry,
  addEntry,
  updateEntry,
  deleteEntry,
};
