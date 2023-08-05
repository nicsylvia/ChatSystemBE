import ChatModels from "../models/ChatModels";

import { Request, Response } from "express";
import UserModels from "../models/Usermodels";

export const CreateChat = async (req: Request, res: Response) => {
  try {
    const { userID, friendID } = req.params;

    const friend: any = await UserModels.findById(friendID);
    const user: any = await UserModels.findById(userID);

    const CheckUser = user.friends.some((el) => el === friendID);
    const CheckFriend = friend.friends.some((el) => el === userID);

    if (CheckFriend && CheckUser) {
      const chat = await ChatModels.create({
        members: [userID, friendID],
      });

      return res.status(400).json({
        message: "Chats established between Friends",
        data: chat,
      });
    } else {
      return res.status(400).json({
        message: "Cannot establish chats",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Error occured",
      data: error,
    });
  }
};
