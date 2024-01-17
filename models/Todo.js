const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 20,
  },
  status: {
    type: String,
    default: "To-Do",
  },
  tags: {
    type: Array,
    max: 10,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
Todo.createIndexes({ title: 1 });
module.exports = Todo;
