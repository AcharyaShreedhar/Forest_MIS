const express = require("express");
const router = express.Router();

const postController = require("../controller/postController");
router.get("/post", postController.getAllPost);
router.get("/post/postId", postController.getPost);
router.post("/post", postController.addPost);
router.put("/post", postController.updatePost);
router.delete("/post", postController.deletePost);
module.exports = router;
