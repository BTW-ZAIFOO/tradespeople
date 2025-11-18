import React from "react";
import QuickAccessCards from "../components/dashboard/QuickAccessCards";

const RewardsPage = () => {
  return (
    <div className="bg-gray-50 min-h-full">
      {/* Quick Access Cards */}
      <QuickAccessCards />
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Rewards</h1>
          <p className="text-gray-600">
            Your rewards and incentives will appear here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
