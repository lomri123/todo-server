const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String }
});

const Users = mongoose.model("users", userSchema);

const fetchAllUsers = () => {
  return Users.find();
};

const fetchUser = id => {
  return Users.findById(id);
};

const deleteUser = id => {
  return Users.findByIdAndDelete(id);
};

const updateUser = (id, updateData) => {
  return Users.findByIdAndUpdate(id, {
    $set: updateData
  });
};

const addUser = userData => {
  const user = {
    name: userData.name
  };
  const tmpUserSchema = new Users(user);
  const result = tmpUserSchema.save();
  return result;
};

module.exports = {
  fetchAllUsers,
  deleteUser,
  updateUser,
  fetchUser,
  addUser
};
