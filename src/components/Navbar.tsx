import React from 'react';

const Navbar: React.FC = () => (
  <header className="fixed top-0 left-0 w-full bg-black/90 border-b border-purple-800 backdrop-blur-sm z-50">
    <div className="max-w-7xl mx-auto px-8 md:px-16 py-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400">
          Surya Pratap Singh
        </h1>
        <p className="text-xs text-gray-400">Frontend & MERN Developer</p>
      </div>

      {/* Right Links */}
      <div className="hidden md:flex gap-8">
        <a href="#about" className="text-gray-400 text-xs hover:text-purple-300 hover:font-bold">About</a>
        <a href="#experience" className="text-gray-400 text-xs hover:text-purple-300 hover:font-bold">Experience</a>
        <a href="#skills" className="text-gray-400 text-xs hover:text-purple-300 hover:font-bold">Tech</a>
        <a href="#projects" className="text-gray-400 text-xs hover:text-purple-300 hover:font-bold">Projects</a>
        <a href="#education" className="text-gray-400 text-xs hover:text-purple-300 hover:font-bold">Education</a>
        <a href="#contact" className="text-gray-400 text-xs hover:text-purple-300 hover:font-bold">Contact</a>
      </div>
    </div>
  </header>
);

export default Navbar;
