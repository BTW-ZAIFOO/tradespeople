import React, { useState } from "react";
import Header from "../components/Header"; // adjust path if needed
import Footer from "../components/Footer"; // adjust path if needed
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");   // Navigate to Dashboard
    toast.success("Login successful");
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Login Section */}
      <div className="flex justify-center items-center min-h-screen bg-[#f6f9ff]">
        <div className="bg-white shadow-md rounded-md p-8 mt-10 mb-10">
          <h1 className="text-3xl font-bold text-gray-800 my-6">Login</h1>
          <p className="text-gray-700 mb-6">
            Access your <span className="font-semibold">MyTradeLinks</span>{" "}
            account.
          </p>

          {/* Email */}
          <div className="mb-4">
            <div className="flex justify-between">
              <label className="text-gray-700 text-sm font-medium mb-1">
                Email address
              </label>
              <a href="#" className="text-red-400 text-xs hover:underline">
                Forgotten Email?
              </a>
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <div className="flex justify-between">
              <label className="text-gray-700 text-sm font-medium mb-1">
                Password
              </label>
              <a href="#" className="text-red-400 text-xs hover:underline">
                Forgotten Password?
              </a>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Show Password */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="mr-2"
            />
            <label className="text-sm text-gray-700">Show password</label>
          </div>

          {/* Buttons */}
          <div className="flex items-center mb-6">
            <button
              onClick={handleLogin}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-md cursor-pointer">
              Login
            </button>
            <span className="mx-3 text-gray-600 text-sm">or</span>
            <a
              href="/login-link"
              className="
              border border-blue-500 text-blue-600 font-semibold 
              py-2 px-6 rounded-md hover:bg-blue-50
              w-full sm:w-auto text-center block text-xs sm:text-sm"
            >
              Email me a link to login
            </a>
          </div>

          {/* Create Account */}
          <p className="text-sm text-gray-700 text-center">
            <a href="#" className="text-red-500 hover:underline">
              Create an account
            </a>{" "}
            if you don't have one.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LoginPage;
