import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Smart Hyperion
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex md:space-x-6 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/home"
            className="block md:inline-block py-2 px-4 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block md:inline-block py-2 px-4 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block md:inline-block py-2 px-4 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/faq"
            className="block md:inline-block py-2 px-4 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="block md:inline-block py-2 px-4 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
