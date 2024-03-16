import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage";
import AboutPage from "./components/aboutpage";
import PlanPage from "./components/planpage";
import MuscleGain from "./components/musclegain";

export default function App(){
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/plan" element={<PlanPage />} />
                    <Route path="/plan/musclegain" element={<MuscleGain />} />
                </Routes>
            </Router>
        </div>
    );
}