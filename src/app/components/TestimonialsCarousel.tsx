"use client";

import React, { useState, useEffect, useRef } from "react";
import { RiUser6Line } from "react-icons/ri";

const testimonialsData = [
  {
    quote:
      "John Doe brings a unique blend of expertise and innovation. His contributions are consistently impressive, leaving a lasting impact that, frankly, defies simple description.",
    name: "Alexandra Sterling",
    position: "CEO at Sterling Enterprises",
  },
  {
    quote:
      "Working with John was an adventure. I still don't understand what his job is, but somehow, he's amazing at it!",
    name: "Jamie Lane",
    position: "Uncertified Job Observer",
  },
  {
    quote:
      "John is the only person I know who actually does 'a really interesting job,' and trust me, his projects are as interesting as his job sounds!",
    name: "Taylor Reed",
    position: "Professional Enthusiast",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
    resetAutoPlay();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const { quote, name, position } = testimonialsData[currentIndex];

  return (
    <section className="">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="border-2 border-black rounded-lg p-6 mb-8 min-h-[20rem] flex flex-col justify-between">
          <p className="mb-4 flex items-center text-center justify-center flex-grow">
            &quot;{quote}&quot;
          </p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-black rounded-full flex justify-center items-center">
              <RiUser6Line size={32} />
            </div>
            <div className="ml-4 w-48">
              <h4 className="text-lg font-medium text-center">{name}</h4>
              <p className="text-sm text-center">{position}</p>
            </div>
          </div>
        </blockquote>

        <div className="flex items-center justify-center space-x-6">
          <button
            title="Previous"
            onClick={handlePrev}
            className="rounded-full focus:outline-none border-black border-2 w-10 h-10 font-extrabold text-lg hover:bg-black hover:text-white"
          >
            <span> {"<"} </span>
          </button>
          <button
            title="Next"
            onClick={handleNext}
            className="rounded-full focus:outline-none border-black border-2 w-10 h-10 font-extrabold text-lg hover:bg-black hover:text-white"
          >
            <span> {">"} </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
