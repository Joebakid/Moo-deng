import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Power3 } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let nav = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      nav,
      { opacity: 0, y: "-30%" },
      { opacity: 1, y: "0%", duration: 3, delay: 0.2, ease: Power3.easeOut }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      ref={(el) => {
        nav = el;
      }}
      className="bg-gray-800 text-white p-4 fixed top-0 z-50 left-0 right-0 px-16 opacity-0 "
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">M👀Deng</div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-400">
            About
          </a>
          <a href="#tokenomics" className="hover:text-yellow-400">
            Tokenomics
          </a>
          <a href="#roadmap" className="hover:text-yellow-400">
            Roadmap
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://x.com/moodengondoge?s=11"
            className="hover:text-yellow-400"
          >
            Twitter
          </a>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-gray-800 text-white z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <ul className="flex flex-col justify-center items-center space-y-10 h-screen py-10 bg-gray-800 ">
            <li>
              <a
                href="#home"
                className="text-2xl hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-2xl hover:text-yellow-400"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#tokenomics"
                className="text-2xl hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Tokenomics
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-2xl hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://x.com/moodengondoge?s=11"
                className="text-2xl hover:text-yellow-400"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
