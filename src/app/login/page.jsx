"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginCard() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // store user info in localStorage
  localStorage.setItem("user", JSON.stringify(data));
  // Dispatch custom event so NavBar updates immediately
  window.dispatchEvent(new Event("user-changed"));
  router.push("/products"); // redirect after login
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex w-full max-w-4xl h-[600px]">
        <div className="hidden md:block w-1/2">
          <img
            src="https://i.postimg.cc/V68S4GCX/Illustration-of-Woman-Understanding-Key-Data-Protection-and-Security-Steps-HD.webp"
            alt="Login"
            className="mt-40"
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6A99D]"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6A99D]"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-[#D6A99D] text-black font-medium rounded-lg hover:bg-[#c48e7f] transition disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link href="/signup" className="text-[#D6A99D] font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
