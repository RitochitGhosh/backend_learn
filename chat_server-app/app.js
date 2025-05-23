const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () =>
  console.log(`💬 server listening on port: ${PORT}`)
);
const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "public")));

let socketsConnected = new Set();

io.on("connection", onConnected);

function onConnected(socket) {
    console.log("Socket Connected: ", socket.id);
    socketsConnected.add(socket.id);
    io.emit("clients-total", socketsConnected.size);
  
    socket.on("disconnect", () => {
      console.log("Socket disconnected: ", socket.id);
      socketsConnected.delete(socket.id);
      io.emit("clients-total", socketsConnected.size);
    });
  
    // 🔄 Receive and broadcast message
    socket.on("message", (data) => {
      socket.broadcast.emit("chat-message", data);
    });
  
    // 🔄 Typing indicator
    socket.on("typing", (name) => {
      socket.broadcast.emit("typing", name);
    });
  }
  

