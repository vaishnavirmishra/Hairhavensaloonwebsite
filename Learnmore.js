import React from "react";

const Learnmore = () => {
  return (
    <div className="flex flex-col md:flex-row p-2  gap-52 lg:mt-7 lg:mx-8">
      <div className="mr-10 ">
        <img
          src="2.png"
          alt=""
          className="absolute lg:w-[70vh] z-10 w-60 lg:mt-16  mt-16 lg:mx-32 mx-6"
        />
        <img
          src="/About Us.png"
          alt=""
          className=" lg:w-80  w-36 lg:h-24 lg:mx-24  mx-16 lg:mt-80 relative  lg:top-14"
        />
      </div>

      <div className="lg:mt-20  mx-4">
        <h1 className="text-emerald-900 text-3xl text-center font-semibold md:text-left">
          About HairHaven
        </h1>
        <h1 className="text-xl lg:text-3xl text-black font-bold text-center md:text-left mt-4  md:mt-4">
          Find The Best Haircut Salon <br />
          For Men
        </h1>
        <p className="text-center hidden lg:block text-xl md:text-left mt-6">
          HairHaven was created to connect people with the best local <br />
          salons and barbers, providing an easy and secure platform <br />
          for booking appointments.
        </p>
        <p className="text-center lg:hidden md:text-left mt-2">
          HairHaven was created to connect people with the best local salons and
          barbers, providing an easy and secure platform for booking
          appointments.
        </p>
        <div className="flex justify-center md:justify-start ">
          <button className="mt-7 bg-emerald-900 w-28 h-10 rounded-xl text-white">
            Learn More{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learnmore;
