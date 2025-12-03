import React from "react";
import { useNavigate } from "react-router-dom";
import QuickAccessCards from "../components/dashboard/QuickAccessCards";

const SupportPage = () => {
  const navigate = useNavigate();

  const supportOptions = [
    {
      id: "dispute",
      title: "DISPUTE A JOB",
      icon: (
        <svg
          className="w-16 h-16 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      description: "Report an issue with a job",
    },
    {
      id: "tickets",
      title: "SEE MY TICKETS",
      icon: (
        <svg
          className="w-16 h-16 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
      description: "View your support tickets",
    },
    {
      id: "contact",
      title: "CONTACT US",
      icon: (
        <svg
          className="w-16 h-16 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      description: "Get in touch with our team",
    },
  ];

  const handleOptionClick = (optionId) => {
    if (optionId === "dispute") {
      navigate("/dashboard/support/dispute");
    } else if (optionId === "tickets") {
      navigate("/dashboard/tickets");
    } else if (optionId === "contact") {
      navigate("/dashboard/support/contact");
    }
  };

  return (
    <div className="bg-gray-50 min-h-full">
      <QuickAccessCards />
      <div className="max-w-6xl mx-auto p-8">
        <div className="p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">Support</h1>
            <p className="text-gray-600 text-lg">
              If you're having trouble using MyTradeLinks
              <br />
              then please select one of the options below.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-gray-600 text-center mb-8 font-medium">
              Please choose one of the following:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 sm:px-10 md:px-28 py-5 bg-gray-100 rounded shadow-sm">
              {supportOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  className="bg-gray-300 hover:bg-gray-200 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center transition group cursor-pointer"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    {option.icon}
                  </div>
                  <h3 className="text-center font-semibold text-sm uppercase tracking-wide">
                    {option.title}
                  </h3>
                  {option.description && (
                    <p className="text-xs text-gray-600 mt-2 text-center">
                      {option.description}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
