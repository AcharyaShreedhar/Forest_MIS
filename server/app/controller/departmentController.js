const pool = require("../db");

//Controller for Listing all Departments
async function getAllDepartment(req, res) {
  const getTotalQuery = "SELECT count(*) as total from departments";
  const getAllDepartmentQuery = `select * from departments ORDER BY ?  ASC  LIMIT ? , ? `;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllDepartmentQuery,
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

//Controller for Listing a Department
async function getDepartment(req, res) {
  const getDepartmentQuery = `select * from departments where dept_id=?`;
  pool.query(
    getDepartmentQuery,
    [req.params.deptId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a Department
async function addDepartment(req, res) {
  const addDepartmentQuery = `INSERT INTO departments (dept_name_nep, dist_id, dept_name_eng,created_by,updated_by) values (?,?,?,?,?)`;
  pool.query(
    addDepartmentQuery,
    [
      req.body.dept_name_nep,
      req.body.dist_id,
      req.body.dept_name_eng,
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

//Controller for updating a Department
async function updateDepartment(req, res) {
  const updateDepartmentQuery = `UPDATE departments SET  dept_name_nep=?, dist_id=?,dept_name_nep=?,created_by=?,updated_by=? WHERE dept_id=?`;
  pool.query(
    updateDepartmentQuery,
    [
      req.body.dept_name_nep,
      req.body.dist_id,
      req.body.dept_name_eng,
      req.body.created_by,
      req.body.updated_by,
      req.params.deptId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Department
async function deleteDepartment(req, res) {
  const deleteDepartmentQuery = `DELETE  FROM departments WHERE dept_id=?`;
  pool.query(
    deleteDepartmentQuery,
    [req.params.deptId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllDepartment,
  getDepartment,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
