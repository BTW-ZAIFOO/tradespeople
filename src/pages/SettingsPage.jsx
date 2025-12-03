import React from "react";
import { useNavigate } from "react-router-dom";
import QuickAccessCards from "../components/dashboard/QuickAccessCards";

const SettingsPage = () => {
  const navigate = useNavigate();

  const settingsCategories = [
    {
      id: "profile",
      title: "PROFILE",
      icon: (
        <svg
          className="w-10 h-10 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      path: "/dashboard/settings/profile",
    },
    {
      id: "categories",
      title: "CATEGORIES",
      icon: (
        <svg
          className="w-10 h-10 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
      path: "/dashboard/settings/categories",
    },
    {
      id: "preferences",
      title: "PREFERENCES",
      icon: (
        <svg
          className="w-10 h-10 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      path: "/dashboard/settings/preferences",
    },
    {
      id: "locations",
      title: "LOCATIONS",
      icon: (
        <svg
          className="w-10 h-10 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      path: "/dashboard/settings/locations",
    },
    {
      id: "login",
      title: "LOGIN",
      icon: (
        <svg
          className="w-10 h-10 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      path: "/dashboard/settings/login",
    },
  ];

  const handleCategoryClick = (categoryId) => {
    navigate(`/dashboard/profile?tab=${categoryId}`);
  };

  return (
    <div className="bg-gray-50 min-h-full">
      <QuickAccessCards />
      <div className="max-w-6xl mx-auto p-8">
        <div className="p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-700 mb-3">
              My Settings
            </h1>
            <p className="text-gray-600">
              Manage your company details, trade categories, SMS & email alerts,
              and login details.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-4 sm:px-10 md:px-16 lg:px-20 py-5 bg-gray-100 rounded shadow-sm">
            {settingsCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.id)}
                className="bg-gray-300 hover:bg-gray-200 rounded-lg p-4 sm:p-6 md:p-7 lg:p-8 flex flex-col items-center justify-center cursor-pointer transition group"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-gray-700 font-semibold text-[10px] sm:text-xs uppercase tracking-wide text-center">
                  {category.title}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
