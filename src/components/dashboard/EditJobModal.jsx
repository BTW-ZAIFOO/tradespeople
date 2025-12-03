import React from "react";

const EditJobModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[400px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-black text-xl"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Edit Job Options
        </h2>
        <div className="w-16 h-1 bg-[#40D4E8] mx-auto my-4 rounded"></div>
        <div className="flex flex-col gap-3 mt-4">
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-left">
            Edit Job Details
          </button>

          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-left">
            Change Status
          </button>

          <button className="px-4 py-2 bg-red-100 hover:bg-red-200 rounded-md text-left text-red-600">
            Delete Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditJobModal;
