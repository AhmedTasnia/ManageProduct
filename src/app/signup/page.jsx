"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function SignUpCard() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 1️⃣ Register user
      const registerRes = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const registerData = await registerRes.json();

      if (!registerRes.ok) {
        setError(registerData.error || "Registration failed");
        setLoading(false);
        return;
      }

      // 2️⃣ Sign in after successful registration
      const signInRes = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (signInRes.error) {
        setError(signInRes.error);
      } else {
        // Successful login
        window.location.href = "/products";
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex w-full max-w-4xl h-[650px]">
        <div className="hidden md:block w-1/2">
          <img
            src="https://i.postimg.cc/nzBzDvSM/online-registration-illustration-svg-png-download-3723270.webp"
            alt="Sign Up Illustration"
            className="mt-40"
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
            {error && (
              <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6A99D]"
                />
              </div>

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
                className={`w-full py-2 bg-[#D6A99D] text-black font-medium rounded-lg hover:bg-[#c48e7f] transition ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Processing..." : "Sign Up"}
              </button>
            </form>

            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <Link href="/login" className="text-[#D6A99D] font-medium hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
