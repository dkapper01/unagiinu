import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = () => (
  <footer className="flex">
    <section className="">
      <ul className="menu-list">
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
          <Link className="navbar-item" to="/contact/examples">
            Form Examples
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <ul className="menu-list">
        <li>
          <Link className="navbar-item" to="/blog">
            Latest Stories
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </section>
  </footer>
);

export default Footer;
