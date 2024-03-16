import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage";
import AboutPage from "./components/aboutpage";
import PlanPage from "./components/planpage";
import Muscle from "./components/muscle";
import WeightLoss from "./components/weightloss";

export default function App(){
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/plan" element={<PlanPage />} />
                    <Route path="/predict" element={<Muscle />} />
                    <Route path="/plan/weightloss" element={<WeightLoss />}/>
                </Routes>
            </Router>
        </div>
    );
}