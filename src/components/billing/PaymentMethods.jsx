import React, { useState } from "react";

const PaymentMethods = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleAddCard = (e) => {
    e.preventDefault();
    console.log("Card added:", {
      cardName,
      cardNumber,
      expiryDate,
      cvc,
      postcode,
    });
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add a Card</h2>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p className="text-gray-700 mb-2">
          In order to purchase jobs from us, we require that your account has an
          active billable debit or credit card.
        </p>
        <p className="text-gray-600">
          For more information, check out our{" "}
          <a href="#" className="text-orange-500 hover:text-orange-600">
            frequently asked questions
          </a>
          .
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">
          CARDS WE ACCEPT
        </h3>
        <div className="flex gap-4 items-center">
          <img
            src="https://via.placeholder.com/50?text=VISA"
            alt="Visa"
            className="h-10"
          />
          <img
            src="https://via.placeholder.com/50?text=MASTERCARD"
            alt="Mastercard"
            className="h-10"
          />
          <img
            src="https://via.placeholder.com/50?text=AMEX"
            alt="Amex"
            className="h-10"
          />
          <div className="ml-auto">
            <div className="flex items-center gap-2 bg-green-100 p-2 rounded text-xs font-semibold text-green-700">
              🔒 SSL Secure Connection
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleAddCard}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            NAME ON CARD
          </label>
          <input
            type="text"
            placeholder="Name on card"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            16 DIGIT CARD NUMBER
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="16 digit card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded cursor-pointer"
            >
              Autofill link
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              EXPIRY DATE
            </label>
            <input
              type="text"
              placeholder="mm / yy"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              CVC NUMBER
            </label>
            <input
              type="text"
              placeholder="Last 3 on back of card"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            POSTCODE
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="button"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition cursor-pointer"
        >
          Add Card
        </button>
      </form>
    </div>
  );
};

export default PaymentMethods;
