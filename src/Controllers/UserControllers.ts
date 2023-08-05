import UserModels from "../models/Usermodels";

import { Request, Response } from "express";

export const CreateUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const user = await UserModels.create({
      username,
      email,
      password,
    });

    return res.status(200).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured in creating Users",
      data: error,
    });
  }
};

export const GetAllUsers = async (req: Request, res: Response) => {
  try {
    const user = await UserModels.find();

    return res.status(200).json({
      message: "All Users successfully gotten",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured in getting all Users",
      data: error,
    });
  }
};

export const GetAUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModels.findById(req.params.userID);

    return res.status(200).json({
      message: "Successfully gotten this user",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured in getting this User",
      data: error,
    });
  }
};

export const DeleteUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModels.findByIdAndDelete(req.params.userID);

    return res.status(200).json({
      message: "Successfully deleted this user",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured in deleting this User",
      data: error,
    });
  }
};
export const UpdateUser = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    const user = await UserModels.findByIdAndUpdate(
      req.params.userID,
      {
        username,
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Successfully deleted this user",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured in deleting this User",
      data: error,
    });
  }
};

export const LoginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await UserModels.findOne({
      email,
    });

    if (user) {
      if (user?.password === password) {
        return res.status(200).json({
          message: "User created successfully",
          data: user,
        });
      } else {
        return res.status(400).json({
          message: "Password or email not correct",
        });
      }
    } else {
      return res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Error occured in creating Users",
      data: error,
    });
  }
};
