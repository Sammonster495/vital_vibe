import {Link as ScrollLink} from "react-scroll";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div className="h-40 flex top-0 px-40 p-4 justify-between">
            <div className="flex space-x-3">
                <img src="logo.jpg" alt="Vital Vibe" />
                <h1 className="text-[#FF7F50] font-kod text-4xl m-10">VITAL</h1>
                <h1 className="text-[#74F0ED] font-kod text-4xl m-10">VIBE</h1>
            </div>
            <ul className="flex p-5 space-x-8">
                {props.about && <div className="p-4 relative">
                    <img src="nav-container.jpg" alt="About Us" className="h-12" />
                    <li className="text-white font-kod absolute bottom-9 left-10"><Link to="/about">About Us</Link></li>
                </div>}
                {props.home && <div className="p-4 relative">
                    <img src="nav-container.jpg" alt="About Us" className="h-12" />
                    <li className="text-white font-kod absolute bottom-9 left-14"><Link to="/home">Home</Link></li>
                </div>}
                {props.plan && <div className="p-4 relative">
                    <img src="nav-container.jpg" alt="About Us" className="h-12" />
                    <li className="text-white font-kod absolute bottom-9 left-7"><Link to="/plan">Create Plan</Link></li>
                </div>}
                <div className="p-4 relative">
                    <img src="nav-container.jpg" alt="About Us" className="h-12" />
                    <li className="text-white font-kod absolute bottom-9 left-8"><ScrollLink to="contact" activeClass="active" smooth={true}>Contact Us</ScrollLink></li>
                </div>
            </ul>
        </div>
    );
}