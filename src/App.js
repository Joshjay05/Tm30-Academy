// import "./App.css";
// import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./Components/Footer/Footer";
// import Address from "./Components/Address/Address";
// import About from "./Components/About/About";
// import Pricing from "./Components/Pricing/Pricing";
// import Image from "./Components/Image/Image";
// import Register from "./Components/Register/Register";
// import Card from "./Components/Card/Card";
// import Faq from "./Components/Faq";

import { Course } from "./Components/Courses/Course";
import { Backend } from "./Components/Courses/Backend";
import { Frontend } from "./Components/Courses/Frontend";
import { AboutUs } from "./Components/About/AboutUs";
import Homepage from "./Components/Homepage/Homepage";
import NotFound from "./Components/PageNotFound/NotFound";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/frontend" element={<Frontend />} />
          <Route exact path="/backend" element={<Backend />} />
          <Route exact path="/course" element={<Course />} />
      <Route exact path ='/button' element={<Homepage />}/>

          < Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
