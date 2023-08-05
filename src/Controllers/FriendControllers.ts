import mongoose from "mongoose";
import UserModels from "../models/Usermodels";

import { Request, Response } from "express";

export const BeFriends = async (req: Request, res: Response) => {
  try {
    const { userID, friendID } = req.params;

    const friend: any = await UserModels.findById(friendID);
    const user: any = await UserModels.findById(userID);

    if (user && friend) {
      friend.friends?.push(new mongoose.Types.ObjectId(userID));
      friend.save();

      user.friends?.push(new mongoose.Types.ObjectId(friendID));
      user.save();

      return res.status(201).json({
        message: "You are both friends",
      });
    } else {
      return res.status(400).json({
        message: "Users or friends not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Error occured",
      data: error,
    });
  }
};
