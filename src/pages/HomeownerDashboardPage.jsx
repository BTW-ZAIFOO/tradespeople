import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditJobModal from "../components/dashboard/EditJobModal.jsx";

const HomeownerDashboardPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);

  // ✅ Get user name from localStorage
  useEffect(() => {
    const storedName =
      localStorage.getItem("username") ||
      localStorage.getItem("userName") ||
      localStorage.getItem("name");

    if (storedName && storedName.trim() !== "") {
      const formattedName =
        storedName.charAt(0).toUpperCase() + storedName.slice(1);
      setUserName(formattedName);
    }
  }, []);

  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#f7fbff]">
      {/* Header Section */}
      <div className="text-center pt-12">
        <h1 className="text-4xl font-semibold text-gray-800">
          Welcome {userName} 👋
        </h1>
        <div className="w-16 h-1 bg-[#40D4E8] mx-auto my-3 rounded"></div>
      </div>

      {/* Job Card Section */}
      <div className="flex justify-center mt-10">
        <div className="bg-white border rounded-md shadow-sm w-[60%] flex justify-between items-center p-6">
          <div>
            <p className="text-lg font-semibold text-gray-800">
              External Tiling
            </p>
            <p className="text-gray-500 text-sm">
              posted about 1 hour ago •{" "}
              <span className="text-[#00A896]">open</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-gray-500 text-sm">0 trades matched</p>
            <button
              onClick={() => setShowEditModal(true)}
              className="text-[#40D4E8] font-medium hover:underline cursor-pointer"
            >
              edit
            </button>
          </div>
        </div>
      </div>

      <EditJobModal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
      />

      {/* Post Another Job */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/post-job")}
          className="px-8 py-3 bg-[#00A896] text-white font-semibold rounded-md hover:bg-[#40D4E8] transition cursor-pointer"
        >
          Post another job
        </button>
      </div>

      {/* Upgrade Banner */}
      <div className="text-center mt-12 bg-white py-10 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          I’m a trade - upgrade your account to a tradesperson
        </h2>
        <button
          onClick={() => setShowUpgradeModal(true)}
          className="bg-[#00A896] text-white px-6 py-3 rounded-md hover:bg-[#40D4E8] transition cursor-pointer"
        >
          Upgrade now
        </button>
      </div>

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[90%] sm:w-[500px] relative shadow-lg text-center">
            <button
              onClick={() => setShowUpgradeModal(false)}
              className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-black cursor-pointer"
            >
              ×
            </button>
            <h2 className="text-3xl font-semibold text-gray-800">
              Upgrade Account
            </h2>
            <div className="w-16 h-1 bg-[#40D4E8] mx-auto my-3 rounded"></div>
            <p className="text-gray-600 mb-8">
              You should only change your account type to a tradesperson account
              if you wish to purchase jobs from MyTradeLinks.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate("/upgrade-tradesperson")}
                className="bg-[#00A896] text-white px-6 py-2 rounded hover:bg-[#40D4E8] transition cursor-pointer"
              >
                Upgrade
              </button>
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="bg-[#40D4E8] text-white px-6 py-2 rounded hover:bg-[#00A896] transition cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeownerDashboardPage;
