import React from "react";
import { useNavigate } from "react-router-dom";

const SecondSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup-trade");
  };

  return (
    <section className="py-10 bg-white flex flex-col md:flex-row justify-center items-center md:gap-4 gap-6 px-4 text-center md:text-left">
      <h2
        className="text-[30px] font-extrabold"
        style={{
          color: "rgb(80, 85, 102)",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "750",
          margin: 0,
        }}
      >
        Over 50,000 tradespeople nationwide use MyTradeLinks
      </h2>

      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#40D4E8",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "18px 32px",
          cursor: "pointer",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "600",
          fontSize: "15px",
        }}
      >
        Sign up as a trade
      </button>
    </section>
  );
};

export default SecondSection;
