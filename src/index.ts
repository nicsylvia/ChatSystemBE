import express, { Application, Response, Request } from "express";

import cors from "cors";
import userRouter from "./Router/Userrouter";
import FriendsRouter from "./Router/FriendsRoute";
import mongoose from "mongoose";
import ChatsRouter from "./Router/ChatRouter";
import ChatMessageRouter from "./Router/ChatMessageRouter";

const app: Application = express();

const port: number = 2050;

const DBURL = "mongodb://0.0.0.0:27017/ChatSystem";

app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/friends", FriendsRouter);
app.use("/api/chats", ChatsRouter);
app.use("/api/message", ChatMessageRouter);

app.get("/", (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "CHAT API IS READY FOR CONSUMPTION",
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
    });
  }
});

app.listen(port, () => {
  mongoose
    .connect(DBURL)
    .then(() => {
      console.log("");
      console.log("Server is up and running on port", port);
      console.log("Database is connected to server");
    })
    .catch((error) => {
      console.log("An error occured in connecting DB", error);
    });
});
