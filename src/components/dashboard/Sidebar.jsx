import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/mytradelinks-logo.png";

import {
  HiMiniWrenchScrewdriver,
  HiMiniStar,
  HiMiniCreditCard,
  HiMiniUserGroup,
  HiMiniCurrencyDollar,
  HiMiniCog,
  HiMiniQuestionMarkCircle,
  HiMiniChatBubbleBottomCenter,
  HiMiniPuzzlePiece,
} from "react-icons/hi2";
import { FaHome } from "react-icons/fa";

const Sidebar = ({ closeSidebar }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const isManageActive = [
    "/dashboard/jobs",
    "/dashboard/reviews",
    "/dashboard/credits",
    "/dashboard/memberships",
    "/dashboard/addons",
    "/dashboard/billings",
    "/dashboard/settings",
  ].some((path) => location.pathname === path);

  const isHelpActive = ["/dashboard/support", "/dashboard/faq"].some(
    (path) => location.pathname === path
  );

  const handleLinkClick = () => {
    if (closeSidebar) closeSidebar();
  };

  return (
    <div className="w-full lg:w-64 bg-white shadow-lg h-screen overflow-y-auto flex flex-col">
      <div className="flex items-start justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={handleLinkClick}
        >
          <img
            src={logo}
            alt="MyTradeLinks Logo"
            className="w-90 h-16 object-contain"
          />
        </Link>

        <button
          onClick={closeSidebar}
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition cursor-pointer"
          aria-label="Close sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="px-4 lg:px-6 py-3 lg:py-9 bg-gray-100">
        <div className="flex flex-col items-center -mt-5">
          <div className="w-16 lg:w-24 h-16 lg:h-24 bg-gray-200 rounded-full mb-2 flex items-center justify-center shrink-0">
            <svg
              className="w-10 lg:w-16 h-10 lg:h-16 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h3 className="font-semibold text-gray-800 mb-2 text-center text-sm lg:text-base">
            USMAN MUNEER
          </h3>

          <div className="flex space-x-2">
            <button className="p-1.5 bg-[#40D4E8] rounded-full text-white hover:bg-[#00A896] cursor-pointer">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
            <button className="p-1.5 bg-[#00A896] rounded-full text-white hover:bg-[#009B7D] cursor-pointer">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button className="p-1.5 bg-[#009B7D] rounded-full text-white hover:bg-[#00A896] cursor-pointer">
              <svg
                className="w-4 h-4"
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
      </div>

      <nav className="flex-1">
        <Link
          to="/dashboard"
          onClick={handleLinkClick}
          className="flex items-center p-8 text-gray-700 gap-2 hover:text-gray-500"
        >
          <FaHome className="w-5 h-5 text-blue-800" />
          Dashboard
        </Link>

        <div className="px-6 py-3 text-left mt-4 text-gray-700">
          <h3 className="text-[11px] font-bold uppercase">Manage</h3>
        </div>

        {[
          {
            path: "/dashboard/jobs",
            label: "Jobs",
            icon: (
              <HiMiniWrenchScrewdriver className="w-5 h-5 mr-2 text-gray-700 hover:text-blue-800" />
            ),
          },
          {
            path: "/dashboard/reviews",
            label: "Reviews",
            icon: (
              <HiMiniStar className="w-5 h-5 mr-2 text-gray-700 hover:text-blue-800" />
            ),
          },
          {
            path: "/dashboard/credits",
            label: "Credits",
            icon: (
              <HiMiniCreditCard className="w-5 h-5 mr-2 text-gray-700 hover:text-blue-800" />
            ),
          },
          {
            path: "/dashboard/membership",
            label: "Membership",
            icon: (
              <HiMiniUserGroup className="w-5 h-5 mr-2 text-gray-700 hover:text-blue-800" />
            ),
          },
          {
            path: "/dashboard/addons",
            label: "Add-ons",
            icon: (
              <HiMiniPuzzlePiece className="w-5 h-5 mr-2 text-gray-700 hover:text-blue-800" />
            ),
          },
          {
            path: "/dashboard/billing",
            label: "Billings",
            icon: (
              <HiMiniCurrencyDollar className="w-5 h-5 mr-2 text-gray-700 hover:text-blue-800" />
            ),
          },
          {
            path: "/dashboard/settings",
            label: "Settings",
            icon: (
              <HiMiniCog className="w-5 h-5 mr-2 text-gray-700 hover:text-blue-800" />
            ),
          },
        ].map(({ path, label, icon }) => (
          <Link
            key={path}
            to={path}
            onClick={handleLinkClick}
            className="flex items-center px-6 py-3 text-gray-700 ml-4 hover:text-gray-500"
          >
            {icon}
            {label}
          </Link>
        ))}

        <div className="px-6 py-3 text-left mt-4 text-gray-700">
          <h3 className="text-[11px] font-bold uppercase">
            Help
          </h3>
        </div>

        {[
          {
            path: "/dashboard/support",
            label: "Support",
            icon: (
              <HiMiniChatBubbleBottomCenter className="w-5 h-5 mr-2 text-gray-700 hover:text-blue-800" />
            ),
          },
          {
            path: "/dashboard/faq",
            label: "FAQ",
            icon: (
              <HiMiniQuestionMarkCircle className="w-5 h-5 mr-2 text-gray-700 hover:text-blue-800" />
            ),
          },
        ].map(({ path, label, icon }) => (
          <Link
            key={path}
            to={path}
            onClick={handleLinkClick}
            className="flex items-center px-6 py-3 text-gray-700 hover:text-gray-500 ml-6"
          >
            {icon}
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
