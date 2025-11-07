import { Code2 } from 'lucide-react'
import React from 'react'

interface Istate{
    skill:string
}

const TechGrid:React.FC<Istate> = ({skill}) => {
    return (
        <div className='relative group bg-black/40 border border-purple-900 rounded-lg p-4 flex items-center gap-3 hover:border-purple-800 cursor-pointer'>
            <Code2 className='text-purple-400'/>
            <div>
                <p className='text-purple-400 font-medium'>{skill}</p>
                <p className='text-xs'>Experienced</p>
            </div>
            <div className='absolute inset-0 flex items-center justify-center bg-purple-800 text-white text-sm text-center opacity-0 hover:opacity-100 transition-opacity duration-400 p-4 rounded-lg hover:scale-110 text-[12px]'>
                {`Expert in ${skill} with project level experience.`}
            </div>
        </div>
    )
}

export default TechGrid
