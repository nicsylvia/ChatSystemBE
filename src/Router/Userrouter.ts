import { Router } from "express";
import {
  CreateUser,
  DeleteUser,
  GetAUser,
  GetAllUsers,
  LoginUser,
  UpdateUser,
} from "../Controllers/UserControllers";

const userRouter = Router();

userRouter.route("/create-user").post(CreateUser);
userRouter.route("/get-all-users").get(GetAllUsers);
userRouter.route("/get-user/:userID").get(GetAUser);
userRouter.route("/update-user/:userID").patch(UpdateUser);
userRouter.route("/delete-user/:userID").delete(DeleteUser);
userRouter.route("/login-user").post(LoginUser);

export default userRouter;
