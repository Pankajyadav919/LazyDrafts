import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import FAQ from './pages/Faq'
import Hero from './components/HeroSection'
import HowItWorks from './pages/HowItWorks'
import PremiumServices from './pages/Services'
import StudentDashboard from './pages/StudentDashboard'
import About from './pages/About'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const location = useLocation() // Get current path

  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => setIsLoggedIn(false)

  // Landing page content
  const LandingPage = () => (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <PremiumServices />
      </div>
      <div id="how">
        <HowItWorks />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </>
  )

  return (
    <>
      {/* Show Navbar only on landing page */}
      {location.pathname === '/' && (
        <NavBar onLogin={handleLogin} onLogout={handleLogout} isLoggedIn={isLoggedIn} />
      )}

      {/* Show dashboard only after login */}
      {isLoggedIn && <StudentDashboard />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
