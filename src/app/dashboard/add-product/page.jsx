"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function AddProductPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",
    advantage: "",
    imagelink: "",
  });

  // Check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login"); // redirect if not logged in
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Product Added!",
          text: "✅ Product added successfully!",
          confirmButtonColor: "#A4907C"
        }).then(() => {
          router.push("/products");
        });
      } else {
        const data = await res.json();
        alert("❌ Failed: " + data.error);
      }
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 mb-6 shadow-lg border rounded">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="imagelink" placeholder="Image Link" value={form.imagelink} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="number" name="rating" placeholder="Rating" value={form.rating} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="advantage" placeholder="Advantage" value={form.advantage} onChange={handleChange} required className="w-full p-2 border rounded" />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-[#D6A99D] text-white p-2 rounded hover:bg-[#c48e7f]">Add Product</button>
      </form>
    </div>
  );
}
