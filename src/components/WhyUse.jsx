import React from "react";
import reviewsio from "../assets/reviewslogo.png";

const WhyUse = () => {
  const reviews = [
    {
      name: "Brian",
      date: "1 week ago",
      rating: 5,
      text: "Bench Construction, from initial contact with Ben we have been somewhat surprised in this day and age, that good old fashioned customer satisfaction still exists. Very pleased with communication about the job t...",
    },
    {
      name: "Gail",
      date: "2 weeks ago",
      rating: 5,
      text: "I posted the job I needed doing, and within 48 hours I had two people showing interest. After checking the first persons profile and reviews I contacted him, he gave me a quote, which was the middle of th...",
    },
    {
      name: "Gill",
      date: "2 days ago",
      rating: 5,
      text: "Very happy with the service by Evolution Digital TV to correct the performance of my televisions. The problem was quickly diagnosed, the work completed competently & timely...",
    },
  ];

  return (
    <section className="py-16 bg-[#f5f9ff]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(80,85,102)] mb-2">
          Why Use MyTradeLinks
        </h2>
        <p className="text-[rgb(80,85,102)] mb-10 text-base md:text-lg">
          Over 1 million homeowners nationwide have used our service to find a local tradesperson.
        </p>

        {/* Review boxes */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {/* ✅ First Box */}
          <div className="bg-white rounded-lg p-6 shadow-md w-full sm:w-[45%] md:w-[40%] lg:w-[30%] flex flex-col items-center">
            <img
              src={reviewsio}
              alt="Reviews.io"
              className="w-36 mb-4 object-contain"
            />
            <p className="text-[#505566] text-center">
              Excellent <span className="font-bold">4.7</span> | 3,562 reviews
            </p>
          </div>

          {/* ✅ Second Box */}
          <div className="bg-white rounded-lg p-6 shadow-md w-full sm:w-[45%] md:w-[40%] lg:w-[30%] flex flex-col items-center justify-between">
            {/* Green star + TrustPilot same line */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-600 text-2xl">★</span>
              <h3 className="font-bold text-[#505566] text-lg">TrustPilot</h3>
            </div>

            {/* Stars in perfect square boxes */}
            <div className="flex justify-center gap-2 mb-3">
              {Array(5)
                .fill("★")
                .map((star, index) => (
                  <div
                    key={index}
                    className="bg-[#00754A] text-white w-8 h-8 flex items-center justify-center text-lg font-semibold"
                  >
                    {star}
                  </div>
                ))}
            </div>

            {/* Bottom rating text */}
          
<p className="text-[#505566] mt-3">
  TrustScore <span className="font-bold">4.8</span> |{" "}
  <span className="underline hover:no-underline cursor-pointer">
    <span className="font-bold">34,248</span> reviews
  </span>
</p>


          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-[#505566] flex flex-col justify-between"
            >
              <p className="text-sm mb-4">{review.text}</p>
              <div className="mt-auto">
                <div className="text-green-500 mb-1">★★★★★</div>
                <h4 className="font-bold">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom link */}
     <a
  href="#"
  className="text-[rgb(80,85,102)] underline font-semibold text-lg"
>
  See all reviews
</a>

      </div>
    </section>
  );
};

export default WhyUse;
