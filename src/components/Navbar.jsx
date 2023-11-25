import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./constants";
import { logoWoBg, menu, close } from "../assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar-bg">
      <Link to="/">
        <img src={logoWoBg} alt="Logo" className="w-[50px] h-[50px]" />
      </Link>
      <h2 className="font-poppins">Andjela Photo</h2>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.title}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index !== navLinks.length - 1 ? 'mr-5' : ''} ${
              location.pathname === nav.href ? "text-white" : "text-dimWhite"
            }`}
          >
            <Link to={nav.href}>{nav.title}</Link>
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
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.title}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  location.pathname === nav.href ? "text-white" : "text-dimWhite"
                }`}
              >
                <Link to={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
