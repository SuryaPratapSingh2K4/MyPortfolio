import React from 'react'
// import TechGrid from '../components/TechGrid'
import { techStack } from '../data/techData'
import TechGrid from '../components/TechGrid'

const Skills:React.FC = () => {
    return (
        <section id='skills' className='p-16 mt-4'>
            <h1 className='text-5xl text-purple-300 font-medium'>Tech Stack</h1>
            <div className='mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    techStack.map((t) => (
                        <TechGrid key={t} skill={t}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills
