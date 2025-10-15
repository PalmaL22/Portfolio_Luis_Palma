import { FaAward, FaCoffee } from 'react-icons/fa'
import { SiPython, SiJavascript, SiCplusplus, SiReact, SiNodedotjs, SiPytorch, SiGit, SiMongodb, SiMysql, SiDocker, SiKotlin, SiTypescript, SiHtml5, SiCss3 } from 'react-icons/si'

export default function Experience() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Experience</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My journey in software development, research, and professional growth
            </p>
          </div>
        </div>
      </section>

      {/* Experience List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {/* Research Experience */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">Software Developer Intern</h3>
                <span className="text-indigo-400 font-medium">May 2025 - August 2025</span>
              </div>
              <p className="text-gray-400 mb-4">
                Interned with the JWO team at AWS, located in Seattle Washington
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">Java</span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">Typescript</span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">AWS</span>
              </div>
            </div>

            {/* Internship Experience */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">Research Intern</h3>
                <span className="text-purple-400 font-medium">January 2025 - April 2025</span>
              </div>
              <p className="text-gray-400 mb-4">
                Developed a ChatGPT-based tutor with API integration, as a part of a 10 week program sponsored by Google
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">Javascript</span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">Next.js</span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">MySQL</span>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">Research Intern</h3>
                <span className="text-purple-400 font-medium">June 2024 - August 2024</span>
              </div>
              <p className="text-gray-400 mb-4">
               Led a team applying machine learning to UAS imagery for a wetlands projects with SpaceX
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">Python</span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">Machine Learning</span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">PyTorch</span>
              </div>
            </div>

            {/* Academic Projects */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">Undergraduate Researcher</h3>
                <span className="text-cyan-400 font-medium">March 2024 - June 2024</span>
              </div>
              <p className="text-gray-400 mb-4">
              Applied convolutional neural networks to classify diseases in rice plant imagery
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">Machine Learning</span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">Git</span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">MongoDB</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Education
            </h2>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-white">Kean University - Computer Science Undergraduate</h3>
              <span className="text-green-400 font-medium">2022 - 2026</span>
            </div>
            <p className="text-gray-400 mb-4">
              Pursuing Bachelor&apos;s degree in Computer Science
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">Data Structures</span>
              <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">Analysis of Algorithms</span>
              <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">Systems Programming</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-400">
              Technologies and tools I am familiar with
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Programming Languages */}
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <SiPython className="text-yellow-400" size={32} />
                <span className="text-gray-300 text-sm font-medium">Python</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <FaCoffee className="text-red-400" size={32} />
                <span className="text-gray-300 text-sm font-medium">Java</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <SiJavascript className="text-yellow-300" size={32} />
                <span className="text-gray-300 text-sm font-medium">JavaScript</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <SiCplusplus className="text-blue-400" size={32} />
                <span className="text-gray-300 text-sm font-medium">C++</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <SiKotlin className="text-purple-400" size={32} />
                <span className="text-gray-300 text-sm font-medium">Kotlin</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <SiTypescript className="text-blue-500" size={32} />
                <span className="text-gray-300 text-sm font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <SiHtml5 className="text-orange-500" size={32} />
                <span className="text-gray-300 text-sm font-medium">HTML</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <SiCss3 className="text-blue-400" size={32} />
                <span className="text-gray-300 text-sm font-medium">CSS</span>
              </div>

              {/* Frameworks & Tools */}
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <SiReact className="text-blue-400" size={32} />
                <span className="text-gray-300 text-sm font-medium">React</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <SiNodedotjs className="text-green-400" size={32} />
                <span className="text-gray-300 text-sm font-medium">Node.js</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <SiPytorch className="text-red-500" size={32} />
                <span className="text-gray-300 text-sm font-medium">PyTorch</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <SiGit className="text-orange-400" size={32} />
                <span className="text-gray-300 text-sm font-medium">Git</span>
              </div>

              {/* Cloud & Databases */}
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <FaAward className="text-orange-400" size={32} />
                <span className="text-gray-300 text-sm font-medium">AWS</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <SiMongodb className="text-green-500" size={32} />
                <span className="text-gray-300 text-sm font-medium">MongoDB</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <SiMysql className="text-blue-500" size={32} />
                <span className="text-gray-300 text-sm font-medium">MySQL</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                <SiDocker className="text-blue-400" size={32} />
                <span className="text-gray-300 text-sm font-medium">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}