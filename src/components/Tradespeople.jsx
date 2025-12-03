import React, { useState } from "react";
import { Star, MapPin, Users } from "lucide-react";
import FindTradesmanCTA from "../components/FindTradesmanCTA";

const Tradespeople = ({ locationName, tradespeople = [] }) => {
  const [filterDistance, setFilterDistance] = useState("60");
  const [filterRating, setFilterRating] = useState("any");
  const [sortBy, setSortBy] = useState("recommended");

  const totalTradespeople = 46100;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <Star className="w-4 h-4 text-gray-300" />
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${(rating % 1) * 100}%` }}
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center mb-6">
          <div className="w-1.5 h-6 bg-blue-600 mr-3 rounded-sm"></div>
          <h2 className="text-lg font-bold text-[#1e4db7] tracking-wide">
            TRADESPEOPLE IN {locationName.toUpperCase()}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-medium text-gray-600">Filter by:</span>
                  <select
                    value={filterDistance}
                    onChange={(e) => setFilterDistance(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded bg-white text-sm focus:outline-none"
                  >
                    <option value="30">Within 30 minutes</option>
                    <option value="60">Within 60 minutes</option>
                    <option value="90">Within 90 minutes</option>
                  </select>
                  <select
                    value={filterRating}
                    onChange={(e) => setFilterRating(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded bg-white text-sm focus:outline-none"
                  >
                    <option value="any">Any rating</option>
                    <option value="4">4+ stars</option>
                    <option value="5">5 stars</option>
                  </select>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-gray-600">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded bg-white text-sm focus:outline-none"
                    >
                      <option value="recommended">Recommended</option>
                      <option value="rating">Highest Rating</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>

                  <div className="text-sm font-semibold text-orange-500">
                    1-20 of {totalTradespeople.toLocaleString()} tradespeople
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {tradespeople.slice(0, 20).map((tradesperson) => (
                <div
                  key={tradesperson.id}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-20 shrink-0">
                      <div className="w-20 h-20 rounded-lg overflow-hidden">
                        <img
                          src={tradesperson.logo}
                          alt={tradesperson.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2 md:flex-row md:items-start md:justify-between flex-col">
                        <div className="w-full">
                          <h3 className="text-lg font-bold text-gray-800">
                            {tradesperson.name}
                          </h3>

                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex gap-1">
                              {renderStars(tradesperson.rating)}
                            </div>
                            <span className="text-sm text-gray-600">
                              {tradesperson.rating} rating, based on{" "}
                              {tradesperson.reviewCount} reviews
                            </span>
                          </div>
                        </div>

                        <button className="px-4 py-2 border-2 border-[#40D4E8] bg-[#40D4E8] text-white rounded font-bold text-xs whitespace-nowrap hover:bg-[#00A896] transition cursor-pointer md:self-start w-full mt-2 md:w-auto">
                          PROFILE
                        </button>
                      </div>

                      <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                        {tradesperson.description}
                      </p>

                      <div className="bg-gray-50 rounded p-3 mb-3">
                        <p className="font-semibold text-gray-800 text-sm mb-1">
                          {tradesperson.latestReview.title}
                        </p>
                        <p className="text-sm text-gray-600 mb-1">
                          {tradesperson.latestReview.text}
                        </p>
                        <p className="text-xs text-gray-500">
                          Reviewed by{" "}
                          <strong>{tradesperson.latestReview.reviewer}</strong>{" "}
                          on {tradesperson.latestReview.date}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-red-500" />
                          Based in {tradesperson.baseLocation}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-blue-500" />
                          Member since {tradesperson.memberSince}
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <span>⚒️</span>
                          {tradesperson.coveringArea}
                        </div>
                        <div className="flex items-center gap-1 text-green-600 font-semibold">
                          <span>✓</span>
                          {tradesperson.insurance}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-4">
              <p className="text-center text-sm text-gray-600 mb-3">
                Read our{" "}
                <strong>
                  {tradespeople[0]?.totalReviews.toLocaleString()}
                </strong>{" "}
                reviews
              </p>

              <div className="flex justify-center mb-3">
                <div className="flex gap-1">{renderStars(4.7)}</div>
              </div>

              <p className="text-center text-3xl font-bold text-gray-800 mb-2">
                4.68 out of 5
              </p>
              <hr className="my-4" />
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Become a member
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Over 50,000 tradespeople nationwide use MyTradeLinks
                </p>
                <button className="w-full px-4 py-3 border-2 border-[#40D4E8] bg-[#40D4E8] text-white rounded font-bold text-sm hover:bg-[#00A896] transition cursor-pointer">
                  SIGN UP AS A TRADE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#40D4E8] text-white rounded-lg font-semibold hover:bg-[#00A896] transition cursor-pointer">
            Load More Tradespeople
          </button>
        </div>
      </div>

      <div className="bg-[#f4f8ff] py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="w-1.5 h-6 bg-blue-600 mr-3 rounded-sm"></div>
            <h2 className="text-lg font-bold text-[#1e4db7] tracking-wide uppercase">
              Recent Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cost of a new front door",
                trade: "WINDOW & CONSERVATORY SPECIALIST",
                desc: "Can anyone give me an estimate of how much it costs to fit a new front door, including the door and labour?",
                answers: 5,
                askedBy: "Pete",
                time: "19 hours ago",
              },
              {
                title: "Who should I ask to do the brickwork inspection?",
                trade: "BRICKLAYER",
                desc: "I have changed two courses DPC bricks. It’s a small project, who should I ask to do the brickwork inspection?",
                answers: 4,
                askedBy: "Jessica",
                time: "3 days ago",
              },
              {
                title: "How can I fix an E125 error on my boiler?",
                trade: "HEATING ENGINEER",
                desc: "My boiler is showing an E125 error code and has stopped working. What does this mean and how do I sort it out?",
                answers: 1,
                askedBy: "Claire Kate",
                time: "5 days ago",
              },
              {
                title: "How many days should newly installed DPC bricks dry?",
                trade: "BRICKLAYER",
                desc: "How many days should newly installed DPC bricks covered by Tarpaulin sheet not exposed to rain?",
                answers: 4,
                askedBy: "Michael",
                time: "1 week ago",
              },
              {
                title: "Should 3:1 mix be waterproof for DPC bricks?",
                trade: "BRICKLAYER",
                desc: "Should 3:1 mix to be waterproof for the new DPC bricks? Should I ask them to redo the work?",
                answers: 3,
                askedBy: "David",
                time: "2 weeks ago",
              },
              {
                title: "Why is my shower running cold while taps are hot?",
                trade: "HEATING ENGINEER",
                desc: "The hot water works fine from my taps, but the shower only gives cold water. Something I can fix myself perhaps?",
                answers: 1,
                askedBy: "Emma",
                time: "1 week ago",
              },
            ].map((q, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition"
              >
                <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-1">
                  {q.title}
                </h3>
                <p className="uppercase text-xs text-gray-500 font-semibold mb-2">
                  {q.trade}
                </p>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {q.desc}
                </p>

                <p className="text-orange-500 font-semibold text-sm mb-3">
                  {q.answers} {q.answers === 1 ? "answer" : "answers"}
                </p>

                <p className="text-xs text-gray-500">
                  Asked by <span className="font-semibold">{q.askedBy}</span>,{" "}
                  {q.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FindTradesmanCTA />
    </div>
  );
};

export default Tradespeople;
