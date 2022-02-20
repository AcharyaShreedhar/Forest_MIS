const pool = require("../db");

//Controller for Listing all Office staffs Posts
async function getAllOfficeStaffPosts(req, res) {
  const getAllOfficeStaffPostsQuery = `select * from office_staff_posts`;
  pool.query(getAllOfficeStaffPostsQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for Listing a office staff post
async function getOfficeStaffPosts(req, res) {
  const getOfficeStaffPostsQuery = `select * from office_staff_posts where office_staff_post_id=?`;
  pool.query(
    getOfficeStaffPostsQuery,
    [req.params.officeStaffPostId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a office staff post
async function addOfficeStaffPosts(req, res, next) {
  const addOfficeStaffPostsQuery = `INSERT INTO office_staff_posts (dist_id, office_id, post, kayam_darbandi_sankhya, padpurti_sankhya, khali_sankhya, created_by, updated_by) values (?,?,?,?,?,?,?,?)`;
  pool.query(
    addOfficeStaffPostsQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.post,
      req.body.kayam_darbandi_sankhya,
      req.body.padpurti_sankhya,
      req.body.khali_sankhya,
      req.body.created_by,
      req.body.updated_by,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for updating a Office Staff Post
async function updateOfficeStaffPosts(req, res, next) {
  const updateOfficeStaffPostsQuery = `UPDATE office_staff_posts SET dist_id=?, office_id=?, post=?,kayam_darbandi_sankhya=?,padpurti_sankhya=?,khali_sankhya=?,created_by=?,updated_by=? WHERE office_staff_post_id=?`;
  pool.query(
    updateOfficeStaffPostsQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.post,
      req.body.kayam_darbandi_sankhya,
      req.body.padpurti_sankhya,
      req.body.khali_sankhya,
      req.body.created_by,
      req.body.updated_by,
      req.params.officeStaffPostId,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for deleting a office Staff Post
async function deleteOfficeStaffPosts(req, res, next) {
  const deleteOfficeStaffPostsQuery = `DELETE  FROM office_staff_posts WHERE office_staff_post_id=?`;
  pool.query(
    deleteOfficeStaffPostsQuery,
    [req.params.officeStaffPostId],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

module.exports = {
  getAllOfficeStaffPosts,
  getOfficeStaffPosts,
  addOfficeStaffPosts,
  updateOfficeStaffPosts,
  deleteOfficeStaffPosts,
};
