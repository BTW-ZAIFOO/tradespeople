import React from 'react';

const AskTradespersonPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Ask a Tradesperson</h1>
      <p className="mb-6">Got a question? Fill out the form below and a tradesperson will answer you.</p>
      
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Question Title"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          placeholder="Describe your problem in detail..."
          className="w-full border border-gray-300 p-2 rounded h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Question
        </button>
      </form>
    </div>
  );
};

export default AskTradespersonPage;
