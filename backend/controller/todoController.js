const Todo = require("../model/todo");

exports.getAllTodo = async (req, res) => {
  try {
    const categories = await Todo.find();
    //.populate("categoryName")
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


exports.postCreateTodo = async (req, res) => {
  try {
    const { categoryName, title, message } = req.body;
    const todo = await Todo.create({ categoryName, title, message });
    res.status(200).json({
      message: "Post Category created",
      data: todo,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to add category",
      error: error.message,
    });
    //res.send('Post Category')
  }
};
exports.putUpdateTodo = async (req, res) => {
  try {
    const update = req.body;
    const todo = await Todo.findByIdAndUpdate(req.params.id, update);
    res.status(200).json({
      message: "Todo updated successfully",
      data: todo,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to add category",
      error: error.message,
    });
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    const update = req.body;
    const todo = await Todo.findByIdAndRemove(req.params.id, update);
    res.status(200).json({
      message: "Deleted successfully",
      data: todo,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete todo",
      error: error.message,
    });
  }
};
