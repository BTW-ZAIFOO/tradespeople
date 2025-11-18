import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/mytradelinks-logo.png";

const tradesList = [
  "Aerial / Network Specialist",
  "Architect",
  "Bathroom Specialist",
  "Bricklayer",
  "Builder",
  "Carpenter / Joiner",
  "Cleaner",
  "Drainage Specialist",
  "Driveway Services",
  "Electrician",
  "Flooring Specialist",
  "Gardener / Garden Designer",
  "Handyman",
  "Heating Engineer",
  "Kitchen Specialist",
  "Locksmith",
  "Loft Conversion Specialist",
  "Metalworker",
  "Painter / Decorator",
  "Pest Control",
  "Plasterer / Renderer",
  "Plumber",
  "Removals",
  "Roofer",
  "Security Specialist",
  "Specialist Tradesman",
  "Stoneworker / Stonemason",
  "Swimming Pool Specialist",
  "Tiler",
  "Traditional Craftsman",
  "Tree Surgeon",
  "Window & Conservatory Specialist",
];

const SignupTradePage = () => {
  const [step, setStep] = useState(1);
  const [selectedTrades, setSelectedTrades] = useState([]);
  const [primaryTrade, setPrimaryTrade] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [companyHouseNumber, setCompanyHouseNumber] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ Insurance & Verification Fields
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [coverType, setCoverType] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [policyStartDate, setPolicyStartDate] = useState("");
  const [policyDocument, setPolicyDocument] = useState(null);
  const [idDocument, setIdDocument] = useState(null);

  const navigate = useNavigate();

  const handleTradeChange = (trade) => {
    if (selectedTrades.includes(trade)) {
      setSelectedTrades(selectedTrades.filter((t) => t !== trade));
    } else if (selectedTrades.length < 2) {
      setSelectedTrades([...selectedTrades, trade]);
    }
  };

  const handleCreateAccount = () => {
    setShowSuccess(true);
    setIsSubmitted(true);
    // Here you would also send the insurance and verification files to your backend
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-6 flex justify-center items-center bg-white shadow gap-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="MyTradeLinks Logo" className="h-25" />
          {/* <h1 className="text-3xl font-bold text-blue-600">
            my<span className="text-red-500">job</span>quote
          </h1> */}
        </Link>
      </header>

      {/* Steps Section */}
      <section className="w-full max-w-4xl mt-10 px-1.5 bg-white shadow rounded-lg flex flex-col md:flex-row text-center">
        {[
          "Find Jobs Near You",
          "Select Your Trades",
          "Primary Trade",
          "Job Leads (Email)",
          "Job Leads (SMS)",
          "Create Account",
        ].map((label, index) => (
          <div
            key={index}
            className={`flex-1 px-0.5 py-4 text-sm font-semibold border-b md:border-b-0 md:border-l ${
              step >= index + 1 ? "text-white" : "text-gray-500 border-gray-200"
            } ${
              index === 0 ? "rounded-t-lg md:rounded-l-lg md:border-l-0" : ""
            } ${index === 5 ? "rounded-b-lg md:rounded-r-lg" : ""}`}
            style={{
              backgroundColor: step >= index + 1 ? "#00A896" : "transparent",
            }}
          >
            {label}
          </div>
        ))}
      </section>

      {/* Step 1: Postcode */}
      {step === 1 && (
        <section className="w-full max-w-md mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Looking for more work?</h2>
          <p className="text-gray-600 mb-4">
            Enter your postcode to see jobs in your area for free!
          </p>
          <input
            type="text"
            placeholder="Enter your postcode"
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1 bg-gray-300 cursor-pointer text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              <ArrowLeft size={18} /> Back
            </button>

            <button
              onClick={() => setStep(2)}
              style={{ backgroundColor: "#40D4E8" }}
              className="text-white py-3 px-6 rounded-md font cursor-pointer-semibold hover:brightness-90 transition"
            >
              Continue
            </button>
          </div>
        </section>
      )}

      {/* Step 2: Trades */}
      {step === 2 && (
        <section className="w-full max-w-3xl mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            What type of trade are you?
          </h2>
          <p className="text-gray-600 mb-4">Select up to 2 trades.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-96 overflow-y-auto mb-4">
            {tradesList.map((trade) => (
              <label
                key={trade}
                className={`border p-2 rounded cursor-pointer flex items-center justify-between ${
                  selectedTrades.includes(trade)
                    ? "bg-blue-100 border-blue-400"
                    : "bg-white"
                }`}
              >
                <span>{trade}</span>
                <input
                  type="checkbox"
                  checked={selectedTrades.includes(trade)}
                  onChange={() => handleTradeChange(trade)}
                  className="ml-2"
                />
              </label>
            ))}
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-1 cursor-pointer bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              <ArrowLeft size={18} /> Back
            </button>
            <button
              disabled={selectedTrades.length === 0}
              onClick={() => setStep(3)}
              className={`px-4 py-2 rounded cursor-pointer font-semibold transition ${
                selectedTrades.length === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "text-white hover:brightness-90"
              }`}
              style={{
                backgroundColor:
                  selectedTrades.length === 0 ? "#D1D5DB" : "#40D4E8", // gray for disabled, custom blue for active
              }}
            >
              Continue
            </button>
          </div>
        </section>
      )}

      {/* Step 3: Primary Trade */}
      {step === 3 && (
        <section className="w-full max-w-3xl mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Tell us your primary trade
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto mb-4">
            {selectedTrades.map((trade) => (
              <label
                key={trade}
                className={`border p-2 rounded cursor-pointer flex items-center justify-between ${
                  primaryTrade === trade
                    ? "bg-blue-100 border-blue-400"
                    : "bg-white"
                }`}
              >
                <span>{trade}</span>
                <input
                  type="radio"
                  name="primaryTrade"
                  checked={primaryTrade === trade}
                  onChange={() => setPrimaryTrade(trade)}
                  className="ml-2"
                />
              </label>
            ))}
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setStep(2)}
              className="flex items-center gap-1 cursor-pointer bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              <ArrowLeft size={18} /> Back
            </button>
            <button
              disabled={!primaryTrade}
              onClick={() => setStep(4)}
              className={`px-4 py-2 rounded  cursor-pointer font-semibold transition ${
                !primaryTrade
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-white hover:brightness-90"
              }`}
              style={{
                backgroundColor: !primaryTrade ? "#D1D5DB" : "#40D4E8", // gray for disabled, custom blue for active
              }}
            >
              Continue
            </button>
          </div>
        </section>
      )}

      {/* Step 4: Email */}
      {step === 4 && (
        <section className="w-full max-w-md mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Where can we send the job leads?
          </h2>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between">
            <button
              onClick={() => setStep(3)}
              className="flex items-center cursor-pointer gap-1 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              <ArrowLeft size={18} /> Back
            </button>
            <button
              disabled={!email}
              onClick={() => setStep(5)}
              className={`px-4 py-2 rounded cursor-pointer font-semibold transition ${
                !email
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-white hover:brightness-90"
              }`}
              style={{
                backgroundColor: !email ? "#D1D5DB" : "#40D4E8", // gray for disabled, custom blue for active
              }}
            >
              Continue
            </button>
          </div>
        </section>
      )}

      {/* Step 5: Phone */}
      {step === 5 && (
        <section className="w-full max-w-md mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            We also send job leads via text message
          </h2>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between">
            <button
              onClick={() => setStep(4)}
              className="flex items-center cursor-pointer gap-1 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              <ArrowLeft size={18} /> Back
            </button>
            <button
              disabled={!phone}
              onClick={() => setStep(6)}
              className={`px-4 py-2 rounded cursor-pointer font-semibold transition ${
                !phone
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-white hover:brightness-90"
              }`}
              style={{
                backgroundColor: !phone ? "#D1D5DB" : "#40D4E8", // gray for disabled, custom blue for active
              }}
            >
              Continue
            </button>
          </div>
        </section>
      )}

      {/* Step 6: Create Account with Insurance & Verification */}
      {step === 6 && (
        <section className="w-full max-w-md mt-8 bg-white shadow rounded-lg p-6 relative">
          <h2 className="text-xl font-semibold mb-2">
            Ok, let's create an account!
          </h2>
          <p className="text-gray-600 mb-4">
            Once your account is setup, we can start sending you local job leads
            by email and text message.
          </p>

          {/* Basic Info */}
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Business Info */}
          <input
            type="text"
            placeholder="Business Name (optional)"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Company House Number (optional)"
            value={companyHouseNumber}
            onChange={(e) => setCompanyHouseNumber(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitted}
          />

          {/* Insurance Info */}
          <h3 className="font-semibold mb-2 text-gray-700">
            Insurance Details (optional)
          </h3>
          <input
            type="text"
            placeholder="Insurance Company"
            value={insuranceCompany}
            onChange={(e) => setInsuranceCompany(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={coverType}
            onChange={(e) => setCoverType(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Type of Cover</option>
            <option value="Public Liability">Public Liability</option>
            <option value="Professional Indemnity">
              Professional Indemnity
            </option>
            <option value="Employers Liability">Employers Liability</option>
          </select>
          <input
            type="text"
            placeholder="Policy Number"
            value={policyNumber}
            onChange={(e) => setPolicyNumber(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            value={policyStartDate}
            onChange={(e) => setPolicyStartDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setPolicyDocument(e.target.files[0])}
            className="w-full mb-4"
          />
          {/* Tick if insured */}
          {insuranceCompany &&
            coverType &&
            policyNumber &&
            policyStartDate &&
            policyDocument && (
              <div className="text-green-600 font-semibold mb-4">
                ✅ Insured
              </div>
            )}

          {/* Verification Documents */}
          <h3 className="font-semibold mb-2 text-gray-700">
            Verification Documents (optional)
          </h3>
          <input
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={(e) => setIdDocument(e.target.files[0])}
            className="w-full mb-4"
          />

          {idDocument && (
            <div className="text-green-600 font-semibold mb-4">
              ✅ Verification Document Uploaded: {idDocument.name}
            </div>
          )}

          {/* Account Info */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mr-2"
            />
            I accept MyTradeLinks's Terms & Conditions and Terms of Supply
          </label>

          <div className="flex justify-between">
            <button
              onClick={() => setStep(5)}
              className="flex items-center cursor-pointer gap-1 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              <ArrowLeft size={18} /> Back
            </button>
            <button
              disabled={!firstName || !lastName || !password || !acceptedTerms}
              onClick={handleCreateAccount}
              className={`px-4 py-2 rounded cursor-pointer font-semibold transition ${
                !firstName || !lastName || !password || !acceptedTerms
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-white hover:brightness-90"
              }`}
              style={{
                backgroundColor:
                  !firstName || !lastName || !password || !acceptedTerms
                    ? "#D1D5DB" // disabled gray
                    : "#40D4E8", // active custom blue
              }}
            >
              Create Account
            </button>
          </div>

          {/* ✅ Success Modal */}
          {showSuccess && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center animate-fadeIn">
                <div className="text-green-600 text-5xl mb-4 animate-bounce">
                  ✅
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Account Created Successfully!
                </h3>
                <p className="text-gray-600">
                  Redirecting you to your dashboard...
                </p>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Footer */}
      <footer className="w-full mt-10 py-6 text-center text-sm text-gray-500">
        © 2025 mytradelinks.co.uk |{" "}
        <span className="underline cursor-pointer">Contact</span> |{" "}
        <span className="underline cursor-pointer">Privacy</span> |{" "}
        <span className="underline cursor-pointer">Terms & Conditions</span>
      </footer>
    </div>
  );
};

export default SignupTradePage;
