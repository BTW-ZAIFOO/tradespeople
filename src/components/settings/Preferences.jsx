import React, { useState } from 'react';

const Preferences = () => {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    newJobAlerts: true,
    weeklyNewsletter: true,
    marketingEmails: false,
    profilePublic: true,
    allowMessaging: true
  });

  const handlePreferenceChange = (field) => {
    setPreferences({
      ...preferences,
      [field]: !preferences[field]
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Preferences</h2>

      <p className="text-gray-600 mb-8">
        Control how you receive notifications and manage your profile visibility.
      </p>

      {/* Notifications Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="font-semibold text-gray-700 mb-4">Notification Settings</h3>
        <div className="space-y-4">
          <label className="flex items-center p-4 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="checkbox"
              checked={preferences.emailNotifications}
              onChange={() => handlePreferenceChange('emailNotifications')}
              className="w-5 h-5 accent-orange-500"
            />
            <div className="ml-4">
              <p className="font-semibold text-gray-700">Email Notifications</p>
              <p className="text-sm text-gray-600">Receive job alerts and updates via email</p>
            </div>
          </label>

          <label className="flex items-center p-4 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="checkbox"
              checked={preferences.smsNotifications}
              onChange={() => handlePreferenceChange('smsNotifications')}
              className="w-5 h-5 accent-orange-500"
            />
            <div className="ml-4">
              <p className="font-semibold text-gray-700">SMS Notifications</p>
              <p className="text-sm text-gray-600">Receive important alerts via text message</p>
            </div>
          </label>

          <label className="flex items-center p-4 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="checkbox"
              checked={preferences.newJobAlerts}
              onChange={() => handlePreferenceChange('newJobAlerts')}
              className="w-5 h-5 accent-orange-500"
            />
            <div className="ml-4">
              <p className="font-semibold text-gray-700">New Job Alerts</p>
              <p className="text-sm text-gray-600">Get notified when new matching jobs are posted</p>
            </div>
          </label>

          <label className="flex items-center p-4 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="checkbox"
              checked={preferences.weeklyNewsletter}
              onChange={() => handlePreferenceChange('weeklyNewsletter')}
              className="w-5 h-5 accent-orange-500"
            />
            <div className="ml-4">
              <p className="font-semibold text-gray-700">Weekly Newsletter</p>
              <p className="text-sm text-gray-600">Receive a weekly digest of opportunities</p>
            </div>
          </label>

          <label className="flex items-center p-4 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="checkbox"
              checked={preferences.marketingEmails}
              onChange={() => handlePreferenceChange('marketingEmails')}
              className="w-5 h-5 accent-orange-500"
            />
            <div className="ml-4">
              <p className="font-semibold text-gray-700">Marketing Emails</p>
              <p className="text-sm text-gray-600">Receive promotional offers and special deals</p>
            </div>
          </label>
        </div>
      </div>

      {/* Privacy Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="font-semibold text-gray-700 mb-4">Privacy Settings</h3>
        <div className="space-y-4">
          <label className="flex items-center p-4 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="checkbox"
              checked={preferences.profilePublic}
              onChange={() => handlePreferenceChange('profilePublic')}
              className="w-5 h-5 accent-orange-500"
            />
            <div className="ml-4">
              <p className="font-semibold text-gray-700">Public Profile</p>
              <p className="text-sm text-gray-600">Allow others to view your profile and services</p>
            </div>
          </label>

          <label className="flex items-center p-4 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="checkbox"
              checked={preferences.allowMessaging}
              onChange={() => handlePreferenceChange('allowMessaging')}
              className="w-5 h-5 accent-orange-500"
            />
            <div className="ml-4">
              <p className="font-semibold text-gray-700">Allow Messaging</p>
              <p className="text-sm text-gray-600">Allow customers to message you directly</p>
            </div>
          </label>
        </div>
      </div>

      <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition cursor-pointer">
        Save Preferences
      </button>
    </div>
  );
};

export default Preferences;
