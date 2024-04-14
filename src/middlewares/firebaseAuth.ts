import { NextFunction, Request, Response } from "express";
import admin from "../config/firebase/firebase";

const firebaseToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decodeValue = await admin.auth().verifyIdToken(token as string);

    if (decodeValue) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json({ message: "Invalid Token" });
  }
};

export default firebaseToken;
