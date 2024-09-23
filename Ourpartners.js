import React from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
const Ourpartners1 = () => {
  return (
    <div className="mb-8 lg:mt-0 mt-8">
      {" "}
      <div className=" lg:mx-44 mx-20">
        <h1 className="font-bold lg:mx-0 lg:text-lg  mx-2 text-xl ">
          Our Partners
        </h1>
        <p className="lg:text-3xl text-2xl  font-bold lg:mt-0 mt-2">
          Top Saloons
        </p>
        <div className="mx-[]">
          {" "}
          <img
            src="Our Partners.png"
            alt=""
            className=" w-96  hidden lg:block lg:mx-[82%]"
          />
        </div>{" "}
      </div>
      <div className="flex gap-2 lg:gap-20 lg:mx-[17.5%]  mx-10  ">
        <div className="lg:mt-16  mt-4  rounded-full  shadow-2xl size-12">
          <img
            src="https://www.svgrepo.com/show/379782/arrow-circle-left.svg"
            alt=""
            className="lg:mx-2 lg:mt-0 mt-2 "
          />{" "}
        </div>
        <div className="lg:mt-16 lg:mx-0  mt-5">
          <div>
            <img src="Layer_1-2.png" alt="" className="lg:w-44 w-32" />
          </div>
          <div className="flex gap-5 lg:mx-0 mx-3 lg:mt-11 mt-3">
            <img src="instagram 1.png" alt="" className="lg:size-7 size-4 " />
            <img src="facebook 1.png" alt="" className="lg:size-7 size-4" />
            <img src="twitter 1.png" alt="" className="lg:size-7 size-4" />
          </div>
        </div>
        <div className="lg:mt-5  hidden lg:block lg:mx-0 mx-12">
          <div>
            <img src="image 12.png" alt="" className="lg:w-60 w-32" />
          </div>
          <div className="flex gap-5 mb-4 lg:mx-14 mx-3 ">
            <img src="instagram 1.png" alt="" />
            <img src="facebook 1.png" alt="" />
            <img src="twitter 1.png" alt="" />
          </div>{" "}
        </div>
        <div className="lg:mt-9 lg:mx-0 mx-12 hidden lg:block">
          <div>
            <img src="greentrends.png" alt="" className="lg:w-52 w-32" />
          </div>
          <div className="flex gap-5 mt-2 lg:mx-10 mx-1">
            <img src="instagram 1.png" alt="" />
            <img src="facebook 1.png" alt="" />
            <img src="twitter 1.png" alt="" />
          </div>{" "}
        </div>
        <div className="lg:mt-16  rounded-full  lg:mx-0  mt-7  size-12">
          <img
            src="https://cdn.icon-icons.com/icons2/1919/PNG/512/rightarrowinsideacircle_122006.png"
            alt=""
            className="size-9"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Ourpartners1;
