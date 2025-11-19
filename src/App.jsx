import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import ScrollModules from './components/ScrollModules'
import Trust from './components/Trust'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* subtle star field / dots */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.06),transparent_28%)]" />

      <Hero />
      <Features />
      <ScrollModules />
      <Trust />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
