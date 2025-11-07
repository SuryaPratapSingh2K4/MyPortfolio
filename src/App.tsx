import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import React from "react"
const App:React.FC = () => {

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#05010a] via-[#120c1f] to-[#090011] text-white">
      
        <Navbar/>
        <main className="relative">
          <Hero/>
        </main>
      
    </div>
  )
}

export default App
