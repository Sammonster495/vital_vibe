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
      className={`sm:px-[110px] p-4 justify-between lg:flex ${isOpen ? "" : ""}`}
    >
      <div className="flex space-x-3">
        <img src="logo.jpg" alt="Vital Vibe"/>
        <h1 className="text-[#FF7F50] font-kod sm:text-4xl m-10 max-sm:text-2xl">
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
              <Link to="/home" className="mx-7">Home</Link>
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
      <div className="text-white lg:hidden absolute right-10 top-12">
        <Hamburger onToggle={openMenu}  />
      </div>
    </div>
  );
}
