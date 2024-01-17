const TodoController = require("../controller/TodoController");
const express = require("express");
const route = express.Router();

// Get Todo by user id
route.get("/", async (req, res) => {
  let data = await TodoController.GetAll();
  res.json({
    users: data,
    msg: "all users",
    status: "ok",
  });
});
// Add Todo
route.post("/", async (req, res) => {
  try {
    let { userId, title, status, tags } = req.body;
    let data = await TodoController.AddTodo(userId, title, status, tags);
    res.send("Todo added");
  } catch (e) {
    res.send(e);
  }
});

// delet todo
route.delete("/:id", async (req, res) => {
  let data = await TodoController.DeleteTodo(req.params.id);
  res.send("deleted success");
  console.log(req.params.id);
});
// Update todo
route.patch("/:id", async (req, res) => {
  let data = await TodoController.updateTodo(req.params.id, req.body.title);
  res.send("Updated succesfully");
});
//export
module.exports = route;
