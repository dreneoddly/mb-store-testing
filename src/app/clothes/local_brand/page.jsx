"use client";
// components/ProductDisplay.js
import React, { useState, useEffect } from 'react';
import ProductCard from '@/app/homepage/ProductCard';

export default function ProductDisplay() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [displayCount, setDisplayCount] = useState(12);
  const [sortOption, setSortOption] = useState('latest');

  useEffect(() => {
    // Fetch product data from dummyjson.com
    async function fetchProducts() {
      const response = await fetch('https://dummyjson.com/products/category/groceries?limit=20');
      const data = await response.json();
      setProducts(data.products);
      setDisplayedProducts(data.products.slice(0, 12));
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    // Sort products based on selected sort option
    let sortedProducts = [...products];
    if (sortOption === 'lowest') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'highest') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = [...products];
    }
    setDisplayedProducts(sortedProducts.slice(0, displayCount));
  }, [sortOption, products, displayCount]);

  const handleViewMore = () => {
    setDisplayCount(displayCount + 8);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold md:text-2xl">All Items ({products.length} items)</h2>
        <select
          className="border border-gray-300 p-2 rounded"
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
        >
          <option value="latest">Shop By Latest</option>
          <option value="lowest">Lowest Price</option>
          <option value="highest">Highest Price</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard 
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            discount={product.discountPercentage}
            image={product.thumbnail}
          />
        ))}
      </div>

      {displayCount < products.length && (
         <div className="flex justify-center mt-8">
        <button
          className="flex center mt-8 px-6 py-2 bg-red-400 text-white font-semibold rounded-lg hover:bg-red-200"
          onClick={handleViewMore}
        >
          View More
        </button>
        </div>
      )}
    </div>
  );
}
