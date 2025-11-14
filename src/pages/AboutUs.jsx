import React from "react";
import Header from "../components/Header"; // Adjust path if needed
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Box container */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-md space-y-8">
            
            {/* Page title aligned left */}
            <h1 className="text-3xl sm:text-4xl font-bold text-left text-[rgb(80,85,102)]">
              About Us
            </h1>

            {/* Intro paragraph */}
            <p className="text-lg leading-relaxed text-gray-800">
              MyTradeLinks.co.uk seeks to connect homeowners with local tradespeople. 
              Our online service is designed with both homeowners and tradespeople in mind. 
              Homeowners get quotes for their job quickly and easily, while tradespeople 
              are able to find local work to support their business.
            </p>

            {/* Who we are */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-[rgb(80,85,102)]">Who are we?</h2>
              <p className="text-lg leading-relaxed text-gray-800">
                Started in 2013, MyTradesLink’s two founders began as a small digital marketing company 
                and took inspiration from their parents who were both tradespeople. 
                They wanted to create a service integrating their digital marketing knowledge to provide value for both homeowners and tradespeople.
              </p>
            </div>

            {/* How service works */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-[rgb(80,85,102)]">How our service works</h2>
              <ul className="list-disc list-inside text-lg space-y-2 text-gray-800">
                <li>Customer submits information outlining the job they want completing.</li>
                <li>The job is checked by MyJobQuote staff to ensure authenticity.</li>
                <li>The job is sent to local tradespeople suitable for the job.</li>
                <li>Trades contact the homeowner to quote the job.</li>
                <li>Customer chooses which trade to complete the job. Simple.</li>
              </ul>
            </div>

            {/* Why use service as homeowner */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-[rgb(80,85,102)]">Why use our service as a homeowner?</h2>
              <ul className="list-disc list-inside text-lg space-y-2 text-gray-800">
                <li>MyTradeLinks is free to use and allows you to gather multiple quotes with a quick form detailing your job.</li>
                <li>Read reviews of trades from other homeowners.</li>
                <li>Compare quotes on price and quality of tradespeople.</li>
                <li>Tradespeople are verified with official ID, email, phone, insurance, and qualifications where required.</li>
              </ul>
            </div>

            {/* Why join as tradesperson */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-[rgb(80,85,102)]">Why join as a tradesperson?</h2>
              <ul className="list-disc list-inside text-lg space-y-2 text-gray-800">
                <li>We directly market to customers seeking work in your area.</li>
                <li>Unlike directories, we provide job leads with measurable ROI.</li>
                <li>Flexible membership packages depending on jobs in your area.</li>
                <li>Free trial available before committing.</li>
                <li>Access to 25,000+ job leads a month.</li>
                <li>Profitable return on investment compared to traditional marketing methods.</li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-10">
              <h3 className="text-2xl font-semibold mb-4 text-[rgb(80,85,102)]">
                Ready to get a price for your home improvement project?
              </h3>
            <button
  onClick={() => window.location.href = "/post-job"}
  className="px-8 py-3 bg-[#40D4E8] text-white font-semibold rounded-lg hover:opacity-90 transition"
>
  Get Started
</button>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
