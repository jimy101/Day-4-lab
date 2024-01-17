const User = require("../models/User");

const Register = async (_userName, _password, _firstName, _age) => {
  try {
    let data = await User.create({
      userName: _userName,
      password: _password,
      firstName: _firstName,
      age: _age,
    });
    data
      ? console.log("user was registered successfully")
      : console.log("registere failed");
  } catch (err) {
    console.log(err);
  }
};

const Login = async (_userName) => {
  try {
    let data = await User.findOne({
      userName: _userName,
    });
    data ? console.log(data) : console.log(" failed");
    return data;
  } catch (err) {
    console.log(err);
  }
};

const Delete = async (_userName) => {
  try {
    let data = await User.deleteOne({
      userName: _userName,
    });
    data ? console.log("deleted successfully") : console.log("delete failed");
  } catch (err) {
    console.log(err);
  }
};

const EditName = async (_userName, _firstName) => {
  try {
    let data = await User.updateOne(
      { userName: _userName },
      { firstName: _firstName }
    );
    return data;
    data ? console.log(" Updated successfully") : console.log("update failed");
  } catch (err) {
    console.log(err);
  }
};

const GetAll = async () => {
  try {
    let data = await User.find({}, { firstName: 1, _id: 0 });
    // data ? return data : console.log(" failed");
    return data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { Register, Login, Delete, EditName, GetAll };
