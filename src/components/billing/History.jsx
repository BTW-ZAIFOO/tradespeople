import React from "react";

const History = () => {
  const history = [
    {
      id: 1,
      date: "2025-10-20 10:30 AM",
      action: "Card Added",
      details: "Visa ending in 4242",
      status: "Completed",
    },
    {
      id: 2,
      date: "2025-10-18 02:15 PM",
      action: "Payment Processed",
      details: "Invoice INV-001",
      status: "Completed",
    },
    {
      id: 3,
      date: "2025-10-15 09:45 AM",
      action: "Job Posted",
      details: "Plumbing Service - $49.99",
      status: "Completed",
    },
    {
      id: 4,
      date: "2025-10-10 04:20 PM",
      action: "Promotional Code Applied",
      details: "SAVE10 - $10.00 credit",
      status: "Completed",
    },
    {
      id: 5,
      date: "2025-10-05 01:00 PM",
      action: "Card Verification",
      details: "Mastercard ending in 5555",
      status: "Completed",
    },
  ];

  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing History</h2>

      {history.length > 0 ? (
        <div className="space-y-3">
          {history.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.action}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.details}</p>
                </div>
                <div className="text-right ml-4">
                  <p className="text-xs text-gray-500">{item.date}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No history found.</p>
        </div>
      )}
    </div>
  );
};

export default History;
