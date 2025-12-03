import React from "react";
import postJob from "../assets/post-job.png";
import quotes from "../assets/quotes.png";
import chooseTradesperson from "../assets/choose-tradesperson.png";

const HowItWorks = () => {
  const steps = [
    {
      title: "Post your job",
      description: "Tell us about the work you need doing around your home.",
      image: postJob,
    },
    {
      title: "Receive up to 3 quotes",
      description:
        "Up to 3 local trades will then be in touch to quote for the work.",
      image: quotes,
    },
    {
      title: "Choose your tradesperson",
      description: "Compare quotes then choose your preferred tradesman.",
      image: chooseTradesperson,
    },
  ];

  return (
    <section
      className="py-20 bg-[#F5F9FF] flex flex-col items-center text-center"
      style={{ color: "rgb(80, 85, 102)", fontFamily: "'Poppins', sans-serif" }}
    >
      <h2
        className="text-4xl md:text-4xl font-extrabold mb-2"
        style={{ color: "rgb(80, 85, 102)" }}
      >
        How it works
      </h2>

      <p
        className="text-lg md:text-xl max-w-2xl mb-16 leading-relaxed"
        style={{ color: "rgb(80, 85, 102)" }}
      >
        Find a tradesman in your area with our quick and easy online <br />
        connection service.It's free and only takes a minute!
      </p>

      <div className="grid md:grid-cols-3 gap-20 px-6 md:px-20">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={step.image}
              alt={step.title}
              className="w-72 h-auto mb-6"
            />
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "rgba(0, 2, 10, 1)" }}
            >
              {step.title}
            </h3>
            <p
              className="text-base max-w-xs"
              style={{ color: "rgb(80, 85, 102)" }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <button
          style={{
            backgroundColor: "#40D4E8",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "12px 30px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Learn more
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
