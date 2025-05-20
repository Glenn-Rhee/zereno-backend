import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRoutes } from "../router/auth-routes";
import { errorMiddleware, notFound } from "../middleware/error-middleware";
export const app = express();
const PORT = 8001;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(authRoutes);

app.use(notFound)
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
