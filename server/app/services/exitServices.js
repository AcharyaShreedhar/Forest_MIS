const pool = require("../db");

//Service for Listing all Exit
module.exports = {
  getAllExit: (callBack) => {
    const getAllExitQuery = `select * from exit`;
    pool.query(getAllExitQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a Exit
module.exports = {
  getExit: (callBack) => {
    const getExitQuery = `select * from exit where exit_id=$1`;
    pool.query(
      getExitQuery,
      [req.params.exitId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a Exit
module.exports = {
  addExit: (callBack) => {
    const addExitQuery = `INSERT INTO exit (exit_qty, exit_rate, exit_amt) values ($1,$2,$3) returning *`;
    pool.query(
      addExitQuery,
      [req.body.exit_qty, req.body.exit_rate, req.body.exit_amt],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a Exit
module.exports = {
  updateExit: (callBack) => {
    const updateExitQuery = `UPDATE exit SET exit_qty=$1, exit_rate=$2, exit_amt=$3 WHERE exit_id=$4 returning *`;
    pool.query(
      updateExitQuery,
      [req.body.exit_qty, req.body.exit_rate, req.body.exit_amt, req.params.exitId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a Exit
module.exports = {
  deleteExit: (callBack) => {
    const deleteExitQuery = `DELETE  FROM exit where exit_id=$1`;
    pool.query(
      deleteExitQuery,
      [req.params.exitId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};