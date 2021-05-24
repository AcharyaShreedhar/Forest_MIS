const pool = require("../db");

//Service for Listing all Entry
module.exports = {
  getAllEntry: (callBack) => {
    const getAllEntryQuery = `select * from entry`;
    pool.query(getAllEntryQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a Entry
module.exports = {
  getEntry: (callBack) => {
    const getEntryQuery = `select * from entry where entry_id=$1`;
    pool.query(
      getEntryQuery,
      [req.params.entryId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a Entry
module.exports = {
  addEntry: (callBack) => {
    const addEntryQuery = `INSERT INTO entry (entry_qty, entry_rate, entry_amt) values ($1,$2,$3) returning *`;
    pool.query(
      addEntryQuery,
      [req.body.entry_qty, req.body.entry_rate, req.body.entry_amt],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a Entry
module.exports = {
  updateEntry: (callBack) => {
    const updateEntryQuery = `UPDATE entry SET entry_qty=$1, entry_rate=$2, entry_amt=$3 WHERE entry_id=$4 returning *`;
    pool.query(
      updateEntryQuery,
      [req.body.entry_qty, req.body.entry_rate, req.body.entry_amt, req.params.entryId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a Entry
module.exports = {
  deleteEntry: (callBack) => {
    const deleteEntryQuery = `DELETE  FROM entry where entry_id=$1`;
    pool.query(
      deleteEntryQuery,
      [req.params.entryId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};