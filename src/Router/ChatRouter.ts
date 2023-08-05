import { Router } from "express";
import {
  CreateChat,
  GetChat,
  GetSpecificChat,
} from "../Controllers/ChatControllers";

const ChatsRouter = Router();

ChatsRouter.route("/:userID/:friendID/create-chat").post(CreateChat);
ChatsRouter.route("/:userID/getchat").get(GetChat);
ChatsRouter.route("/:userID/:friendID/get-a-chat").get(GetSpecificChat);

export default ChatsRouter;
