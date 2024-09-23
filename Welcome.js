import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GradeIcon from "@mui/icons-material/Grade";
import SearchIcon from "@mui/icons-material/Search";

const Welcome = () => {
  return (
    <div className="lg:mt-0 ">
      <div className="lg:flex bg-[#090909]">
        <div className=" lg:top-44 top-9  lg:ml-20">
          <p className="lg:text-3xl font-bold lg:ml-16 mr-2 text-xl lg:mt-32 lg:mx-8 lg:font-bold text-center  md:text-left text-[#0EBDAA]">
            Welcome To HairHaven
          </p>
          <h1 className=" text-sm lg:text-4xl lg:ml-16 mr-3  lg:mt-6 mt-6 text-white font-bold text-center md:text-left">
            Connect with the Best Salons and <br /> Barbers Near You!
          </h1>

          <h1 className="text-[#FFFFFF94]  hidden lg:block lg:mx-16  mx-3 mt-5">
            Discover top-rated salons, browse services, and book your next
            <br /> appointment with ease. HairHaven connects you to
            professionals for <br /> the perfect look!
          </h1>
          <div className="relative ">
            <input
              type="text"
              placeholder="Search salons "
              className="lg:w-[70%]  w-52 rounded-xl pl-4 lg:ml-16 hidden lg:block text-left lg:text-xl  text-sm lg:h-12 border mt-9 lg:mx-9 mx-0 h-8"
            />{" "}
            <SearchIcon className="!absolute right-[25%] top-[30%]" />
          </div>
          <div className="flex  mx-9 gap-3">
            <div className="flex justify-center  mt-7  ml-4 lg:hidden ">
              {" "}
              <button className="   text-white bg-[#005E54]  w-24 md:text-center  h-8 rounded-md ">
                Download
              </button>
              <button className="   ml-3  text-[#0EBDAA] border  border-[#005E54] w-24  h-8 rounded-md ">
                Learn More
              </button>
            </div>{" "}
            <div className=" hidden lg:flex gap-4 ml-9">
              <button className="  mt-9  px-2 text-white bg-[#005E54] lg:w-40 lg:h-14  md:text-center  rounded-md ">
                Download <ArrowDownwardIcon className="" />
              </button>
              <button className="   ml-3 mt-9 text-[#0EBDAA] border  border-[#005E54] lg:w-36 lg:h-14 rounded-md ">
                Learn More
              </button>
              <div className="lg:mx-44 ml-20  size-8 lg:size-20  "></div>{" "}
            </div>
          </div>
          <div className="flex justify-end">
            <img
              src="Frame 7.png"
              alt=""
              className="mb-8 !mr-44  size-8 lg:size-20 hidden lg:block "
            />
          </div>
        </div>
        <div className="  ">
          <img src="/phonewelcome.png" alt="" className="  bg-[#090909]    " />
        </div>
      </div>
      <div className="lg:flex p-8 justify-evenly  lg:gap-40 gap-5 bg-[#0EBDAA]">
        <div className="">
          <p className="text-black lg:mx-0 mx-14 font-bold">Trusted by over </p>
          <p className="text-white lg:mx-0  mx-8 font-bold">
            50K+ Users since 2024
          </p>
        </div>
        <div className="hidden lg:block">
          <p className="text-black font-bold">
            {" "}
            <GradeIcon />
            4.6
          </p>{" "}
          <p className="text-black font-bold">1.14K reviews</p>
        </div>
        <div className="hidden lg:block">
          <p className="text-black  font-bold">3 Lakh+</p>
          <p className="text-black  font-bold">Appointments Booked</p>
        </div>
        <div className="hidden lg:block">
          <p className="text-black  font-bold">22+ states</p>
          <p className="text-black  font-bold">with HairHaven available</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
