import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import './App.css';
import Header from "./components/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <Header />

      <nav className="navigation">
        <Link to="/" className="nav-link"> Home </Link>
        <Link to="/about" className="nav-link"> About </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App