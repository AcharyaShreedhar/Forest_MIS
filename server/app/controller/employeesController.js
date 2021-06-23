const pool = require("../db")
//Controller for Listing all Employees
async function getAllEmployees(req, res) {
    const getTotalQuery = "SELECT count(*) as total from employees";
    const getAllEmployeesQuery = `select * from employees ORDER BY ? ASC LIMIT ?, ?`;
    pool.query(getTotalQuery, [], (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllEmployeesQuery,
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
  
  //Controller for Listing a Employees
  async function getEmployees(req, res) {
    const getEmployeesQuery = `select * from employees where emp_id=?`;
    pool.query(getEmployeesQuery, [req.params.employeesId], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for adding a Employees
  async function addEmployees(req, res) {
    const addEmployeesQuery = `INSERT INTO employees (emp_fname_eng, emp_lname_eng, emp_fname_nep, emp_lname_nep, emp_add_perm_prov, emp_add_perm_dist, emp_add_perm_mun, emp_add_perm_ward, emp_add_perm_tole, emp_add_temp_prov, emp_add_temp_dist, emp_add_temp_mun, emp_add_temp_ward, emp_add_temp_tole, emp_phone1, emp_phone2, emp_email, emp_office_id, emp_dept_id, emp_level_id, emp_post, emp_rank, emp_appoint_date, emp_status, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    pool.query(
      addEmployeesQuery,
      [
        req.body.emp_fname_eng,
        req.body.emp_lname_eng,
        req.body.emp_fname_nep, 
        req.body.emp_lname_nep, 
        req.body.emp_add_perm_prov, 
        req.body.emp_add_perm_dist, 
        req.body.emp_add_perm_mun, 
        req.body.emp_add_perm_ward, 
        req.body.emp_add_perm_tole, 
        req.body.emp_add_temp_prov, 
        req.body.emp_add_temp_dist, 
        req.body.emp_add_temp_mun, 
        req.body.emp_add_temp_ward, 
        req.body.emp_add_temp_tole, 
        req.body.emp_phone1, 
        req.body.emp_phone2, 
        req.body.emp_email, 
        req.body.emp_office_id, 
        req.body.emp_dept_id, 
        req.body.emp_level_id, 
        req.body.emp_post, 
        req.body.emp_rank, 
        req.body.emp_appoint_date, 
        req.body.emp_status, 
        req.body.created_by, 
        req.body.updated_by
        
      ],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  //Controller for updating a Employees
  async function updateEmployees(req, res) {
    const updateEmployeesQuery = `UPDATE employees SET emp_fname_eng=?, emp_lname_eng=?, emp_fname_nep=?, emp_lname_nep=?, emp_add_perm_prov=?, emp_add_perm_dist=?, emp_add_perm_mun=?, emp_add_perm_ward=?, emp_add_perm_tole=?, emp_add_temp_prov=?, emp_add_temp_dist=?, emp_add_temp_mun=?, emp_add_temp_ward=?, emp_add_temp_tole=?, emp_phone1=?, emp_phone2=?, emp_email=?, emp_office_id=?, emp_dept_id=?, emp_level_id=?, emp_post=?, emp_rank=?, emp_appoint_date=?, emp_status=?, created_by=?, updated_by=? WHERE emp_id=?`;
    pool.query(
      updateEmployeesQuery,
      [
        req.body.emp_fname_eng,
        req.body.emp_lname_eng,
        req.body.emp_fname_nep, 
        req.body.emp_lname_nep, 
        req.body.emp_add_perm_prov, 
        req.body.emp_add_perm_dist, 
        req.body.emp_add_perm_mun, 
        req.body.emp_add_perm_ward, 
        req.body.emp_add_perm_tole, 
        req.body.emp_add_temp_prov, 
        req.body.emp_add_temp_dist, 
        req.body.emp_add_temp_mun, 
        req.body.emp_add_temp_ward, 
        req.body.emp_add_temp_tole, 
        req.body.emp_phone1, 
        req.body.emp_phone2, 
        req.body.emp_email, 
        req.body.emp_office_id, 
        req.body.emp_dept_id, 
        req.body.emp_level_id, 
        req.body.emp_post, 
        req.body.emp_rank, 
        req.body.emp_appoint_date, 
        req.body.emp_status, 
        req.body.created_by, 
        req.body.updated_by,
        req.params.employeesId,
      ],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  //Controller for deleting a Employees
  async function deleteEmployees(req, res) {
    const deleteEmployeesQuery = `DELETE  FROM employees where emp_id=?`;
    pool.query(
      deleteEmployeesQuery,
      [req.params.employeesId],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  module.exports = {
    getAllEmployees,
    getEmployees,
    addEmployees,
    updateEmployees,
    deleteEmployees,
  };
  
  