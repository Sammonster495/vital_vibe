import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import React from "react";

export default function Anav(props) {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div
      className={`h-40 top-0 px-30 p-4 justify-between ${isOpen ? "" : "flex"}`}
    >
      <div className="flex space-x-3">
        <img src="logo.jpg" alt="Vital Vibe" />
        <h1 className="text-[#FF7F50] font-kod text-4xl m-10">
          VITAL <span className="text-[#74F0ED]">VIBE</span>
        </h1>
      </div>
      <ul
        className={` p-5  ${
          isOpen ? "h-[300px]" : "max-lg:hidden flex space-x-8"
        }`}
      >
        {props.about && (
          <div className="gradient-border">
            <li className="nav-item">
              <Link to="/about">About Us</Link>
            </li>
          </div>
        )}

        {props.home && (
          <div className="gradient-border">
            <li className="nav-item">
              <Link to="/home">Home</Link>
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
            <ScrollLink to="contact" activeClass="active" smooth={true}>
              Contact Us
            </ScrollLink>
          </li>
        </div>
      </ul>
      <div className="text-white lg:hidden absolute right-10 top-12">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  );
}
