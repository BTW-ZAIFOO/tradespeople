import React, { useState } from 'react';

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState(['Plumbing', 'Electrical']);

  const availableCategories = [
    'Plumbing',
    'Electrical',
    'Carpentry',
    'Painting',
    'Roofing',
    'Masonry',
    'HVAC',
    'Landscaping',
    'Tiling',
    'Flooring',
    'Glazing',
    'Decorating'
  ];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Trade Categories</h2>

      <p className="text-gray-600 mb-6">
        Select the trade categories you work in. This helps customers find you for relevant jobs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {availableCategories.map((category) => (
          <label
            key={category}
            className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
              className="w-5 h-5 accent-orange-500"
            />
            <span className="ml-3 text-gray-700 font-medium">{category}</span>
          </label>
        ))}
      </div>

      <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition cursor-pointer">
        Save Categories
      </button>
    </div>
  );
};

export default Categories;
