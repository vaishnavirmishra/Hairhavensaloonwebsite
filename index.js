import React from "react";
import Header from "../Navbar/Header";
import Welcome from "../Landingpagecomponents/Welcome";
import Learnmore from "../Landingpagecomponents/Learnmore";
import Choose from "../Landingpagecomponents/Choose";
import Choice from "../Landingpagecomponents/Choose";
import Howitworks from "../Landingpagecomponents/Howitworks";
import Ourpartners from "../Landingpagecomponents/Ourpartners";
import Ourpartners1 from "../Landingpagecomponents/Ourpartners";
import Cardsection from "../Landingpagecomponents/Cardsection";
import Contactpage from "../Landingpagecomponents/Contactpage";
import Footer from "../Landingpagecomponents/Footer";

const Main = () => {
  return (
    <div className="">
      <div className="">
        <Header />
        <div className="">
          {" "}
          <Welcome />
        </div>
        <div>
          <Learnmore />
        </div>
        <div className="w-full">
          <Howitworks />
          <div className="">
            <Choice />
          </div>
        </div>
        <div>
          <Cardsection />
        </div>
        <div className="hidden lg:block">
          {" "}
          <Contactpage />
        </div>{" "}
      </div>
      <div className="mx-4">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
