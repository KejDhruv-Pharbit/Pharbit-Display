import supabase from "../../../Middleware/supabase.js";

export async function createBlog(data, author_id) {
  const {
    title,
    content,
    category,
    tags = [],
    summary = null,
    cover_image = null,
    link = null,
    status = "draft",
    is_featured = false,
    meta_title = null,
    meta_description = null,
  } = data;

  // 🔹 Step 1: Validate
  if (!title || !content || !category || !author_id) {
    throw new Error("Missing required fields");
  }

  // 🔹 Step 2: Generate slug
  const baseSlug = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  const uniqueSlug = `${baseSlug}-${Date.now()}`;

  // 🔹 Step 3: Insert blog (no need to check author manually if FK exists)
  const { data: blog, error } = await supabase
    .from("blogs")
    .insert([
      {
        title,
        slug: uniqueSlug,
        summary,
        content,
        cover_image,
        category,
        tags,
        author_id,
        link,
        status,
        is_featured,
        meta_title: meta_title ?? title,
        meta_description: meta_description ?? summary,
        view_count: 0,
        like_count: 0,
        published_at:
          status === "published" ? new Date().toISOString() : null,
        created_at: new Date().toISOString(),
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("BLOG INSERT ERROR:", error);
    throw error;
  }

  return blog;
}