import React from "react";
const Contactpage = () => {
  return (
    <div className="lg:flex   lg:gap-12 bg-[#090909]">
      <div className="lg:mx-48 mx-16">
        <h1 className="lg:mt-20 lg:text-xl font-bold lg:mx-0 mx-5 text-2xl text-[#0EBDAA]">
          Contact Us
        </h1>
        <p className="lg:text-3xl hidden lg:block llg:mt-0 mt-3text-sm lg:mx-0 mx-7 lg:font-bold text-white ">
          Get in touch <br />
          with HairHaven
        </p>
        <p className="lg:text-3xl lg:hidden lg:mt-0 mt-3 text-sm lg:mx-0  lg:font-bold text-white ">
          Get in touch with HairHaven
        </p>

        <p className="text-white lg:mt-10  mt-3 lg:mx-0 mx-14">Name</p>
        <input
          type="text"
          placeholder="John Doe"
          className="border-[#0EBDAA]  border bg-black lg:w-80 w-44 mt-3  lg:mx-0 "
        />
        <p className="text-white mt-4 lg:mx-0 mx-14">Email</p>
        <input
          type="text"
          placeholder="johndoe@gmail.com"
          className="border-[#0EBDAA] border  lg:mx-0  bg-black lg:w-80   w-44  mt-3"
        />
        <p className="text-white lg:mx-0 mx-12 mt-4">Message</p>
        <input
          type="text"
          placeholder="Your Message"
          className="border-[#0EBDAA] border  bg-black lg:w-80  w-44   lg:mx-0  lg:h-16 mt-4"
        />
        <div className="mt-3">
          {" "}
          <button className="text-white bg-[#005E54] lg:w-20 lg:h-9  w-24 lg:mx-0 mx-9 rounded-md">
            Send
          </button>
        </div>
      </div>
      <div className="lg:mt-14 mt-2 lg:mx-0 mx-3 mb-10">
        <img
          src="Rectangle 14.png"
          alt=""
          className="w-[50%] lg:mx-44 mx-16 lg:mt-4 "
        />
      </div>
    </div>
  );
};

export default Contactpage;
