import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StatsSection from "./components/StatsSection";
import EnterpriseFeatures from "./components/EnterpriseFeatures";
import EnterpriseTestimonials from "./components/EnterpriseTestimonials";
import EnterpriseDemo from "./components/EnterpriseDemo";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <StatsSection/>
      <EnterpriseFeatures/>
      <EnterpriseTestimonials/>
      <EnterpriseDemo/>
      <Footer/>
    </div>
  );
}

export default App;
