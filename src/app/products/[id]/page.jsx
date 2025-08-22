"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductDetails() {
  const { id } = useParams(); // Get the dynamic id from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/product.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        const foundProduct = data.find((item) => item.id.toString() === id);
        setProduct(foundProduct || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-8 text-center">Loading...</p>;
  if (!product)
    return (
      <div className="p-8 text-center">
        <p className="text-red-500">Product not found!</p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-[#D6A99D] rounded hover:bg-[#c48e7f]"
        >
          Go Back
        </button>
      </div>
    );

  return (
    <div className="p-8 max-w-3xl mx-auto">
        {product.image && (
            <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto mb-6 rounded"
            />
        )}
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-green-600 font-bold text-xl mb-2">${product.price}</p>
      {product.rating && (
        <p className="text-yellow-500 mb-2">⭐ {product.rating}</p>
      )}
      {product.advantage && (
        <p className="text-gray-500 mb-4">{product.advantage}</p>
      )}
      <Link href="/products">
        <button className="px-4 py-2 bg-[#D6A99D] rounded hover:bg-[#c48e7f]">
          Back to Products
        </button>
      </Link>
    </div>
  );
}
