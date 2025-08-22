"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductDetails() {
  // useParams returns id as string, but on first render it may be undefined
  const params = useParams();
  const id = params?.id;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;
    let ignore = false;
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        if (!ignore) {
          if (data.error) {
            setProduct(null);
          } else {
            setProduct(data);
          }
        }
      } catch (err) {
        if (!ignore) {
          console.error(err);
          setProduct(null);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    };
    fetchProduct();
    return () => { ignore = true; };
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
      {product.imagelink && (
        <img
          src={product.imagelink}
          alt={product.name}
          className="w-full h-auto mb-6 rounded"
        />
      )}
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-green-600 font-bold text-xl mb-2">${product.price}</p>
      {product.rating && <p className="text-yellow-500 mb-2">⭐ {product.rating}</p>}
      {product.advantage && <p className="text-gray-500 mb-4">{product.advantage}</p>}

      <Link href="/products">
        <button className="px-4 py-2 bg-[#D6A99D] rounded hover:bg-[#c48e7f]">
          Back to Products
        </button>
      </Link>
    </div>
  );
}
