const Todo = require("../models/Todo");

const AddTodo = async (_userId, _title, _status, _tags) => {
  try {
    let data = await Todo.create({
      userId: _userId,
      title: _title,
      status: _status,
      tags: _tags,
    });
    data ? console.log("added successfully") : console.log(" failed");
  } catch (err) {
    console.log(err);
  }
};

const DeleteTodo = async (id) => {
  try {
    let data = await Todo.deleteOne({ _id: id });
    data ? console.log("deleted successfully") : console.log("delete failed");
  } catch (err) {
    console.log(err);
  }
};

const updateTodo = async (id, _title) => {
  try {
    let data = await Todo.updateOne({ _id: id }, { title: _title });
    data
      ? console.log("Title Updated successfully")
      : console.log("update failed");
  } catch (err) {
    console.log(err);
  }
};

const GetAll = async () => {
  try {
    let data = await Todo.find({}, { title: 1, _id: 0 }).exec();
    data ? console.log(data) : console.log(" failed");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { AddTodo, DeleteTodo, updateTodo, GetAll };
