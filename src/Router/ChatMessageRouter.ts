import { Router } from "express";
import {
  CreateChatMessage,
  GetChatMessage,
} from "../Controllers/ChatMessageControllers";

const ChatMessageRouter = Router();

ChatMessageRouter.route("/:userID/:chatID/create-chat-message").post(
  CreateChatMessage
);
ChatMessageRouter.route("/:userID/get-chat-message").get(GetChatMessage);

export default ChatMessageRouter;
