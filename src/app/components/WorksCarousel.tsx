"use client";

import React, { useState, useEffect, useRef } from "react";
import { RiUser6Line } from "react-icons/ri";

const MinimalPortfolio: React.FC = () => (
  <section className="grid grid-rows-2">
    <div className="flex justify-center items-end mb-4">
      <div className="rounded-full w-12 h-12 border-2 border-black">
        <span className="w-full h-full flex items-center justify-center">
          <RiUser6Line size={32} />
        </span>
      </div>
    </div>
    <div className="flex flex-col items-center text-center mt-4">
      <h1 className="uppercase font-bold text-2xl">John Doe</h1>
      <h2 className="font-semibold text-xl text-gray-500">
        a really interesting job
      </h2>
    </div>
  </section>
);

const InfiniteLoader: React.FC = () => (
  <div className="">
    <div className="flex items-center justify-center h-full">
      <div className="w-16 h-16 border-4 border-black border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
);

const SoonProject: React.FC = () => (
  <div>
    <p>
      This will be something big, come back later, you don&apos;t wanna miss it.
    </p>
  </div>
);

const worksData = [
  {
    name: "The ultimate minimalist Portfolio.",
    desc: "The true beauty of minimalism in a portfolio.",
    content: <MinimalPortfolio />,
  },
  {
    name: "The infinite loader.",
    desc: "It loads.",
    content: <InfiniteLoader />,
  },
  {
    name: "Soon...",
    desc: "The most astonishing project ever seen.",
    content: <SoonProject />,
  },
];

const Works: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? worksData.length - 1 : prevIndex - 1
    );
    resetAutoPlay();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === worksData.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === worksData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === worksData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const { name, desc, content } = worksData[currentIndex];

  return (
    <section className="w-full max-w-3xl mx-auto text-center">
      <div className="border-2 border-black rounded-lg mb-8 min-h-[20rem] flex flex-col justify-between">
        <div className="flex items-center text-center justify-center flex-grow">
          {content}
        </div>

        <div className="flex flex-col items-center justify-center border-t-2 border-black w-full h-12">
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>
      </div>

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
    </section>
  );
};

export default Works;
