import Navbar from './navbar';
import HomeCard from './homecard';
import Contact from './contact';
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <Navbar home={false} about={true} plan={true} />
            <img src="background.jpg" alt="Home Background" className="w-full" />
            <div className="text-white font-kod lg:py-24 md:py-20 sm:py-16 py-10 relative">
              <p className="text-center text-[#74F0ED] lg:text-3xl md:text-2xl sm:text-xl text-[13px] h-[1px] sm:h-auto">CUSTOMIZED PLAN CATERED TO YOUR GOALS</p>
              <div className="sm:flex justify-between py-8 lg:px-36 md:px-24 sm:px-12 px-14 ">
                <Link to="/plan#muscle">
                  <HomeCard key="muscle gain" image="musclegain.jpg" text="MUSCLE GAIN" position="bottom-5 lg:left-8 md:left-4 sm:left-2 left-7" />
                </Link>
                <Link to="/plan#weight">
                  <HomeCard key="weight loss" image="weightloss.jpg" text="WEIGHT LOSS" position="top-[45%] lg:left-8 md:left-4 sm:left-2 left-7" />
                </Link>
                <Link to="/plan#strength">
                  <HomeCard key="strength" image="strength.jpg" text="STRENGTH" position="top-5 lg:left-14 md:left-10 sm:left-6 left-12" />
                </Link>
              </div>
              <img src="Group 2.jpg" alt="" className="absolute left-[5%] bottom-[80%] lg:h-auto md:h-16 sm:h-12 hidden sm:block"/>
              <img src="Group 1.jpg" alt="" className="absolute left-[90%] top-[80%] lg:h-auto md:h-16 sm:h-12 hidden sm:block"/>
            </div>
            <img src="line.jpg" alt="" className="px-5"/>
            <Contact />
        </div>
    );
}


