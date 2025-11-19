import React from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

const items = [
  'RBI-compliant',
  'Secure Payments',
  'ISO-certified Infrastructure',
  '256-bit Encryption',
]

export default function Trust() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_260px_at_80%_10%,rgba(59,130,246,0.18),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center mx-auto shadow-[0_0_60px_rgba(59,130,246,0.2)]">
              <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-blue-500/25 to-cyan-400/15 border border-blue-300/20 flex items-center justify-center animate-pulse-slow">
                <Shield className="w-16 h-16 text-blue-200" />
              </div>
            </div>
          </motion.div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Trust, certified.</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-blue-100"
                >
                  {t}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
