import { Router } from "express";
import PostController from "./post/PostController.js";

const router = new Router();

router.post("/posts", PostController.createPost);
router.get("/posts", PostController.getPosts);
router.get("/posts/:id", PostController.getPost);
router.put("/posts/:id", PostController.updatePost);
router.delete("/posts/:id", PostController.deletePost);
router.get("/posts-json", PostController.getPostsJSON);

export default router;
