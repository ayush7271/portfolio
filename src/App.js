import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import { Techstack } from "./components/Techstack/Techstack";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
// import { About } from "./components/About/About";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Routes>
      <Route path="" element={<Intro/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/experience" element={<Works/>} />
      <Route path="/Portfolio" element={<Portfolio/>} />
      <Route path="/home" element={<Intro/>} />
      <Route path="/techStack" element={<Techstack/>} />
      <Route path="/about" element={<Testimonial/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
      {/* <Intro />
      <Services />
      {/* <Experience /> */}
      {/* <Works />
      <Portfolio />
      <Techstack/> */}
      {/* <About/> */}
      {/* <Testimonial />
      <Contact />
      <Footer /> */} 
    </div>
  );
}

export default App;
