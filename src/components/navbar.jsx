import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import React from "react";

export default function Anav(props) {
  const [isOpen, setOpen] = React.useState(false);
  const openMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      className={`sm:px-[55px] md:px-[90px] lg:px-32 px-[20px] md:p-4 p-2 justify-between lg:flex ${isOpen ? "" : ""}`} id="navbar"
    >
      <div className="flex lg:space-x-3 md:space-x-2 sm:space-x-1 space-x-0">
        <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="Vital Vibe" className="sm:h-[80px] md:h-[110px] lg:h-auto h-[60px]"/>
        <h1 className="text-[#FF7F50] font-kod lg:m-11 md:m-9 sm:m-7 m-5 sm:text-xl md:text-2xl lg:text-4xl text-[16px]">
          VITAL <span className="text-[#74F0ED]">VIBE</span>
        </h1>
      </div>
      <ul
        className={` p-5 lg:space-x-4 lg:flex ${
          isOpen ? "" : "flex max-lg:hidden"
        }`}
        
      >
        {props.about && (
          <div className="gradient-border">
            <li className="nav-item">
              <Link to="/about" className="mx-2.5 text-md">About Us</Link>
            </li>
          </div>
        )}

        {props.home && (
          <div className="gradient-border">
            <li className="nav-item ">
              <Link to="/" className="mx-7">Home</Link>
            </li>
          </div>
        )}
        {props.plan && (
          <div className="gradient-border">
            <li className="nav-item">
              <Link to="/plan">Create Plan</Link>
            </li>
          </div>
        )}
        <div className="gradient-border">
          <li className="nav-item">
            <ScrollLink to="contact" activeClass="active" smooth={true} className="mx-0.5">
              Contact Us
            </ScrollLink>
          </li>
        </div>
      </ul>
      <div className="text-white lg:hidden absolute md:right-10 sm:right-8 right-6 md:top-11 sm:top-6 top-4 md:h-auto">
        <Hamburger onToggle={openMenu}  />
      </div>
    </div>
  );
}
