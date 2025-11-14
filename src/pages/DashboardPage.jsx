import React from 'react';
import QuickAccessCards from '../components/dashboard/QuickAccessCards';
import { jobsData } from '../data/jobsData';
import { FaTag } from "react-icons/fa";
import { FaBriefcase, FaThumbsUp, FaShoppingCart, FaQuestionCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";




const DashboardPage = () => {
  const recommendedJobs = jobsData.filter(job => job.type === 'recommended');
  const newJobs = jobsData.filter(job => job.type === 'latest');

  return (
    <div className="flex flex-col h-full bg-gray-100 w-full">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto w-full">

        <div className='mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <QuickAccessCards />
        </div>

        {/* Top Stats - Mobile */}
        <div className="lg:hidden bg-white border-b p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium text-sm">New Jobs</span>
            </div>
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-semibold">{newJobs.length}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-medium text-sm">Purchased Jobs</span>
            </div>
            <span className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded font-semibold">0</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <span className="font-medium text-sm">Reviews</span>
            </div>
            <span className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded font-semibold">0</span>
          </div>
        </div>

        <div className="p-4 lg:p-6">
          {/* Main Content Area - Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left Column - Recommended Jobs */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Recommended Jobs</h2>
                  <p className="text-sm text-gray-600">
                    Sort by <button className="text-blue-500 underline">Recommended</button>
                  </p>
                </div>
                <span className="text-sm text-gray-500">{recommendedJobs.length} results</span>
              </div>

              <button className="flex items-center text-blue-500 mb-4 cursor-pointer hover:text-blue-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter
              </button>

              {/* Recommended Jobs List */}
              {recommendedJobs.map((job, index) => (
                <div key={job.id} className={`pb-4 ${index !== recommendedJobs.length - 1 ? 'border-b' : ''}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">{job.title}</h3>
                      <p className="text-sm text-gray-600 flex items-center mb-2">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </p>
                      <p className="text-sm text-gray-700 mb-3">{job.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.timeAgo}
                        </span>
                      </div>
                    </div>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded font-medium ml-4 whitespace-nowrap">{job.credits} credits</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Stats + New Sections */}
            <div className="hidden lg:block space-y-6">

              {/* New Jobs Section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">New Jobs</span>
                  </div>
                  <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-semibold">{newJobs.length}</span>
                </div>
              </div>

              {/* Purchased Jobs */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-medium">Purchased Jobs</span>
                  </div>
                  <span className="bg-gray-300 text-gray-700 text-sm px-3 py-1 rounded-full font-semibold">0</span>
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span className="font-medium">Reviews</span>
                  </div>
                  <span className="bg-gray-300 text-gray-700 text-sm px-3 py-1 rounded-full font-semibold">0</span>
                </div>
              </div>
              {/* Things to do Section */}
            <div className="bg-gray-50 rounded-lg p-4">
  <h3 className="font-semibold text-gray-800 mb-4">Things to do</h3>
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center text-gray-700">
        <svg
          className="w-5 h-5 mr-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-sm">Verify</span>
      </div>
      <a href="#" className="text-[#009B7D] text-sm underline">
        Click here
      </a>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center text-gray-700">
        <svg
          className="w-5 h-5 mr-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span className="text-sm">Public Liability</span>
      </div>
      <a href="#" className="text-[#009B7D] text-sm underline">
        Verify
      </a>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center text-gray-700">
        <svg
          className="w-5 h-5 mr-2 text-gray-400"
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
        <span className="text-sm">Profile Photo</span>
      </div>
      <a href="#" className="text-[#009B7D] text-sm underline">
        Upload
      </a>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center text-gray-700">
        <svg
          className="w-5 h-5 mr-2 text-gray-400"
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
        <span className="text-sm">Gallery Images</span>
      </div>
      <a href="#" className="text-[#009B7D] text-sm underline">
        Upload
      </a>
 
                  </div>
                </div>
              </div>
{/* Profile Section */}
<div className="bg-white rounded-lg shadow-sm p-4 w-full">
  <div className="flex items-center gap-2 mb-2">
    <FaUserCircle className="text-gray-600 text-2xl" />
    <h3 className="text-lg font-semibold text-gray-800">Profile</h3>
  </div>

  <p className="text-sm text-gray-600 mb-2">44% Profile Complete</p>
  <p className="text-sm text-gray-700 mb-3">
    Completing your profile is a great way to improve your chances of winning work!
  </p>

 <button className="bg-[#40D4E8] text-white text-sm px-3 py-1 rounded hover:bg-[#00A896] transition">
  Edit Profile
</button>

</div>


{/* Membership Section */}
<div className="bg-white rounded-lg shadow-sm p-4 w-full">
  <h3 className="text-lg font-semibold text-gray-800 mb-3">Membership</h3>

  {/* Pro + Verify */}
  <div className="flex items-center justify-between mb-2">
    <div className="flex items-center gap-2">
      <FaTag className="text-gray-500 text-sm" />
      <p className="text-sm text-gray-700">Pro</p>
    </div>
    <p className="text-sm text-[#009B7D] underline cursor-pointer hover:text-[#00A896] transition">
      Verify
    </p>
  </div>

  {/* Credits + Top Up */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <FaTag className="text-gray-500 text-sm" />
      <p className="text-sm text-gray-700">0 credits</p>
    </div>
    <p className="text-sm text-[#009B7D] underline cursor-pointer hover:text-[#00A896] transition">
      Top Up
    </p>
  </div>
</div>


              {/* Preferences Section */}
         <div className="bg-white rounded-lg shadow-sm p-4 w-full">
  {/* Header */}
  <h3 className="text-lg font-semibold text-gray-800 mb-2">Preferences</h3>
  <div className="border-t border-gray-200 mb-4"></div>

  {/* Trade Categories */}
  <div className="mb-4">
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-800 font-medium">Trade Categories</p>
      <button className="text-[#009B7D] text-sm underline hover:text-[#00A896]">Edit</button>
    </div>
    <p className="text-sm text-gray-600 mt-1">
      You'll receive job leads for the following:
    </p>

    {/* Rounded Buttons */}
    <div className="flex flex-wrap gap-2 mt-3">
      <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-green-100 transition">
        Architect
      </button>
      <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-green-100 transition">
        Kitchen Specialist
      </button>
    </div>
  </div>

  <div className="border-t border-gray-200 my-4"></div>

  {/* Job Notifications */}
  <div className="mb-4">
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-800 font-medium">Job Notifications</p>
      <button className="text-[#009B7D] text-sm underline hover:text-[#00A896]">Edit</button>
    </div>
    <p className="text-sm text-gray-600 mt-1">
      Sending unlimited instant job alerts by email.
    </p>
    <p className="text-sm text-gray-600">Add an addon for instant SMS alerts.</p>
  </div>

  <div className="border-t border-gray-200 my-4"></div>

  {/* Let us know if you're busy */}
  <div>
    <div className="flex items-center justify-between mb-2">
      <p className="text-sm text-gray-800 font-medium">Let us know if you're busy</p>
      <button className="text-[#009B7D] text-sm underline hover:text-[#00A896]">Edit</button>
    </div>

    {/* Status Box */}
    <div className="flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-lg px-3 py-2">
      {/* Toggle switch */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked />
        <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-[#40D4E8] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5"></div>
      </label>

      {/* Status text */}
      <p className="text-sm text-gray-700">
        Current Status: <span className="font-medium">Receiving leads as normal.</span>
      </p>
    </div>
  </div>
</div>


{/* Stats Section */}
<div className="space-y-3">
  {/* Purchased Jobs */}
  <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4 w-full">
    <div className="flex items-center gap-3">
      <FaBriefcase className="text-gray-500 text-xl" />
      <p className="text-sm text-gray-700">Purchased Jobs</p>
    </div>
    <p className="text-lg font-semibold text-gray-800">0</p>
  </div>

  {/* Homeowner Reviews */}
  <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4 w-full">
    <div className="flex items-center gap-3">
      <FaThumbsUp className="text-gray-500 text-xl" />
      <p className="text-sm text-gray-700">Homeowner Reviews</p>
    </div>
    <p className="text-lg font-semibold text-gray-800">0</p>
  </div>

  {/* Credit Balance */}
  <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4 w-full">
    <div className="flex items-center gap-3">
      <FaShoppingCart className="text-gray-500 text-xl" />
      <p className="text-sm text-gray-700">Credit Balance</p>
    </div>
    <p className="text-lg font-semibold text-gray-800">0</p>
  </div>

  {/* Questions Answered */}
  <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4 w-full">
    <div className="flex items-center gap-3">
      <FaQuestionCircle className="text-gray-500 text-xl" />
      <p className="text-sm text-gray-700">Questions Answered</p>
    </div>
    <p className="text-lg font-semibold text-gray-800">0</p>
  </div>
</div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
