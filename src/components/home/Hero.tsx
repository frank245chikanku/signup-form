import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="p-6 bg-gradient-to-r from-[#3d2659] to-[#0c2856] w-full flex min-h-screen text-white">
        <div className="w-full grid grid-cols-2 gap-4 justify-center items-center">
            <div className="w-full flex flex-col">
                <p className="text-[50px] max-w-96 font-bold">Get started to adjust with university life.</p>
                <div className="mt-8">
                <Link className="p-3 rounded bg-[#da3163] text-white text-xl px-6 hover:bg-[#ff4276]" to="/register">Get Started</Link>
                </div>
            </div>
            <div>hello</div>
        </div>
    </section>
  )
}

export default Hero