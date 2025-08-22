"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products from API");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-green-600 font-bold mb-2">
                ${product.price}
              </p>
            </div>
            <div className="mt-auto">
              <Link href={`/products/${product._id}`}>
                <button className="w-full bg-[#D6A99D] text-black font-medium px-4 py-2 rounded-lg hover:bg-[#c48e7f] transition">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
