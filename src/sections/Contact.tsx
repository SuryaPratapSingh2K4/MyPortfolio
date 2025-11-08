import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

const Contact:React.FC = () => {
    return (
        <section id='contact' className='p-16 flex flex-col items-center gap-2'>
            <h3 className='text-2xl text-center font-bold text-purple-300 mx-auto'>Let's build something amazing</h3>
            <p className='max-w-xl mx-auto text-center sm:text-[4px] lg:text-sm text-gray-300'> Let’s collaborate or build something awesome together! I’m open to freelance work, internships, and full-time roles in web development.</p>
            <div className='flex gap-4 items-center mt-4'>
                <a href="mailto:surya2pratap0singh04@gmail.com" target='_blank'><Mail size={18} className='hover:text-purple-400'/></a>
                <a href="https://github.com/SuryaPratapSingh2K4" target='_blank'><Github size={18} className='hover:text-purple-400'/></a>
                <a href="https://www.linkedin.com/in/suryapratapsingh-dev/" target='_blank'><Linkedin size={18} className='hover:text-purple-400'/></a>
            </div>
        </section>
    )
}

export default Contact
