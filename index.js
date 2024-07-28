import express from "express";
import http from "http";
import {Server} from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("message", message);
  });
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

server.listen(3000, () => console.log(`Server Started at PORT:3000`));



















// import { Socket } from "socket.io";
// import express from "express";
// import http from "http";
// import {Server} from "socket.io";

// const app=express();
// const server = http.createServer(app);
// const io=new Server(server);//handles my sockets

// //socket.io
// io.on("connection", (socket)=>{
//     console.log("new user", socket.id)
// });


// //handles my http request
// app.use(express.static("public"))

// server.listen(3000, ()=>{
//     console.log("server is running on port 3000")
// });

// The first approach explicitly creates an HTTP server using http.createServer. This allows for more flexibility, such as adding WebSocket support or other custom HTTP server configurations.
// The second approach is simpler and more concise, suitable for most standard use cases where you don't need to modify the underlying HTTP server.
// In most cases, the second approach (using app.listen directly) is sufficient. The first approach is useful when you need to do something more complex with the HTTP server.
// import express from "express";

// const app=express();

// app.listen(3000, ()=>{
//     console.log("server is running on port 3000")
// });