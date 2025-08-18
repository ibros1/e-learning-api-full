import express, { NextFunction, Request } from "express";
import env from "dotenv";
import userRoute from "./routes/uerRoute";
import courseRoute from "./routes/courseRoute";
import lessonRoute from "./routes/lessonRoute";
import lessonProgress from "./routes/lessonProggress";
import enrollementRoute from "./routes/enrollmentRouter";
import paymentRoute from "./routes/paymentRoute";
import chapterRoute from "./routes/chapterRoute";
import cors from "cors";
import path from "path";
import multer from "multer";

env.config();
const app = express();
// Add this at the top:
import { VercelRequest, VercelResponse } from "@vercel/node";
import { multerErrorHandler } from "./middleware/limit.image.middleWare";
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
// To:
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT;
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://e-learning-client-opal.vercel.app",
    ],
    credentials: true,
  })
);

app.use("/users", userRoute);
app.use("/courses", courseRoute);
app.use("/courses/chapters", chapterRoute);
app.use("/courses/lessons", lessonRoute);
app.use("/enrollement", enrollementRoute);
app.use("/payments", paymentRoute);
app.use("/lessons/progress", lessonProgress);
// **Place multer error handler after all routes**
app.use(multerErrorHandler);
// module.exports = (req: VercelRequest, res: VercelResponse) => {
//   // Handle the request with Express
//   app(req, res);
// };
app.listen(PORT, () => {
  console.log(`your server is running on ${PORT}`);
});
