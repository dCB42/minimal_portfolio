"use client";

import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe each section
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    // Cleanup the observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full h-[60px] fixed top-0 bg-white z-10">
      <ul className="flex mx-16 justify-around items-center h-full">
        <li>
          <a
            href="#works"
            className={`hover:underline nav-link ${
              activeSection === "works" ? "active" : ""
            }`}
          >
            Works
          </a>
        </li>
        <li>
          <a
            href="#experiences"
            className={`hover:underline nav-link ${
              activeSection === "experiences" ? "active" : ""
            }`}
          >
            Experiences
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            className={`hover:underline nav-link ${
              activeSection === "testimonials" ? "active" : ""
            }`}
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`hover:underline nav-link ${
              activeSection === "contact" ? "active" : ""
            }`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
