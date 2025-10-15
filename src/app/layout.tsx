// src/app/layout.tsx
import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'Luis Palma - Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="glass-effect shadow-xl sticky top-0 z-50 border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
            <div className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className="relative font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300 group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/experience" 
                className="relative font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300 group"
              >
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/projects" 
                className="relative font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300 group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/contact" 
                className="relative font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300 group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="glass-effect border-t border-gray-700/50 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Luis Palma
              </p>
              <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/in/palmaluis/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="palmal@kean.edu"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label="Email"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
