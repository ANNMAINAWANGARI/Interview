const TodoCategory = require("../model/category");
const Todo = require("../model/todo");

exports.getCategory = async (req, res) => {
  try {
    const categories = await TodoCategory.find();
    res.status(200).json({
      message: "Categories fetched",
      data: categories,
    });
  } catch (error) {
    res.status(404).json({
      message: "Categories not found",
      error: error.message,
    });
  }
};
exports.postCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const post = await TodoCategory.create({name});
    res.status(200).json({
      message: "Post Category created",
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to add category",
      error: error.message,
    });
    //res.send('Post Category')
  }
};
