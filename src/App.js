import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import NHSNavbar from "./components/NHSNavbar";
import Notice from "./components/Notice";
import Services from "./components/Services";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <header>
          <NHSNavbar/>
          <Hero/>
        </header>
        <main>
          <Notice/>
          <Services/>
          <AboutUs/>
        </main>
    </Router>
    </>
   
  );
}

export default App;
