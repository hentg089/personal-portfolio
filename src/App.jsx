import { useState } from 'react'
import Navbar from './Components/Navbar'
import "./styles/NavStyle.css"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Research from './pages/Research'

function App() {
  return (
    <>
      <Navbar/>
      <div className = "container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="research" element={<Research />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  )
}

export default App
