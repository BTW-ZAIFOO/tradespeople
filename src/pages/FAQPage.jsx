import React, { useState } from "react";
import QuickAccessCards from "../components/dashboard/QuickAccessCards";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "How do I create an account?",
          answer:
            'Visit our website and click "Sign Up". Fill in your details and verify your email address. Once verified, your account is ready to use.',
        },
        {
          question: "What information do I need to provide?",
          answer:
            "You need to provide your company name, contact details, trade categories, and service locations. The more information you provide, the better customers can find you.",
        },
        {
          question: "Is there a fee to join?",
          answer:
            "No, registration is free. You only pay when you perform work or use premium services. Check our pricing page for details on membership plans.",
        },
      ],
    },
    {
      title: "Jobs & Projects",
      faqs: [
        {
          question: "How do I post a job?",
          answer:
            'Go to the Jobs section and click "Create New Job". Fill in the project details, upload images, set your budget, and submit. Tradespeople will start sending quotes immediately.',
        },
        {
          question: "Can I edit a job after posting?",
          answer:
            "Yes, you can edit job details until a quote is accepted. Once work begins, you can only make minor updates through support.",
        },
        {
          question: "How are quotes submitted?",
          answer:
            "Tradespeople can submit quotes through the platform. You can compare quotes, read reviews, and communicate with them before hiring.",
        },
        {
          question: "What if I don't get any quotes?",
          answer:
            "Make sure your job details are clear and you've selected the right categories. You can also increase the budget or extend the posting to get more interest.",
        },
      ],
    },
    {
      title: "Payments & Billing",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept Visa, Mastercard, and American Express. All payments are processed securely through our payment gateway.",
        },
        {
          question: "When will I be charged?",
          answer:
            "Charges depend on your membership plan. Premium features are charged when activated. You can view your billing history in the Billing section.",
        },
        {
          question: "Can I get a refund?",
          answer:
            "Refunds are available within 7 days for unused services. Contact our support team if you need assistance with refunds.",
        },
        {
          question: "How do I update my payment method?",
          answer:
            "Go to Billing > Payment Methods and add or update your card details. You can also set a default payment method.",
        },
      ],
    },
    {
      title: "Account & Profile",
      faqs: [
        {
          question: "How do I update my profile?",
          answer:
            "Navigate to Settings > Profile to edit your company information, upload images, update your description, and modify your business details.",
        },
        {
          question: "Can I change my email address?",
          answer:
            "Yes, go to Settings > Login & Security to change your email. You'll need to verify the new email address before the change takes effect.",
        },
        {
          question: "How do I change my password?",
          answer:
            'Go to Settings > Login & Security and click "Change Password". Enter your current password and your new password.',
        },
        {
          question: "What is two-factor authentication?",
          answer:
            "Two-factor authentication adds an extra security layer to your account. You can enable it in Settings > Login & Security.",
        },
      ],
    },
    {
      title: "Support & Disputes",
      faqs: [
        {
          question: "How do I report a problem?",
          answer:
            'Go to Support and select "Dispute a Job". Provide details about the issue, and our team will investigate and help resolve it.',
        },
        {
          question: "What if there's a quality issue with work?",
          answer:
            "You can file a dispute within 14 days of job completion. Our team will review the work and help reach a fair resolution.",
        },
        {
          question: "How long does a dispute take?",
          answer:
            "Most disputes are reviewed within 5-7 business days. You'll receive updates on your ticket status through the Support section.",
        },
        {
          question: "How do I contact support?",
          answer:
            "You can reach support through the Support page, live chat, or email. We typically respond within 24 hours.",
        },
      ],
    },
    {
      title: "Trust & Safety",
      faqs: [
        {
          question: "Is my information secure?",
          answer:
            "Yes, we use SSL encryption and follow industry-standard security practices. Your payment and personal information are protected.",
        },
        {
          question: "Can I leave reviews?",
          answer:
            "Yes, after a job is completed, both customers and tradespeople can leave reviews. Reviews help build trust and improve the platform.",
        },
        {
          question: "What if I spot suspicious activity?",
          answer:
            "Report it immediately through the Support section. Our team investigates all reports and takes action against fraudulent accounts.",
        },
        {
          question: "How is data privacy handled?",
          answer:
            "We comply with data protection regulations. Your data is only used for platform operations and will never be shared with third parties without consent.",
        },
      ],
    },
  ];

  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    faqs: category.faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="bg-gray-50 min-h-full">

      {/* Quick Access Cards */}
      <QuickAccessCards />
      <div className="max-w-6xl mx-auto p-8">
        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600">
              Find answers to common questions about MyTradeLinks
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {filteredCategories.map(
              (category, idx) =>
                category.faqs.length > 0 && (
                  <div key={idx}>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-orange-500">
                      {category.title}
                    </h2>

                    <div className="space-y-3">
                      {category.faqs.map((faq, faqIdx) => (
                        <details
                          key={faqIdx}
                          className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition group"
                        >
                          <summary className="flex items-center justify-between font-semibold text-gray-800">
                            <span>{faq.question}</span>
                            <svg
                              className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform shrink-0 ml-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                              />
                            </svg>
                          </summary>
                          <p className="text-gray-600 mt-4 leading-relaxed">
                            {faq.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>
                )
            )}

            {searchTerm &&
              filteredCategories.every((cat) => cat.faqs.length === 0) && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No FAQs found matching your search.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Try different keywords or contact support.
                  </p>
                </div>
              )}
          </div>

          {/* Still Have Questions Section */}
          <div className="mt-12 pt-8 border-t border-gray-200 bg-blue-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Can't find the answer you're looking for? Our support team is here
              to help.
            </p>
            <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition cursor-pointer">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
