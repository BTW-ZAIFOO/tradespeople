import React, { useState } from 'react';
import QuickAccessCards from '../components/dashboard/QuickAccessCards';

const ReviewsPage = () => {
  const [activeTab, setActiveTab] = useState('awaiting');

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="max-w-7xl mx-auto">
        {/* Quick Access Cards */}
        <QuickAccessCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - My Reviews */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-6">My Reviews</h2>
              
              <div className="flex flex-col items-center justify-center py-8">
                <svg className="w-24 h-24 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                
                <h3 className="text-5xl font-bold text-gray-800 mb-2">0</h3>
                <p className="text-gray-500 uppercase text-sm tracking-wide">STAR RATING</p>
              </div>

              <div className="mt-6 pt-6 border-t text-center text-sm text-gray-600">
                <p>The more positive reviews you receive, the more work you win!</p>
              </div>
            </div>

            {/* Homeowner Reviews */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <div className="flex flex-col items-center justify-center py-8">
                <svg className="w-24 h-24 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                
                <h3 className="text-5xl font-bold text-gray-800 mb-2">0</h3>
                <p className="text-gray-500 uppercase text-sm tracking-wide">HOMEOWNER REVIEWS</p>
              </div>
            </div>
          </div>

          {/* Right Section - Tabs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Tabs */}
              <div className="flex border-b">
                <button
                  onClick={() => setActiveTab('awaiting')}
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    activeTab === 'awaiting'
                      ? 'border-b-2 border-gray-700 text-gray-700'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Awaiting Review
                </button>
                <button
                  onClick={() => setActiveTab('reviewed')}
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    activeTab === 'reviewed'
                      ? 'border-b-2 border-gray-700 text-gray-700'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Reviewed
                </button>
                <button
                  onClick={() => setActiveTab('references')}
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    activeTab === 'references'
                      ? 'border-b-2 border-orange-500 text-orange-500'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  References
                </button>
                
                {/* Star Icon */}
                <div className="flex items-center px-4">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === 'references' && (
                  <div>
                    <div className="mb-6">
                      <p className="text-gray-700 mb-4">
                        Ask your customers for a reference on work that you've carried out recently outside of MyJobQuote. You can ask upto 5 customers for a reference and we will display 2 on your profile.
                      </p>
                      <p className="text-gray-700 mb-6">
                        Your references should not be from friends or family.
                      </p>
                      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
                        Request Review
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'awaiting' && (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No reviews awaiting at the moment.</p>
                  </div>
                )}

                {activeTab === 'reviewed' && (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No reviewed items yet.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
