import React from 'react'
import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'

function Tier({ title, price, features, highlighted }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative rounded-3xl border ${highlighted ? 'border-blue-300/40 bg-gradient-to-b from-blue-500/15 to-cyan-500/10' : 'border-white/10 bg-white/5'} backdrop-blur-xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(59,130,246,0.15)]`}
    >
      <div className="flex items-center gap-3">
        {highlighted && <Crown className="w-6 h-6 text-blue-200" />}
        <h4 className="text-white text-2xl font-bold">{title}</h4>
      </div>
      <div className="mt-4 text-blue-100 text-xl">{price}</div>
      <ul className="mt-6 space-y-2 text-blue-200/90">
        {features.map((f, i) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>
      <button className="mt-8 w-full px-5 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/15 transition">Choose</button>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_280px_at_70%_0%,rgba(59,130,246,0.16),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-12">
        <h3 className="text-center text-3xl font-bold text-white mb-10">Simple, transparent pricing</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Tier title="Free" price="Free Plan" features={["Basic tools","Community support"]} />
          <Tier title="Pro" price="Pro Plan ₹5,999/year" features={["Invoice Guarantee","Auto-Collections","Smart Ledger","Priority Support"]} highlighted />
        </div>
      </div>
    </section>
  )
}
