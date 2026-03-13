"use client";

import { useState } from "react";

export default function ProductSlider({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) {
    return (
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        No Image
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-lg">
      <img
        src={images[currentIndex]}
        alt="product"
        className="w-full h-full object-cover"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded shadow"
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded shadow"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}