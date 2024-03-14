import { useState } from "react";
import axios from "axios";

export default function Muscle(){
    const [inputData, setInputData] = useState("");
    const [prediction, setPrediction] = useState("");

    const handleInput = (event) => {
        setInputData(event.target.value);
    }

    const handlePredict = async () => {
        try{
            const response = await axios.post("http://localhost:5000/predict", {experience: inputData});
            setPrediction(response.data.prediction);
        }catch(error){
            console.log(error);
        }
    }


    return(
        <div>
            <input type="text" placeholder="Enter your experience..." value={inputData} onChange={handleInput} />
            <button onClick={handlePredict} className="bg-white">Predict</button>
            <div className="bg-white text-black">Prediction: {prediction}</div>
        </div>
    );
}