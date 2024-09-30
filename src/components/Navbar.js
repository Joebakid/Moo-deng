import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">M👀👀Deng</div>

        {/* Hamburger Icon */}
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
        <div className="hidden md:flex space-x-6 transitional-el">
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
          <a href="#contact" className="hover:text-yellow-400">
            Twitter
          </a>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed  inset-0 bg-gray-800 text-white transform transition-transform ${
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
          <ul className="flex flex-col justify-center items-center space-y-10 h-full py-10">
            <li>
              <a href="#home" className="text-2xl hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-2xl hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#tokenomics" className="text-2xl hover:text-yellow-400">
                Tokenomics
              </a>
            </li>
            <li>
              <a href="#roadmap" className="text-2xl hover:text-yellow-400">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#contact" className="text-2xl hover:text-yellow-400">
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
