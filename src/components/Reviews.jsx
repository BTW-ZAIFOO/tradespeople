import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {
  const navigate = useNavigate();

  const jobs = [
    {
      trade: "Carpenter / Joiner",
      location: "Marlow",
      company: "Paul Nicholas Carpentry and Maintenance Services",
      review: "Very good and efficient service",
      rating: 5
    },
    {
      trade: "Carpenter / Joiner",
      location: "Marlow",
      company: "B&B Carpentry",
      review: "Very happy with the job B&B carried out for me. Supplying and fitting 7 new internal doors into old frames which can be tricky, but they got the job done...",
      rating: 5
    },
    {
      trade: "Heating Engineer",
      location: "Doncaster",
      company: "Msg Plumbing & Heating Limited",
      review: "Good job, clean and tidy.",
      rating: 5
    },
    {
      trade: "Specialist Tradesman",
      location: "Luton",
      company: "SOS Waste & Removals",
      review: "He was such a kind and hardworking guy. The job was done to my perfection. Very happy",
      rating: 5
    },
    {
      trade: "Gardener / Garden Designer",
      location: "Dunstable",
      company: "Oaklands Property Maintenance",
      review: "One call and it was all sorted",
      rating: 5
    },
    {
      trade: "Removals",
      location: "Teddington",
      company: "Velocity Transportation",
      review: "Great job, very efficient and on time",
      rating: 5
    },
    {
      trade: "Plumber",
      location: "Kingston upon Thames",
      company: "BRICK AND BEAM CONSTRUCTION LTD",
      review: "Great job - arrived on time and work guaranteed",
      rating: 5
    },
    {
      trade: "Plasterer / Renderer",
      location: "Liverpool",
      company: "Art Henry’s",
      review: "Good work done fairly promptly",
      rating: 4
    },
    {
      trade: "Flooring Specialist",
      location: "Torquay",
      company: "Cs Roofing",
      review: "Great communication. Highly recommended",
      rating: 5
    },
    {
      trade: "Plumber",
      location: "Liverpool",
      company: "BPH Plumbing & Heating",
      review: "The plumber rang me within 10 mins of my inserting the job request on the website. He came out next day and completed the job with the minimum of fuss...",
      rating: 5
    },
    {
      trade: "Specialist Tradesman",
      location: "Slough",
      company: "Calin",
      review: "Calin responded promptly and completed the job the very next day after I posted my add. He also made the helpful suggestion of removing a dying tree...",
      rating: 4
    },
    {
      trade: "Builder",
      location: "Salford",
      company: "Drone Roofing",
      review: "Prompt response. Dealt with the issue. Friendly and genuine workmen.",
      rating: 5
    }
  ];

  // ✅ Handlers for button clicks
  const handlePostJob = () => {
    navigate("/post-job");
  };

  const handleSignupTrade = () => {
    navigate("/signup-trade");
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent completed jobs
          </h2>
          <p className="text-xl text-gray-600">
            Join over 1,000,000 happy homeowners who have posted their job on MyJobQuote.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="mb-4">
                <div className="text-xs font-bold text-primary uppercase mb-1">
                  {job.trade} JOB IN {job.location}
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  Review for {job.company}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {job.review}
              </p>

              <div className="flex text-yellow-400">
                {[...Array(job.rating)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          {/* 1️⃣ Filled lighter cyan/blue button */}
          <button
            onClick={handlePostJob}
            className="px-8 py-3 rounded-lg font-semibold"
            style={{
              backgroundColor: "#40D4E8",
              color: "white",
              border: "2px solid #40D4E8"
            }}
          >
            Post your job
          </button>

          {/* 2️⃣ White button with darker teal/green border */}
          <button
            onClick={handleSignupTrade}
            className="px-8 py-3 rounded-lg font-semibold"
            style={{
              backgroundColor: "white",
              color: "#009B7D",
              border: "2px solid #009B7D"
            }}
          >
            Sign up as a trade
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
