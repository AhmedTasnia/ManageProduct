"use client";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
    
      <div className="flex-1 bg-gray-50 py-16 px-8 md:px-20">
        <div className="max-w-4xl mx-auto space-y-10">
          <section className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700">
              We started this shop with a vision to make high-quality products easily accessible to everyone. Our team carefully selects each product, ensuring quality, affordability, and reliability.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to build trust with our customers by providing excellent products and service. We aim to be a store where everyone can find something they love.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Quality products at reasonable prices</li>
              <li>Customer-first approach</li>
              <li>Transparency and trust</li>
              <li>Continuous improvement and innovation</li>
            </ul>
          </section>

          <section className="text-center">
            <Link href="/products">
              <button className="mt-4 px-6 py-3 bg-[#D6A99D] text-black font-medium rounded-lg hover:bg-[#c48e7f] transition">
                Explore Our Products
              </button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
