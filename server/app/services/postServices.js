const pool = require("../db");

//Service for Listing all Post
module.exports = {
  getAllPost: (callBack) => {
    const getAllPostQuery = `select * from post`;
    pool.query(getAllPostQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a Post
module.exports = {
  getPost: (callBack) => {
    const getPostQuery = `select * from post where post_id=$1`;
    pool.query(getPostQuery, [req.params.postId], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
};

//Service for adding a Post
module.exports = {
  addPost: (callBack) => {
    const addPostQuery = `INSERT INTO post (prov_name_eng,prov_name_nep) values ($1,$2) returning *`;
    pool.query(
      addPostQuery,
      [req.body.prov_name_eng, req.body.prov.name_nep],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a Post
module.exports = {
  updatePost: (callBack) => {
    const updatePostQuery = `UPDATE post SET prov_name_eng=$1, prov_name_nep=$2 WHERE post_id=$3 returning *`;
    pool.query(
      updatePostQuery,
      [req.body.prov_name_eng, req.body.prov_name_nep, req.params.postId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a Post
module.exports = {
  deletePost: (callBack) => {
    const deletePostQuery = `DELETE  FROM post where post_id=$1`;
    pool.query(
      deletePostQuery,
      [req.params.postId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
