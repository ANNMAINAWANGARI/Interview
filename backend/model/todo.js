const mongoose = require("mongoose");
const TodoCategory = require("../model/category");
const TodoSchema = new mongoose.Schema(
  {
    categoryName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TodoCategory",
    },
    title: {
      type: String,
      required: [true, "Please enter title"],
    },
    message: {
      type: String,
      required: [true, "Please enter message"],
    },
  },
  { timestamps: true }
);
const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
