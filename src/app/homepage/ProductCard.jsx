// components/ProductCard.js

import Link from 'next/link';

const ProductCard = ({ id, title, price, discount, image }) => {
  return (
    <Link href={`/product/${id}`} legacyBehavior>
      <a className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="relative">
          <img
            src={image}
            alt={title}
            width={300}
            height={300}
            className=" object-cover"
          />
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
            {discount}% OFF
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-pink-600 transition-colors">
            {title}
          </h3>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-red-500 font-bold">${price.toFixed(2)}</span>
              <span className="text-gray-500 line-through text-sm ml-2">
                ${(price / (1 - discount / 100)).toFixed(2)}
              </span>
            </div>
            <span className="text-gray-600 text-sm">{discount}% off</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
