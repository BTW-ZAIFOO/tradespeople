import React from "react";

const Charges = () => {
  const charges = [
    {
      id: 1,
      date: "2025-10-20",
      description: "Job Posting Fee - Plumbing",
      amount: "-$49.99",
      type: "charge",
    },
    {
      id: 2,
      date: "2025-10-18",
      description: "Featured Job Listing",
      amount: "-$25.00",
      type: "charge",
    },
    {
      id: 3,
      date: "2025-10-15",
      description: "Promotional Credit Applied",
      amount: "+$10.00",
      type: "credit",
    },
    {
      id: 4,
      date: "2025-10-10",
      description: "Job Posting Fee - Electrical",
      amount: "-$49.99",
      type: "charge",
    },
  ];

  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Charges</h2>

      {charges.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">
                  Date
                </th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">
                  Description
                </th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {charges.map((charge) => (
                <tr
                  key={charge.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-3 text-gray-600">{charge.date}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {charge.description}
                  </td>
                  <td
                    className={`px-4 py-3 font-semibold ${
                      charge.type === "charge"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {charge.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No charges found.</p>
        </div>
      )}
    </div>
  );
};

export default Charges;
