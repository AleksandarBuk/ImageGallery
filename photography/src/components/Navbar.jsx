import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./constants";
import { logoWoBg, menu, close } from "../assets";
import styles from '../style';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [highlightContact, setHighlightContact] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      // Turn on the highlight
      setHighlightContact(true);
  
      // Turn off the highlight after 5 seconds
      setTimeout(() => {
        setHighlightContact(false);
      }, 5000);
    }, 30000);
  
    return () => clearInterval(interval); // Clean up on component unmount
  }, []); 

  const handleNavClick = (nav) => {
    if (nav.title === "Home") {
      window.location.href = '/';
    }
    // Assuming 'nav' is an object that contains your navigation information
    if (nav.title === "About Me") {
      const section = document.getElementById('about-me');
      if (section) {
        // If the section exists, scroll to it smoothly
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // If the section does not exist, redirect to the anchor in the URL
        window.location.href = '/#aboutme';
      }
    } else if (nav.title === "Contact") {
      alert("Andjela@gmail.com");
    }
  };

  return (
    <nav className={`w-full flex py-6 justify-between items-center ${styles.navbarBg}`}>
      <Link to="/">
        <img src={logoWoBg} alt="Logo" className="w-[50px] h-[50px]" />
      </Link>
      <h2 className={`{styles.navbarBrand} text-[18px]`}>Andjela Photo</h2>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.title}
            className={`font-poppins font-normal cursor-pointer text-[18px] ${
              index !== navLinks.length - 1 ? 'mr-5' : ''
            } ${
              location.pathname === nav.href || (highlightContact && nav.title === "Contact") ? "text-white" : "text-dimWhite"
            }`}
            onClick={() => handleNavClick(nav)}
          >
            {nav.href ? <Link to={nav.href}>{nav.title}</Link> : nav.title}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={isMenuOpen ? close : menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <div
          className={`${!isMenuOpen ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex-col justify-end items-center flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.title}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  location.pathname === nav.href || (highlightContact && nav.title === "Contact") ? "text-white" : "text-dimWhite"
                } my-2`}
                onClick={() => handleNavClick(nav)}
              >
                {nav.href ? <Link to={nav.href}>{nav.title}</Link> : nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
