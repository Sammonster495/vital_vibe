import Navbar from "./navbar";
/*import HomeBackground from '../../public/background.jpg'*/

export default function HomePage() {
  return (
    <div>
      <Navbar home={false} about={true} plan={true} />
      <div className="home-background bd px-[150px] h-[500px] hidden">
        <div className="bd h-full flex justify-center">
          <div className="bg-slate-800 relative top-24 w-[380px] h-60">
            <p className="text-white font-kod font-medium text-xl">
              YOUR PERSONLIZED A.I. FITNESS GUIDE
            </p>
            <div className="px-[529px]">
              <h1 className="text-white font-kod font-bold text-4xl">
                CREATE CUSTOMIZED WORKOUT AND DIET PLANS CATERED TO YOUR ABILITY
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white font-kod">
        <p className="text-center text-[#74F0ED] text-3xl max-sm:text-2xl">
          CUSTOMIZED PLAN CATERED TO YOUR GOALS
        </p>
        <div className="lg:flex justify-between py-14 px-20">
          <div className="w-max h-max relative m-auto my-10">
            <img
              src="musclegain.jpg"
              alt="MuscleGain.jpg"
              className="rounded-[30px] my-shadow"
            />
            <p className="absolute bottom-5 left-3 text-4xl">MUSCLE GAIN</p>
          </div>
          <div className="w-max h-max relative m-auto my-10">
            <img
              src="musclegain.jpg"
              alt="MuscleGain.jpg"
              className="rounded-[30px] my-shadow"
            />
            <p className="absolute bottom-[50%] left-3 text-4xl">MUSCLE GAIN</p>
          </div>
          <div className="w-max h-max relative m-auto my-10">
            <img
              src="musclegain.jpg"
              alt="MuscleGain.jpg"
              className="rounded-[30px] my-shadow"
            />
            <p className="absolute top-5 left-3 text-4xl">MUSCLE GAIN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
