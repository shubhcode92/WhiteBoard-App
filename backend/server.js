const express = require("express");
const app = express();

const server = require("http").createServer(app);
const { Server } = require("socket.io");

const io = new Server(server);

// request routes
app.get("/", (req, res) => {
    res.send(
        "This is Real time whiteboard application by shubhcode92"
    )
})

io.on("connection", (socket) => {
    console.log("User connected");
});

const port = process.env.PORT || 5000;
server.listen(port, ()=> console.log(`server is running on port no ${port}`));
// console.log(33);