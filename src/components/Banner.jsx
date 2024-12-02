import React, { useState, useEffect } from "react";

const Banner = () => {
  // Slide data
  const slides = [
    {
      image: "https://wallpapercave.com/wp/wp5115631.jpg",
      title: "War film",
    },
    {
      image: "https://wallpapercave.com/uwp/uwp4264173.jpeg",
      title: "Marvels",
    },
    {
      image: "https://wallpapercave.com/wp/wp14778191.jpg",
      title: "Star Wars",
    },
  ];

  // State for current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div>
      {/* Dynamic Banner */}
      <div
        className="h-[20vh] md:h-[75vh] bg-no-repeat bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
        role="banner"
      >
        <div className="text-white flex justify-end items-center text-center bg-red-900/40 text-[25px] flex-col text-xl w-full p-3">
          {slides[currentIndex].title}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full mx-1 ${
              currentIndex === index ? "bg-red-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)} // Manual navigation
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
