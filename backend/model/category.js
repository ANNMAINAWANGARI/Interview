const mongoose = require("mongoose");
const Category = new mongoose.Schema(
  {
    name: {
      type: String,
      ref: "Todo",
      required: [true, "Please enter the category"],
    },
  },
  { timestamps: true }
);
const TodoCategory = mongoose.model("TodoCategory", Category);
module.exports = TodoCategory;
