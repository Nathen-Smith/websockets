import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

import { Server } from "socket.io";
import http from "http";
const server = http.createServer(app);
const io = new Server(server);

app.get("/api/test", (req, res) => {
  res.send({ message: "OK", data: "Hello world!" });
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

export default server;
