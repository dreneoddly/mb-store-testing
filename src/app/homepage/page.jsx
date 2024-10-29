"use client"

import Banner from './Banner';
import ProductSection from './ProductSection';

export default function Home() {
  return (
    <div className="mx-0 md:mx-10">
      <Banner />
      {/* Trending Section */}
      <ProductSection
        title="Trending Now!"
        apiUrl="https://dummyjson.com/products?limit=5"
      />
      {/* New Arrival Section */}
      <ProductSection
        title="New Arrivals"
        apiUrl="https://dummyjson.com/products?limit=5&skip=5"
      />
      {/* Shoes Section */}
      <ProductSection
        title="Shoes"
        apiUrl="https://dummyjson.com/products?limit=5&skip=5"
      />
      {/* Clothes Section */}
      <ProductSection
        title="Clothes"
        apiUrl="https://dummyjson.com/products?limit=5&skip=5"
      />
    </div>
  );
}
