"use client";

import { RiUser6Line, RiBuilding2Line } from "react-icons/ri";
import Testimonials from "./components/TestimonialsCarousel";
import Works from "./components/WorksCarousel";
import Navbar from "./components/NavBar";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white">
      <Navbar />

      {/* --------------------------------------------------------------------------------------------------- 
      
                                                    HERO SECTION
      
      --------------------------------------------------------------------------------------------------- */}

      <section id="hero" className="w-full h-screen grid grid-rows-2">
        <div className="w-full flex justify-center items-end mb-4">
          <div className="rounded-full w-48 h-48 border-4 border-black">
            <span className="w-full h-full flex items-center justify-center">
              <RiUser6Line size={177} />
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center mt-4">
          <div className="flex flex-col h-fit">
            <h1 className="uppercase font-bold text-4xl">John Doe</h1>
            <h2 className="font-semibold text-2xl text-gray-500">
              a really interesting job
            </h2>
          </div>

          <div className="w-full h-full flex justify-center items-end mb-8">
            <div className="mouse relative w-[40px] h-[76px] border-2 border-solid border-black rounded-[60px] flex justify-center items-end">
              <div className="mouse-inner absolute top-0 opacity-100 animate-wheel rotate-180 font-extrabold text-2xl">
                ^
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------------------------------- 
      
                                                    WORKS SECTION
      
      --------------------------------------------------------------------------------------------------- */}

      <section id="works" className="w-full h-screen flex flex-col px-2">
        <h2 className="text-2xl font-bold mb-4 text-center underline mt-[60px]">
          Works :
        </h2>

        <div className="h-full w-full flex flex-col justify-center">
          <Works />
        </div>
      </section>

      {/* --------------------------------------------------------------------------------------------------- 
      
                                                EXPERIENCES SECTION
      
      --------------------------------------------------------------------------------------------------- */}

      <section id="experiences" className="w-full h-screen flex flex-col px-2">
        <h2 className="text-2xl font-bold mb-4 text-center underline mt-[60px]">
          Recent Experiences :
        </h2>

        <div className="h-full w-full max-w-3xl mx-auto flex flex-col justify-center items-center">
          {/* Job Card */}
          <div className="flex border-2 py-1 border-black rounded-lg w-full max-w-3xl text-sm">
            <div className="w-fit flex justify-center items-center px-2">
              <RiBuilding2Line size={48} />
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Position held</h2>
              <h3>Company • Contract</h3>
              <p className="text-gray-500"># months | City, Country</p>
            </div>
          </div>
          {/* --- End of Job Card --- */}

          {/* Separator */}
          <div className="flex flex-col items-center leading-[8px] my-1 text-gray-500">
            <span>•</span>
            <span>•</span>
            <span>•</span>
          </div>
          {/* --- End of Separator --- */}

          {/* Job Card */}
          <div className="flex border-2 py-1 border-black rounded-lg w-full max-w-3xl text-sm">
            <div className="w-fit flex justify-center items-center px-2">
              <RiBuilding2Line size={48} />
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Position held</h2>
              <h3>Company • Contract</h3>
              <p className="text-gray-500"># months | City, Country</p>
            </div>
          </div>
          {/* --- End of Job Card --- */}

          {/* Separator */}
          <div className="flex flex-col items-center leading-[8px] my-1 text-gray-500">
            <span>•</span>
            <span>•</span>
            <span>•</span>
          </div>
          {/* --- End of Separator --- */}

          {/* Job Card */}
          <div className="flex border-2 py-1 border-black rounded-lg w-full max-w-3xl text-sm">
            <div className="w-fit flex justify-center items-center px-2">
              <RiBuilding2Line size={48} />
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Position held</h2>
              <h3>Company • Contract</h3>
              <p className="text-gray-500"># months | City, Country</p>
            </div>
          </div>
          {/* --- End of Job Card --- */}

          {/* Separator */}
          <div className="flex flex-col items-center leading-[8px] my-1 text-gray-500">
            <span>•</span>
            <span>•</span>
            <span>•</span>
          </div>
          {/* --- End of Separator --- */}

          {/* Job Card */}
          <div className="flex border-2 py-1 border-black rounded-lg w-full max-w-3xl text-sm">
            <div className="w-fit flex justify-center items-center px-2">
              <RiBuilding2Line size={48} />
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Position held</h2>
              <h3>Company • Contract</h3>
              <p className="text-gray-500"># months | City, Country</p>
            </div>
          </div>
          {/* --- End of Job Card --- */}

          {/* Separator */}
          <div className="flex flex-col items-center leading-[8px] my-1 text-gray-500">
            <span>•</span>
            <span>•</span>
            <span>•</span>
          </div>
          {/* --- End of Separator --- */}

          {/* Job Card */}
          <div className="flex border-2 py-1 border-black rounded-lg w-full max-w-3xl text-sm">
            <div className="w-fit flex justify-center items-center px-2">
              <RiBuilding2Line size={48} />
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Position held</h2>
              <h3>Company • Contract</h3>
              <p className="text-gray-500"># months | City, Country</p>
            </div>
          </div>
          {/* --- End of Job Card --- */}

          {/* Separator */}
          <div className="flex flex-col items-center leading-[8px] my-1 text-gray-500">
            <span>•</span>
            <span>•</span>
          </div>
          {/* --- End of Separator --- */}
        </div>
      </section>

      {/* --------------------------------------------------------------------------------------------------- 
      
                                                TESTIMONIALS SECTION
      
      --------------------------------------------------------------------------------------------------- */}

      <section id="testimonials" className="w-full h-screen flex flex-col px-2">
        <h2 className="text-2xl font-bold mb-4 text-center underline mt-[60px]">
          Testimonials :
        </h2>

        <div className="h-full flex flex-col justify-center">
          <Testimonials />
        </div>
      </section>

      {/* --------------------------------------------------------------------------------------------------- 
      
                                                  CONTACT SECTION
      
      --------------------------------------------------------------------------------------------------- */}

      <section id="contact" className="w-full h-screen flex flex-col px-2">
        <h2 className="text-2xl font-bold mb-4 text-center underline mt-[60px]">
          Contact Me :
        </h2>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <form className="w-full max-w-3xl space-y-6">
            {/* Name Field */}
            <div className="relative inline-block w-full">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 text-black bg-transparent border-0 outline-none text-lg"
                placeholder="Enter your name"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 border-b-2 border-l-2 border-r-2 border-black pointer-events-none rounded-b-lg" />
            </div>
            {/* Subject Field */}
            <div className="relative inline-block w-full">
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 text-black bg-transparent border-0 outline-none text-lg"
                placeholder="Enter the subject"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 border-b-2 border-l-2 border-r-2 border-black pointer-events-none rounded-b-lg" />
            </div>
            {/* Email Field */}
            <div className="relative inline-block w-full">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 text-black bg-transparent border-0 outline-none text-lg"
                placeholder="Enter your email"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 border-b-2 border-l-2 border-r-2 border-black pointer-events-none rounded-b-lg" />
            </div>
            {/* Message Field */}
            <div className="relative inline-block w-full">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 text-black bg-transparent border-0 outline-none text-lg"
                placeholder="Type your message"
                rows={4}
              ></textarea>
              <div className="absolute bottom-0 left-0 right-0 h-1/6 border-b-2 border-l-2 border-r-2 border-black pointer-events-none rounded-b-lg" />
            </div>
            {/* Submit Button */}
            <div className="w-full flex justify-center">
              <button
                type="button" // Set to "button" to prevent form submission
                onClick={openModal}
                className="px-6 py-2 rounded-md border-2 font-bold border-black hover:bg-black hover:text-white focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-md p-6 w-80 text-center">
                <p>
                  This form is for demonstration purposes only. Please visit my{" "}
                  <a
                    href="https://portfolio.devlyx.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    portfolio
                  </a>{" "}
                  to contact me.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-4 px-6 py-2 rounded-md border-2 font-bold border-black hover:bg-black hover:text-white focus:outline-none"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
