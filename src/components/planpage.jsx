import Navbar from "./navbar";

export default function PlanPage() {
    return (
        <div>
            <Navbar home={true} about={true} plan={false} />
            <div className="muscle-gain text-white font-kod h-[600px]">
                <p>MUSCLE GAIN FOCUS</p>
                <p>Gain muscle mass while having a low body fat percentage </p>
                <button>CREATE PLAN</button>
            </div>
        </div>
    );
}