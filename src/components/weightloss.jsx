import Navbar from "./navbar";
import { useState } from "react";
import axios from "axios";

function Weightloss() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "male", // Default to male
    currentWeight: "",
    height: "",
    experience: "beginner", // Default to beginner
    workoutHours: "",
    calories_burnt:100,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000",
        formData
      );
      console.log(response.data); // Handle response from the server
    } catch (error) {
      console.log(error); // Handle error
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center left-[40%] top-0 bg-gradient-to-r from-[#74F0ED] to-[#FF7F50] lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-transparent bg-clip-text font-kod font-bold py-4 mx-[30%] uppercase">
        weight loss
      </h1>
      <p className="text-center font-kod text-white text-xl">
        Enter your detais
      </p>
      <form onSubmit={handleSubmit} className="text-white font-kod">
        <div className="grid sm:grid-cols-2">
          <div className="plan-inputs sm:ml-auto">
            <label htmlFor="name">Name :</label>
            <br />
            <input
              type="text"
              className="plan-input"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="plan-inputs">
            <label htmlFor="age">Age :</label>
            <br />
            <input
              type="number"
              className="plan-input"
              min="1"
              placeholder="Enter your age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="plan-inputs sm:ml-auto">
            <label htmlFor="gender">Gender : </label>
            <br />
            <select
              id="gender"
              name="gender"
              className="plan-input"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <br />
          </div>
          <div className="plan-inputs">
            <label htmlFor="weight">Current Weight :</label>
            <br />
            <input
              type="number"
              className="plan-input"
              min="1"
              placeholder="Enter your age"
              name="currentWeight"
              value={formData.currentWeight}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="plan-inputs sm:ml-auto">
            <label htmlFor="height">Height :</label>
            <br />
            <input
              type="number"
              className="plan-input"
              name="height"
              min="1"
              placeholder="Enter your height in cm"
              required
              value={formData.height}
              onChange={handleInputChange}
            />
          </div>
          <div className="plan-inputs">
            <label htmlFor="experience">Experience : </label>
            <br />
            <select
              name="experience"
              id="experience"
              className="plan-input"
              value={formData.experience}
              onChange={handleInputChange}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
        <div className="plan-inputs max-sm:w-min m-auto">
          <label htmlFor="hours">No. of workout hours per day:</label>
          <br />
          <input
            type="number"
            className="plan-input"
            placeholder="Enter workout hours"
            required
            name="workoutHours"
            value={formData.workoutHours}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center my-10">
          <button
            className="plans-button p-5 w-[200px] rounded-lg text-xl text-black"
            type="submit"
          >
            CREATE PLAN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Weightloss;
