import { Divider } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="lg:flex lg:p-10 lg:mt-0 mt-3 ">
        <div className="flex lg:mx-28 mx-[32%] ">
          <p className="font-semibold text-black">HairHaven</p>
          <img
            src="entypo_scissors.png"
            alt=""
            className=" rounded-full mx-2 bg-[#005E54] "
          />{" "}
        </div>
        <div className="flex lg:gap-10 lg:mt-0 mt-6 gap-2  lg:mx-52 mx-4 ">
          <p className="font-semibold hidden lg:block text-black">Home</p>
          <p className=" font-semibold  text-black">About</p>
          <p className="font-semibold text-black">Gallery</p>
          <p className="font-semibold text-black">Partners</p>
          <p className="font-semibold block lg:hidden text-black">Contact</p>
          <p className="font-semibold hidden lg:block text-black">Download</p>
        </div>
        <div className="lg:mx-0 mx-24">
          <p className="font-bold text-black hidden lg:block">Contact</p>
        </div>{" "}
      </div>
      <div className="lg:mx-36 lg:w-[1130px]">
        {" "}
        <Divider className="bg-black lg:mt-0 mt-6 text-bold" />
      </div>
      <div className="lg:flex  lg:pt-7 p-2 gap-20">
        <div className="lg:mx-3 ">
          <p className="lg:text-base text-sm lg:mx-28 mx-2">
            © 2024 HairHaven. All rights reserved
          </p>
        </div>
        <div className="flex  lg:mt-0 mt-5 lg:gap-8 lg:mx-0 mx-6 gap-2 lg:ml-[30%] ml-[30%] ">
          <img src="linkedin 1.png" alt="" className="lg:size-8 size-5" />

          <img src="instagram 1.png" alt="" className="lg:size-8 size-5" />

          <img src="facebook 1.png" alt="" className="lg:size-8 size-5" />

          <img src="twitter 1.png" alt="" className="lg:size-8 size-5" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
