import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [showAccountChoices, setShowAccountChoices] = useState(false);

  const topQuestions = [
    "Hiring Checklist",
    "Tradespeople",
    "Getting Started with MyTradeLinks",
    "Settings",
    "How our service works",
    "My Account",
    "Disputing a job",
    "Jobs",
  ];

  return (
    <>
      <Header />

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-md space-y-8">
            {/* Page title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-[rgb(80,85,102)]">
              Contact MyTradesLink
            </h1>

            {/* Intro paragraph */}
            <p className="text-lg leading-relaxed text-gray-800">
              Search our help section or get in touch by answering the questions
              below.
            </p>

            {/* Search bar with blue button */}
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="What do you need help with?"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#40D4E8]"
              />
              <button className="px-6 py-2 bg-[#40D4E8] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer">
                Search
              </button>
            </div>

            {/* How can we help you today: info boxes */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[rgb(80,85,102)]">
                How can we help you today? Please answer:
              </h2>

              <div className="bg-white border border-gray-300 rounded-lg divide-y divide-gray-300">
                <Link
                  to="/login"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-[#40D4E8] text-xl mt-1">👤</span>
                    <div>
                      <p className="text-[rgb(80,85,102)] font-semibold">
                        Have a MyTradeLinks account?
                      </p>
                      <p className="text-gray-600 text-sm">
                        Login to your account so we can fetch your details.
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-lg">{">"}</span>
                </Link>

                <button
                  onClick={() => setShowAccountChoices(true)}
                  className="w-full text-left flex items-center justify-between p-4 hover:bg-gray-50 transition cursor-pointer"
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-[#40D4E8] text-xl mt-1">📝</span>
                    <div>
                      <p className="text-[rgb(80,85,102)] font-semibold">
                        Don’t have an account with us or can’t login?
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-lg">{">"}</span>
                </button>
              </div>

              {showAccountChoices && (
                <div className="bg-white border border-gray-300 rounded-lg divide-y divide-gray-300 mt-4">
                  <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <span className="text-[#40D4E8] text-xl mt-1">🔧</span>
                      <div>
                        <p className="text-[rgb(80,85,102)] font-semibold">
                          I'm a tradesperson
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-lg">{">"}</span>
                  </button>

                  <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <span className="text-[#40D4E8] text-xl mt-1">🏠</span>
                      <div>
                        <p className="text-[rgb(80,85,102)] font-semibold">
                          I'm a homeowner
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-lg">{">"}</span>
                  </button>

                  <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <span className="text-[#40D4E8] text-xl mt-1">❓</span>
                      <div>
                        <p className="text-[rgb(80,85,102)] font-semibold">
                          Something else
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-lg">{">"}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Top Questions */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-[rgb(80,85,102)]">
                Top Questions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {topQuestions.map((question, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition cursor-pointer bg-white"
                  >
                    {question}
                  </div>
                ))}
              </div>
            </div>

            {/* Submit button */}
            <div className="text-center mt-6">
              <button className="px-8 py-3 bg-[#40D4E8] text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
