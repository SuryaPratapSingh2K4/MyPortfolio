import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projectData'
import { FileAxis3DIcon } from 'lucide-react'

const Projects:React.FC = () => {
    return (
        <section id='projects' className='px-16 mt-4 '>
            <h1 className='text-3xl text-purple-300 font-medium flex items-center gap-2'><FileAxis3DIcon size={30}/>My Projects</h1>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    projects.map((p) => (
                        <ProjectCard key={p.title} project={p}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects
