import Navbar from './navbar';
import HomeCard from './homecard';

export default function HomePage() {
    return (
        <div>
            <Navbar home={false} about={true} plan={true} />
            <img src="background.jpg" alt="Home Background" className="w-full" />
            <div className="text-white font-kod">
            <p className="text-center text-[#74F0ED] text-3xl max-sm:text-2xl">CUSTOMIZED PLAN CATERED TO YOUR GOALS</p>
              <div className="lg:flex justify-between py-14 px-20">
                <HomeCard key="muscle gain" image="musclegain.jpg" text="MUSCLE GAIN" position="bottom-5"  />
                <HomeCard key="weight loss" image="weightloss.jpg" text="WEIGHT LOSS" position="top-[45%]"  />
                <HomeCard key="strength" image="strength.jpg" text="STRENGTH" position="top-5 left-14"  />
              </div>
            </div>
        </div>
    );
}


