import { Briefcase } from 'lucide-react'
import React from 'react'

const Experience:React.FC = () => {
    return (
        <section id='experience' className='bg-black/40 p-8 mt-20 ml-16 mr-16 border border-purple-900 rounded-lg'>
            <h1 className='text-4xl text-purple-300 font-semibold flex items-center gap-2'> <Briefcase className='text-purple-400 mt-1'/> Experience</h1>
            <div className='mt-6'>
                <h2 className='font-semibold text-lg'>React Js Developer — Freelance</h2>
                <h4 className='text-[12px] text-gray-300'>Jan 25 — Present</h4>
                <ul className='list-disc list-inside mt-2 text-s text-gray-300'>
                    <li>Designed and developed responsive frontends using React.js and Tailwind CSS for multiple client projects.</li>
                    <li>Integrated RESTful APIs, improved UX flow, and enhanced performance through state management with Redux.</li>
                    <li>Collaborated with startups to build production-ready dashboards and dynamic web apps.</li>
                    <li>Implemented email automation and file management using Node.js, Express, and AWS S3.</li>
                </ul>
            </div>

            <div className='mt-6'>
                <h2 className='font-semibold text-lg'>Web Developer Internship — Veridia.io</h2>
                <h4 className='text-[12px] text-gray-300'>Oct 25 — Nov 25</h4>
                <ul className='list-disc list-inside mt-2 text-s text-gray-300'>
                    <li>Developed a full-stack hiring management system using React.js, Node.js, and MongoDB.</li>
                    <li>Implemented admin and candidate dashboards, automated workflows, and optimized UI performance.</li>
                </ul>
            </div>
        </section>
    )
}

export default Experience
