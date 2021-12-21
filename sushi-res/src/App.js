import React from 'react'

import About from './components/About'
import Home from './pages/HomePage'
import Nav from './NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
export default function App() {
    return (
        <>
    <Nav />
        
  <Router>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
      </Routes>
      </Router>
    </>
    )
}
