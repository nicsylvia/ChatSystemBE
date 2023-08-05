import { Router } from "express";
import {
  CreateUser,
  GetAUser,
  GetAllUsers,
  LoginUser,
} from "../Controllers/UserControllers";

const userRouter = Router();

userRouter.route("/create-user").post(CreateUser);
userRouter.route("/get-all-users").get(GetAllUsers);
userRouter.route("/get-user/:userID").get(GetAUser);
userRouter.route("/login-user").post(LoginUser);

export default userRouter;
