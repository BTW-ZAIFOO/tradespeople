import React from "react";
import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="text-gray-800 border-t-2 border-gray-200"
      style={{
        backgroundColor: "rgb(244, 249, 255)",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2 md:border-r md:border-gray-300 pr-6">
            <p className="text-gray-700 text-base leading-relaxed mb-8 font-normal">
              MyTradeLinks connects homeowners <br /> with local tradespeople.
              Hiring a tradesperson has never been so easy!
            </p>
            <div>
              <h4
                className="font-bold text-lg mb-4"
                style={{ color: "rgb(80, 85, 102)" }}
              >
                Follow Us
              </h4>

              <div className="flex space-x-3">
                <a
                  href="https://twitter.com/MyTradeLinks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black rounded flex items-center justify-center hover:opacity-80 transition"
                >
                  <FaXTwitter className="text-white text-sm" />
                </a>
                <a
                  href="https://www.facebook.com/MyTradeLinks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:opacity-80 transition"
                >
                  <FaFacebookF className="text-white text-sm" />
                </a>
                <a
                  href="https://www.instagram.com/MyTradeLinks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded flex items-center justify-center hover:opacity-80 transition"
                >
                  <FaInstagram className="text-white text-sm" />
                </a>
                <a
                  href="https://www.youtube.com/@MyTradeLinks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-red-600 rounded flex items-center justify-center hover:opacity-80 transition"
                >
                  <FaYoutube className="text-white text-sm" />
                </a>
                <a
                  href="https://www.pinterest.com/MyTradeLinks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-red-500 rounded flex items-center justify-center hover:opacity-80 transition"
                >
                  <FaPinterestP className="text-white text-sm" />
                </a>
                <a
                  href="https://www.tiktok.com/@MyTradeLinks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black rounded flex items-center justify-center hover:opacity-80 transition"
                >
                  <FaTiktok className="text-white text-sm" />
                </a>
                <a
                  href="https://www.linkedin.com/company/MyTradeLinks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center hover:opacity-80 transition"
                >
                  <FaLinkedinIn className="text-white text-sm" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4
                className="font-bold text-lg mb-4"
                style={{ color: "rgba(90, 95, 109, 1)" }}
              >
                About Us
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about-us"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/press-partnerships"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    Press & Partnerships
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className="font-bold text-lg mb-4"
                style={{ color: "rgb(80, 85, 102)" }}
              >
                Homeowners
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/post-job"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link
                    to="/how-it-works"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trade-directory"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    Trade Directory
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cost-guides"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    Cost & How-to Guides
                  </Link>
                </li>
                <li>
                  <Link
                    to="/guides-advice"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    Guides & Advice
                  </Link>
                </li>
                <li>
                  <Link
                    to="/homeowner-support"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    Homeowner Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className="font-bold text-lg mb-4"
                style={{ color: "rgb(80, 85, 102)" }}
              >
                Tradespeople
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/trade-signup"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    Signup as a Trade
                  </Link>
                </li>
                <li>
                  <Link
                    to="/how-it-works"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-account"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/getting-started"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    to="/advice-centre"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    Advice Centre
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trade-support"
                    className="text-blue-600 hover:text-blue-500 transition text-sm font-normal"
                  >
                    Trade Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-8">
          <div className="text-gray-700 text-sm font-normal">
            <div className="mb-2">
              <span className="font-semibold">
                © 2025 MyTradeLinks. All rights reserved.
              </span>
            </div>
            <div className="mb-2">
              <Link
                to="/privacy-policy"
                className="hover:text-blue-500 transition font-medium"
              >
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link
                to="/terms"
                className="hover:text-blue-500 transition font-medium"
              >
                Terms and Conditions
              </Link>
              <span className="mx-2">|</span>
              <Link
                to="/sitemap"
                className="hover:text-blue-500 transition font-medium"
              >
                Sitemap
              </Link>
            </div>
            <div className="font-normal">
              MyTradeLinks is rated 4.9 stars by customers across the UK.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
