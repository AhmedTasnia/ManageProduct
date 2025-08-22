// import clientPromise from "@/app/lib/mongodb";
import clientPromise from "@/app/lib/mongodb";
import { compare } from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Missing email or password" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("next-auth"); // your DB
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    const isValid = await compare(password, user.password);
    if (!isValid) {
      return new Response(JSON.stringify({ error: "Incorrect password" }), { status: 401 });
    }

    // Return user info (do NOT return password)
    return new Response(JSON.stringify({ name: user.name, email: user.email }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
