import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  const SOCIALS = [
    {
      id: 1,
      link: "https://www.twitter.com",
      icon: <FaTwitter />,
    },
    {
      id: 2,
      link: "https://www.facebook.com",
      icon: <FaFacebook />,
    },
    {
      id: 3,
      link: "https://www.linkedin.com",
      icon: <FaLinkedin />,
    },
    {
      id: 4,
      link: "https://wa.me/+2348100987235",
      icon: <FaWhatsapp />,
    },
    {
      id: 5,
      link: "mandanahotels@gmail.com",
      icon: <AiOutlineMail />,
    },
  ];

  const Facilities = [
    {
      id: 1,
      name: "Night Club",
    },
    {
      id: 2,
      name: "Outdoor Pool",
    },
    {
      id: 3,
      name: "Good Security",
    },
  ];
  return (
    <div className="md:flex h-[140px] overflow-visible fixed bottom-0 right-0 left-0 md:flex-row md:justify-between lg:justify-around md:gap-x-4 md:px-8 gap-x-4 px-2 bg-custom text-white z-50">
      <div>
        <p className="font-extrabold text-customGold">LOCATE US</p>
        <p>No 20, University Road, Adehun, Ado-Ekiti, Ekiti State</p>

        <div className="flex items-center font-bold">
          <GiRotaryPhone />
          <p className="ml-1">+2348100987235</p>
        </div>
        {/*
        <div className="flex items-center font-bold">
          <AiOutlineMail />
          <p className="ml-2">mandanahotels@gmail.com</p>
        </div> */}

        <div>
          <p className="font-bold text-customGold">Follow Us</p>
          <div className="flex gap-x-4 ">
            {SOCIALS.map(({ id, link, icon }) => (
              <Link to={link} key={id}>
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="my-4 hidden md:flex md:flex-col">
          <p className="font-extrabold text-customGold">Hotel Facilities</p>
          {Facilities.map(({ id, name }) => (
            <ul>
              <li>{name}</li>
            </ul>
          ))}
        </div>
        {/* <div className="mb-10 md:mt-4">
          <p className="font-extrabold text-customGold">Follow Us</p>
          <div className="flex gap-x-4 text-2xl">
            {SOCIALS.map(({ id, link, icon }) => (
              <Link to={link} key={id}>
                {icon}
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
