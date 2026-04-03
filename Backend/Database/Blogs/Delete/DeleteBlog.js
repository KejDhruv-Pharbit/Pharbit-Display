import supabase from "../../../Middleware/supabase.js";

export const deleteSingleBlog = async (id) => {
  if (!id) {
    throw new Error("Provide blog id");
  }

  const { error } = await supabase
    .from("blogs")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error("Failed to delete blog");
  }

  return {
    message: "Blog deleted successfully",
  };
};

