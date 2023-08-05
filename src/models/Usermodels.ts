import { Document, Schema, model } from "mongoose";

interface Iuser {
  email?: string;
  username?: string;
  password?: string;
  friends?: Array<string>;
}

interface IuserData extends Iuser, Document {}

const UserSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    friends: {
      type: Array<string>,
    },
  },
  { timestamps: true }
);

const UserModels = model<IuserData>("Users", UserSchema);

export default UserModels;
