import { Document, Schema, model } from "mongoose";

interface Ichat {
  members?: Array<string>;
}

interface IchatData extends Ichat, Document {}

const ChatSchema = new Schema(
  {
    member: {
      type: Array<string>,
    },
  },
  { timestamps: true }
);

const ChatModels = model<IchatData>("Chats", ChatSchema);

export default ChatModels;
