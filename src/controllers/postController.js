const Post = require("../models/Post");

const getPosts = async (req, res) => {
  const posts = await Post.find();

  res.status(200).json({
    message: "Posts found",
    posts,
  });
};

const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json({
    message: "Post found",
    post,
  });
};

const createPosts = async (req, res) => {
  const { title, content } = req.body;

  const post = new Post({ title, content });
  await post.save();

  res.status(201).json({
    message: "Post Created",
    post,
  });
};

const updatePost = async (req, res) => {
  const { title, content } = req.body;

  const post = await Post.findByIdAndUpdate(
    req.params.id,
    { title, content },
    { new: true },
  );

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json({
    message: "Post updated",
    post,
  });
};

const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json({
    message: "Post deleted",
    post,
  });
};

module.exports = {
  getPosts,
  getPostById,
  createPosts,
  updatePost,
  deletePost,
};
