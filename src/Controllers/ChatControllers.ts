import ChatModels from "../models/ChatModels";

export const CreateChat = async (req: Request, res: Response) => {
  try {
    const { userID, friendID } = req.params;

    const friend: any = await UserModels.findById(friendID);
    const user: any = await UserModels.findById(userID);

    if (friend && user) {
      const chat = await ChatModels.create;
    } else {
    }
  } catch (error) {
    return res.status(400).json({
      message: "Error occured",
      data: error,
    });
  }
};
