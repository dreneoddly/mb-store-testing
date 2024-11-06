// pages/product/[id].js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      async function fetchProduct() {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      }
      fetchProduct();
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl text-red-500 font-semibold mb-4">Price: ${product.price}</p>
      <p className="text-sm text-gray-500">
        Discount: {product.discountPercentage}% off
      </p>
    </div>
  );
}
