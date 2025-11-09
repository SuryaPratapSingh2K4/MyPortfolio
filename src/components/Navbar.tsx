import React from 'react';

const Navbar: React.FC = () => (
  <header className="fixed top-0 left-0 w-full bg-black border-b border-purple-800 z-50">
    <div className="w-full px-16 py-4 flex items-center justify-between">
      {/* Left section */}
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400">
          Surya Pratap Singh
        </h1>
        <p className="text-s text-gray-400">Frontend & MERN Developer</p>
      </div>

      {/* Right nav links */}
      <div className="hidden md:flex gap-8">
        <a className="text-gray-400 text-s hover:text-purple-300 hover:font-bold" href="#about">About</a>
        <a className="text-gray-400 text-s hover:text-purple-300 hover:font-bold" href="#experience">Experience</a>
        <a className="text-gray-400 text-s hover:text-purple-300 hover:font-bold" href="#skills">Tech</a>
        <a className="text-gray-400 text-s hover:text-purple-300 hover:font-bold" href="#projects">Projects</a>
        <a className="text-gray-400 text-s hover:text-purple-300 hover:font-bold" href="#education">Education</a>
        <a className="text-gray-400 text-s hover:text-purple-300 hover:font-bold" href="#contact">Contact</a>
      </div>
    </div>
  </header>
);

export default Navbar;
