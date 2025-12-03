import React, { useState } from "react";

const Promotions = () => {
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromotions, setAppliedPromotions] = useState([
    {
      id: 1,
      promotion: "Free Trial Month",
      claimed: "31st Oct 2025",
      status: "Claimed",
    },
  ]);

  const handleSubmitCode = (e) => {
    e.preventDefault();
    if (promoCode.trim()) {
      setAppliedPromotions([
        ...appliedPromotions,
        {
          id: appliedPromotions.length + 1,
          promotion: promoCode,
          claimed: new Date().toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          status: "Claimed",
        },
      ]);
      setPromoCode("");
    }
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">My Promotions</h2>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <p className="text-gray-600 mb-6">
          Please enter your promotion code below to redeem.
        </p>

        <form onSubmit={handleSubmitCode} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition cursor-pointer"
          >
            Submit code
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">
          Claimed Promotions
        </h3>

        {appliedPromotions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Promotion
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Claimed
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {appliedPromotions.map((promo) => (
                  <tr
                    key={promo.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 text-gray-600">
                      {promo.promotion}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{promo.claimed}</td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                        {promo.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No promotions claimed yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Promotions;
