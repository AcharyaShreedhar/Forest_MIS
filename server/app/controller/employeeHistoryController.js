const pool = require("../db");

//Controller for Listing all EmployeeHistory
async function getAllEmployeeHistory(req, res) {
  const getTotalQuery = "SELECT count(*) as total from employee_histories";
  const getAllEmployeeHistoryQuery = `select * from employee_histories ORDER BY ? ASC LIMIT ? , ?`;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllEmployeeHistoryQuery,
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

//Controller for Listing a Employee History
async function getEmployeeHistory(req, res) {
  const getEmployeeHistoryQuery = `select * from employee_histories where hist_id=?`;
  pool.query(
    getEmployeeHistoryQuery,
    [req.params.histId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a Employee History
async function addEmployeeHistory(req, res) {
  const addEmployeeHistoryQuery = `INSERT INTO employee_histories (dist_id, hist_date, emp_id, emp_office_id, emp_dept_id, emp_level_id, emp_post_id, emp_rank_id, emp_status, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addEmployeeHistoryQuery,
    [
      req.body.dist_id,
      req.body.hist_date,
      req.body.emp_id,
      req.body.emp_office_id,
      req.body.emp_dept_id,
      req.body.emp_level_id,
      req.body.emp_post_id,
      req.body.emp_rank_id,
      req.body.emp_status,
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

//Controller for updating a Employee History
async function updateEmployeeHistory(req, res) {
  const updateEmployeeHistoryQuery = `UPDATE employee_histories SET dist_id=?, hist_date = ?, emp_id=?, emp_office_id=?, emp_dept_id=?, emp_level_id=?, emp_post_id=?, emp_rank_id=?, emp_status=?, created_by=?,updated_by=? WHERE hist_id=?`;
  pool.query(
    updateEmployeeHistoryQuery,
    [
      req.body.dist_id,
      req.body.hist_date,
      req.body.emp_id,
      req.body.emp_office_id,
      req.body.emp_dept_id,
      req.body.emp_level_id,
      req.body.emp_post_id,
      req.body.emp_rank_id,
      req.body.emp_status,
      req.body.created_by,
      req.body.updated_by,
      req.params.histId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Employee History
async function deleteEmployeeHistory(req, res) {
  const deleteEmployeeHistoryQuery = `DELETE  FROM employee_histories WHERE hist_id=?`;
  pool.query(
    deleteEmployeeHistoryQuery,
    [req.params.histId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllEmployeeHistory,
  getEmployeeHistory,
  addEmployeeHistory,
  updateEmployeeHistory,
  deleteEmployeeHistory,
};
