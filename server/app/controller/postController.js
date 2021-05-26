const pool = require("../db");

//Controller for Listing all Posts
async function getAllPosts(req, res) {
  const getAllPostsQuery = `select * from posts`;
  pool.query(getAllPostsQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for Listing a Post
async function getPosts(req, res) {
  const getPostsQuery = `select * from posts where post_id=?`;
  pool.query(getPostsQuery, [req.params.postId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a Post
async function addPosts(req, res) {
  const addPostsQuery = `INSERT INTO posts (post_name_nep,post_name_eng,created_by,updated_by) values (?,?,?,?)`;
  pool.query(
    addPostsQuery,
    [
        req.body.post_name_nep,
        req.body.post_name_eng,
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

//Controller for updating a Post
async function updatePosts(req, res) {
  const updatePostsQuery = `UPDATE posts SET post_name_nep=?,post_name_eng=?,created_by=?,updated_by=? WHERE post_id=?`;
  pool.query(
    updatePostsQuery,
    [
        req.body.post_name_nep,
        req.body.post_name_eng,
        req.body.created_by,
        req.body.updated_by,
        req.params.postId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Post
async function deletePosts(req, res) {
  const deletePostsQuery = `DELETE  FROM posts where post_id=?`;
  pool.query(
    deletePostsQuery,
    [req.params.postId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllPosts,
  getPosts,
  addPosts,
  updatePosts,
  deletePosts,
};
