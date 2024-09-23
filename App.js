import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Aboutpage from "./Aboutpage/About";
import Main from "./Main";
import Contactpage from "./Landingpagecomponents/Contactpage";
import Ourpartners1 from "./Landingpagecomponents/Ourpartners";
import Gallerypage from "./Gallery/Gallerypage";
import Choice from "./Landingpagecomponents/Choose";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/partner" element={<Ourpartners1 />} />
        <Route path="/gallery" element={<Gallerypage />} />
        <Route path="/choice" element={<Choice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
