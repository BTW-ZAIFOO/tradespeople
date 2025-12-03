import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Careers = () => {
  return (
    <>
      <Header />
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md">
            <h1 className="text-3xl sm:text-4xl font-bold text-[rgb(80,85,102)] mb-4">
              Careers
            </h1>

            <p className="text-lg leading-relaxed text-gray-800 mb-8">
              MyTradeLinks.co.uk seeks to connect homeowners with local
              tradespeople. Since beginning operations in <strong>2014</strong>,
              we’ve received over <strong>1.5 million job quotes</strong> and
              have generated over <strong>£350 million</strong> worth of jobs
              for tradespeople in 2022.
            </p>

            <p className="text-lg leading-relaxed text-gray-800 mb-8">
              A list of job openings at MyTradeLinks is shown below.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-[rgb(80,85,102)]">
                  Admin & Support
                </h2>
                <p className="text-gray-600 mt-2">No open careers.</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[rgb(80,85,102)]">
                  Technical
                </h2>
                <p className="text-gray-600 mt-2">No open careers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Careers;
