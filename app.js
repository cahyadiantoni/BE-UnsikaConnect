import express from "express";
import mongoose from "mongoose";
import postRouter from "./routes/post-routes";
import router from "./routes/user-routes";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/user", router);
app.use("/api/post", postRouter);
const user = process.env.USER;
const password = process.env.PASSWORD;
mongoose
  .connect(
    "mongodb+srv://"+user+":"+password+"@cluster0.ilsxxxz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected to Database and Listening to Localhost 5000")
  )
  .catch((err) => console.log(err));
