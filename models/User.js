const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  age: {
    type: Number,
    min: 13,
  },
});

const User = mongoose.model("User", userSchema);
User.creatIndexes = { userName: 1 };
module.exports = User;
