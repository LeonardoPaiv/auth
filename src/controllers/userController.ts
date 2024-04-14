import { Request, Response } from "express";
import { User } from "../Entities/UserEntity";
import { updateUserService } from '../services/userService';

export const updateUser = async (req: Request, res: Response) => {
    const userData = new User(req.body);
    const mother = await updateUserService(userData);
    res.send(mother);
}