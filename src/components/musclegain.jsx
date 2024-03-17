import Navbar from './navbar';
import { useState } from 'react';

export default function MuscleGain(){
    const [input, setInput] = useState({
        name: "",
        age: "",
        gender: "",
        height: "",
        weight: "",
        experience: "",
        mode: ""
    });

    const handleInput = (event) => {
        setInput({...input, [event.target.name]: event.target.value});
    }

    return(
        <div>
            <Navbar home={true} about={true} plan={false}/>
            <h1 className="text-center top-0 bg-gradient-to-r from-[#74F0ED] to-[#FF7F50] lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-transparent bg-clip-text font-kod font-bold py-4 mx-[33%] h-28">MUSCLE GAIN</h1>
            <p className="text-white font-kod text-center sm:py-10 py-4 text-xl">Enter your details : </p>
            <form>
                <div className="sm:grid grid-cols-2 lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-y-10 lg:px-40 md:px-32 sm:px-20 px-12">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-white font-kod p-3">Name :</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      value={input.name} 
                      onChange={handleInput} 
                      className="p-2 lg:px-10 md:px-8 sm:px-6 px-4 text-2xl font-kod rounded-full h-14" 
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="age" className="text-white font-kod p-3">Age :</label>
                    <input 
                      type="number"  
                      name="age" 
                      id="age" 
                      value={input.age} 
                      onChange={handleInput} 
                      className="p-2 lg:px-10 md:px-8 sm:px-6 px-4 text-2xl font-kod rounded-full h-14" 
                    />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="gender" className="text-white font-kod p-3">Gender :</label>
                    <select 
                      name="gender" 
                      id="gender" 
                      value={input.gender} 
                      onChange={handleInput} 
                      className="rounded-full h-14 lg:px-10 md:px-8 sm:px-6 px-4 font-kod text-2xl"
                    >
                        <option value=""></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="weight" className="text-white font-kod p-3">Weight :</label>
                    <input 
                      type="number" 
                      name="weight" 
                      id="weight" 
                      value={input.weight} 
                      onChange={handleInput} 
                      className="p-2 lg:px-10 md:px-8 sm:px-6 px-4 text-2xl rounded-full h-14 font-kod" 
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="age" className="text-white font-kod p-3">Height :</label>
                    <input 
                      type="number" 
                      name="height" 
                      id="height" 
                      value={input.height} 
                      onChange={handleInput} 
                      className="p-2 lg:px-10 md:px-8 sm:px-6 px-4 text-2xl rounded-full h-14 font-kod" 
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="experience" className="text-white font-kod p-3">Experience :</label>
                    <select 
                      name="experience" 
                      id="experience" 
                      value={input.experience} 
                      onChange={handleInput} 
                      className="rounded-full h-14 lg:px-10 md:px-8 sm:px-6 px-4 text-2xl font-kod"
                    >
                        <option value=""></option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
                </div>
                <div className="flex flex-col sm:mx-[32%] mx-12 sm:py-10">
                    <label htmlFor="mode" className="text-white font-kod p-3">Mode of Exercise</label>
                    <select 
                      name="mode" 
                      id="mode" 
                      value={input.mode} 
                      onChange={handleInput} 
                      className="rounded-full h-14 lg:px-10 md:px-8 sm:px-6 px-4 text-2xl font-kod"
                    >
                        <option value=""></option>
                        <option value="equipment">Equipment</option>
                        <option value="no equipment">No equipment</option>
                    </select>
                </div>
                <button className="font-kod text-black bg-gradient-to-r from-[#74F0ED] to-[#FF7F50] h-16 w-40 my-6 rounded-lg lg:left-[43%] md:left-[42%] sm:left-[40%] left-[30%] absolute transform transition-transform hover:scale-110">CREATE PLAN</button>
            </form>
        </div>
    );
}