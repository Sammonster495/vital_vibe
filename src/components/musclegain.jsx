import Navbar from './navbar';

export default function MuscleGain(){
    return(
        <div>
            <Navbar home={true} about={true} plan={false}/>
            <h1 className="text-center top-0 bg-gradient-to-r from-[#74F0ED] to-[#FF7F50] lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-transparent bg-clip-text font-kod font-bold py-4 mx-[30%] h-32">MUSCLE GAIN</h1>
            <p className="text-white font-kod text-center py-10 text-xl">Enter your details : </p>
            <form action="" className="">
                <div className="grid grid-cols-2 gap-x-20 gap-y-10 px-40">
                <div className="flex flex-col">
                    <label htmlFor="namet" className="text-white font-kod p-3">Name :</label>
                    <input type="text" name="name" id="name" className="p-2 px-10 text-2xl font-kod rounded-full h-14" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="age" className="text-white font-kod p-3">Age :</label>
                    <input type="text" name="age" id="age" className="p-2 px-10 text-2xl font-kod rounded-full h-14" />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="gender" className="text-white font-kod p-3">Gender :</label>
                    <select name="gender" id="gender" className="rounded-full h-14 px-10 font-kod text-2xl">
                        <option value=""></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="weight" className="text-white font-kod p-3">Weight :</label>
                    <input type="text" name="weight" id="weight" className="p-2 px-10 text-2xl rounded-full h-14 font-kod" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="age" className="text-white font-kod p-3">Height :</label>
                    <input type="text" name="height" id="height" className="p-2 px-10 text-2xl rounded-full h-14 font-kod" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="experience" className="text-white font-kod p-3">Experience :</label>
                    <select name="experience" id="experience" className="rounded-full h-14 px-10 text-2xl font-kod">
                        <option value=""></option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
                </div>
                <div className="flex flex-col mx-[32%] py-10">
                    <label htmlFor="experience" className="text-white font-kod p-3">Mode of Exercise</label>
                    <select name="experience" id="experience" className="rounded-full h-14 px-10 text-2xl font-kod">
                        <option value=""></option>
                        <option value="equipment">Equipment</option>
                        <option value="no equipment">No equipment</option>
                    </select>
                </div>
                <button className="font-kod text-black bg-gradient-to-r from-[#74F0ED] to-[#FF7F50] h-16 w-40 rounded-lg left-[45%] absolute">CREATE PLAN</button>
            </form>
        </div>
    );
}