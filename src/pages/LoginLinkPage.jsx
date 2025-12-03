import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginLinkPage = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-[#f6f9ff] py-20">
        <div className="bg-white shadow-md rounded-md p-10 w-[400px]">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Get a Login Link
          </h1>
          <p className="text-gray-700 mb-6">
            We'll email you a secure link you can use to instantly access your
            account.
          </p>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md mb-4 cursor-pointer">
            Email me
          </button>

          <div className="text-center text-gray-600 text-sm">
            <span className="mx-2">or</span>
            <a href="#" className="text-red-500 hover:underline">
              Reset password
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginLinkPage;
