const UserController = require("../controller/UserController");
const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");

// users home
route.get("/", async (req, res) => {
  let data = await UserController.GetAll();
  res.json({
    users: data,
    msg: "all users",
    status: "ok",
  });
});
// user register
route.post("/register", async (req, res) => {
  try {
    let { userName, password, firstName, age } = req.body;
    bcrypt.hash(password, 5, async (err, hash) => {
      // Store hash in your password DB.
      let data = await UserController.Register(userName, hash, firstName, age);
      res.send("registered successfully");
    });
  } catch (e) {
    res.send(e);
  }
});
// login
route.post("/login", async (req, res) => {
  let { userName, password } = req.body;
  let data = await UserController.Login(userName);

  console.log(data);
  const match = await bcrypt.compare(password, data.password);
  if (match) {
    res.send("login successfully");
  } else {
    res.send("login failed");
  }
});
// user delet
route.delete("/", async (req, res) => {
  let data = await UserController.Delete(req.body.userName);
  res.send("");
});
// Update UserName
route.patch("/", async (req, res) => {
  let { userName, firstName } = req.body;
  let data = await UserController.EditName(userName, firstName);
  res.send("Updated succesfully");
});
//export
module.exports = route;
