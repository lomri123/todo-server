const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
io.on("connection", function(socket) {
  console.log("a user connected");
  io.emit("lobby", { task: "test", id: 1 });
  socket.on("disconnect", function() {
    console.log("User Disconnected");
  });
});
// const emitChanges = (type, data) => {
//   io.emit("data-changed", { type, data });
// };
// emitChanges("type", "data");

emitChanges = () => {
  console.log("added stuff");
};

io.listen(8000, console.log("listening on port 8000"));

module.exports = { io, emitChanges };
