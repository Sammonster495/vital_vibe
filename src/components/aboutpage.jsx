import Navbar from "./navbar";

export default function AboutPage() {
    return (
        <div>
            <Navbar home={true} about={false} plan={true} />
        </div>
    );
}