import React, { useState } from "react";
import QuickAccessCards from "../components/dashboard/QuickAccessCards";

const AddonsPage = () => {
  const [activeTab, setActiveTab] = useState("addons");

  const extraCategories = [
    {
      title: "1 Extra Job Category",
      price: "5.00",
      period: "per month",
    },
    {
      title: "3 Extra Job Categories",
      price: "10.00",
      period: "per month",
    },
    {
      title: "5 Extra Job Categories",
      price: "15.00",
      period: "per month",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-full">
      <QuickAccessCards />
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center border-b border-gray-300 pb-2">
                My Addons
              </h2>

              <div className="flex flex-col items-center justify-center py-8">
                <svg
                  className="w-24 h-24 text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>

                <h3 className="text-5xl font-bold text-gray-800 mb-2">0</h3>
                <p className="text-gray-500 uppercase text-sm tracking-wide">
                  ACTIVE ADDONS
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
                <p>
                  Get instant job alerts and get sent jobs from more trade
                  categories.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white flex items-center gap-4 mb-3 shadow-sm overflow-x-auto">
              <button
                onClick={() => setActiveTab("subscriptions")}
                className={`flex-1 py-4 px-6 text-center font-medium cursor-pointer ${
                  activeTab === "subscriptions"
                    ? "text-orange-600 bg-gray-50 shadow-md rounded-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Subscriptions
              </button>
              <button
                onClick={() => setActiveTab("credits")}
                className={`flex-1 py-4 px-6 text-center font-medium cursor-pointer ${
                  activeTab === "credits"
                    ? "text-orange-600 bg-gray-50 shadow-md rounded-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Credits
              </button>
              <button
                onClick={() => setActiveTab("addons")}
                className={`flex-1 py-4 px-6 text-center font-medium cursor-pointer ${
                  activeTab === "addons"
                    ? "text-orange-600 bg-gray-50 shadow-md rounded-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Addons
              </button>

              <div className="flex items-center px-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-8">
                {activeTab === "addons" && (
                  <div>
                    <div className="mb-12">
                      <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b border-gray-300 pb-2">
                        Extra Categories
                      </h2>

                      <div>
                        {extraCategories.map((addon, index) => (
                          <div
                            key={index}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-gray-300 hover:border-blue-300 transition"
                          >
                            <div className="flex-1 mb-3 sm:mb-0">
                              <h3 className="text-xl font-semibold text-orange-500">
                                {addon.title}
                              </h3>
                              <p className="text-sm text-gray-500">
                                £{addon.price}
                                <span className="text-xs">+VAT</span>{" "}
                                {addon.period}
                              </p>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 w-full sm:w-auto space-y-3 sm:space-y-0">
                              <button className="px-5 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition cursor-pointer w-full sm:w-auto">
                                BUY NOW
                              </button>
                              <button className="px-5 py-2 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300 transition cursor-pointer w-full sm:w-auto">
                                INFO
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b border-gray-300 pb-2">
                        SMS Addons
                      </h2>

                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-gray-300 hover:border-blue-300 transition">
                          <div className="flex-1 mb-3 sm:mb-0">
                            <h3 className="text-xl font-semibold text-orange-500">
                              Instant Job SMS
                            </h3>
                            <p className="text-sm text-gray-500">
                              £5.00<span className="text-xs">+VAT</span> per
                              month
                            </p>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 w-full sm:w-auto space-y-3 sm:space-y-0">
                            <button className="px-5 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition cursor-pointer w-full sm:w-auto">
                              BUY NOW
                            </button>
                            <button className="px-5 py-2 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300 transition cursor-pointer w-full sm:w-auto">
                              INFO
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "subscriptions" && (
                  <div className="text-center py-12">
                    <p className="text-gray-600">
                      Subscription options will be displayed here.
                    </p>
                  </div>
                )}

                {activeTab === "credits" && (
                  <div className="text-center py-12">
                    <p className="text-gray-600">
                      Credit packages will be displayed here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddonsPage;
