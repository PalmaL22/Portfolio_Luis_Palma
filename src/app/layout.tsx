// src/app/layout.tsx
'use client'
import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="glass-effect shadow-xl sticky top-0 z-50 border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center items-center">
              <div className="flex space-x-8">
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

            {/* Mobile Navigation */}
            <div className="md:hidden flex justify-between items-center">
              <div className="text-xl font-bold text-white"></div>
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-gray-700/50 pt-4">
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="/" 
                    onClick={closeMenu}
                    className="relative font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300 group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link 
                    href="/experience" 
                    onClick={closeMenu}
                    className="relative font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300 group"
                  >
                    Experience
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link 
                    href="/projects" 
                    onClick={closeMenu}
                    className="relative font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300 group"
                  >
                    Projects
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link 
                    href="/contact" 
                    onClick={closeMenu}
                    className="relative font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300 group"
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              </div>
            )}
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
                  href="mailto:palmal@kean.edu"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110 cursor-pointer"
                  aria-label="Email"
                  title="Send email to palmal@kean.edu"
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
