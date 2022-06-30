const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Please input your title"],
  },
  description: {
    type: String,
    required: [true, "Please input the task description"],
  },
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
