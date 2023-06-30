import React, { useState, useEffect, useRef } from "react";
import { Link, Route } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { X } from "lucide-react";
import Slider from "./Slider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // const closeNavbar = () => {
  //   setIsOpen(false);
  // };

  return (
    <div className="flex justify-between h-16 p-4 bg-green-900">
      <Link to="/">
        <img
          src="/images/logo-bg.png"
          alt="company logo"
          className="w-20 h-20 mt-[-20px]"
        />
      </Link>

      <div className="hidden md:flex gap-x-10 text-white after:decoration-golden font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/reservation">Reservation</Link> */}
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <button onClick={toggle}>
        {isOpen ? (
          <X className="animate-spin text-4xl text-red-600" />
        ) : (
          <BiMenuAltRight className="md:hidden text-4xl text-red-600" />
        )}
      </button>
      {isOpen && <Slider />}
    </div>
  );
};

export default Navbar;
