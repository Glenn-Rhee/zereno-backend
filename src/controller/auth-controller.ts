import { NextFunction, Request, Response } from "express";

export default class AuthController {
  public static Register(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({ message: "success" });
    } catch (error) {
      next(error);
    }
  }
}
