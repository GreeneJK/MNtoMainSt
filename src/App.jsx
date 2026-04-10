import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Newsletter from './components/Newsletter'
import SignupForm from './components/SignupForm'
import Testimonials from './components/Testimonials'
import ConsultationCTA from './components/ConsultationCTA'
import Footer from './components/Footer'
import TravelLanding from './components/TravelLanding'

function HomePage() {
  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById('progressBar')
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (bar) bar.style.width = `${(scrollTop / docHeight) * 100}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="progress-bar" id="progressBar" />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Newsletter />
        <SignupForm />
        <Testimonials />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/travel" element={<TravelLanding />} />
    </Routes>
  )
}
