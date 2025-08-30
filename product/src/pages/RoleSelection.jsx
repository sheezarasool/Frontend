import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const RoleSelection = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!role) {
      alert("Please select a role before continuing.");
      return;
    }
    // redirect based on role
    if (role === "jobseeker") navigate("/login");
    else if (role === "recruiter") navigate("/signup");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center">
       <Logo/>
       </div>

      {/* Title */}
      <h2 className="text-xl font-medium text-gray-700 mb-6">
        Select your Role
      </h2>

      {/* Role Options */}
      <div className="flex gap-6 mb-8">
        <button
          onClick={() => setRole("jobseeker")}
          className={`w-40 h-28 border rounded-xl flex items-center justify-center shadow-sm
            ${role === "jobseeker" ? "bg-gray-200 border-gray-700" : "bg-gray-50 border-gray-300"}`}
        >
          Job Seeker
        </button>

        <button
          onClick={() => setRole("recruiter")}
          className={`w-40 h-28 border rounded-xl flex items-center justify-center shadow-sm
            ${role === "recruiter" ? "bg-gray-200 border-gray-700" : "bg-gray-50 border-gray-300"}`}
        >
          Recruiter
        </button>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="bg-gray-800 text-white px-8 py-3 rounded-lg shadow-md hover:bg-gray-900 transition"
      >
        Continue
      </button>
    </div>
  );
};

export default RoleSelection;
