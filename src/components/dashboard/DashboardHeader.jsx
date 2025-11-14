import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/iconlogo2.fw.png';


const DashboardHeader = ({ toggleSidebar, sidebarOpen }) => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  return (
    <header className="w-full bg-white border-b-2 border-gray-200 sticky top-0 z-20">
      <div className="flex flex-col">
        {/* Top Row - Logo and Hamburger */}
        <div className="flex items-center justify-between px-3 lg:px-6 py-3 border-b border-gray-100">
          <div className="flex items-center space-x-2 lg:space-x-6">
            {/* Hamburger Menu - Mobile Only */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Mobile Logo */}
            <Link to="/" className="lg:hidden flex items-center gap-2">
              <img src={logoImage} alt="Logo" className="h-6 w-auto" />
              <span className="text-sm font-bold">
                <span style={{ color: 'rgb(255,48,0)' }}>my</span>
                <span style={{ color: '#2875d7' }}>job</span>
                <span style={{ color: 'rgb(255,48,0)' }}>quote</span>
              </span>
            </Link>

            {/* Desktop Navigation - Logo only on mobile */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link 
                to="/dashboard" 
                className="text-gray-700 font-medium hover:text-blue-500 transition"
              >
                Dashboard
              </Link>
              <Link 
                to="/dashboard/jobs" 
                className="text-gray-700 font-medium hover:text-blue-500 transition"
              >
                Jobs
              </Link>
            </div>
          </div>

          {/* Right: Notifications & Account - Desktop Only */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Notification Bell */}
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Account Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowAccountMenu(!showAccountMenu)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <span className="font-medium">Account</span>
                <svg className={`w-4 h-4 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showAccountMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link to="/dashboard/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition text-sm">
                    Profile
                  </Link>
                  <Link to="/dashboard/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition text-sm">
                    Settings
                  </Link>
                  <hr className="my-2" />
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition text-sm">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="lg:hidden flex items-center justify-around border-t border-gray-100 bg-gray-50">
          <Link 
            to="/dashboard"
            className="flex-1 flex flex-col items-center justify-center py-3 text-gray-600 hover:text-blue-500 hover:bg-gray-100 transition border-b-2 border-transparent hover:border-blue-500"
          >
            <svg className="w-5 h-5 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs">Dashboard</span>
          </Link>

          <Link 
            to="/dashboard/jobs"
            className="flex-1 flex flex-col items-center justify-center py-3 text-gray-600 hover:text-blue-500 hover:bg-gray-100 transition border-b-2 border-transparent hover:border-blue-500"
          >
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">Jobs</span>
          </Link>

          <Link 
            to="/dashboard/settings"
            className="flex-1 flex flex-col items-center justify-center py-3 text-gray-600 hover:text-blue-500 hover:bg-gray-100 transition border-b-2 border-transparent hover:border-blue-500"
          >
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            <span className="text-xs">Settings</span>
          </Link>

          <button className="flex-1 flex flex-col items-center justify-center py-3 text-gray-600 hover:text-blue-500 hover:bg-gray-100 transition border-b-2 border-transparent hover:border-blue-500 relative">
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="text-xs">Alerts</span>
          </button>

          <button
            onClick={toggleSidebar}
            className="flex-1 flex flex-col items-center justify-center py-3 text-gray-600 hover:text-blue-500 hover:bg-gray-100 transition border-b-2 border-transparent hover:border-blue-500"
            aria-label="Toggle sidebar"
          >
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-xs">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
