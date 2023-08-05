import { Document, Schema, models } from "mongoose";

interface Iuser {
  email: string;
  username: string;
  password: string;
  friends: Array<string>;
}

interface IuserData extends Iuser, Document {}
