import express from "express";
import { getAllBlogs } from "../../Database/Blogs/Get/GetBlog.js";
import { getSingleBlog } from "../../Database/Blogs/Get/GetBlog.js";
const router = express.Router();

router.get("/blogs", async (req, res) => {
  try {
    const result = await getAllBlogs();

    return res.status(200).json({
      message: "Blogs fetched successfully",
      ...result,
    });

  } catch (err) {
    console.error("Get blogs error:", err);

    return res.status(500).json({
      error: err.message || "Failed to fetch blogs",
    });
  }
});

router.get("/blog", async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        error: "Blog id is required",
      });
    }

    const blog = await getSingleBlog(id);

    return res.status(200).json({
      message: "Blog fetched successfully",
      blog,
    });

  } catch (err) {
    console.error("Get single blog error:", err);

    return res.status(500).json({
      error: err.message || "Failed to fetch blog",
    });
  }
});

export default router;