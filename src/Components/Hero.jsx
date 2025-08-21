import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <section className="bg-[#D6A99D] py-16">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Welcome to Pen & Paper
            </h1>
            <p className="text-gray-700 text-lg md:text-xl">
              Discover high-quality stationery products to make your work and
              creativity shine. Pens, notebooks, organizers, and more – all in
              one place!
            </p>
            <div>
              <a
                href="#products"
                className="inline-block bg-[#FBF3D5] text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#c98e82] transition"
              >
                Shop Now
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
            <Image src={"/assets/file.svg"} alt="File" width={1000} height={840} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
