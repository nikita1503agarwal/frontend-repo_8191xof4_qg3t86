import React from 'react'
import { motion } from 'framer-motion'

const modules = [
  'Sales',
  'Purchases',
  'Journal',
  'Debit/Credit Notes',
  'Payments & Receipts',
  'Payroll',
  'Inventory',
]

export default function ScrollModules() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_240px_at_20%_0%,rgba(37,99,235,0.15),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-12">
        <h3 className="text-center text-white text-2xl md:text-3xl font-bold mb-10">Modules assembling your business</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {modules.map((m, i) => (
            <motion.div
              key={m}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-center text-blue-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_50px_rgba(59,130,246,0.12)]"
            >
              <div className="text-sm md:text-base">{m}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
