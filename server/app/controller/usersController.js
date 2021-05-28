const pool = require("../db");

//Controller for Listing all Users
async function getAllUsers(req, res) {
  const getAllUsersQuery = `select * from users`;
  pool.query(getAllUsersQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for Listing a User
async function getUsers(req, res) {
  const getUsersQuery = `select * from users where user_id=?`;
  pool.query(getUsersQuery, [req.params.userId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a User
async function addUsers(req, res) {
  const addUsersQuery = `INSERT INTO users (user_type,user_name,user_pass,created_by,updated_by) values (?,?,?,?,?)`;
  pool.query(
    addUsersQuery,
    [
      req.body.user_type,
      req.body.user_name,
      req.body.user_pass,
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

//Controller for updating a User
async function updateUsers(req, res) {
  const updateUsersQuery = `UPDATE users SET user_type=?, user_name=?, user_pass=?,created_by=?,updated_by=? WHERE user_id=?`;
  pool.query(
    updateUsersQuery,
    [
        req.body.user_type,
        req.body.user_name,
        req.body.user_pass,
        req.body.created_by,
        req.body.updated_by,
        req.params.userId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a User
async function deleteUsers(req, res) {
  const deleteUsersQuery = `DELETE  FROM users WHERE user_id=?`;
  pool.query(
    deleteUsersQuery,
    [req.params.userId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllUsers,
  getUsers,
  addUsers,
  updateUsers,
  deleteUsers,
};