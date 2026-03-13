"use client";

import ProductCard from "./ProductCard";
import EmptyState from "../ui/EmptyState";

export default function ProductGrid({ products, loading }) {

  if (loading) {
    return <p className="text-center py-10">Loading products...</p>;
  }

  if (!products || products.length === 0) {
    return <EmptyState message="No Products Found" />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}