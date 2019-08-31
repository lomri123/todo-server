const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("./dbManager/mongooseDB");
app.use(express.json());
const todoController = require("./controllers/list/listController");
const userController = require("./controllers/users/userController");
app.use(cors());
app.use("/", todoController);
app.use("/users", userController);

app.listen(3000, console.log("listening on port 3000"));
