import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["https://chatapp-two-beta.vercel.app/signin"],
    methods: ["GET", "POST"],
  },
});
const usermap = {}; // Users connected To socket {userId: socket.id}
export const getReceiverSocket= (receiverId)=>{
     return usermap[receiverId] ;
}
io.on("connection", (socket) => {
  console.log("a User connected", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId) usermap[userId] = socket.id;
  io.emit("getOnlineUsers", Object.keys(usermap));
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    delete usermap[userId];
    io.emit("getOnlineUsers", Object.keys(usermap));
  });
});
export { app, io, server };
