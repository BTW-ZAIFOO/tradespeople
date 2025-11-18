import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const GettingStartedPage = () => {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold mb-4">
          Getting Started with MyTradeLinks
        </h1>
        <p className="mb-6">
          As a new trade on MyTradeLinks we suggest that you read our FAQ and
          get an idea of how everything works.
        </p>

        <h2 className="text-2xl font-semibold mb-3">How to Get Started</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-1">
          <li>Register your details</li>
          <li>Verify your account</li>
          <li>Add a credit or debit card</li>
          <li>Update your profile</li>
          <li>Add public liability insurance</li>
          <li>Purchase leads</li>
          <li>Win work</li>
          <li>Get reviewed</li>
        </ol>

        <p className="mb-8">
          It might seem daunting at first but we are here to help with any
          questions you may have. If you have trouble with verification or
          updating your profile, you can email us and we will help update your
          account.
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          Tips to Get More from MyTradeLinks
        </h2>

        <section className="space-y-4 mb-8">
          <div>
            <h3 className="text-xl font-medium">Build feedback</h3>
            <p>
              Ask for feedback after completing jobs. 5-star reviews help
              customers trust you more quickly.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Tidy up your profile</h3>
            <p>
              Upload a profile picture and write a professional description
              before purchasing leads.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Be professional</h3>
            <p>
              Call customers promptly, provide written estimates, and
              communicate clearly to avoid misunderstandings.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Refine your settings</h3>
            <p>
              Choose relevant trade categories, adjust your radius, and add
              sub-contractors if needed.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Promote yourself</h3>
            <p>
              Add MyTradeLinks logos to your van, collect reviews, build a
              social media presence, and share project photos.
            </p>
          </div>
        </section>

        <h2 className="text-2xl font-semibold mb-3">
          Give Us a Chance to Work for You
        </h2>
        <p className="mb-6">
          We don’t expect you to win every lead. On average, trades win 1 in 3
          jobs. Our pricing allows a healthy margin even when you don’t win
          every time. If you’re struggling to win work, please get in touch –
          we’re happy to help!
        </p>

        <p className="text-gray-600 text-sm mb-10">
          Reviewed by MyTradeLinks on 27th April 2017.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">Popular Questions</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/settings" className="text-blue-600 hover:underline">
                How do I manage my profile?
              </Link>
            </li>
            <li>
              <Link to="/settings" className="text-blue-600 hover:underline">
                How do I adjust my job notification settings?
              </Link>
            </li>
            <li>
              <Link to="/settings" className="text-blue-600 hover:underline">
                How do I adjust the distance I wish to receive leads?
              </Link>
            </li>
            <li>
              <Link to="/settings" className="text-blue-600 hover:underline">
                How do I add more categories?
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <p>
            Still need help?{" "}
            <Link to="/contact" className="text-blue-600 hover:underline">
              Send us an email
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GettingStartedPage;
