import supabase from "../../../Middleware/supabase.js";

export async function createAuthUser(
  email,
  password,
  firstName,
  lastName,
  role
) {
  if (!email || !password || !role) {
    throw new Error("Missing user fields");
  }

  const fullName = `${firstName} ${lastName}`;

  // 🔹 Step 1: Create user in Supabase Auth (with metadata)
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      full_name: fullName,
      first_name: firstName,
      last_name: lastName,
    },
  });

  if (error) {
    console.error("AUTH ERROR:", error);
    throw error;
  }

  const user = data.user;

  // 🔹 Step 2: Insert into users table
  const { error: dbError } = await supabase.from("users").insert([
    {
      id: user.id,
      email: user.email,
      firstName: firstName,
      lastName: lastName,
      role: role,
      status: "inactive",
      created_at: new Date().toISOString(),
    },
  ]);

  if (dbError) {
    console.error("DB ERROR:", dbError);

    // 🔥 Rollback (very important)
    await supabase.auth.admin.deleteUser(user.id);

    throw dbError;
  }

  return user;
}