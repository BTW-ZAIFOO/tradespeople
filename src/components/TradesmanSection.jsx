import React from "react";
import { useNavigate } from "react-router-dom";
import tradesmanImg from "../assets/tradesman.png";

const TradesmanSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup-trade");
  };

  return (
    <section className="py-16 bg-white text-[rgb(80,85,102)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={tradesmanImg}
              alt="Tradesman working"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Are you a tradesman?
            </h2>
            <p className="text-lg mb-6 text-gray-900 font-semibold leading-relaxed">
              Looking for more work? At MyTradeLinks <br />
              we provide fresh and local job leads for all <br />
              types of tradespeople across the UK.
            </p>

            <button
              onClick={handleGetStarted}
              style={{
                backgroundColor: "#40D4E8",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "12px 28px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "(#40D4E8)")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "rgb(40, 117, 215)")
              }
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradesmanSection;
