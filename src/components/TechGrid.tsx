import { Code2 } from 'lucide-react'
import React from 'react'

interface Istate{
    skill:string
}

const TechGrid:React.FC<Istate> = ({skill}) => {
    return (
        <div className='relative group bg-black/40 border border-purple-900 rounded-lg p-4 flex items-center gap-3 hover:border-purple-800 cursor-pointer'>
            <Code2 className='text-purple-400'/>
            <div className='flex flex-col'>
                <p className='font-medium text-sm'>{skill}</p>
                <p className='text-xs text-gray-400'>Experienced</p>
            </div>
            <div className='absolute inset-0 flex items-center justify-center bg-purple-800 text-center opacity-0 hover:opacity-100 transition-opacity duration-450 p-4 rounded-lg hover:scale-110 text-[12px] font-semibold'>
                {`Expert in ${skill} with project level experience.`}
            </div>
        </div>
    )
}

export default TechGrid
