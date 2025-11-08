import React from 'react'

const Footer:React.FC = () => {
    return (
        <footer className='py-10 border-t border-purple-900 text-center relative'>
            © {new Date().getFullYear()} Surya Pratap Singh — All rights Reserved
        </footer>
    )
}

export default Footer
