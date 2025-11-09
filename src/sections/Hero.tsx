import React from 'react'
import logo from '../assets/Surya-image.jpeg'

const Hero:React.FC = () => (
    <section id='hero' className='lg:grid lg:grid-cols-2 gap-20 items-center p-16 mt-12 w-full'>
        <div className='flex flex-col gap-8'>
            <h1 className='text-4xl lg:text-5xl bg-gradient-to-r from-purple-300 to-indigo-300 rounded-md font-bold bg-clip-text text-transparent leading-[1.1]'>
                Hi, I’m Surya Pratap Singh — a Frontend & MERN Developer.
            </h1>
            <p className='text-s'>I specialize in React.js, Redux Toolkit, and Tailwind CSS, crafting responsive UIs that merge performance and design. Currently, I’m exploring advanced backend integration with Node.js, Express.js, and MongoDB to deliver complete full-stack experiences.</p>
            <div className='flex flex-row gap-4 mb-8'>
                <a href="#projects" className='text-white bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 hover:scale-105 rounded-md font-semibold'>View Projects</a>
                <a href="https://drive.google.com/file/d/1bVJMDrfP42X1KMLXJfzgyUXn1FgkCzNL/view?usp=sharing" target='_blank' className='text-white bg-black/40 border border-purple-900 px-4 py-2 rounded-md font-semibold hover:scale-105 hover:bg-purple-700/20'>Download Resume</a>
            </div>
        </div>
        {/* <div className='w-auto mt-8 h-72 lg:w-[450px] lg:ml-20 rounded-lg border border-purple-900 shadow-2xl shadow-purple-500'> */}
            {/* <img src={logo} alt="Profile Image" className='w-full max-w-5xl sm:w-auto lg:h-72 sm:lg-auto lg:ml-20 rounded-lg object-cover object-[50%,30%] shadow-2xl shadow-purple-500'/> */}
        {/* </div> */}
        <div className="flex justify-center lg:justify-end">
            <div className="rounded-lg border border-purple-900 shadow-2xl shadow-purple-600/40 overflow-hidden max-w-8xl">
                <img
                src={logo}
                alt="Surya Pratap Singh"
                className="w-full h-72 object-cover object-[50%,30%]"
                />
            </div>
        </div>
    </section>
)

export default Hero
