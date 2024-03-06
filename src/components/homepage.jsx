import Navbar from './navbar';
import Anav from './Anav.jsx';

export default function HomePage() {
    return (
        <div>
            <Navbar home={false} about={true} plan={true} />
            <div className="relative hidden">
                <img src="home background.jpg" alt="Home" className="w-full" />
                <img src="textbox.jpg" alt="Home" className="absolute top-20 left-[364px]" />
                <p className="text-white font-kod font-medium absolute top-48 left-[535px] text-xl">YOUR PERSONLIZED A.I. FITNESS GUIDE</p>
                <div className="px-[529px] absolute top-60">
                    <h1 className="text-white font-kod font-bold text-4xl">CREATE CUSTOMIZED WORKOUT AND DIET PLANS CATERED TO YOUR ABILITY</h1>
                </div>
            </div>
            <div className="relative hidden">
                <img src="muscle gain.jpg" alt="Muscle gain" />
            </div>
        </div>
    );
}