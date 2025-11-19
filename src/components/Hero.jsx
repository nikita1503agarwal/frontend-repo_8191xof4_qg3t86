import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const GlassButton = ({ children, variant = 'primary', onClick }) => {
  const base = 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-md'
  const variants = {
    primary: 'bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]',
    outline: 'bg-transparent text-blue-200 border border-blue-400/30 hover:border-blue-300/60 hover:text-white',
  }
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(37,99,235,0.25),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(59,130,246,0.18),transparent)]" />

      {/* Spline Scene */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for neon reflections */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-24 md:py-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-200 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Live fintech-grade security
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            Smart Payments. Zero Risk. Infinite Trust.
          </h1>
          <p className="mt-6 text-blue-200/90 text-lg md:text-xl max-w-xl">
            PaySure guarantees your invoices, automates payments, prevents fraud — all in one powerful platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <GlassButton variant="primary">Start Free</GlassButton>
            <GlassButton variant="outline">Book Demo</GlassButton>
          </div>

          {/* Floating glass stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {["Fraud Prevention","Invoice Guarantee","Auto-Payments"].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-center text-blue-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_25px_rgba(59,130,246,0.15)]"
              >
                <div className="text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column left empty as Spline lives behind */}
        <div className="hidden md:block" />
      </div>
    </section>
  )
}
