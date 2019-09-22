import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-medium text-xl tracking-tight">
        <Link to="/">Tailwind CSS</Link>
      </span>
    </div>
    <div className="block lg:hidden">
      <button
        type="button"
        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div className="w-full block lg:flex lg:justify-end lg:items-center lg:w-auto">
      <div className="text-md lg:flex-grow">
        <Link
          to="/about"
          href="#responsive-header"
          activeStyle={{ marginRight: '1rem' }}
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          About
        </Link>
        <Link
          to="/products"
          href="#responsive-header"
          activeStyle={{ marginRight: '1rem' }}
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Products
        </Link>
        <Link
          to="/blog"
          href="#responsive-header"
          activeStyle={{ marginRight: '1rem' }}
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          href="#responsive-header"
          activeStyle={{ marginRight: '1rem' }}
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
