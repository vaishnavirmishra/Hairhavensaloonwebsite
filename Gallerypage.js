import React from "react";

const Gallerypage = () => {
  return (
    <div className="bg-[#111010]">
      {" "}
      <div className="">
        <div className=" mx-6 ">
          <p className="lg:mx-36 p-6  lg:text-xl text-2xl font-bold  mx-14 text-[#48b5aa]">
            Gallery
          </p>
          <p className="lg:text-2xl hidden lg:block font-bold mx-20  text-white lg:mx-40">
            Elegance in
            <br /> Every Strand
          </p>
          <p className="lg:text-2xl block lg:hidden font-bold mx-8  text-white lg:mx-40">
            Elegance in Every Strand
          </p>
        </div>
        <div className="lg:flex lg:mt-10 mt-0 gap-14 lg:mx-36 lg:p-3 ">
          {" "}
          <div className="">
            <div className="lg:mt-36 mt-2   rounded-full  lg:size-12">
              <img
                src="arrows.png"
                alt=""
                className="text-[#48b5aa] size-9  lg:mx-0 mx-32 "
              />
            </div>
          </div>
          <div>
            <img
              src="gallery1.png"
              alt=""
              className="lg:mt-0 mt-4 lg:h-96 lg:w-80 w-44 lg:mx-0 mx-16"
            />
          </div>
          <div className="lg:mt-6 mt-6">
            <img
              src="gallery3.png"
              alt=""
              className="lg:w-72 w-44 lg:mx-0 mx-16"
            />
            <img
              src="gallery2.png"
              alt=""
              className="lg:mt-4 mt-4 lg:w-72 w-44 lg:mx-0 mx-16"
            />
          </div>
          <div className="lg:mt-0 mt-6">
            <img
              src="gallery4.png"
              alt=""
              className="lg:mt-0 mt-4 lg:w-80 w-44  lg:mx-0 mx-16 lg:h-96"
            />
          </div>
          <div className="">
            {" "}
            <div className="lg:mt-36 mt-2   lg:mx-0 mx-32 rounded-full size-12">
              <img
                src="https://cdn.icon-icons.com/icons2/1919/PNG/512/rightarrowinsideacircle_122006.png"
                alt=""
                className="size-9 "
              />{" "}
            </div>
          </div>
        </div>
        <div className="text-white font-bold lg:mx-[40%]  mx-6 lg:p-6 ">
          Bringing Your Hair Dreams to Life
        </div>
      </div>
    </div>
  );
};

export default Gallerypage;
