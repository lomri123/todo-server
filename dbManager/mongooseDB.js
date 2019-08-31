const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/todoList", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log("connected to mongoDB"))
  .catch(err => console.log("could not connect to mongoDB:", err));

module.exports = mongoose;
