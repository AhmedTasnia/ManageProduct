import Image from "next/image";
import React from "react";


const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#D6A99D] via-[#FBF3D5] to-[#D6DAC8] py-16 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow-lg leading-tight">
            Welcome to <span className="text-[#A4907C]">Pen & Paper</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-2xl max-w-xl mx-auto lg:mx-0">
            Discover high-quality stationery products to make your work and creativity shine.<br />
            Pens, notebooks, organizers, and more – all in one place!
          </p>
          <div>
            <button className="bg-[#A4907C] hover:bg-[#D6A99D] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center relative">
          <div className="rounded-3xl shadow-2xl overflow-hidden border-4 border-[#FBF3D5] bg-white animate-fade-in">
            <Image
              src="https://i.postimg.cc/MTNCL2FX/1afb59e00ce809f5c6de21a2467284b7e68a3a7d.jpg"
              alt="Hero Stationery"
              width={500}
              height={420}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#A4907C]/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#D6A99D]/20 rounded-full blur-3xl -z-10 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
