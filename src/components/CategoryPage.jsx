import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCategoryBySlug } from "../data/categoriesData";
import Header from "./Header";
import Footer from "./Footer";
import Featured from "./Featured";

const CategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Category Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The category you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-[#40D4E8] text-white rounded-lg hover:bg-[#00A896] transition cursor-pointer"
            >
              Go Back Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const categoryNameSingular = category.name.replace("s", "").toLowerCase();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* SECTION 1: Hero with Postcode Search */}
      <section className="bg-gray-50 py-16 max-w-6xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h1
                className="font-extrabold mb-4 leading-tight"
                style={{
                  fontSize: "40px",
                  color: "rgb(80, 85, 102)",
                  marginBottom: "10px",
                }}
              >
                Find a {category.name}, compare up to <br /> 3 quotes!
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                It's FREE and there are no obligations
              </p>

              {/* Search Box with Button */}
              <div className="mb-8 flex flex-col lg:flex-row justify-between lg:border-2 lg:border-gray-300 lg:rounded-lg lg:p-1">
                {/* Input */}
                <input
                  type="text"
                  placeholder="Enter your postcode"
                  className="px-6 py-3 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none focus:outline-none focus:border-[#40D4E8]"
                />

                {/* Button Wrapper */}
                <div className="mt-3 lg:mt-0 lg:ml-2">
                  <button className="px-8 py-4 bg-[#40D4E8] text-white font-semibold rounded-md hover:bg-[#00A896] transition cursor-pointer">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                {/* Stars in boxes */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className="w-6 h-6 bg-[#009B7D] flex items-center justify-center rounded-sm"
                    >
                      <span className="text-white text-sm">★</span>
                    </div>
                  ))}
                </div>

                {/* Separate star with Trustpilot */}
                <div className="sm:ml-2">
                  <p className="font-bold text-gray-900 flex flex-wrap items-center gap-1">
                    34,282 reviews from
                    <span className="text-[#009B7D] text-xl">★</span>
                    <span className="text-black font-bold">Trustpilot</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src={category.banner}
                alt={category.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Featured />

      {/* SECTION 2: Need a Builder? */}
      <section
        className="py-16 border-b-2 border-gray-300"
        style={{ backgroundColor: "#dbe0f1" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block order-2">
              <img
                src={category.banner}
                alt={category.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div className="order-1 lg:order-1">
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: "rgb(80, 85, 102)" }}
              >
                Need a {category.name}?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                If you'd like to find a {categoryNameSingular} in your area,
                MyTradeLinks can help you out. We have a variety of local{" "}
                {category.name.toLowerCase()} who are ready to give you a quote.
                You can get up to 3 quotes and choose the best{" "}
                {categoryNameSingular} that's right for you within your budget.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                It doesn't matter how big or small the job is — MyTradeLinks
                will have a reputable {categoryNameSingular} for the job.
              </p>
              <button className="px-8 py-4 bg-[#40D4E8] text-white font-bold rounded-lg hover:bg-[#00A896] transition text-lg cursor-pointer">
                Find a {category.name}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: How it works (3 steps) */}
      <section
        className="py-16 bg-gray-50"
        style={{ backgroundColor: "#dbe0f1" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <i className="fas fa-home text-[#40D4E8] text-5xl"></i>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "rgb(80, 85, 102)" }}
              >
                POST YOUR {category.name.toUpperCase()} JOB
              </h3>
              <p className="text-gray-700">
                Tell us about the work you need doing around your home.
              </p>
            </div>

            <div>
              <div className="flex justify-center mb-4">
                <i className="fas fa-comment-dots text-[#40D4E8] text-5xl"></i>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "rgb(80, 85, 102)" }}
              >
                RECEIVE UP TO 3 QUOTES
              </h3>
              <p className="text-gray-700">
                Up to 3 local {category.name.toLowerCase()} will then be in
                touch to quote for the work.
              </p>
            </div>

            <div>
              <div className="flex justify-center mb-4">
                <i className="fas fa-thumbs-up text-[#40D4E8] text-5xl"></i>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "rgb(80, 85, 102)" }}
              >
                CHOOSE YOUR {category.name.slice(0).toUpperCase()}
              </h3>
              <p className="text-gray-700">
                Compare quotes then choose your preferred {categoryNameSingular}
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: [Trade] IN THE UK - Directory */}
      <section
        className="py-12 bg-[#f6faff]"
        style={{ backgroundColor: "#dbe0f1" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="w-1.5 h-6 bg-[#40D4E8] mr-3 rounded-sm"></div>
            <h2 className="text-lg font-bold text-[#1e4db7] tracking-wide">
              {category.name.toUpperCase()} IN THE UK
            </h2>
          </div>

          <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label className="text-gray-600 font-medium whitespace-nowrap">
                Find:
              </label>
              <select className="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-[#40D4E8] text-gray-700 text-left">
                <option>{categoryNameSingular}</option>
              </select>
            </div>

            <div className="flex w-full sm:flex-1 flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your postcode"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[#40D4E8] text-gray-700"
              />
              <button className="px-6 py-2 bg-[#40D4E8] text-white font-semibold rounded-r-md hover:bg-[#00A896] transition cursor-pointer">
                SEARCH
              </button>
            </div>
          </div>

          {/* Tradesperson Cards */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Tradespeople Section */}
            <div className="flex-1 space-y-8">
              {category.tradespeople &&
                category.tradespeople.map((person, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition"
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Avatar */}
                      <div className="shrink-0 flex justify-center sm:block">
                        <div className="w-20 h-20 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          {person.name.charAt(0)}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-2">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {person.name}
                            </h3>
                            <p className="text-yellow-500 font-bold mb-2">
                              {"★".repeat(Math.floor(person.rating))}{" "}
                              {person.rating} rating, based on {person.reviews}{" "}
                              reviews
                            </p>
                          </div>

                          <button className="px-4 py-2 border-2 border-[#40D4E8] bg-[#40D4E8] text-white rounded font-bold text-xs whitespace-nowrap hover:bg-[#00A896] transition cursor-pointer">
                            PROFILE
                          </button>
                        </div>

                        <p className="text-gray-700 mb-4">
                          {person.description}
                        </p>

                        {/* Latest Review */}
                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                          <p className="font-bold text-gray-900 mb-2">
                            {person.latestReviewTitle}
                          </p>
                          <p className="text-gray-700 italic mb-2">
                            "{person.latestReview}"
                          </p>
                          <p className="text-sm text-gray-600">
                            Reviewed by {person.reviewedBy} on{" "}
                            {person.reviewDate}
                          </p>
                        </div>

                        {/* Info Footer */}
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <span>📍 Based in {person.location}</span>
                          <span>👤 Member since {person.memberSince}</span>
                          {person.idChecked && <span>✓ ID Checked</span>}
                          {person.insurance && (
                            <span>🛡️ Public liability insurance</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Right Side - Sidebar Boxes */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              {/* Box 1 - Reviews */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  Read our 3652 reviews
                </h3>
                <p className="text-gray-700 mt-2 mb-4">4.68 out of 5</p>
                <div className="flex justify-center mb-4">
                  <span className="text-black text-xl">★★★★★</span>
                </div>
              </div>

              {/* Box 2 - Become a Member */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Become a member
                </h3>
                <p className="text-gray-700 mb-6">
                  Over 50,000 tradespeople nationwide use MyTradeLinks
                </p>
                <button className="bg-[#40D4E8] w-full sm:w-auto hover:bg-[#00A896] text-white font-bold py-2 px-4 rounded-lg transition cursor-pointer">
                  Sign up as a trade
                </button>
              </div>

              {/* Box 3 - Locations */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Locations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {category.locations &&
                    category.locations.map((location, i) => (
                      <button
                        key={i}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm py-2 px-3 rounded-lg transition w-full cusor=pointer"
                      >
                        {category.name.slice(0, -1)} in {location}
                      </button>
                    ))}
                </div>
              </div>

              {/* Box 4 - Other Trades */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Other trades
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {category.relatedTrades &&
                    category.relatedTrades.map((trade, i) => (
                      <button
                        key={i}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm py-2 px-3 rounded-lg transition w-full cursor-pointer"
                      >
                        {trade}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition cursor-pointer">
              LOAD MORE TRADES
            </button>
          </div>

          {/* Reviews Badge */}
          <div className="text-center mt-12 py-8">
            <p className="text-[#505566] mb-4">Read our 3562 reviews</p>
            <p className="text-3xl font-bold text-[#505566]">4.68 out of 5</p>
            <p className="text-4xl text-yellow-400 mt-2">★ ★ ★ ★ ★</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Chart */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-[#505566] mb-6">
              Average Daily Cost of a {category.name}
            </h3>

            <div className="flex items-end justify-center gap-4 h-64">
              <div className="w-6 sm:w-8 bg-gray-300 rounded-t-md h-24 relative">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-gray-400 font-semibold text-sm">
                  £150
                </span>
              </div>
              <div className="w-6 sm:w-8 bg-[#40D4E8] rounded-t-md h-40 relative">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#505566] font-bold text-sm">
                  £200
                </span>
              </div>
              <div className="w-6 sm:w-8 bg-[#40D4E8] rounded-t-md h-52 relative">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#505566] font-bold text-sm">
                  £250
                </span>
              </div>
              <div className="w-6 sm:w-8 bg-[#40D4E8] rounded-t-md h-44 relative">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#505566] font-bold text-sm">
                  £300
                </span>
              </div>
              <div className="w-6 sm:w-8 bg-gray-300 rounded-t-md h-28 relative">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-gray-400 font-semibold text-sm">
                  £150
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#505566] mb-4">
              How Much Do {category.name} Cost?
            </h2>

            <p className="text-[#505566] text-base sm:text-lg mb-4 leading-relaxed">
              How much a {category.name.toLowerCase()} charges will depend on
              the type and size of the job, but on average, you can expect to
              pay between <strong>£200 to £300</strong> for a daily rate or{" "}
              <strong>£30 to £50</strong> for an hourly rate. Most{" "}
              {category.name.toLowerCase()} firms will have a minimum charge,
              which is also worth keeping in mind.
            </p>

            <p className="text-[#505566] text-base sm:text-lg mb-6 leading-relaxed">
              Where you live in the country may play a part in the overall cost,
              so a local {category.name.toLowerCase()}
              in London could charge more than one from Yorkshire.
            </p>

            <button className="bg-[#40D4E8] hover:bg-[#00A896] text-white font-semibold py-3 px-6 rounded-md transition cursor-pointer">
              Get a Price for your Job
            </button>
          </div>

          {/* Featured costs */}
          <h3 className="text-2xl font-bold text-[#505566] mb-6 mt-12">
            Get a Price for your Job
          </h3>

          {/* Mobile: 1 col | Tablet: 2 col | Desktop: 3 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.jobCosts &&
              category.jobCosts.map((job, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#40D4E8]"
                >
                  <p className="text-[#505566] font-medium mb-2">{job.title}</p>
                  <p className="text-3xl font-bold text-[#40D4E8]">
                    {job.cost}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Recommended & Rated */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#505566] mb-12">
            Recommended and Rated {category.name}
          </h2>
          <p className="text-lg text-[#505566] mb-12">
            By using MyTradeLinks, you'll be joining over 1 million homeowners
            who have used us in the past to find a local {categoryNameSingular}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {category.testimonials &&
              category.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#f6faff] p-8 rounded-lg border border-[#40D4E8]"
                >
                  <h3 className="text-lg font-bold text-[#505566] mb-2">
                    {testimonial.company}
                  </h3>
                  <p className="text-yellow-400 font-bold mb-4">
                    {"★".repeat(testimonial.stars)} {testimonial.stars}/5
                  </p>
                  <p className="text-[#505566] italic">"{testimonial.text}"</p>
                  <p className="text-sm text-[#505566] mt-4">
                    Reviewed by {testimonial.reviewer}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Recent Completed Jobs */}
      <section className="py-16 bg-[#f6faff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#505566] mb-4">
            Recent completed jobs
          </h2>
          <p className="text-lg text-[#505566] mb-12">
            Join over 1,000,000 happy homeowners who have posted their job on
            MyTradeLinks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {category.completedJobs &&
              category.completedJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md border-2 border-[#40D4E8]"
                >
                  <p className="text-sm font-bold text-[#40D4E8] mb-2">
                    {job.location}
                  </p>
                  <h3 className="text-lg font-bold text-[#505566] mb-2">
                    Review for {job.tradesperson}
                  </h3>
                  <p className="text-yellow-400 text-lg mb-4">
                    {"★".repeat(job.rating)}
                  </p>
                  <p className="text-[#505566] italic">"{job.review}"</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA Section */}
      <section className="py-16 bg-[#40D4E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to get a price for your {categoryNameSingular} project?
          </h2>
          <button className="px-8 py-4 bg-white text-[#40D4E8] font-bold rounded-lg hover:bg-[#e0f7fa] transition text-lg cursor-pointer">
            Get started
          </button>
        </div>
      </section>

      {/* SECTION 9: [Trade] Near You */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#505566] mb-4">
            {category.name} Near You
          </h2>
          <p className="text-lg text-[#505566] mb-12">
            Need a {categoryNameSingular}? We have {category.name.toLowerCase()}{" "}
            all over the UK so no matter where you are, we can help.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.locations &&
              category.locations.map((location, index) => (
                <a
                  key={index}
                  href="#"
                  className="px-4 py-3 bg-[#f6faff] hover:bg-[#e0f7fa] rounded-lg text-center text-[#505566] hover:text-[#40D4E8] transition border border-[#40D4E8]"
                >
                  {location}
                </a>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
