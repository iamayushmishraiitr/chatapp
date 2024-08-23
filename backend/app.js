import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authroutes from "./routes/auth.js";
import connectTodb from "./database/connectTodb.js";
import messageroutes from "./routes/message.js";
import {app,server} from "./socket/socket.js"
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/auth", authroutes);
app.use("/messages",messageroutes)
const PORT = process.env.PORT;
server.listen(PORT, () => {
  connectTodb();
  console.log(`Connected at ${PORT}`);
});
