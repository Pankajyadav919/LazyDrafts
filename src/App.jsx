import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import FAQ from './pages/Faq'
import Hero from './components/HeroSection'
import HowItWorks from './pages/HowItWorks'
import PremiumServices from './pages/Services'
import StudentDashboard from './pages/StudentDashboard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => setIsLoggedIn(false)

  return (
    <>
      <NavBar onLogin={handleLogin} onLogout={handleLogout} isLoggedIn={isLoggedIn} />
      {isLoggedIn && <StudentDashboard />}   
     {/*Student dashboard after login*/}

      {/*Landing page scroll  */}
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <PremiumServices />
      </div>
      <div id="about">
        <HowItWorks />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </>
  )
}

export default App
