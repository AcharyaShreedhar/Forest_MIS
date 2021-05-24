const pool = require("../db");

//Service for Listing all Employee
module.exports = {
  getAllEmployee: (callBack) => {
    const getAllEmployeeQuery = `select * from employee`;
    pool.query(getAllEmployeeQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a Employee
module.exports = {
  getEmployee: (callBack) => {
    const getEmployee = `select * from employee where employee_id=$1`;
    pool.query(
      getEmployeeQuery,
      [req.params.employeeId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a Employee
module.exports = {
  addEmployee: (callBack) => {
    const addEmployeeQuery = `INSERT INTO employee (emp_fname_eng, emp_lname_eng, emp_fname_nep, emp_lname_nep, emp_add_perm_prov, emp_add_perm_dist, emp_add_perm_mun, emp_add_perm_ward, emp_add_perm_tole, emp_add_temp_prov, emp_add_temp_dist, emp_add_temp_mun, emp_add_temp_ward, emp_add_temp_tole, emp_phone1, emp_phone2, emp_email, emp_office_id, emp_dept_id, emp_level_id, emp_post, emp_rank, emp_appoint_date, emp_status, created_by, updated_by) values ($1,$2,$3,$4,$5,$^,$7,$8,$9) returning *`;
    pool.query(
      addEmployeeQuery,
      [req.body.emp_fname_eng, req.body.emp_lname_eng, req.body.emp_fname_nep, req.body.emp_lname_nep, req.body.emp_add_perm_prov, req.body.emp_add_perm_dist, req.body.emp_add_perm_mun, req.body.emp_add_perm_ward, req.body.emp_add_perm_tole, req.body.emp_add_temp_prov, req.body.emp_add_temp_dist, req.body.emp_add_temp_mun, req.body.emp_add_temp_ward, req.body.emp_add_temp_tole, req.body.emp_phone1, req.body.emp_phone2, req.body.emp_email, req.body.emp_office_id, req.body.emp_dept_id, req.body.emp_level_id, req.body.emp_post, req.body.emp_rank, req.body.emp_appoint_date, req.body.emp_status, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating Employee
module.exports = {
  updateEmployee: (callBack) => {
    const updateEmployeeQuery = `UPDATE employee SET emp_fname_eng=$1, emp_lname_eng=$2, emp_fname_nep=$3, emp_lname_nep=$4, emp_add_perm_prov=$5, emp_add_perm_dist=$6, emp_add_perm_mun=$7, emp_add_perm_ward=$8, emp_add_perm_tole=$9, emp_add_temp_prov=$10, emp_add_temp_dist=$11, emp_add_temp_mun=$12, emp_add_temp_ward=$13, emp_add_temp_tole=$14, emp_phone1=$15, emp_phone2=$16, emp_email=$17, emp_office_id=$18, emp_dept_id=$19, emp_level_id=$20, emp_post=$21, emp_rank=$22, emp_appoint_date=$23, emp_status=$24, created_by=$25, updated_by=$26 WHERE employee_id=$27 returning *`;
    pool.query(
      updateEmployeeQuery,
      [req.body.emp_fname_eng, req.body.emp_lname_eng, req.body.emp_fname_nep, req.body.emp_lname_nep, req.body.emp_add_perm_prov, req.body.emp_add_perm_dist, req.body.emp_add_perm_mun, req.body.emp_add_perm_ward, req.body.emp_add_perm_tole, req.body.emp_add_temp_prov, req.body.emp_add_temp_dist, req.body.emp_add_temp_mun, req.body.emp_add_temp_ward, req.body.emp_add_temp_tole, req.body.emp_phone1, req.body.emp_phone2, req.body.emp_email, req.body.emp_office_id, req.body.emp_dept_id, req.body.emp_level_id, req.body.emp_post, req.body.emp_rank, req.body.emp_appoint_date, req.body.emp_status, req.body.created_by, req.body.updated_by, req.params.employeeId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting Employee
module.exports = {
  deleteEmployee: (callBack) => {
    const deleteEmployeeQuery = `DELETE  FROM employee where employee_id=$1`;
    pool.query(
      deleteEmployeeQuery,
      [req.params.employeeId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
