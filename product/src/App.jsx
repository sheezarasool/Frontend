import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RoleSelection from "./pages/RoleSelection";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/role" element={<RoleSelection />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login/>} />

    </Routes>
  );
}

export default App;
