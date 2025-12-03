import React from "react";
import QuickAccessCards from "../components/dashboard/QuickAccessCards";

const QAPage = () => {
  return (
    <div className="bg-gray-50 min-h-full">
      <QuickAccessCards />
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Questions & Answers
          </h1>
          <p className="text-gray-600">
            Frequently asked questions and answers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QAPage;
