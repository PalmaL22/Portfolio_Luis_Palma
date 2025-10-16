import { FaLaptopCode, FaArrowRight, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 px-6 lg:px-24 py-20 overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full opacity-5 blur-2xl animate-float"></div>

        {/* Center Column Only */}
        <div className="flex flex-col items-center text-center space-y-8 z-10 max-w-2xl">
          <FaLaptopCode className="text-indigo-400 text-7xl lg:text-8xl animate-float" />

          <h1 className="text-5xl lg:text-7xl font-bold text-white">
            Hi, I&apos;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Luis Palma
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 max-w-xl leading-relaxed">
            <span className="text-indigo-400 font-semibold">Full Stack Developer</span> Undergraduate at Kean University
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="experience"
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center"
            >
              View My Experience
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="contact"
              className="group glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/10 flex items-center justify-center border border-gray-600/50"
            >
              <FaEnvelope className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
