const express = require("express");
const router = express.Router();

const {
  getPostById,
  getPosts,
  createPosts,
  updatePost,
  deletePost,
} = require("../controllers/postController");

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", createPosts);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
