const pool = require("../db");

//Service for Listing all Department
module.exports = {
  getAllDepartment: (callBack) => {
    const getAllDepartmentQuery = `select * from department`;
    pool.query(getAllDepartmentQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a Department
module.exports = {
  getDepartment: (callBack) => {
    const getDepartment = `select * from department where department_id=$1`;
    pool.query(
      getDepartmentQuery,
      [req.params.departmentId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a Department
module.exports = {
  addDepartment: (callBack) => {
    const addDepartmentQuery = `INSERT INTO department (dept_name_nep, dept_name_eng, created_by, updated_by) values ($1,$2,$3,$4) returning *`;
    pool.query(
      addDepartmentQuery,
      [req.body.dept_name_nep, req.body.dept_name_eng, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating Department
module.exports = {
  updateDepartment: (callBack) => {
    const updateDepartmentQuery = `UPDATE department SET dept_name_nep=$1, dept_name_eng=$2, created_by=$3, updated_by=$4 WHERE department_id=$1 returning *`;
    pool.query(
      updateDepartmentQuery,
      [req.body.dept_name_nep, req.body.dept_name_eng, req.body.created_by, req.body.updated_by, req.params.departmentId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting Department
module.exports = {
  deleteDepartment: (callBack) => {
    const deleteDepartmentQuery = `DELETE  FROM department where department_id=$1`;
    pool.query(
      deleteDepartmentQuery,
      [req.params.departmentId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
