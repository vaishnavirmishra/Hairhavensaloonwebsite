import React from "react";

const Howitworks = () => {
  return (
    <div className="lg:mt-32">
      <div className="absolute">
        <img
          src="backgroundpic.png"
          alt=""
          className="backdrop-blur-xl h-96 !w-[1800px]  "
        />
      </div>
      <div className="relative  text-white lg:p-0  p-6 lg:py-10 lg:px-4 ">
        <h2 className="text-center font-bold lg:mt-4  text-[#0EBDAA]  text-xl lg:text-2xl">
          How it Works?
        </h2>
        <div className="flex flex-col md:flex-row  lg:mx-[13%] mt-4 lg:gap-16 lg:mt-12 space-y-6 md:space-y-0 md:space-x-20">
          {/* Discover Salons */}
          <div className="flex flex-col items-center lg:mx-12 text-center">
            <img src="search (2).png" alt="" className="lg:size-28 size-8" />
            <p className="lg:mt-4 text-[#0EBDAA]">
              Discover salons near you <br />
              based on your location.
            </p>
          </div>

          {/* Browse Services */}
          <div className="flex flex-col items-center text-center">
            <img src="/find (1) (1).png" alt="" className="lg:size-24 size-8" />

            <p className="lg:mt-10 hidden lg:block text-[#0EBDAA]">
              Browse through a wide range of <br /> services.
            </p>
            <p className="lg:mt-10 lg:hidden text-[#0EBDAA]">
              Browse through a wide
              <br /> range of services.
            </p>
          </div>

          {/* Pick Date and Time */}
          <div className="flex flex-col items-center  mt-2 text-center">
            <img
              src="/calendar-with-check-mark (1).png"
              alt=""
              className="lg:mt-0 mt-1 lg:size-24 size-8"
            />

            <p className="lg:mt-10 lg:hidden text-[#0EBDAA]">
              Pick the best time and date for <br /> you, and confirm instantly.
            </p>
            <p className="lg:mt-10 hidden lg:block text-[#0EBDAA]">
              Pick the best time and date for you, <br /> and confirm instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
