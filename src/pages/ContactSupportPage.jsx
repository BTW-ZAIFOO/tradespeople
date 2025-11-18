import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuickAccessCards from "../components/dashboard/QuickAccessCards";

const ContactSupportPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "normal",
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Your message has been sent. We'll get back to you within 24 hours.");
    navigate("/dashboard/support");
  };

  return (
    <div className="bg-gray-50 min-h-full">
      
       {/* Quick Access Cards */}
        <QuickAccessCards />
      <div className="max-w-6xl mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:support@MyTradeLinks.com"
                    className="text-orange-500 hover:text-orange-600 font-medium"
                  >
                    support@MyTradeLinks.com
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+441234567890"
                    className="text-orange-500 hover:text-orange-600 font-medium"
                  >
                    +44 (0) 1234 567890
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Hours
                  </p>
                  <p className="text-gray-600 text-sm">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Office
                  </p>
                  <p className="text-gray-600 text-sm">
                    MyTradeLinks Ltd
                    <br />
                    123 Business Street
                    <br />
                    London, UK
                    <br />
                    SW1A 1AA
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Response Time
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We aim to respond to all inquiries within 24 hours during
                business hours.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="text-orange-500 font-bold mr-2">⚡</span>
                  <span className="text-gray-600">Urgent: 2-4 hours</span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-500 font-bold mr-2">🔔</span>
                  <span className="text-gray-600">High: 4-8 hours</span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-500 font-bold mr-2">📝</span>
                  <span className="text-gray-600">Normal: 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-6">
                <button
                  onClick={() => navigate("/dashboard/support")}
                  className="text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-2 mb-4 cursor-pointer"
                >
                  ← Back to Support
                </button>
                <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
                <p className="text-gray-600 mt-2">
                  Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    placeholder="What is this about?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Priority
                  </label>
                  <select
                    value={formData.priority}
                    onChange={(e) =>
                      handleInputChange("priority", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  >
                    <option value="low">Low - General inquiry</option>
                    <option value="normal">Normal - Regular issue</option>
                    <option value="high">High - Urgent matter</option>
                    <option value="urgent">Urgent - Time sensitive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Please describe your issue in detail..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 resize-none h-40"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition cursor-pointer"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/dashboard/support")}
                    className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>

              {/* Help Tips */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Helpful Tips
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    • Be as detailed as possible to help us understand your
                    issue
                  </li>
                  <li>
                    • Include relevant order or account details if applicable
                  </li>
                  <li>• Attach screenshots or documents if needed</li>
                  <li>
                    • Mark urgent issues appropriately for faster response
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupportPage;
