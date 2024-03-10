import { Link as ScrollLink } from "react-scroll";

export default function Contact(){
    return(
        <div className="lg:py-24 md:py-20 sm:py-16 py-10 lg:p-40 md:p-28 p-16" id="contact">
            <p className="text-left text-[#FF7F50] font-kod lg:text-5xl md:text-4xl sm:text-3xl text-2xl h-[1px] sm:h-auto">Contact Us</p>
            <form action="" className="py-8">
                <input type="email" name="email" placeholder="Email" className=" block left-[35%] lg:w-96 md:w-80 sm:w-72 w-60 py-2 px-6 mt-4 rounded-full" />
                <input type="text" name="subject" placeholder="Subject" className="block left-[35%] lg:w-96 md:w-80 sm:w-72 w-60 py-2 px-6 mt-4 rounded-3xl h-40" />
            </form>
            <ScrollLink to="navbar" activeClass="active" smooth={true} className="text-white font-kod text-2xl py-4">Scroll Here</ScrollLink>
        </div>
    )
}