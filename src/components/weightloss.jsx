import Navbar from "./navbar";

function weightloss() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center left-[40%] top-0 bg-gradient-to-r from-[#74F0ED] to-[#FF7F50] lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-transparent bg-clip-text font-kod font-bold py-4 mx-[30%] uppercase">
        weight loss
      </h1>
      <p className="text-center font-kod text-white text-xl">
        Enter your detais
      </p>
      <form action="" className="text-white font-kod">
        <div className="grid sm:grid-cols-2 sm:gap-x-10">
          <div className="plan-inputs sm:ml-auto">
            <label htmlFor="name">Name :</label>
            <br />
            <input type="text" className="plan-input" />
          </div>
          <div className="plan-inputs">
            <label htmlFor="age">Age :</label>
            <br />
            <input type="number" className="plan-input" />
          </div>
          <div className="plan-inputs sm:ml-auto">
            <label htmlFor="gender">Gender : </label>
            <br />
            <select
              id="gender"
              name="gender"
              className="text-black rounded-full h-14 sm:w-80 w-52"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <br />
          </div>
          <div className="plan-inputs">
            <label htmlFor="weight">Current Weight :</label>
            <br />
            <input type="number" className="plan-input" />
          </div>
          <div className="plan-inputs sm:ml-auto">
            <label htmlFor="height">Height :</label>
            <br />
            <input type="number" className="plan-input" />
          </div>
          <div className="plan-inputs">
            <label htmlFor="experience">Experience : </label>
            <br />
            <select
              name="experience"
              id="experience"
              className="text-black rounded-full h-14 sm:w-80 w-52"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
        <div className="plan-inputs sm:w-min m-auto">
          <label htmlFor="hours">No. of hours per day:</label>
          <br />
          <input type="number" className="plan-input" />
        </div>
        <div className="flex justify-center my-10">
          <button className="plans-button p-5 w-[200px] rounded-lg text-xl text-black">
            CREATE PLAN
          </button>
        </div>
      </form>
    </div>
  );
}

export default weightloss;
