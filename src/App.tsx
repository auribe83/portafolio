import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Services } from "./components/sections/Services"
import { HowICanHelp } from "./components/sections/HowICanHelp"
import { Technologies } from "./components/sections/Technologies"
import { Projects } from "./components/sections/Projects"
import { Methodology } from "./components/sections/Methodology"
import { Contact } from "./components/sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <HowICanHelp />
        <Technologies />
        <Projects />
        <Methodology />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
