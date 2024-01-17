//
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./routes/userRoute");
const todoRoute = require("./routes/todoRoute");
// const UserController = require("./controller/UserController");
// const TodoController = require("./controller/TodoController");
app.use(express.urlencoded({ extended: true }));
//
mongoose
  .connect("mongodb://localhost:27017/Day1")
  .then(() => {
    console.log("connect to mongoose");
  })
  .catch((e) => {
    console.log(e);
  });

//middleWares

app.use("/users", userRoute);
app.use("/todos", todoRoute);
//lestining
app.listen(port, () => console.log(` app listening on port ${port}!`));



////// debug
// UserController.Register("@omar", "1234", "omar", 22);
// UserController.EditName("@omar", "new omar");
// UserController.Delete("@omar");
// UserController.Login("@omar", "1234");
// UserController.GetAll();

// Test Todo
// TodoController.AddTodo("65a66b0ec4a7da40689a233a",'Wake Up','to-do',["gh", "ahg"]);
// TodoController.updateTodo("65a68930fb9aba94178c7326", "studing");
// TodoController.DeleteTodo("Wake Up");
// TodoController.GetAll();
