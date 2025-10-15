import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode, FaBrain, FaGlobe } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiJavascript } from 'react-icons/si'

export default function Projects() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of projects showcasing my skills and passion for development
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Project 1 - Rice Disease Classifier */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <FaBrain className="text-purple-400 text-2xl" />
                  <h3 className="text-2xl font-bold text-white">Rice Disease Classifier</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Machine learning model that classifies diseases in rice plant imagery using convolutional 
                neural networks. Built with Python and PyTorch for agricultural research.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="flex items-center space-x-1 px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                  <SiPython size={14} />
                  <span>Python</span>
                </span>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full">PyTorch</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">CNN</span>
              </div>
              <div className="flex space-x-4">
                <span className="text-gray-500 font-semibold flex items-center">
                  Research Project
                  <FaBrain className="ml-2" size={14} />
                </span>
              </div>
            </div>

            {/* Project 2 - SpaceX Wetlands */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <FaCode className="text-cyan-400 text-2xl" />
                  <h3 className="text-2xl font-bold text-white">SpaceX Wetlands Project</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Led a team applying machine learning to UAS imagery for wetlands analysis. 
                Part of a collaborative research project with SpaceX focusing on environmental monitoring.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="flex items-center space-x-1 px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                  <SiPython size={14} />
                  <span>Python</span>
                </span>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full">PyTorch</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">UAS</span>
              </div>
              <div className="flex space-x-4">
                <span className="text-gray-500 font-semibold flex items-center">
                  Research Project
                  <FaCode className="ml-2" size={14} />
                </span>
              </div>
            </div>

            {/* Project 3 - AI Tutor */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <FaLaptopCode className="text-green-400 text-2xl" />
                  <h3 className="text-2xl font-bold text-white">AI Tutor Application</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                ChatGPT-based tutoring application with API integration and system prompt design. 
                Part of a 10-week Google-sponsored research program.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="flex items-center space-x-1 px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                  <SiJavascript size={14} />
                  <span>JavaScript</span>
                </span>
                <span className="flex items-center space-x-1 px-3 py-1 bg-gray-500/20 text-gray-300 text-sm rounded-full">
                  <SiNextdotjs size={14} />
                  <span>Next.js</span>
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">MySQL</span>
              </div>
              <div className="flex space-x-4">
                <span className="text-green-400 font-semibold flex items-center">
                  In Development
                  <FaLaptopCode className="ml-2" size={14} />
                </span>
              </div>
            </div>

            {/* Project 4 - WAV Player */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <FaCode className="text-orange-400 text-2xl" />
                  <h3 className="text-2xl font-bold text-white">WAV Player</h3>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A custom audio player application for WAV files with basic playback controls. 
                Built to understand audio processing and file handling.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="flex items-center space-x-1 px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                  <SiPython size={14} />
                  <span>Python</span>
                </span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full">Audio</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">GUI</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-orange-400 hover:text-orange-300 font-semibold flex items-center group">
                  View Code
                  <FaCode className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={14} />
                </a>
              </div>
            </div>

            {/* Project 5 - LC3 Guessing Game */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <FaLaptopCode className="text-red-400 text-2xl" />
                  <h3 className="text-2xl font-bold text-white">LC3 Guessing Game</h3>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A number guessing game implemented in LC-3 assembly language. 
                Demonstrates low-level programming concepts and assembly language fundamentals.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full">LC-3</span>
                <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-sm rounded-full">Assembly</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">Game</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-red-400 hover:text-red-300 font-semibold flex items-center group">
                  View Code
                  <FaCode className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
