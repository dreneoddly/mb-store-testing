// components/ProductList.js

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setProducts(data.products);
      
    }
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          discount={product.discountPercentage}
          image={product.thumbnail}
        />
      ))}
    </div>
  );
}
