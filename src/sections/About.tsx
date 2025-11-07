import React from 'react'

const About:React.FC = () => {
    return (
        <section id='about' className='p-8 bg-black/40 border border-purple-800 rounded-lg ml-16 mr-16 mt-8'>
            <h1 className='text-4xl text-purple-300 mb-4 font-semibold'>About Me</h1>
            <p className=''>
                I’m a B.Tech IT student at Odisha University of Technology and Research (2021–2025),
                driven by the idea of transforming logic into impactful digital products. Over the
                past year, I’ve built and deployed several React-based apps — from Expense Trackers
                to Blogging Platforms — each focused on usability and performance. When I’m not coding,
                I experiment with UI design, explore developer communities, and mentor peers in frontend
                development.
            </p>
        </section>
    )
}

export default About
