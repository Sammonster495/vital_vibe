import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage";
import AboutPage from "./components/aboutpage";
import PlanPage from "./components/planpage";

export default function App(){
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/plan" element={<PlanPage />} />
                </Routes>
            </Router>
        </div>
    );
}