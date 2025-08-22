import clientPromise from "@/app/lib/mongodb";
import { hash } from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("next-auth");

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
    }

    const hashedPassword = await hash(password, 10);

    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
    });

    return new Response(
      JSON.stringify({ message: "User registered", userId: result.insertedId }),
      { status: 201 }
    );
  } catch (error) {
    // Always return valid JSON
    return new Response(JSON.stringify({ error: error.message || "Internal server error" }), {
      status: 500,
    });
  }
}
