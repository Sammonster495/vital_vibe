import Navbar from './navbar';
import HomeCard from './homecard';

export default function HomePage() {
    return (
        <div>
            <Navbar home={false} about={true} plan={true} />
            <img src="background.jpg" alt="Home Background" className="w-full" />
            <div className="text-white font-kod">
        <p className="text-center text-[#74F0ED] text-3xl max-sm:text-2xl">
          CUSTOMIZED PLAN CATERED TO YOUR GOALS
        </p>
        <div className="lg:flex justify-between py-14 px-20">
          <HomeCard image="musclegain.jpg" text="MUSCLE GAIN" position='5'  />
          <HomeCard image="musclegain.jpg" text="MUSCLE GAIN" position={85}  />
          
          <div className="w-max h-max relative m-auto my-10">
            <img
              src="musclegain.jpg"
              alt="MuscleGain.jpg"
              className="rounded-[30px] my-shadow"
            />
            <p className="absolute bottom-[85%] left-3 text-4xl">MUSCLE GAIN</p>
          </div>
        </div>
      </div>
        </div>
    );
}


