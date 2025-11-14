import React from 'react';
import QuickAccessCards from '../components/dashboard/QuickAccessCards';

const MembershipPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="max-w-7xl mx-auto">
        {/* Quick Access Cards */}
        <QuickAccessCards />

        {/* My Membership Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">My Membership</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Subscription Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-6">Subscription</h3>
              
              <div className="space-y-6">
                {/* Subscription Package */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-600">Your Subscription Package:</span>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-800">STANDARD PACKAGE</p>
                      <p className="text-sm text-gray-600">
                        £39.00<span className="text-xs">+VAT</span> per month
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">35 credits per month, 3 trade categories</p>
                  <p className="text-sm text-gray-600">
                    Begins once <span className="text-orange-500">verified</span>
                  </p>
                  <button className="text-orange-500 text-sm mt-2 hover:underline">
                    Manage package
                  </button>
                </div>

                {/* Credits */}
                <div className="pt-6 border-t">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-600">Credits:</span>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-700">0 remaining credits</p>
                    </div>
                  </div>
                  <button className="text-orange-500 text-sm mt-2 hover:underline">
                    Add credits
                  </button>
                </div>

                {/* Categories */}
                <div className="pt-6 border-t">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-600">Categories:</span>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-700">1 trade category</p>
                      <p className="text-sm text-gray-600">Gardener</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-6">Billing</h3>
              
              <div className="space-y-6">
                {/* Payment Method */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-600">Payment Method:</span>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-700">No method added</p>
                    </div>
                  </div>
                  <button className="text-orange-500 text-sm mt-2 hover:underline">
                    Change
                  </button>
                </div>

                {/* Manage Billing Button */}
                <div className="pt-6">
                  <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
                    Manage Billing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
