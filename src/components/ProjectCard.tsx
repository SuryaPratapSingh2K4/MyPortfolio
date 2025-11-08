import React from 'react'
import { type Project } from '../data/projectData'
import { ArrowRight} from 'lucide-react'

interface Istate {
    project: Project
}

const ProjectCard:React.FC<Istate> = ({project}) => {
    return (
        <div className='rounded-lg border border-purple-900 bg-black/40 overflow-hidden hover:scale-105 hover:shadow-md hover:shadow-purple-500'>
            <div className='flex flex-col p-4'>
                {project.video ? (
                    <video src={project.video} controls loop muted className='w-full h-full object-cover rounded-lg'></video>
                ) : (
                    <img src={project.img} alt="" />
                )}
                <div className='flex flex-col gap-2 mt-2'>
                    <h3 className='text-s font-semibold'>{project.title}</h3>
                    <p className='text-[12px] text-gray-300 italic'>{project.content}</p>
                    <div className='flex flex-wrap gap-2 '>
                        {
                            project.tech.map((t) => (
                                <span key={t} className='text-[8px] rounded-lg border border-purple-900 px-2 py-1'>
                                    {t}
                                </span>
                            ))
                        }
                    </div>
                    
                    <a className='text-[10px] border border-purple-900 flex rounded-lg w-24 font-bold  mt-1 items-center py-2 justify-center gap-1 hover:scale-110 hover:bg-purple-400 hover:text-black' href={project.repo} rel='noopener noreferrer' target='_blank'>Github <ArrowRight size={15}/></a>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard
