import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
   <section className="bg-[#D6A99D]  ">
        <div className="container mx-auto  flex flex-col-reverse px-2 lg:flex-row items-center justify-between">
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
              
              <button className=" bg-[#FBF3D5] text-black px-6  ">
                Shop Now
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
            <Image src={"https://i.postimg.cc/MTNCL2FX/1afb59e00ce809f5c6de21a2467284b7e68a3a7d.jpg"} alt="File" width={1000} height={840} />
          </div>
        </div>
      </section>
  );
};

export default Hero;
