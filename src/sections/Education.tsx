import React from 'react'
import { GraduationCap } from "lucide-react";

const Education:React.FC = () => {
    return (
        <section id="education" className="p-8 bg-black/40 border border-purple-800 rounded-lg ml-16 mr-16 mt-24">
        <h3 className="text-5xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
            <GraduationCap size={30} className="text-purple-400" /> Education
        </h3>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col'>
                <h4 className="text-white font-medium text-lg">B.Tech in Information Technology</h4>
                <p className="text-gray-400 text-sm italic">Odisha University of Technology and Research (2021–2025)</p>
                <p className="text-gray-300 text-sm italic">CGPA: 7.4 / 10</p>
            </div>
            <div className='flex flex-col'>
                <h4 className="text-white font-medium text-lg">Standard XII</h4>
                <p className="text-gray-400 text-sm italic">LRDAV Public School (2021)</p>
                <p className="text-gray-300 text-sm italic">Percentage: 88</p>
            </div>
            <div className='flex flex-col'>
                <h4 className="text-white font-medium text-lg">Standard X</h4>
                <p className="text-gray-400 text-sm italic">LRDAV Public School (2019)</p>
                <p className="text-gray-300 text-sm italic">Percentage: 92</p>
            </div>
        </div>
        </section>
    )
}

export default Education
