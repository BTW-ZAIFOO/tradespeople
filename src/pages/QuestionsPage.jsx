import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ctaImage from "../assets/postjob.png";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/image.png";

const QuestionsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Most liked");
  const navigate = useNavigate();

  const categories = [
    "All",
    "Electricians",
    "Plasterers",
    "Joiners",
    "Plumbers",
    "Builders",
    "Gardeners",
    "Bathroom Specialists",
    "Kitchen Fitters",
    "Roofers",
    "Decorators",
    "Handymen",
    "Stoneworkers",
  ];

  const questions = [
    {
      id: 1,
      title: "How much to hang an internal door",
      category: "Joiners",
      answers: 14,
      description:
        'I\'ve purchased 10 of the "Wickes Geneva Oak Cottage Internal Door" from Wickes along with fittings: https://www.wickes.co.uk/Wickes-Geneva-Oak-Cottage-Internal-Door---1981mm/p/9000229489 How much would I be looking at to hang these doors?',
      askedBy: "minesh",
      date: "4th Apr 2020",
      likes: 25,
    },
    {
      id: 2,
      title: "Sharp sand Vs builders sand",
      category: "Gardeners",
      answers: 10,
      description:
        "I'm laying a patio and have heard mixed opinions on which sand I need to use. What sand or mixture should I be using with the cement to lay paving flags?",
      askedBy: "minesh",
      date: "31st Mar 2020",
      likes: 18,
    },
    {
      id: 3,
      title: "How do I fix a broken bathroom pull cord ceiling light?",
      category: "Electricians",
      answers: 10,
      description:
        "Hello all I have a ceiling light in my bathroom with a pull cord to switch it on and off. The cord itself has broken from the rest of the switch and the light is stuck on at the moment. I've not had this happen before, so I've never had to try and fix it. How could I fix this? Is the cord a replaceable part on these light switches? Any information would be appreciated!",
      askedBy: "kashif",
      date: "2nd Sep 2019",
      likes: 15,
    },
    {
      id: 4,
      title: "How much to plaster over an Artex ceiling",
      category: "Plasterers",
      answers: 17,
      description:
        "How much would it cost to plaster over an Artex (Stipple pattern) bedroom ceiling that is 3m by 5m? The ceiling has been tested and is Asbestos free (with certificate). Would it be cheaper if I were to smoothen off the Artex first?",
      askedBy: "Mathew",
      date: "25th Mar 2020",
      likes: 32,
    },
    {
      id: 5,
      title: "What is a typical hourly rate for carpenters?",
      category: "Joiners",
      answers: 20,
      description:
        "Hi, I have several projects that I require carpenter(s) to be hired for, but I am wary about the cost this might be. Does anyone have any reasonable estimates for the hourly cost of a carpenter?",
      askedBy: "Nan",
      date: "26th Feb 2019",
      likes: 28,
    },
    {
      id: 6,
      title:
        "Do Electric Cookers need Electricians to be connected/disconnected?",
      category: "Electricians",
      answers: 16,
      description:
        "Hello I am moving home soon and will be brining my electric cooker to the new house. Do I need a qualified electrician to disconnect in my old house and reconnect the cooker in the new house, or would I be able to do this myself?",
      askedBy: "Catherine",
      date: "1st Mar 2019",
      likes: 22,
    },
    {
      id: 7,
      title: "New Plaster Cracking after 2 months",
      category: "Plasterers",
      answers: 12,
      description:
        "I have just had my kitchen diner replastered and there are new cracks appearing in the plaster. This started on the ceilings and I have now noticed a hairline crack down one wall. Is this normal? Can I ask the trade back to fix or is it expected and how can I fix it?",
      askedBy: "angie",
      date: "31st Mar 2020",
      likes: 19,
    },
    {
      id: 8,
      title: "How much postcrete do I need for each wooden post?",
      category: "Gardeners",
      answers: 11,
      description:
        "Hello all, I need some advice for how many bags of postcrete I will need for a new fence I will be putting up. The posts themselves will be 2.4m wooden posts for panels that are 1.8m by 1.8m. The posts will be put in soft and sandy soil. Can anyone give me an idea of what the bag to post ratio would be? Many Thanks, Bill",
      askedBy: "Bill",
      date: "27th Feb 2019",
      likes: 14,
    },
    {
      id: 9,
      title: "What is the white substance on bricks and how do I remove it?",
      category: "Stoneworkers",
      answers: 4,
      description:
        "Is it mould?? I've got white patches along the wall outside my house, it's the side that never sees sunlight so I think it could be mould or something. How can I solve the problem?",
      askedBy: "Jenny",
      date: "11th Apr 2020",
      likes: 8,
    },
    {
      id: 10,
      title: "Down Lights Fitting Cost",
      category: "Electricians",
      answers: 12,
      description:
        "Hi, I would like to know how much does it cost to install recessed down lights in a room? The existing light fittings are standard pendant lights.",
      askedBy: "Ramya",
      date: "25th Feb 2020",
      likes: 16,
    },
  ];

  const filteredQuestions = questions.filter((question) => {
    const matchesSearch =
      question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || question.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    if (sortBy === "Most liked") return b.likes - a.likes;
    if (sortBy === "Most answers") return b.answers - a.answers;
    if (sortBy === "Newest") return new Date(b.date) - new Date(a.date);
    return 0;
  });

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <Header />

      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-700 mb-6">
                Ask a Trade
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Got a question that only a tradesperson can answer? We have
                thousands of trades ready to answer any question you may have.
              </p>
              <button
                className="text-white px-8 py-3 rounded-md text-lg font-semibold hover:brightness-90 transition mb-12 cursor-pointer"
                style={{ backgroundColor: "#40D4E8" }}
              >
                Ask your question
              </button>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">
                  Search our questions
                </h2>
                <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
                  <input
                    type="text"
                    placeholder="Enter your question"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-3 text-lg border border-gray-300 rounded-md focus:border-primary focus:outline-none"
                  />
                  <button
                    className="text-white px-8 py-3 rounded-md text-lg font-semibold hover:brightness-90 transition cursor-pointer"
                    style={{ backgroundColor: "#40D4E8" }}
                  >
                    Search
                  </button>
                </div>
              </div>

              <p className="text-gray-600">
                Found an answer to your question? Find a{" "}
                <a href="#" className="text-primary hover:underline">
                  tradesperson near you
                </a>
                !
              </p>
            </div>

            <div className="lg:col-span-2 flex justify-center">
              <img
                src={heroImage}
                alt="Ask a Trade illustration"
                className="w-96 md:w-md lg:w-lg h-auto object-contain"
              />
            </div>

            <div className="lg:col-span-1 hidden lg:block"></div>
          </div>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 font-medium text-sm">
                        Filter by:
                      </span>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1 text-sm focus:border-primary focus:outline-none bg-white"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 font-medium text-sm">
                        Sort by:
                      </span>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1 text-sm focus:border-primary focus:outline-none bg-white"
                      >
                        <option value="Most liked">Most liked</option>
                        <option value="Most answers">Most answers</option>
                        <option value="Newest">Newest</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {sortedQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-700 cursor-pointer leading-tight">
                          {question.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          {question.category}
                        </span>
                        <span className="font-medium">
                          {question.answers} answers
                        </span>
                      </div>

                      <p className="text-gray-700 text-sm leading-relaxed">
                        {question.description.length > 200
                          ? `${question.description.substring(0, 200)}...`
                          : question.description}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <div className="text-xs text-gray-500">
                          Asked by{" "}
                          <span className="font-medium text-gray-700">
                            {question.askedBy}
                          </span>{" "}
                          on {question.date}
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {question.likes}
                          </div>

                          <button
                            className="text-white px-3 py-1 text-xs rounded font-medium hover:brightness-90 transition cursor-pointer"
                            style={{ backgroundColor: "#40D4E8" }}
                          >
                            View answers
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-1">
                  <button
                    className="px-3 py-2 text-white text-sm rounded cursor-pointer"
                    style={{ backgroundColor: "#40D4E8" }}
                  >
                    Previous
                  </button>
                  <button
                    className="px-3 py-2 text-white text-sm rounded cursor-pointer"
                    style={{ backgroundColor: "#40D4E8" }}
                  >
                    1
                  </button>
                  <button
                    className="px-3 py-2 text-white text-sm rounded cursor-pointer"
                    style={{ backgroundColor: "#40D4E8" }}
                  >
                    2
                  </button>
                  <button
                    className="px-3 py-2 text-white text-sm rounded cursor-pointer"
                    style={{ backgroundColor: "#40D4E8" }}
                  >
                    ...
                  </button>
                  <button
                    className="px-3 py-2 text-white text-sm rounded cursor-pointer"
                    style={{ backgroundColor: "#40D4E8" }}
                  >
                    605
                  </button>
                  <button
                    className="px-3 py-2 text-white text-sm rounded cursor-pointer"
                    style={{ backgroundColor: "#40D4E8" }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">
                  TRADE CATEGORIES
                </h3>
                <div className="space-y-1">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="block w-full text-left px-3 py-2 text-sm rounded font-medium hover:brightness-90 transition cursor-pointer"
                      style={{
                        backgroundColor:
                          selectedCategory === category ? "#40D4E8" : "white",
                        color:
                          selectedCategory === category ? "white" : "#4B5563",
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#f6faff] rounded-xl text-center p-6 shadow-sm mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Find Tradespeople,
                  <br />
                  compare up to 3 quotes!
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  It's FREE and there are no obligations
                </p>
                <button
                  onClick={() => navigate("/post-job")}
                  className="text-white font-semibold px-6 py-2 rounded-md text-sm w-full hover:brightness-90 transition cursor-pointer"
                  style={{ backgroundColor: "#40D4E8" }}
                >
                  Post a job
                </button>

                <div className="mt-5 flex justify-center">
                  <img
                    src={ctaImage}
                    alt="Tradespeople illustration"
                    className="w-40 h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-6 shadow-sm mb-8 w-full max-w-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2 leading-snug">
              Find Tradespeople,
              <br />
              compare up to 3 quotes!
            </h3>
            <p className="text-gray-600 text-sm mb-5">
              It's FREE and there are no obligations
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="text"
                placeholder="Enter postcode"
                className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={() => navigate("/post-job")}
                className="text-white font-semibold px-5 py-2 rounded-md text-sm transition hover:brightness-90 cursor-pointer"
                style={{ backgroundColor: "#40D4E8" }}
              >
                Get started
              </button>
            </div>

            <div className="flex justify-center">
              <img
                src={ctaImage}
                alt="Tradespeople illustration"
                className="w-40 h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#f6faff] rounded-xl p-8 shadow-md mb-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to get a price for your home improvement project?
          </h2>
          <button
            onClick={() => navigate("/post-job")}
            className="text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition cursor-pointer"
            style={{ backgroundColor: "#40D4E8" }}
          >
            Get Started
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QuestionsPage;
