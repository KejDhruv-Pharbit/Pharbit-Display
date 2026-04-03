import express from "express";
import { createBlog } from "../../Database/Blogs/Post/CreateBlogs.js";
import { getAuthUser } from "../../Middleware/AuthUser.js";
import { adminOnly } from "../../Middleware/Admin.js";

const router = express.Router();

router.post("/createBlog", adminOnly ,  async (req, res) => {
  try {
    // 🔹 Get logged-in user
    const user = await getAuthUser(req);

    // 🔹 Blog data from frontend
    const data = req.body;

    // 🔹 Create blog
    const blog = await createBlog(data, user.id);

    return res.status(201).json({
      message: "Blog created successfully",
      blog,
    });

  } catch (err) {
    console.error("Create blog error:", err);

    return res.status(500).json({
      error: err.message || "Blog creation failed",
    });
  }
});

export default router;
