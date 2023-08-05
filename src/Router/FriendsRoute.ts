import { Router } from "express";
import { BeFriends, Unfriend } from "../Controllers/FriendControllers";

const FriendsRouter = Router();

FriendsRouter.route("/:userID/:friendID/be-friends").post(BeFriends);
FriendsRouter.route("/:userID/:friendID/un-friend").post(Unfriend);

export default FriendsRouter;
