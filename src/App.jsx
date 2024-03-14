import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage";
import AboutPage from "./components/aboutpage";
import PlanPage from "./components/planpage";
import Muscle from "./components/muscle";

export default function App(){
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/plan" element={<PlanPage />} />
                    <Route path="/predict" element={<Muscle />} />
                </Routes>
            </Router>
        </div>
    );
}