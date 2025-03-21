const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

let users = {}; // Store connected users

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // User joins with a username
    socket.on("user joined", (username) => {
        users[socket.id] = username;
        console.log(`${username} joined the chat.`);
        io.emit("user joined", username); // Notify all users
    });

    // Handle chat messages
    socket.on("chat message", (data) => {
        io.emit("chat message", data); // Send to all users
    });

    // Handle user disconnect
    socket.on("disconnect", () => {
        if (users[socket.id]) {
            io.emit("user left", users[socket.id]);
            console.log(`${users[socket.id]} left the chat.`);
            delete users[socket.id];
        }
    });
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
