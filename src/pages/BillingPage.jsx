import React, { useState } from 'react';
import QuickAccessCards from '../components/dashboard/QuickAccessCards';
import BillingTabs from '../components/BillingTabs';
import Promotions from '../components/billing/Promotions';

const BillingPage = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const billingCategories = [
    {
      id: 'payment',
      title: 'PAYMENT',
      icon: (
        <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      path: '/dashboard/billing/payment'
    },
    {
      id: 'invoices',
      title: 'INVOICES',
      icon: (
        <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      path: '/dashboard/billing/invoices'
    },
    {
      id: 'charges',
      title: 'CHARGES',
      icon: (
        <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      path: '/dashboard/billing/charges'
    },
    {
      id: 'history',
      title: 'HISTORY',
      icon: (
        <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      path: '/dashboard/billing/history'
    },
    {
      id: 'promotions',
      title: 'PROMOTIONS',
      icon: (
        <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      ),
      path: '/dashboard/billing/promotions'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="max-w-7xl mx-auto">
        {/* Quick Access Cards */}
        <QuickAccessCards />

        {selectedTab ? (
          // Show tabs when a category is selected
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <button
                onClick={() => setSelectedTab(null)}
                className="text-orange-500 hover:text-orange-600 font-semibold mb-4 flex items-center gap-2"
              >
                ← Back to Billing
              </button>
            </div>
            <div className="p-8">
              {selectedTab === 'promotions' ? (
                <Promotions />
              ) : (
                <BillingTabs activeTab={selectedTab} />
              )}
            </div>
          </div>
        ) : (
          // Show billing categories grid
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-700 mb-3">My Billing</h1>
              <p className="text-gray-600">
                Manage your payment methods, invoices, charges and billing history.
              </p>
            </div>

            {/* Billing Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {billingCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTab(category.id)}
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-8 flex flex-col items-center justify-center transition group"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                    {category.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingPage;
