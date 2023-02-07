import express from "express";
import {
  getAllPosts,
  addPost,
  updatePost,
  getById,
  deletePost,
  getByUserId,
} from "../controllers/post-controller";

const postRouter = express.Router();

postRouter.get("/", getAllPosts);
postRouter.post("/add", addPost);
postRouter.post("/update/:id", updatePost);
postRouter.get("/:id", getById);
postRouter.delete("/:id", deletePost);
postRouter.get("/user/:id", getByUserId);

export default postRouter;