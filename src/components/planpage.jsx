import Navbar from "./navbar";

export default function PlanPage() {
    return (
        <div>
            <Navbar home={true} about={true} plan={false} />
            <div className="muscle-gain text-white font-kod h-[700px] relative p-10 pl-20 ">
                <p className="lg:text-6xl text-5xl absolute top-[45%] max-lg:left-[15%] md:right-[25%] ">MUSCLE GAIN FOCUS</p>
                <p className="absolute left-[15%] top-[25%] text-[#74f0ed] text-2xl uppercase w-[300px]">Gain muscle mass while having a low body fat percentage </p>
                <button className="plans-button p-5 rounded-3xl text-xl text-black absolute left-[15%] bottom-28">CREATE PLAN</button>
            </div>

        </div>
    );
}