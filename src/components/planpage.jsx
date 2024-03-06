import Navbar from "./navbar";

export default function PlanPage() {
    return (
        <div>
            <Navbar home={true} about={true} plan={false} />
        </div>
    );
}