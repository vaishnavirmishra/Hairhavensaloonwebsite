import React from "react";
import Ourpartners from "./Ourpartners";
import Ourpartners1 from "./Ourpartners";

const Choice = () => {
  return (
    <div className="">
      <div className="lg:grid grid-cols-2 ">
        <div className="mt-4">
          <img
            src="/Untitled_design_doubble.png"
            alt=""
            className="h-[100%] w-[100%] "
          />
        </div>

        <div className="">
          <div className="lg:mt-44 lg:mx-14  mt-0">
            <h1 className=" font-bold lg:text-xl text-xl   lg:mx-0 mx-9  text-[#005E54]">
              Why Choose HairHaven?
            </h1>
            <p className="lg:font-bold block lg:hidden lg:text-4xl  text-sm lg:mx-0 mx-[5.5%] lg:mt-5 mt-2">
              {" "}
              Find and book an appointment effortlessly?
            </p>
            <p className="lg:font-bold hidden lg:block lg:text-3xl  text-sm lg:mx-0  lg:mt-5 mt-2">
              {" "}
              Find and book an appointment <br />
              effortlessly?
            </p>
            <p className="lg:text-xl hidden lg:block  text-sm lg:mt-9 mt-3 lg:mx-0 mx-16">
              Find your next appointment and book instantly <br /> anytime,
              anywhere.
            </p>
          </div>
          <div className=" lg:mt-10 lg:mx-9 mt-3">
            <div className="lg:flex gap-24 lg:mx-6 mx-7  ">
              {" "}
              <div className="">
                {" "}
                <img
                  src="security 1.png"
                  alt=""
                  className="lg:size-12  size-8 lg:mx-16 mx-24"
                />
                <p className="lg:mt-6 mt-2 text-lg font-bold lg:mx-2  mx-7">
                  Trusted by Top Salons
                </p>
              </div>
              <div className="lg:mt-0 mt-4 lg:mx-0 mx-6 ">
                {" "}
                <img
                  src="love (2).png"
                  alt=""
                  className="lg:size-12 lg:mt-0  size-8 lg:mx-16 mx-16"
                />
                <p className="lg:mt-6  mt-3 text-lg font-bold  lg:mx-3 mx-2">
                  {" "}
                  Personalized for You
                </p>
              </div>
            </div>
            <div className="lg:flex gap-20 lg:mx-4 ">
              {" "}
              <div className="lg:mt-6 lg:mx-0 mx-4">
                {" "}
                <img
                  src="stopwatch (1) (2).png"
                  alt=""
                  className="lg:size-12  size-8 lg:mt-0 mt-3 lg:mx-20 mx-24"
                />
                <p className="lg:mt-6  mt-3 text-lg  lg:mx-0 mx-5 font-bold ">
                  {" "}
                  Convenient & Time-Saving
                </p>
              </div>
              <div className="lg:mt-11 lg:mx-0 mx-7">
                {" "}
                <img
                  src="/Icon.png"
                  alt=""
                  className="lg:mx-20 mx-24 lg:size-12 lg:mt-0 mt-2   size-8 "
                />
                <p className="text-lg font-bold mt-2 lg:mx-0  mx-4">
                  20k+ Professional stylists
                </p>
              </div>
            </div>
          </div>
          <img
            src="Why Us_ (1).png"
            alt=""
            className="lg:h-12 h-9  w-52 mr-96 mt-6 lg:mx-0 mx-12 "
          />
        </div>
      </div>
      <div>
        {" "}
        <Ourpartners1 />
      </div>{" "}
    </div>
  );
};

export default Choice;
