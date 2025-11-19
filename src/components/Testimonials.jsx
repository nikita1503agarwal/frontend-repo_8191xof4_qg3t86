import React from 'react'
import { motion } from 'framer-motion'

const data = [
  {
    quote: 'PaySure turned our receivables from chaos to clarity. Cash flow stabilized in 30 days.',
    name: 'Arjun Mehta',
    role: 'Founder, Finlytics'
  },
  {
    quote: 'The guarantee system eliminated payment anxiety. Our team collects faster without nagging.',
    name: 'Priya Sharma',
    role: 'COO, SwiftBooks'
  },
  {
    quote: 'A premium product that feels effortless. The smart ledger is a lifesaver for audits.',
    name: 'Rahul Verma',
    role: 'Partner, Verma & Co.'
  }
]

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_240px_at_30%_10%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-12">
        <h3 className="text-center text-3xl font-bold text-white mb-10">Loved by modern finance teams</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.35)] hover:rotate-[-2deg] hover:translate-y-[-4px] transition-transform"
            >
              <p className="text-blue-100">“{t.quote}”</p>
              <div className="mt-6 text-sm text-blue-300">{t.name} · {t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
