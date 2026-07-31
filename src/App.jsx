import { useEffect } from 'react'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import MediaSection from './components/MediaSection'
import Navbar from './components/Navbar'
import WhatIsCEAD from './components/WhatIsCEAD'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    const revealElements = document.querySelectorAll('[data-reveal]')
    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-cream-50 text-forest-900">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <WhatIsCEAD />
        <Gallery />
        <MediaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
