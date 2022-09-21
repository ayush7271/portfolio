import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";

import About from "./components/Testimonials/About";
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
    <Intro/>
    {/* <Services/> */}

    <Works/>
    <Portfolio/>

    <About/>
    <Contact/>
    
    
      <Footer/>
      
    </div>
  );
}

export default App;
