import { FaLaptopCode, FaArrowRight, FaCode, FaRocket, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100">

      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 px-6 lg:px-24 py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full opacity-5 blur-2xl animate-float"></div>

        {/* Left Column */}
        <div className="flex-1 flex flex-col items-start space-y-8 z-10 max-w-2xl">
          <div className="animate-fadeIn">
            <FaLaptopCode className="text-indigo-400 text-7xl lg:text-8xl animate-float" />
          </div>
          <div className="animate-slideUp" style={{animationDelay: '0.2s'}}>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Luis Palma
              </span>
            </h1>
          </div>
          <div className="animate-slideUp" style={{animationDelay: '0.4s'}}>
            <div className="text-xl lg:text-2xl text-gray-300 max-w-xl leading-relaxed">
              <p className="mb-2">
                <span className="text-indigo-400 font-semibold">Full Stack Developer</span>. Experience in Software Developement
              </p>
            </div>
          </div>
          <div className="animate-slideUp flex flex-col sm:flex-row gap-4 mt-8" style={{animationDelay: '0.6s'}}>
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

        {/* Right Column: Stats/Features */}
        <div className="flex-1 flex flex-col items-center lg:items-end space-y-8 mt-16 lg:mt-0 z-10 max-w-xl">
          <div className="animate-fadeIn" style={{animationDelay: '0.8s'}}>
            <div className="glass-effect p-8 rounded-2xl w-full max-w-sm">
              <div className="grid grid-cols-1 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">2+</div>
                  <div className="text-sm text-gray-400">Years Research Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1+</div>
                  <div className="text-sm text-gray-400">Internship Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slideUp" style={{animationDelay: '1s'}}>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
              <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
                <FaCode className="text-yellow-400" />
                <span className="text-sm text-gray-300">Python</span>
              </div>
              <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
                <FaLaptopCode className="text-orange-400" />
                <span className="text-sm text-gray-300">Java</span>
              </div>
              <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
                <FaRocket className="text-blue-400" />
                <span className="text-sm text-gray-300">Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}