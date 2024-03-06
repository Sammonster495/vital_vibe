import Navbar from './navbar';

export default function HomePage() {
    return (
        <div>
            <Navbar home={false} about={true} plan={true} />
            <img src="home background.jpg" alt="Home Background" className="w-full" />
            <div className="relative space-y-16">
                <h1 className="text-[#74F0ED] font-kod px-[370px] text-[30px]">CUSTOMIZED PLAN CATERED TO YOUR GOALS</h1>
                <div className="relative flex justify-between px-60">
                    <img src="muscle gain.jpg" alt="Muscle gain" />
                    <img src="weight loss.jpg" alt="Weight loss" />
                    <img src="strength.jpg" alt="Strength" />
                </div>
            </div>
        </div>
    );
}


