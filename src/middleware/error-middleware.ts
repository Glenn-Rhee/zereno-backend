import { NextFunction, Request, Response } from "express";
import { ResponseUser } from "../types/main";
import { ResponseError } from "../error/response-error";

export const notFound = (_r: Request, res: Response, _next: NextFunction) => {
  const response: ResponseUser = {
    message: "Routes not found!",
    status: "failed",
    statusCode: 404,
  };

  res.status(response.statusCode).json(response);
};

export const errorMiddleware = (
  error: Error,
  _r: Request,
  res: Response,
  _next: NextFunction
) => {
  let response: ResponseUser;
  if (error instanceof ResponseError) {
    response = {
      status: "failed",
      message: error.message,
      statusCode: error.status,
    };
  } else {
    console.log(error);
    response = {
      status: "failed",
      message: "Internal Server error!",
      statusCode: 500,
    };
  }

  res.status(response.statusCode).json(response);
};
