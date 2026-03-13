"use client";

import ProductSlider from "./ProductSlider";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">

      <ProductSlider images={product.images} />

      <div className="p-4 space-y-2">

        <h3 className="text-lg font-semibold">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        <p className="font-bold text-blue-600">
          ₹{product.price}
        </p>

        <p className="text-xs text-gray-500">
          Category: {product.category?.name}
        </p>

        <p className="text-xs text-gray-500">
          Subcategory: {product.subCategory?.name}
        </p>

      </div>
    </div>
  );
}