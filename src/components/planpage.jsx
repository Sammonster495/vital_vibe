import Navbar from "./navbar";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PlanPage() {
    useEffect(() => {
        const { hash } = window.location;
        if (hash) {
          const section = document.getElementById(hash.substring(1));
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);

    return (
        <div>
            <Navbar home={true} about={true} plan={false} />
            <div className="muscle-gain text-white font-kod h-[700px] relative p-10 pl-20 mb-10" id="muscle">
                <p className="lg:text-6xl text-5xl absolute top-[48%] max-lg:left-[15%] md:right-[25%] ">MUSCLE GAIN FOCUS</p>
                <p className="absolute left-[15%] top-[25%] text-[#74f0ed] text-2xl uppercase w-[300px]">Gain muscle mass while having a low body fat percentage</p>
                <Link to="/plan/musclegain"><button className="plans-button p-5 rounded-3xl text-xl text-black absolute left-[15%] bottom-28">CREATE PLAN</button></Link>
            </div>
            <div className="weight-loss text-white font-kod h-[700px] relative p-10 pl-20 mb-10" id="weight">
                <p className="lg:text-6xl text-5xl absolute top-[48%] max-lg:left-[15%] md:right-[25%] ">WEIGHT LOSS FOCUS</p>
                <p className="absolute left-[15%] top-[25%] text-[#74f0ed] text-2xl uppercase w-[300px]">lose excess body fat on your terms</p>
                <button className="plans-button p-5 rounded-3xl text-xl text-black absolute left-[15%] bottom-28">CREATE PLAN</button>
            </div>
            <div className="strength-focus text-white font-kod h-[700px] relative p-10 pl-20 mb-10" id="strength">
                <p className="lg:text-6xl text-5xl absolute top-[48%] max-lg:left-[15%] md:right-[25%] ">STRENGTH FOCUS</p>
                <p className="absolute left-[15%] top-[25%] text-[#74f0ed] text-2xl uppercase w-[300px]">Build immense strength - you decide your boundaries</p>
                <button className="plans-button p-5 rounded-3xl text-xl text-black absolute left-[15%] bottom-28">CREATE PLAN</button>
            </div>

        </div>
    );
}