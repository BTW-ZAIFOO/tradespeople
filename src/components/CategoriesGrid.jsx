import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categoriesData } from '../data/categoriesData';

const CategoriesGrid = () => {
  const categories = Object.values(categoriesData);
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="space-y-4">
              {/* Category Header with Icon */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <Link
                  to={`/category/${category.slug}`}
                  className="text-lg font-bold text-blue-600 hover:text-blue-700 transition"
                >
                  {category.name}
                </Link>
              </div>

              {/* Subcategories List */}
              <div className="space-y-2">
                {category.subcategories && category.subcategories.slice(0, 4).map((subcategory, subIndex) => (
                  <Link
                    key={subIndex}
                    to={`/category/${category.slug}`}
                    className="block text-gray-600 hover:text-blue-600 text-sm transition"
                  >
                    {subcategory.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full Width Message */}
        <div className="mt-12 text-center pt-8 border-t border-gray-200">
          <p className="text-gray-700 mb-2">
            Need something more specialist? Check out our full list of trades.
          </p>
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 font-semibold transition"
          >
            See all trades
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
