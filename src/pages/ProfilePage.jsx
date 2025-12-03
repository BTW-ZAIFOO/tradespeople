import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import QuickAccessCards from "../components/dashboard/QuickAccessCards";
import Categories from "../components/settings/Categories";
import Locations from "../components/settings/Locations";
import Preferences from "../components/settings/Preferences";
import Login from "../components/settings/Login";

const ProfilePage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const tabFromQuery = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabFromQuery || "profile");

  useEffect(() => {
    if (tabFromQuery) {
      setActiveTab(tabFromQuery);
    }
  }, [tabFromQuery]);
  const [profileImage, setProfileImage] = useState(null);
  const [profileData, setProfileData] = useState({
    companyDescription: "software developer and information technology related",
    companyName: "Usman",
    companyWebsite: "gggggf",
    numberOfEmployees: "1-2",
    activeSince: "- Select Year -",
    businessType: "Partnership",
    operatingRadius: "Up to 45 minutes away",
    addressLine1: "Northern Trains Ltd",
    addressLine2: "City Railway Station",
    postalTown: "Leeds",
    county: "West Yorkshire",
    postcode: "LS14DY",
    country: "England",
    businessAddressSame: true,
    twitterUrl: "Your Profile",
    facebookUrl: "Your Profile",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    setProfileData({
      ...profileData,
      [field]: value,
    });
  };

  const handleCheckboxChange = (field) => {
    setProfileData({
      ...profileData,
      [field]: !profileData[field],
    });
  };

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "categories", label: "Categories" },
    { id: "locations", label: "Locations" },
    { id: "preferences", label: "Preferences" },
    { id: "login", label: "Login" },
  ];

  return (
    <div className="bg-gray-50 min-h-full">
      <QuickAccessCards />
      <div className="max-w-6xl mx-auto p-9">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded shadow-sm p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="55"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="55"
                      fill="none"
                      stroke="#dc2626"
                      strokeWidth="3"
                      strokeDasharray={`${55 * 2 * Math.PI * 0.89} ${
                        55 * 2 * Math.PI
                      }`}
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <p className="text-3xl font-bold text-gray-800">89%</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-gray-600 uppercase text-sm font-semibold tracking-wide mb-6">
                Profile Complete
              </h3>

              <button className="w-full px-6 py-3 bg-blue-500 cursor-pointer text-white font-semibold rounded hover:bg-blue-600 transition">
                View your public profile
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white flex items-center gap-4 mb-3 shadow-sm overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-6 text-center font-medium whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? "text-orange-600 bg-gray-50 shadow-md rounded-sm"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}

              <div className="ml-auto flex items-center px-6">
                <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer">
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
            <div className="bg-white rounded shadow-sm">
              <div className="p-8">
                {activeTab === "profile" && (
                  <div>
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-gray-700 font-semibold text-sm uppercase mb-4">
                            Profile Image
                          </h3>
                          <label className="bg-gray-600 rounded p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700 transition h-48">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                            />
                            {profileImage ? (
                              <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover rounded"
                              />
                            ) : (
                              <>
                                <svg
                                  className="w-12 h-12 text-white mb-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  />
                                </svg>
                                <p className="text-white font-bold text-sm text-center">
                                  UPLOAD NEW
                                </p>
                                <p className="text-white font-bold text-sm text-center">
                                  PROFILE IMAGE
                                </p>
                                <p className="text-gray-300 text-xs mt-2">
                                  200PX BY 200PX
                                </p>
                              </>
                            )}
                          </label>
                        </div>

                        <div className="lg:col-span-2">
                          <h3 className="text-gray-700 font-semibold text-sm uppercase mb-4">
                            Company Description
                          </h3>
                          <textarea
                            value={profileData.companyDescription}
                            onChange={(e) =>
                              handleInputChange(
                                "companyDescription",
                                e.target.value
                              )
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 resize-none h-48"
                            placeholder="Describe your company..."
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
                            Company Name
                          </label>
                          <input
                            type="text"
                            value={profileData.companyName}
                            onChange={(e) =>
                              handleInputChange("companyName", e.target.value)
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                            placeholder="Company name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
                            Company Website
                          </label>
                          <input
                            type="text"
                            value={profileData.companyWebsite}
                            onChange={(e) =>
                              handleInputChange(
                                "companyWebsite",
                                e.target.value
                              )
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                            placeholder="https://example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
                            Number of Employees
                          </label>
                          <select
                            value={profileData.numberOfEmployees}
                            onChange={(e) =>
                              handleInputChange(
                                "numberOfEmployees",
                                e.target.value
                              )
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                          >
                            <option>1-2</option>
                            <option>3-5</option>
                            <option>6-10</option>
                            <option>11-20</option>
                            <option>20+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
                            Active Since
                          </label>
                          <select
                            value={profileData.activeSince}
                            onChange={(e) =>
                              handleInputChange("activeSince", e.target.value)
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                          >
                            <option>- Select Year -</option>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
                            Business Type
                          </label>
                          <select
                            value={profileData.businessType}
                            onChange={(e) =>
                              handleInputChange("businessType", e.target.value)
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                          >
                            <option>Sole Trader</option>
                            <option>Partnership</option>
                            <option>Limited Company</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-2 uppercase">
                            Operating Radius
                            <a
                              href="#"
                              className="text-orange-500 text-sm font-normal hover:underline"
                            >
                              View on map
                            </a>
                          </label>
                          <select
                            value={profileData.operatingRadius}
                            onChange={(e) =>
                              handleInputChange(
                                "operatingRadius",
                                e.target.value
                              )
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                          >
                            <option>Up to 10 minutes away</option>
                            <option>Up to 30 minutes away</option>
                            <option>Up to 45 minutes away</option>
                            <option>Up to 1 hour away</option>
                          </select>
                        </div>
                      </div>

                      <button className="px-8 py-3 bg-orange-500 text-white font-bold cursor-pointer rounded hover:bg-orange-600 transition">
                        Save changes
                      </button>
                    </div>
                    <div className="space-y-8 mt-10">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="text-gray-700 font-semibold text-lg">
                              Job gallery
                            </h3>
                            <span className="text-orange-500 text-sm font-semibold">
                              0% complete
                            </span>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <label className="bg-gray-100 border-2 border-dashed border-gray-300 rounded p-12 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                              />
                              <svg
                                className="w-12 h-12 text-gray-400 mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                              </svg>
                              <p className="text-gray-500 font-semibold text-center">
                                UPLOAD AN IMAGE
                              </p>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="bg-gray-50 rounded p-6">
                          <h3 className="text-gray-700 font-semibold text-lg mb-6">
                            Web profiles
                          </h3>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
                                Twitter URL
                              </label>
                              <input
                                type="text"
                                value={profileData.twitterUrl}
                                onChange={(e) =>
                                  handleInputChange(
                                    "twitterUrl",
                                    e.target.value
                                  )
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                                placeholder="Your Profile"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
                                Facebook URL
                              </label>
                              <input
                                type="text"
                                value={profileData.facebookUrl}
                                onChange={(e) =>
                                  handleInputChange(
                                    "facebookUrl",
                                    e.target.value
                                  )
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                                placeholder="Your Profile"
                              />
                            </div>
                          </div>

                          <div className="mt-8">
                            <button className="px-8 py-3 bg-orange-500 text-white cursor-pointer font-bold rounded hover:bg-orange-600 transition">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8 mt-2">
                      <div className="bg-gray-50 rounded p-6">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-gray-700 font-semibold text-lg">
                            Home address
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-green-600 font-semibold text-sm">
                              100% complete
                            </span>
                            <svg
                              className="w-6 h-6 text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-6">
                          We'll use your home address to contact you and verify
                          your identity. Changing your home address will require
                          a verification check.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
                              Address Line 1
                            </label>
                            <input
                              type="text"
                              value={profileData.addressLine1}
                              onChange={(e) =>
                                handleInputChange(
                                  "addressLine1",
                                  e.target.value
                                )
                              }
                              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                              placeholder="Address line 1"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
                              Address Line 2
                            </label>
                            <input
                              type="text"
                              value={profileData.addressLine2}
                              onChange={(e) =>
                                handleInputChange(
                                  "addressLine2",
                                  e.target.value
                                )
                              }
                              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                              placeholder="Address line 2"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
                              Postal Town
                            </label>
                            <input
                              type="text"
                              value={profileData.postalTown}
                              onChange={(e) =>
                                handleInputChange("postalTown", e.target.value)
                              }
                              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                              placeholder="Postal town"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
                              County
                            </label>
                            <input
                              type="text"
                              value={profileData.county}
                              onChange={(e) =>
                                handleInputChange("county", e.target.value)
                              }
                              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                              placeholder="County"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
                              Postcode
                            </label>
                            <input
                              type="text"
                              value={profileData.postcode}
                              onChange={(e) =>
                                handleInputChange("postcode", e.target.value)
                              }
                              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                              placeholder="Postcode"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase">
                              Country
                            </label>
                            <input
                              type="text"
                              value={profileData.country}
                              onChange={(e) =>
                                handleInputChange("country", e.target.value)
                              }
                              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                              placeholder="Country"
                            />
                          </div>
                        </div>

                        <button className="mt-6 px-8 py-3 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition">
                          Change Home Address
                        </button>
                      </div>

                      <div className="bg-gray-50 rounded p-6">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-gray-700 font-semibold text-lg">
                            Business address
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-green-600 font-semibold text-sm">
                              100% complete
                            </span>
                            <svg
                              className="w-6 h-6 text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={profileData.businessAddressSame}
                            onChange={() =>
                              handleCheckboxChange("businessAddressSame")
                            }
                            className="w-5 h-5 rounded accent-orange-500"
                          />
                          <span className="text-orange-500 font-bold text-sm uppercase">
                            Same as my home address
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "categories" && <Categories />}
                {activeTab === "locations" && <Locations />}
                {activeTab === "preferences" && <Preferences />}
                {activeTab === "login" && <Login />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
