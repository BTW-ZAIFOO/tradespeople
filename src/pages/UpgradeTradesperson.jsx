import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UpgradeTradesperson = () => {
  return (
    <div className="bg-[#f7fbff] min-h-screen flex flex-col">
      <Header />
      <div className="grow flex justify-center items-start py-16">
        <div className="bg-white shadow-md rounded-md p-10 w-full max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Upgrade To Tradesperson
          </h1>
          <div className="w-16 h-1 bg-orange-500 mb-6"></div>

          <p className="text-gray-600 mb-8">
            <strong>Caution:</strong> Only complete this form if you wish to
            migrate your account to a tradesperson account in order to purchase
            jobs from MyTradeLinks.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name*
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Type*
              </label>
              <select className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option>- Select Type -</option>
                <option>Sole Trader</option>
                <option>Limited Company</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Operating Radius (miles)*
              </label>
              <input
                type="number"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                defaultValue="20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trade Category
              </label>
              <select className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option>- Select Trade -</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Carpentry</option>
                <option>Painting</option>
              </select>
            </div>
          </form>

          <div className="mt-8 space-y-2 text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>
                I agree to the{" "}
                <a href="#" className="text-orange-500 hover:underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-orange-500 hover:underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>
                I agree to the{" "}
                <a href="#" className="text-orange-500 hover:underline">
                  Terms of Supply
                </a>
                .
              </span>
            </label>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="submit"
              className="bg-orange-500  cursor-pointer hover:bg-orange-600 text-white font-medium px-8 py-2 rounded-md"
            >
              Upgrade
            </button>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="bg-blue-600 hover:bg-blue-700  cursor-pointer text-white font-medium px-8 py-2 rounded-md"
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpgradeTradesperson;
