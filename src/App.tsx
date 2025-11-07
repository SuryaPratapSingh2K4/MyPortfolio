import Hero from "./sections/Hero"
import Navbar from "./components/Navbar"
import React from "react"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Skills from "./sections/Skills"
const App:React.FC = () => {

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#05010a] via-[#120c1f] to-[#090011] text-white">
      
        <Navbar/>
        <main className="relative">
          <Hero/>
          <About/>
          <Experience/>
          <Skills/>
        </main>
      
    </div>
  )
}

export default App
