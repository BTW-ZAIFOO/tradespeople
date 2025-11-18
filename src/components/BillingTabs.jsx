import React, { useState } from 'react';
import PaymentMethods from './billing/PaymentMethods';
import Invoices from './billing/Invoices';
import Charges from './billing/Charges';
import History from './billing/History';

const BillingTabs = ({ activeTab: initialTab = 'payment' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    { id: 'payment', label: 'Payment Methods', icon: '💳' },
    { id: 'invoices', label: 'Invoices', icon: '📄' },
    { id: 'charges', label: 'Charges', icon: '📊' },
    { id: 'history', label: 'History', icon: '⏱️' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'payment':
        return <PaymentMethods />;
      case 'invoices':
        return <Invoices />;
      case 'charges':
        return <Charges />;
      case 'history':
        return <History />;
      default:
        return <PaymentMethods />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium text-sm transition-colors border-b-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default BillingTabs;
