import React from "react";
import Header from "../Navbar/Header";
import Header2 from "../Navbar/Header2";
import GradeIcon from "@mui/icons-material/Grade";
import Footer from "../Landingpagecomponents/Footer";

const Aboutpage = () => {
  return (
    <div>
      <div className="">
        {" "}
        <Header2 />
      </div>{" "}
      <div className="lg:flex mx-6 lg:p-11 p-3 lg:mt-14 gap-5">
        <div className="">
          <h1 className="lg:mx-16 mx-14 block lg:hidden text-sm font-bold text-[#005E54]">
            About HairHaven
          </h1>
          <img
            src="Untitled_design_5[1].png"
            alt=""
            className="lg:w-[80vh] lg:mt-0  mt-6 w-[80vh] lg:p-0  lg:mx-20 mx-1 "
          />
        </div>
        <p className="lg:mt-8   block  mx-3  lg:hidden mt-2 lg:text-lg text-sm">
          At <span>HairHaven</span>, we make finding and booking your next salon
          appointment effortless. Whether you need a quick trim, a bold new
          look, or a relaxing grooming session, our platform connects you with
          top-rated salons and barbers in your area.{" "}
        </p>
        <div className="lg:mt-10 lg:mx-6 ">
          <h1 className="lg:mx-36 mt-5 text-xl hidden lg:block  font-semibold text-[#005E54]">
            About HairHaven
          </h1>
          <p className=" p-6 hidden  lg:block lg:mt-8 mt-6 lg:text-lg text-sm">
            At <span>HairHaven</span>, we make finding and booking your next
            salon
            <br />
            appointment effortless. Whether you need a quick trim, a<br /> bold{" "}
            new look, or a relaxing grooming session, our platform <br />{" "}
            connects you with top-rated salons and barbers in your area.{" "}
          </p>
        </div>
      </div>
      <div className="lg:flex  lg:p-8 p-6  justify-around lg:gap-12 gap-0">
        {" "}
        <div className=" lg:mx-12 lg:mt-8 ">
          <h1 className="lg:mx-36 mx-20 lg:text-xl text-sm font-bold text-[#005E54]">
            Our Mission
          </h1>
          <img
            src="Group 1000000902.png"
            alt=""
            className="w-[70vh] lg:p-0 p-1 lg:mx-0  block lg:hidden mt-6 "
          />
          <p className="mt-3  mx-1 p-1 lg:hidden lg:text-xl text-sm">
            Our mission is to make salon booking effortless. We believe everyone
            deserves a stress-free way to find top- rated salons, explore
            services, and schedule appointments with ease. By partnering with
            quality salons and offering a user-friendly platform, HairHaven
            empowers you to manage your beauty and grooming routine confidently
            and conveniently.
          </p>
          <p className="mt-8 mx-8 hidden lg:block lg:mt-12 lg:text-xl text-sm">
            Our mission is to make salon booking effortless. We <br />
            believe everyone deserves a stress-free way to find top-
            <br />
            rated salons, explore services, and schedule appointments <br />{" "}
            with ease. By partnering with quality salons and offering
            <br /> a user-friendly platform, HairHaven empowers you to
            <br />
            manage your beauty and grooming routine confidently <br /> and
            conveniently.
          </p>
        </div>
        <div className="hidden lg:block">
          <img
            src="Group 1000000902.png"
            alt=""
            className="w-[70vh] lg:mx-24 mt-10"
          />
        </div>
      </div>
      <div className="lg:flex lg:p-16 p-6 lg:gap-12">
        <div className="">
          <h1 className="lg:mx-32 mx-1 block lg:hidden text-sm font-bold text-[#005E54]">
            Your Favorite salon at your fingertips
          </h1>
          <img
            src="image 7.png"
            alt=""
            className="lg:w-[60vh] w-[55vh] lg:mx-24 mt-10"
          />
        </div>
        <div className="mt-6 lg:mx-10 ">
          <h1 className="lg:mx-32 lg:text-xl text-sm hidden lg:block font-semibold text-[#005E54]">
            Your Favorite salon at your fingertips
          </h1>
          <p className="mt-8 mx-4  lg:hidden lg:mx-24 lg:text-lg text-sm">
            At HairHaven, we make finding and booking your next salon
            appointment effortless. Whether you need a quick trim, a bold new
            look, or a relaxing grooming session, our platform connects you with
            top-rated salons and barbers in your area.
          </p>
          <p className="mt-8 hidden lg:block lg:mx-24 lg:text-lg text-sm">
            At HairHaven, we make finding and booking your next <br /> salon
            appointment effortless. Whether you need a <br />
            quick trim, a bold new look, or a relaxing grooming <br />
            session, our platform connects you with top-rated <br />
            salons and barbers in your area.
          </p>
        </div>
      </div>
      <div className="lg:flex p-8 justify-evenly  lg:gap-40 gap-5 bg-[#0EBDAA]">
        <div className="">
          <p className="text-black lg:mx-0 mx-12 font-bold">Trusted by over </p>
          <p className="text-white lg:mx-0 mx-6 font-bold">
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
      <div className=" bg-[#090909] lg:flex  ">
        <div className="lg:mx-36  lg:mt-16">
          <h1 className="font-bold hidden lg:block lg:text-3xl lg:mx-0 mx-16  text-xl lg:mt-16  text-white">
            Scan & Download
            <br />
            <span className="text-[#0EBDAA]">HairHaven</span> App
          </h1>
          <div className="w-72  mr-96 block lg:hidden">
            {" "}
            <img
              src="mobileblack1.jpg"
              alt=""
              className=" bg-black bloock lg:hidden"
            />
          </div>
          <h1 className="font-bold  block lg:hidden lg:text-3xl lg:mx-0 mx-16  text-xl lg:mt-16  text-white">
            Scan & Download
            <br />
            <span className="text-[#0EBDAA]">HairHaven</span> App
          </h1>

          <h1 className="hidden lg:block">Scan & Download HairHaven App</h1>
          <p className="hidden lg:block text-[#0EBDAA] font-sansbold lg:text-xl text-sm ">
            Find your next appointment and book <br />
            instantly anytime, anywhere.
          </p>
          <div className="flex lg:gap-20 lg:mx-0 lg:mt-0 mt-6 ">
            <div className="lg:mt-11">
              <p className="text-white text-sm font-bold lg:mx-3 mx-3">
                Scan for Android App
              </p>
              <img
                src="Vector (8).png"
                alt=""
                className="text-white bg-white lg:mt-5 mt-4 lg:mx-5 mx-8 lg:w-32 w-16"
              />
              <img
                src="PlayStore.png"
                alt=""
                className="lg:w-44 w-20 mt-4 lg:mx-0 mx-6"
              />
            </div>
            <div className="lg:mt-11">
              <p className="text-white text-sm font-bold lg:mx-7 mx-3">
                Scan for iOS App
              </p>
              <img
                src="Vector (11).png"
                alt=""
                className="bg-white text-white mt-5 lg:mx-5 mx-8 lg:w-32 w-16"
              />
              <img
                src="AppStore.png"
                alt=""
                className="lg:w-40 w-16 lg:mb-0 mb-2 lg:h-12 lg:mt-6 mt-4 lg:mx-1  mx-8"
              />
            </div>
          </div>
        </div>
        <div className="">
          {" "}
          <img
            src="mobileblack1.jpg"
            alt=""
            className="w-[100vh] bg-black mx-6 hidden lg:block"
          />
        </div>
      </div>
      <div className="mx-3">
        {" "}
        <Footer />
      </div>{" "}
    </div>
  );
};

export default Aboutpage;
