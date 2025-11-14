import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuickAccessCards from '../components/dashboard/QuickAccessCards';

const DisputePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobId: '',
    tradespeople: '',
    issueType: '',
    description: '',
    attachment: null
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        attachment: file
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Dispute submitted. Our team will review it shortly.');
    navigate('/dashboard/support');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="max-w-4xl mx-auto">
        {/* Quick Access Cards */}
        <QuickAccessCards />

        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/dashboard/support')}
              className="text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-2 mb-4"
            >
              ← Back to Support
            </button>
            <h1 className="text-3xl font-bold text-gray-800">Dispute a Job</h1>
            <p className="text-gray-600 mt-2">
              If you're experiencing issues with a completed job, please provide details below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Job Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Job Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job ID / Reference
                  </label>
                  <input
                    type="text"
                    value={formData.jobId}
                    onChange={(e) => handleInputChange('jobId', e.target.value)}
                    placeholder="Enter your job ID"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tradesperson Name
                  </label>
                  <input
                    type="text"
                    value={formData.tradespeople}
                    onChange={(e) => handleInputChange('tradespeople', e.target.value)}
                    placeholder="Enter tradesperson's name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Issue Details */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Issue Details</h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Issue Type
                </label>
                <select
                  value={formData.issueType}
                  onChange={(e) => handleInputChange('issueType', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  required
                >
                  <option value="">Select an issue type</option>
                  <option value="quality">Poor Quality Work</option>
                  <option value="incomplete">Incomplete Work</option>
                  <option value="damage">Damage or Injury</option>
                  <option value="missed-deadline">Missed Deadline</option>
                  <option value="overcharge">Overcharge / Price Dispute</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Describe the Issue
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Please provide detailed information about the issue..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 resize-none h-32"
                  required
                />
              </div>
            </div>

            {/* Evidence */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Evidence</h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Photos or Documents (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                    accept="image/*,.pdf,.doc,.docx"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="text-gray-600 font-medium">
                      {formData.attachment ? formData.attachment.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF up to 10MB</p>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
              >
                Submit Dispute
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard/support')}
                className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Information Box */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">What Happens Next?</h3>
            <ul className="text-blue-800 space-y-2 text-sm">
              <li>• Our support team will review your dispute within 5-7 business days</li>
              <li>• We may contact you or the tradesperson for additional information</li>
              <li>• You'll receive updates on your ticket status via email</li>
              <li>• We aim to reach a fair resolution for all parties</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisputePage;
