import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { FaInfo } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const JobsList = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [selectedJob, setSelectedJob] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const jobs = [
    {
      id: 1,
      title: "Regular Garden Mowing & Maintenance",
      location: "32 mins away from LS14DY",
      description: "Regular mowing and maintenance.",
      postedTime: "about 10 hours ago",
      credits: 14,
      customerName: "Andrew",
      customerPhone: "077*********",
      customerEmail: "an****@g***.***m",
      jobLocation: "Leeds LS20, 32 mins from LS14DY",
      difficulty: "handyperson",
      lookedElsewhere: "no",
      tasks:
        "lawn mowing, weeding, pruning/trimming, planting/removing plants, garden clearance",
      leadPrice: "FREE",
      status: "new",
    },
    {
      id: 2,
      title: "Lawn Mowing and Garden Clearance",
      location: "36 mins away from LS14DY",
      description:
        "I need 2 jobs doing. The first is the patch of grass at the front of my house. I need this mowing every 2 months. The second is a one-off job — clearing and tidying my backyard of weeds and debris.",
      postedTime: "about 17 hours ago",
      credits: 8,
      status: "new",
    },
    {
      id: 3,
      title: "Garden Walls and Big Gate Construction",
      location: "40 mins away from LS14DY",
      description: "Need to build garden walls and install a big gate.",
      postedTime: "about 20 hours ago",
      credits: 12,
      status: "new",
    },
    {
      id: 4,
      title: "Patio Jet Washing",
      location: "22 mins away from LS14DY",
      description:
        "Clean a medium-sized patio using a jet washer to remove moss and stains.",
      postedTime: "about 5 hours ago",
      credits: 10,
      customerName: "Lisa",
      customerPhone: "074*********",
      customerEmail: "li****@h***.***m",
      jobLocation: "Bradford BD10, 22 mins from LS14DY",
      difficulty: "medium",
      lookedElsewhere: "no",
      tasks: "patio cleaning, pressure washing",
      leadPrice: "FREE",
      status: "new",
    },
    {
      id: 5,
      title: "Fence Painting Job",
      location: "18 mins away from LS14DY",
      description:
        "Need someone to paint around 12 fence panels. Paint provided, must bring own brushes and rollers.",
      postedTime: "about 8 hours ago",
      credits: 9,
      customerName: "Michael",
      customerPhone: "073*********",
      customerEmail: "mi****@o***.***m",
      jobLocation: "Harrogate HG3, 18 mins from LS14DY",
      difficulty: "handyperson",
      lookedElsewhere: "yes",
      tasks: "painting, preparation, cleanup",
      leadPrice: "FREE",
      status: "new",
    },
    {
      id: 6,
      title: "Tree Pruning and Branch Disposal",
      location: "47 mins away from LS14DY",
      description:
        "Need to prune 3 small trees and dispose of branches. Easy access to garden.",
      postedTime: "about 2 hours ago",
      credits: 15,
      customerName: "Susan",
      customerPhone: "078*********",
      customerEmail: "su****@y***.***m",
      jobLocation: "York YO26, 47 mins from LS14DY",
      difficulty: "medium",
      lookedElsewhere: "no",
      tasks: "tree pruning, branch disposal, cleanup",
      leadPrice: "FREE",
      status: "new",
    },
    {
      id: 7,
      title: "Garden Waste Removal",
      location: "30 mins away from LS14DY",
      description:
        "Remove old branches, grass cuttings, and general garden waste. Around 8-10 bags total.",
      postedTime: "about 1 day ago",
      credits: 7,
      customerName: "Karen",
      customerPhone: "075*********",
      customerEmail: "ka****@h***.***m",
      jobLocation: "Leeds LS25, 30 mins from LS14DY",
      difficulty: "handyperson",
      lookedElsewhere: "yes",
      tasks: "waste removal, loading, cleanup",
      leadPrice: "FREE",
      status: "new",
    },
    {
      id: 8,
      title: "Regular Garden Maintenance (Fortnightly)",
      location: "33 mins away from LS14DY",
      description:
        "Looking for a gardener for regular maintenance every 2 weeks — mowing, trimming, and weeding.",
      postedTime: "about 6 hours ago",
      credits: 20,
      customerName: "Tom",
      customerPhone: "076*********",
      customerEmail: "to****@o***.***m",
      jobLocation: "Wakefield WF1, 33 mins from LS14DY",
      difficulty: "medium",
      lookedElsewhere: "no",
      tasks: "mowing, hedge trimming, general maintenance",
      leadPrice: "FREE",
      status: "new",
    },
    {
      id: 9,
      title: "Shed Assembly and Placement",
      location: "28 mins away from LS14DY",
      description:
        "Assemble a small garden shed (6x8ft) and position it on the base. Instructions and screws provided.",
      postedTime: "about 3 hours ago",
      credits: 11,
      customerName: "George",
      customerPhone: "079*********",
      customerEmail: "ge****@g***.***m",
      jobLocation: "Leeds LS16, 28 mins from LS14DY",
      difficulty: "handyperson",
      lookedElsewhere: "yes",
      tasks: "assembly, leveling, fitting",
      leadPrice: "FREE",
      status: "new",
    },
    {
      id: 10,
      title: "Gutter Cleaning and Inspection",
      location: "41 mins away from LS14DY",
      description:
        "Clean gutters around the house and check for leaks or blockages. Ladder required.",
      postedTime: "about 9 hours ago",
      credits: 13,
      customerName: "Rebecca",
      customerPhone: "071*********",
      customerEmail: "re****@g***.***m",
      jobLocation: "Huddersfield HD5, 41 mins from LS14DY",
      difficulty: "medium",
      lookedElsewhere: "no",
      tasks: "gutter cleaning, inspection, leak check",
      leadPrice: "FREE",
      status: "new",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-full max-w-6xl mx-auto px-9 py-8 gap-4">
      {/* Jobs List Panel */}
      <div className="w-full lg:w-2/5 flex flex-col ">
        {/* Tabs */}
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => setActiveTab("new")}
            className={`py-3 px-4 md:py-4 md:px-6 text-center font-medium text-sm md:text-base cursor-pointer bg-white rounded-sm ${
              activeTab === "new"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 00-2 2v10a2 2 00 2 2z"
              />
            </svg>
            New
          </button>
          <button
            onClick={() => setActiveTab("purchased")}
            className={`py-3 px-4 md:py-4 md:px-5 text-center rounded-sm font-medium text-sm wrap-break-word md:text-base cursor-pointer bg-white ${
              activeTab === "purchased"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1"
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
            Purchased
          </button>

          <button
            onClick={() => setActiveTab("closed")}
            className={`py-3 px-4 md:py-4 md:px-6 text-center rounded-sm font-medium text-sm md:text-base cursor-pointer bg-white ${
              activeTab === "closed"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Closed
          </button>
        </div>

        {/* Job List Header */}
        <div className="p-3 md:p-4 bg-white mt-3 border-b border-gray-300">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base md:text-lg font-semibold">NEW JOBS</h2>
            <span className="text-xs md:text-sm text-gray-500">22 results</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-gray-300 border-t">
            <p className="text-sm text-gray-600 flex items-center gap-2 my-3">
              Sort by{" "}
              <button className="text-black underline  cursor-pointer flex items-center">
                Recommended <IoIosArrowDown className="w-6 h-6 pl-2" />
              </button>
            </p>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center text-black cursor-pointer hover:text-blue-600"
            >
              <svg
                className="w-4 h-4 mr-1 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.89 3.31.877 2.42 2.42a1.724 1.724 0 001.065 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.89 1.543-.877 3.31-2.42 2.42a1.724 1.724 0 00-2.573 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.89-3.31-.877-2.42-2.42a1.724 1.724 0 00-1.065-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.89-1.543.877-3.31 2.42-2.42.966.558 2.147.09 2.573-1.066z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Filter
            </button>
            {isFilterOpen && (
              <>
                {/* Background overlay */}
                <div
                  onClick={() => setIsFilterOpen(false)}
                  className={` fixed inset-0 bg-black backdrop-blur-md z-40 transition-opacity duration-300 overflow-y-auto
${isFilterOpen ? "opacity-30" : "opacity-0 pointer-events-none"}
  `}
                />

                {/* Sliding Sidebar */}
                <div className="fixed top-0 left-0 h-full w-72 sm:w-80 bg-white shadow-xl z-50 transform transition-transform duration-300">
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-3">
                    <h2 className="text-lg font-semibold">Filter</h2>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="text-red-500 font-bold cursor-pointer hover:text-red-600"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Sidebar Body */}
                  <div className="p-4 overflow-y-auto h-full">
                    {/* DROPDOWN ITEM */}
                    <div className="border-b border-gray-300 pb-3">
                      <button
                        onClick={() => toggleDropdown("category")}
                        className="w-full flex justify-between items-center font-semibold py-2"
                      >
                        Trade Category
                        <span
                          className={`transition-transform ${
                            openDropdown === "category" ? "rotate-180" : ""
                          }`}
                        >
                          <ChevronDown className="text-gray-500" />
                        </span>
                      </button>

                      {/* Options */}
                      {openDropdown === "category" && (
                        <div className="mt-2 pl-2 space-y-2 animate-fadeIn">
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Plumber
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Electrician
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Carpenter
                          </label>
                        </div>
                      )}
                    </div>

                    {/* DROPDOWN ITEM */}
                    <div className="border-b border-gray-300 pb-3">
                      <button
                        onClick={() => toggleDropdown("date")}
                        className="w-full flex justify-between items-center font-semibold py-2"
                      >
                        Posted Date
                        <span
                          className={`transition-transform ${
                            openDropdown === "date" ? "rotate-180" : ""
                          }`}
                        >
                          <ChevronDown className="text-gray-500" />
                        </span>
                      </button>

                      {openDropdown === "date" && (
                        <div className="mt-2 pl-2 space-y-2 animate-fadeIn">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="posted"
                              className="mr-2"
                            />
                            Last 24 hours
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="posted"
                              className="mr-2"
                            />
                            Last 7 days
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="posted"
                              className="mr-2"
                            />
                            Last 30 days
                          </label>
                        </div>
                      )}
                    </div>

                    {/* DROPDOWN ITEM */}
                    <div className="border-b border-gray-300 pb-3">
                      <button
                        onClick={() => toggleDropdown("price")}
                        className="w-full flex justify-between items-center font-semibold py-2"
                      >
                        Job Price
                        <span
                          className={`transition-transform ${
                            openDropdown === "price" ? "rotate-180" : ""
                          }`}
                        >
                          <ChevronDown className="text-gray-500" />
                        </span>
                      </button>

                      {openDropdown === "price" && (
                        <div className="mt-2 pl-2 space-y-3 animate-fadeIn">
                          <input
                            type="number"
                            placeholder="Min Price"
                            className="w-full border px-2 py-1 rounded"
                          />
                          <input
                            type="number"
                            placeholder="Max Price"
                            className="w-full border px-2 py-1 rounded"
                          />
                        </div>
                      )}
                    </div>

                    {/* DROPDOWN ITEM */}
                    <div className="border-b border-gray-300 pb-3">
                      <button
                        onClick={() => toggleDropdown("tags")}
                        className="w-full flex justify-between items-center font-semibold py-2"
                      >
                        Tags
                        <span
                          className={`transition-transform ${
                            openDropdown === "tags" ? "rotate-180" : ""
                          }`}
                        >
                          <ChevronDown className="text-gray-500" />
                        </span>
                      </button>

                      {openDropdown === "tags" && (
                        <div className="mt-2 pl-2 space-y-2 space-x-2 animate-fadeIn ">
                          <span className="px-3 py-1 border rounded text-sm">
                            Urgent
                          </span>
                          <span className="px-3 py-1 border rounded text-sm">
                            Remote
                          </span>
                          <span className="px-3 py-1 border rounded text-sm">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="pt-5 flex justify-between items-center gap-4">
                      <button className="w-full bg-orange-500 text-white py-2 rounded mb-3">
                        Apply Filters
                      </button>
                      <button className="w-full border py-2 rounded mb-3">
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Job Items */}
        <div className="flex-1 overflow-y-auto bg-white">
          {jobs.map((job) => (
            <div key={job.id}>
              <div
                onClick={() =>
                  setSelectedJob(selectedJob?.id === job.id ? null : job)
                }
                className={`p-3 md:p-4 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-300 ${
                  selectedJob?.id === job.id
                    ? "bg-blue-50 border-l-4 border-blue-500"
                    : ""
                }`}
              >
                <h3 className="font-semibold text-sm md:text-base text-gray-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 flex items-center mb-6">
                  <svg
                    className="w-4 h-4 mr-1 shrink-0"
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
                  {job.location}
                </p>
                <p className="text-xs md:text-sm text-gray-700 my-6 line-clamp-2">
                  {job.description}
                </p>
                <div className="flex items-center justify-between text-xs md:text-sm">
                  <span className="text-gray-500 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    posted {job.postedTime}
                  </span>
                  <span className="text-blue-600 border border-gray-300 px-2 md:px-3 py-1 rounded font-medium">
                    {job.credits} credits
                  </span>
                </div>
              </div>

              {/* Expandable Job Details - Accordion Style */}
              {selectedJob?.id === job.id && (
                <div className="bg-gray-50 border-b p-3 md:p-4 md:hidden">
                  {/* Job Title & Actions */}
                  <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="flex items-start justify-between mb-4">
                      <h1 className="text-lg font-bold text-gray-800 pr-2">
                        {selectedJob.title}
                      </h1>
                      <button
                        onClick={() => setSelectedJob(null)}
                        className="text-gray-500 hover:text-gray-700 shrink-0 cursor-pointer"
                      >
                        <svg
                          className="w-5 h-5"
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
                    <p className="text-xs text-gray-500 mb-3">
                      Posted by {selectedJob.customerName}, about 10 hours ago
                    </p>

                    <div className="mb-4">
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          {selectedJob.leadPrice}
                        </div>
                        <div className="text-xs text-gray-500 line-through">
                          14 credits
                        </div>
                        <div className="text-xs text-gray-600">lead price</div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 text-sm w-full cursor-pointer">
                        Purchase Job
                      </button>
                      <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 text-sm w-full cursor-pointer">
                        Decline
                      </button>
                    </div>

                    {/* Contact Details */}
                    <div className="border-t mt-4 pt-4">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
                        CONTACT DETAILS
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-red-500 mr-2 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-xs text-gray-700">
                            {selectedJob.customerName}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-red-500 mr-2 shrink-0"
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
                          <span className="text-xs text-gray-700">
                            {selectedJob.customerPhone}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-red-500 mr-2 shrink-0"
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
                          <span className="text-xs text-gray-700">
                            {selectedJob.customerEmail}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 flex items-start bg-gray-50 p-2 rounded text-xs">
                        <svg
                          className="w-4 h-4 text-gray-500 mr-2 mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-gray-600">
                          Purchase job to reveal contact information.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Job Location */}
                  <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
                      JOB LOCATION
                    </h3>
                    <div className="flex items-center text-xs text-gray-700">
                      <svg
                        className="w-4 h-4 text-blue-500 mr-2 shrink-0"
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
                      {selectedJob.jobLocation}
                    </div>
                  </div>

                  {/* About the Job */}
                  <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
                      ABOUT THE JOB
                    </h3>
                    <p className="text-xs text-gray-700">
                      {selectedJob.description}
                    </p>
                  </div>

                  {/* Job Details */}
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
                      JOB DETAILS
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start text-xs">
                        <span className="text-gray-700 mr-2">◦</span>
                        <span className="text-gray-700">
                          Difficulty: <strong>{selectedJob.difficulty}</strong>
                        </span>
                      </li>
                      <li className="flex items-start text-xs">
                        <span className="text-gray-700 mr-2">◦</span>
                        <span className="text-gray-700">
                          Looked elsewhere:{" "}
                          <strong>{selectedJob.lookedElsewhere}</strong>
                        </span>
                      </li>
                      <li className="flex items-start text-xs">
                        <span className="text-gray-700 mr-2">◦</span>
                        <span className="text-gray-700">
                          Tasks: <strong>{selectedJob.tasks}</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Job Details Panel - Desktop Only */}
      <div className="hidden md:flex flex-1 bg-gray-50 overflow-y-auto">
        {selectedJob ? (
          <div className="w-full">
            {/* Job Title & Actions */}
            <div className="p-5">
              <div className="border-b border-gray-300 mb-3">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedJob.title}
                </h1>
                <p className="text-sm text-gray-500 mb-4">
                  Posted by {selectedJob.customerName}, about 10 hours ago
                </p>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
                <div className="border-r border-gray-300 pr-24">
                  <div className="flex ittems-center justify-between gap-6">
                    <p className="text-3xl font-bold text-green-600">
                      {selectedJob.leadPrice}
                    </p>
                    <p className="text-sm text-gray-500 line-through mt-2.5">
                      14 credits
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">lead price</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-1.5">
                  <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 text-sm cursor-pointer">
                    Purchase Job
                  </button>
                  <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 text-sm cursor-pointer">
                    Decline
                  </button>
                </div>
              </div>

              {/* Contact Details */}
              <div className="flex items-center justify-between border-t border-gray-300">
                <div className="pt-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                    CONTACT DETAILS
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-red-500 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {selectedJob.customerName}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-red-500 mr-3"
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
                      <span className="text-gray-700">
                        {selectedJob.customerPhone}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-red-500 mr-3"
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
                      <span className="text-gray-700">
                        {selectedJob.customerEmail}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 bg-gray-200 p-3 rounded border border-gray-300">
                  <FaInfo className="w-3 h-3" />
                  <p className="text-sm text-gray-600">
                    Purchase job to reveal contact information.
                  </p>
                </div>
              </div>
            </div>

            {/* Job Location */}
            <div className="p-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                JOB LOCATION
              </h3>
              <div className="flex items-center text-gray-700 ml-3">
                <svg
                  className="w-5 h-5 text-blue-500 mr-2"
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
                {selectedJob.jobLocation}
              </div>
            </div>

            {/* About the Job */}
            <div className="p-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                ABOUT THE JOB
              </h3>
              <p className="text-gray-700 ml-3">{selectedJob.description}</p>
            </div>

            {/* Job Details */}
            <div className="p-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                JOB DETAILS
              </h3>
              <ul className="space-y-3 ml-3 bg-gray-200 p-2 rounded-sm border border-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-700 mr-2">◦</span>
                  <span className="text-gray-700">
                    How would you rate the difficulty of the job?{" "}
                    <strong>{selectedJob.difficulty}</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700 mr-2">◦</span>
                  <span className="text-gray-700">
                    Have you looked for a tradesperson elsewhere?{" "}
                    <strong>{selectedJob.lookedElsewhere}</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700 mr-2">◦</span>
                  <span className="text-gray-700">
                    Please select which tasks you need doing{" "}
                    <strong>{selectedJob.tasks}</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full">
            <div className="text-center text-gray-500">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-gray-400"
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
              <p className="text-lg">Select a job to view details</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsList;
