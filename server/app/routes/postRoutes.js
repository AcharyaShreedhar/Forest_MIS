const express = require("express");
const router = express.Router();

const postController = require("../controller/postController");
router.get("/posts", postController.getAllPosts);
router.get("/posts/:postId", postController.getPosts);
router.post("/posts", postController.addPosts);
router.put("/posts/:postId", postController.updatePosts);
router.delete("/posts/:postId", postController.deletePosts);
module.exports = router;
