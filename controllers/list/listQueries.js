const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  userID: { type: Number },
  status: { type: Boolean },
  task: { type: String }
});

const Todos = mongoose.model("todos", listSchema);

const fetchAllTodos = () => {
  return Todos.find().sort({ _id: -1 });
};

const fetchTodo = id => {
  return Todos.findById(id);
};

const deleteTodo = id => {
  return Todos.findByIdAndDelete(id);
};

const updateTodo = (id, updateData) => {
  return Todos.findByIdAndUpdate(id, {
    $set: updateData
  });
};

const addTodo = todoData => {
  const todo = {
    userID: 1,
    status: false,
    task: todoData
  };
  const tmpTodoSchema = new Todos(todo);
  const result = tmpTodoSchema.save();
  return result;
};

module.exports = {
  fetchAllTodos,
  deleteTodo,
  updateTodo,
  fetchTodo,
  addTodo
};
