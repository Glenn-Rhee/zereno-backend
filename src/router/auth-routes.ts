import express from "express"
import AuthController from "../controller/auth-controller"

export const authRoutes = express.Router()

authRoutes.get("/user", AuthController.Register)