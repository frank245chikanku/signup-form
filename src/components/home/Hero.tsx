import { Link } from "react-router-dom"
import bg from "../../assets/online-education-3412473_1280-removebg-preview.png"

const Hero = () => {
    return (
        <section className="p-6 bg-gradient-to-r from-[#3d2659] to-[#0c2856] w-full flex flex-col min-h-screen text-white">
            <div className="w-full grid grid-cols-2 gap-4 justify-center items-center">
                <div className="w-full flex flex-col">
                    <p className="text-[50px] max-w-96 font-bold">Get started to adjust with university life.</p>
                    <div className="mt-8">
                        <Link className="p-3 rounded bg-[#da3163] text-white text-xl px-6 hover:bg-[#ff4276]" to="/register">Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src={bg} alt="bg" />
                </div>
            </div>
            <div className="fw-full flex flex-col justify-center items-center mt-32">
                <div className="text-gray-200 shadow shadow-blue-200 items-center flex flex-col p-4 hover:bg-[#da3163] cursor-pointer rounded-full">
                <p>SEE FEATURES</p>
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                >
                    <path d="M11.178 19.569a.998.998 0 001.644 0l9-13A.999.999 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13z" />
                </svg>
                </div>
            </div>
        </section>
    )
}

export default Hero