import express, { Application, Response, Request } from "express";

import cors from "cors";
import userRouter from "./Router/Userrouter";
import FriendsRouter from "./Router/FriendsRoute";

const app: Application = express();

const port: number = 1050;

app.use(cors());
app.use(express.json());
app.use("api/users", userRouter);
app.use("api/friends", FriendsRouter);

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
  console.log("");
  console.log("Server is up and running on port", port);
});
