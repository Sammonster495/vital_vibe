import Navbar from "./navbar";

export default function AboutPage() {
    return (
        <div>
            <Navbar home={true} about={false} plan={true} />
            <h1 className="text-center left-[40%] top-0 bg-gradient-to-r from-[#74F0ED] to-[#FF7F50] lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-transparent bg-clip-text font-kod font-bold py-4 mx-[40%] h-32">About Us</h1>
            <div className="lg:px-48 md:px-36 sm:px-24 px-10">
                <div className="grid lg:gap-20 md:gap-16 sm:gap-10 gap-4 grid-cols-2 lg:px-28 md:px-20 sm:px-12 px-0">
                    <div className="bg-[#D9D9D9] lg:h-72 md:h-60 sm:h-48 h-32 rounded-3xl ">
                        <p className="text-center my-12 sm:my-20 md:my-[106px] lg:my-[130px] lg:text-2xl font-kod font-bold">SAMARTH</p>
                    </div>
                    <div className="bg-[#D9D9D9] lg:h-72 md:h-60 sm:h-48 h-32 rounded-3xl relative">
                        <p className="text-center my-12 sm:my-20 md:my-[106px] lg:my-[130px] lg:text-2xl font-kod font-bold">ATHUL</p>
                    </div>
                    <div className="bg-[#D9D9D9] lg:h-72 md:h-60 sm:h-48 h-32 rounded-3xl relative">
                        <p className="text-center my-12 sm:my-20 md:my-[106px] lg:my-[130px] lg:text-2xl font-kod font-bold">ASHISH</p>
                    </div>
                    <div className="bg-[#D9D9D9] lg:h-72 md:h-60 sm:h-48 h-32 rounded-3xl relative">
                        <p className="text-center my-12 sm:my-20 md:my-[106px] lg:my-[130px] lg:text-2xl font-kod font-bold">CHAITHRESH</p>
                    </div>
                </div>
            </div>
        </div>
    );
}