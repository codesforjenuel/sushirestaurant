import React from 'react'
import './components/App.css'
import About from './components/About'
import Home from './pages/HomePage'
import Nav from './NavBar'
import Location from './components/Location'
import Contact from './components/Contact'
import Menu from './components/Menu'
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
          <Route path="/Menu" element={<Menu />} />
      </Routes>
      </Router>
    </>
    )
}
