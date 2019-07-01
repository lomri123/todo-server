const express = require("express");
const app = express();
const mongoose = require("./dbManager/mongooseDB");
app.use(express.json());
const todoController = require("./controllers/list/listController");

app.use("/", todoController);

app.listen(3000, console.log("listening on port 3000"));
