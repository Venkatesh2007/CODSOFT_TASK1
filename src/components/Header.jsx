import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from 'react-icons/fa';

const Header = () => (
  <header className="bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white p-1 sm:p-4 shadow-lg">
    <nav className="container mx-auto flex justify-between rubik font-bold">
      <ul className="flex justify-around w-full">
        <li>
          <Link
            to="/"
            className="hover:text-light-purple hover:underline transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl px-4 flex items-center"
          >
            <FaHome className="mr-2 hidden sm:inline" /> Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:text-light-purple hover:underline transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl px-4 flex items-center"
          >
            <FaProjectDiagram className="mr-2 hidden sm:inline" /> Projects
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-light-purple hover:underline transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl px-4 flex items-center"
          >
            <FaUser className="mr-2 hidden sm:inline" /> About Me
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-light-purple hover:underline transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl px-4 flex items-center"
          >
            <FaEnvelope className="mr-2 hidden sm:inline" /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
