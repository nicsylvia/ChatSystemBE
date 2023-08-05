import { Document, Schema, model } from "mongoose";

interface IchatMessage {
  userID?: string;
  chatID?: string;
  message?: string;
}

interface IchatMessageData extends IchatMessage, Document {}

const ChatMessageSchema = new Schema(
  {
    message: {
      type: String,
    },
    chatID: {
      type: String,
    },
    userID: {
      type: String,
    },
  },
  { timestamps: true }
);

const ChatMessageModels = model<IchatMessageData>(
  "ChatMessages",
  ChatMessageSchema
);

export default ChatMessageModels;
