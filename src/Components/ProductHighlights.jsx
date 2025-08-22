import Link from "next/link";

export default function ProductHighlights() {
  const products = [
    {
      id: 1,
      name: "Premium Notebooks",
      description: "High-quality notebooks perfect for school, office, and personal use.",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Colorful Pens",
      description: "Smooth writing pens available in multiple vibrant colors.",
      image: "https://i.postimg.cc/9fHMLHYf/OOLY-Bright-Writers-Colored-Ink-Retractable-Ballpoint-Pens-Row.webp",
    },
    {
      id: 3,
      name: "Desk Organizers",
      description: "Keep your desk neat with our stylish and durable organizers.",
      image: "https://i.postimg.cc/sD1vXc23/bc3f233b4b796fff74218b139ac76228-jpg-720x720q80.jpg",
    },
    {
      id: 4,
      name: "Art Supplies",
      description: "Sketchbooks, brushes, and paints for unleashing your creativity.",
      image: "https://i.postimg.cc/g0y05tgH/Melissa-Lakey-Artist-Tucson-Shoot-84.webp",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Product Highlights</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <Link
                  href="/products"
                  className="bg-[#FBF3D5] text-black px-4 py-2 rounded-lg hover:bg-emerald-700 transition inline-block"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
