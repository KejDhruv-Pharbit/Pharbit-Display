import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import Authentication from "./Routes/User/Auth.js"
import UserAction from "./Routes/User/Action.js"
import CreateBlog from "./Routes/Blogs/CreateBlog.js"
import ViewBlog from "./Routes/Blogs/GetBlogs.js"


const app = express();
const PORT = 8990;

app.use(cookieParser());
app.use(express.json());

app.use(cors({
  origin: "*",
  credentials: true
}));

app.use("/", Authentication);
app.use("/", UserAction);
app.use("/", CreateBlog);
app.use("/", ViewBlog);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 

