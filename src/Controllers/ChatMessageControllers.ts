import ChatModels from "../models/ChatModels";

import { Request, Response } from "express";
import UserModels from "../models/Usermodels";
import ChatMessageModels from "../models/ChatMessageModels";

export const CreateChatMessage = async (req: Request, res: Response) => {
  try {
    const { userID, chatID } = req.params;

    const { message } = req.body;

    const chatMessage = await ChatMessageModels.create({
      userID,
      chatID,
      message,
    });

    return res.status(400).json({
      message: "Established Chat messages",
      data: chatMessage,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured",
      data: error,
    });
  }
};
export const GetChatMessage = async (req: Request, res: Response) => {
  try {
    const { chatID } = req.params;
    const chatMessage = await ChatMessageModels.find({chatID});

    return res.status(200).json({
      message: "Got all Chat messages",
      data: chatMessage,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured",
      data: error,
    });
  }
};
