import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/mytradelinks-logo.png";

const jobCategories = [
  {
    name: "Bathroom Fitting",
    subOptions: [
      "New Bathroom Installation",
      "Full & Partial Bathroom Installations",
      "Fixture Installation or Replacement",
      "Repair or Maintenance Work",
      "Tiling",
      "Other",
    ],
  },
  {
    name: "Tiling",
    subOptions: [
      "Wall & Floor Tiling",
      "Floor & Wall Tile Laying, Repairs & Regrouting",
      "External Tiling",
      "Other",
    ],
  },
  {
    name: "Plumbing",
    subOptions: [
      "Leak Repairs",
      "Pipe Installation",
      "Bathroom Plumbing",
      "Other",
    ],
  },
  {
    name: "Painting & Decorating",
    subOptions: [
      "Interior Painting",
      "Exterior Painting",
      "Wallpapering",
      "Other",
    ],
  },
  { name: "Carpentry / Joinery", subOptions: ["Furniture Assembly", "Door & Frame Work", "Wood Repairs", "Other"] },
  { name: "Electrical Work", subOptions: ["Light Installation", "Rewiring", "Socket Fitting", "Other"] },
  { name: "Heating / Gas Work", subOptions: ["Boiler Installation", "Boiler Repair", "Central Heating Work", "Other"] },
  { name: "Plastering & Rendering", subOptions: ["Ceiling Plaster", "Wall Plaster", "Rendering", "Other"] },
  { name: "Gardening & Landscaping", subOptions: ["Lawn Maintenance", "Tree Cutting", "Paving", "Other"] },
  { name: "Roofing", subOptions: ["New Roof", "Roof Repairs", "Flat Roofing", "Other"] },
  { name: "Building", subOptions: ["Extensions", "Renovations", "Conversions", "Other"] },
  { name: "Handyman", subOptions: ["Small Repairs", "Mounting & Fittings", "Odd Jobs", "Other"] },
];

const PostJobPage = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSub, setSelectedSub] = useState("");
  const navigate = useNavigate(); // ✅ for navigation

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : 1)); // Back button

  return (
    <div className="min-h-screen bg-[#f3f8ff] flex flex-col items-center font-sans text-[#505566]">
      {/* Header */}
      <header className="w-full py-6 flex justify-center items-center bg-[#f3f8ff]">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="MyJobQuote Logo" className="h-30" />
          <h1 className="text-3xl font-bold">
            {/* <span className="text-[#0076CE]">my</span>
            <span className="text-[#F24444]">job</span>
            <span className="text-[#0076CE]">quote</span> */}
          </h1>
        </Link>
      </header>

      {/* Step Sections */}
      {step === 1 && (
        <section className="w-full max-w-2xl mt-8 bg-white shadow-sm rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Find a Tradesperson</h2>
          <p className="text-[#505566] mb-4 leading-relaxed">
            Get FREE Quotes from up to 3 local tradespeople with our quick and easy connection platform.
            Compare quotes & save money on your job!
          </p>
          <p className="font-medium mb-3">What type of work do you need doing?</p>

          <select
            onChange={(e) => {
              const selected = jobCategories.find((cat) => cat.name === e.target.value);
              setSelectedCategory(selected);
            }}
            className="w-full border rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-[#0076CE]"
            defaultValue=""
          >
            <option value="" disabled>
              Select a category
            </option>
            {jobCategories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>

          {selectedCategory && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">
                What type of {selectedCategory.name.toLowerCase()} work do you need?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedCategory.subOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedSub(option);
                      nextStep();
                    }}
                    className="border rounded-md px-4 py-3 bg-[#f8f9fc] hover:bg-[#e9f2ff] cursor-pointer transition"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {step > 1 && (
        <button
          onClick={prevStep}
          className="self-start ml-8 mt-4 text-[#0076CE] underline"
        >
          &larr; Back
        </button>
      )}

      {step === 2 && (
        <section className="w-full max-w-2xl mt-2 bg-white shadow-sm rounded-lg p-8 text-left">
          <h3 className="text-xl font-semibold mb-2">Tell us about your job</h3>
          <textarea
            rows="5"
            className="w-full border rounded-md p-3 mb-4 focus:ring-2 focus:ring-[#0076CE]"
            placeholder="Example: Lay external tiles on patio, about 20 square metres, provide slip resistant tiles."
          ></textarea>
          <button
            onClick={nextStep}
            className="bg-[#0076CE] text-white px-6 py-2 rounded-md hover:bg-[#005fa3]"
          >
            Continue
          </button>
        </section>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <section className="w-full max-w-2xl mt-2 bg-white shadow-sm rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Add photos (OPTIONAL)</h3>
          <input type="file" multiple className="mb-4" />
          <div className="flex justify-center gap-4">
            <button onClick={nextStep} className="bg-[#0076CE] text-white px-6 py-2 rounded-md">
              Continue
            </button>
            <button onClick={nextStep} className="text-[#0076CE] underline">
              Skip
            </button>
          </div>
        </section>
      )}

      {/* Continue remaining steps like Step 4, 5, 6, 7, 8 with same Back button logic */}
      {/* ...same as your existing code... */}
  {/* Step 4: Location */}
      {step === 4 && (
        <section className="w-full max-w-2xl mt-8 bg-white shadow-sm rounded-lg p-8 text-left">
          <h3 className="text-xl font-semibold mb-3">Job Location</h3>
          <input
            type="text"
            placeholder="Enter postcode (e.g., CH3 5AX)"
            className="w-full border rounded-md p-3 mb-4 focus:ring-2 focus:ring-[#0076CE]"
          />
          <button onClick={nextStep} className="bg-[#0076CE] text-white px-6 py-2 rounded-md">Continue</button>
        </section>
      )}

      {/* Step 5: Budget */}
      {step === 5 && (
        <section className="w-full max-w-2xl mt-8 bg-white shadow-sm rounded-lg p-8 text-left">
          <h3 className="text-xl font-semibold mb-3">What's your estimated budget?</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            {["Under £100", "Under £250", "Under £500", "Under £1,000", "Under £2,000", "Under £4,000", "Under £8,000", "Under £15,000", "Over £30,000", "Not Sure"].map((b, i) => (
              <button key={i} onClick={nextStep} className="border rounded-md py-2 hover:bg-[#e9f2ff]">
                {b}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Step 6: Start Date */}
      {step === 6 && (
        <section className="w-full max-w-2xl mt-8 bg-white shadow-sm rounded-lg p-8 text-left">
          <h3 className="text-xl font-semibold mb-3">When would you like the work to start?</h3>
          <div className="flex flex-col gap-3">
            {["ASAP", "Within 2 days", "Within 2 weeks", "Within 2 months", "Flexible"].map((t, i) => (
              <button key={i} onClick={nextStep} className="border rounded-md py-2 hover:bg-[#e9f2ff]">
                {t}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Step 7: Email */}
      {step === 7 && (
        <section className="w-full max-w-2xl mt-8 bg-white shadow-sm rounded-lg p-8 text-left">
          <h3 className="text-xl font-semibold mb-3">Email Address</h3>
          <input
            type="email"
            placeholder="john.doe@example.com"
            className="w-full border rounded-md p-3 mb-4 focus:ring-2 focus:ring-[#0076CE]"
          />
          <button onClick={nextStep} className="bg-[#0076CE] text-white px-6 py-2 rounded-md">Continue</button>
        </section>
      )}

      {/* Step 8: Account Details */}
      {step === 8 && (
        <section className="w-full max-w-2xl mt-8 bg-white shadow-sm rounded-lg p-8 text-left">
          <h3 className="text-xl font-semibold mb-3">Your Account</h3>
          <div className="space-y-3">
            <input type="text" placeholder="First name" className="w-full border rounded-md p-3" />
            <input type="text" placeholder="Last name" className="w-full border rounded-md p-3" />
            <input type="text" placeholder="Phone number" className="w-full border rounded-md p-3" />
            <input type="password" placeholder="Create a password" className="w-full border rounded-md p-3" />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> I accept MyJobQuote's Terms of Use & Privacy Policy
            </label>
            <button
      onClick={() => navigate("/dashboard/homeowner")}


              className="bg-[#0076CE] text-white px-6 py-2 rounded-md mt-3 hover:bg-[#005fa3]"
            >
              Get Quotes
            </button>
          </div>
        </section>
      )}
      {/* Footer */}
      <footer className="w-full mt-10 py-6 text-center text-sm text-[#505566]">
        © 2025 mytradelinks.co.uk |{" "}
        <span className="underline cursor-pointer">Contact</span> |{" "}
        <span className="underline cursor-pointer">Privacy</span> |{" "}
        <span className="underline cursor-pointer">Terms & Conditions</span>
      </footer>
    </div>
  );
};

export default PostJobPage;





