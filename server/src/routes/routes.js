import express from "express";
import {
  createBlog,
  deleteBlog,
  deleteBlog1,
  getAllBlogs,
  getBlog,
  updateBlog,
} from "../controller/BlogController.js";
const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog1);

// router.delete("/:id", deleteBlog);
export default router 