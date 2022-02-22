import React from 'react'

import About from './components/About'
import Home from './pages/HomePage'
import Nav from './NavBar'
import Location from './components/Location'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
export default function App() {
    return (
        <>
    <Nav />
        
  <Router>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
      </Router>
    </>
    )
}
