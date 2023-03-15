const PostSchema = require("../models/post.js");
const createPosts = async (req, res) => {
  try {
    const newPost = await PostSchema.create(req.body);
    res.status(201).json({
      newPost,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getPosts = async (req, res) => {
  try {
    const getpost = await PostSchema.find();
    res.status(200).json({
      getpost,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const detailPost = await PostSchema.findById(id);
    res.status(200).json({
      detailPost,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const updatePost = await PostSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      updatePost,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await PostSchema.findByIdAndRemove(id);
    res.status(201).json({
      newPost,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createPosts,
  getPosts,
  getDetail,
  getUpdate,
  deletePost,
};
