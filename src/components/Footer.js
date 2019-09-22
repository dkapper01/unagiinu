import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = () => (
  <footer className="flex py-24 bg-gray-200 ">
    <ul className="flex w-9/12 mx-auto justify-center items-center text-center content-center self-center">
      <li>
        <Link to="/" className="navbar-item">
          Home
        </Link>
      </li>
      <li>
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </li>
      <li>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
