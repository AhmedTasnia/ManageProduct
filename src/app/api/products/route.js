import clientPromise from "@/app/lib/mongodb";


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("next-auth"); 
    const products = await db.collection("products").find({}).toArray();

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const product = await req.json();
    const client = await clientPromise;
    const db = client.db("next-auth"); 

    const result = await db.collection("products").insertOne(product);

    return new Response(JSON.stringify({ message: "Product added", id: result.insertedId }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
