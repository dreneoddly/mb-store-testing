import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductSection = ({ title, apiUrl }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the fake API
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Check if the data has a 'products' array, as with dummyjson
        if (data.products) {
          setProducts(data.products.slice(0, 4)); // limit to 4 products for display
        } else {
          setProducts(data.slice(0, 4)); // For APIs that return an array
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            discount={product.discountPercentage}
            image={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
