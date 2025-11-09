import Hero from "./sections/Hero"
import Navbar from "./components/Navbar"
import React from "react"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Education from "./sections/Education"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
const App:React.FC = () => {

  return (
    <div className=" min-h-screen bg-gradient-to-br from-[#05010a] via-[#120c1f] to-[#090011] text-white">
      
        <Navbar/>
        <main className="">
          <Hero/>
          <About/>
          <Experience/>
          <Skills/>
          <Projects/>
          <Education/>
          <Contact/>
        </main>
        <Footer/>
    </div>
  )
}

export default App
