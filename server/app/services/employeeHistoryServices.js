const pool = require("../db");

//Service for Listing all employeeHistory
module.exports = {
  getAllEmployeeHistory: (callBack) => {
    const getAllEmployeeHistoryQuery = `select * from employee_history`;
    pool.query(getAllEmployeeHistoryQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a employeeHistory
module.exports = {
  getEmployeeHistory: (callBack) => {
    const getEmployeeHistoryQuery = `select * from employee_history where hist_id=$1`;
    pool.query(
      getEmployeeHistoryQuery,
      [req.params.historyId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a employeeHistory
module.exports = {
  addEmployeeHistory: (callBack) => {
    const addEmployeeHistoryQuery = `INSERT INTO employee_history (hist_date, emp_id, emp_office_id, emp_dept_id, emp_level_id, emp_post_id, emp_rank_id, emp_status) values ($1,$2,$3,$4,$5,$6,$7,$8) returning *`;
    pool.query(
      addEmployeeHistoryQuery,
      [req.body.hist_date, req.body.emp_id, req.body.emp_office_id, req.body.emp_dept_id, req.body.emp_level_id, req.body.emp_post_id, req.body.emp_rank_id, req.body.emp_status],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a employeeHistory
module.exports = {
  updateEmployeeHistory: (callBack) => {
    const updateEmployeeHistoryQuery = `UPDATE employee_history SET hist_date=$1, emp_id=$2, emp_office_id=$3, emp_dept_id=$4, emp_level_id=$5, emp_post_id=$6, emp_rank_id=$7, emp_status=$8 WHERE hist_id=$9 returning *`;
    pool.query(
      updateEmployeeHistoryQuery,
      [req.body.hist_date, req.body.emp_id, req.body.emp_office_id, req.body.emp_dept_id, req.body.emp_level_id, req.body.emp_post_id, req.body.emp_rank_id, req.body.emp_status, req.params.historyId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a employeeHistory
module.exports = {
  deleteEmployeeHistory: (callBack) => {
    const deleteEmployeeHistoryQuery = `DELETE  FROM employee_history where hist_id=$1`;
    pool.query(
      deleteEmployeeHistoryQuery,
      [req.params.historyId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};