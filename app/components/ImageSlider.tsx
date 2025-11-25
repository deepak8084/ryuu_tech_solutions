"use client";

import { useState, useEffect } from "react";

export default function ImageSlider() {
  const images = [
    "/slider/shape1.png",
    "/slider/shape2.png",
    "/slider/shape3.png"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-72 sm:h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg bg-black/20 backdrop-blur">
      <img
        src={images[current]}
        alt="slider"
        className="w-full h-full object-cover transition-all duration-700"
      />

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
      >
        ›
      </button>

      <div className="absolute bottom-3 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
