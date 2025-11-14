import React from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/mytradelinks-logo.png'; 

const Sidebar = ({ closeSidebar }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const handleLinkClick = () => { if (closeSidebar) closeSidebar(); };

  return (
    <div className="w-full lg:w-64 bg-white shadow-lg h-screen overflow-y-auto flex flex-col">
      {/* Logo Section */}
      <div className="p-4 lg:p-6 border-b flex items-start justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
          <img
            src={logo}
            alt="MyTradeLinks Logo"
            className="w-90 h-30 object-contain -mt-9" 
          />
        </Link>
        
        {/* Close Button - Mobile Only */}
        <button
          onClick={closeSidebar}
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
          aria-label="Close sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* User Section */}
      <div className="px-4 lg:px-6 py-3 lg:py-9 border-b">
        <div className="flex flex-col items-center -mt-5"> 
          <div className="w-16 lg:w-24 h-16 lg:h-24 bg-gray-200 rounded-full mb-2 flex items-center justify-center shrink-0">
            <svg className="w-10 lg:w-16 h-10 lg:h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2 text-center text-sm lg:text-base">USMAN MUNEER</h3>
          <div className="flex space-x-2">
            {/* Edit Button */}
            <button className="p-1.5 bg-[#40D4E8] rounded-full text-white hover:bg-[#00A896]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>

            {/* Image Upload Button */}
            <button className="p-1.5 bg-[#00A896] rounded-full text-white hover:bg-[#009B7D]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>

            {/* Settings Button */}
            <button className="p-1.5 bg-[#009B7D] rounded-full text-white hover:bg-[#00A896]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        {/* Dashboard Link */}
        <Link
          to="/dashboard"
          onClick={handleLinkClick}
          className={`flex items-center px-6 py-3 text-gray-700 hover:bg-[#E6FCF8] ${
            isActive('/dashboard') ? 'bg-[#E6FCF8] border-l-4 border-[#00A896]' : ''
          }`}
        >
          <svg className="w-5 h-5 mr-2 text-[#00A896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9v9a3 3 0 01-3 3h-3a3 3 0 01-3-3v-3H9v3a3 3 0 01-3 3H3a3 3 0 01-3-3v-9z" />
          </svg>
          Dashboard
        </Link>

        {/* Other Links */}
        <div className="px-4 lg:px-6 py-2 mt-2 lg:mt-0">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">MANAGE</h3>
        </div>

        {[ 
          { path: '/dashboard/jobs', label: 'Jobs' },
          { path: '/dashboard/reviews', label: 'Reviews' },
          { path: '/dashboard/credits', label: 'Credits' },
          { path: '/dashboard/membership', label: 'Membership' },
          { path: '/dashboard/addons', label: 'Addons' },
          { path: '/dashboard/billing', label: 'Billing' },
          { path: '/dashboard/settings', label: 'Settings' },
        ].map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            onClick={handleLinkClick}
            className={`flex items-center px-4 lg:px-6 py-3 text-gray-700 hover:bg-[#E6FCF8] ${
              isActive(path) ? 'bg-[#E6FCF8] border-l-4 border-[#009B7D]' : ''
            }`}
          >
            {label}
          </Link>
        ))}

        <div className="px-4 lg:px-6 py-2 mt-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">HELP</h3>
        </div>

        {[
          { path: '/dashboard/support', label: 'Support' },
          { path: '/dashboard/faq', label: 'FAQ' },
        ].map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            onClick={handleLinkClick}
            className={`flex items-center px-4 lg:px-6 py-3 text-gray-700 hover:bg-[#E6FCF8] ${
              isActive(path) ? 'bg-[#E6FCF8] border-l-4 border-[#40D4E8]' : ''
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
