import Navbar from "./navbar";

export default function PlanPage() {
    return (
        <div>
            <Navbar home={true} about={true} plan={false} />
            <div className="muscle-gain text-white font-kod h-[700px] relative p-10">
                <p className="text-4xl absolute top-[30%] sm:right-[35%]">MUSCLE GAIN FOCUS</p>
                <p className="absolute left-[15%] top-[50%] text-[#74f0ed] text-2xl uppercase w-[300px]">Gain muscle mass while having a low body fat percentage </p>
                <button className="plans-button p-5 rounded-3xl text-black absolute left-[20%] bottom-16">CREATE PLAN</button>
            </div>
        </div>
    );
}