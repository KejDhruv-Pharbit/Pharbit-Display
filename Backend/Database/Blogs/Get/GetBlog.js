import supabase from "../../../Middleware/supabase.js";

// 🔹 Get All Blogs
export const getAllBlogs = async () => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Failed to fetch blogs");
  }

  return {
    count: data.length,
    blogs: data,
  };
};

// 🔹 Get Single Blog
export const getSingleBlog = async (id) => {
  if (!id) {
    throw new Error("Provide blog id");
  }

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    throw new Error("Blog not found");
  }

  return data;
};