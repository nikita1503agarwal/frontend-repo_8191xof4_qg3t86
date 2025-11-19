import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Workflow, BookOpenCheck, Orbit } from 'lucide-react'

const cards = [
  {
    icon: ShieldCheck,
    title1: 'Never chase payments again',
    title2: 'PaySure guarantees transactions between you and your clients.',
  },
  {
    icon: Workflow,
    title1: 'Automated reminders and follow-ups.',
    title2: 'Collect faster without effort.',
  },
  {
    icon: BookOpenCheck,
    title1: 'Sales, Purchases, Journal — All in One.',
    title2: 'Complete accounting without complexity.',
  },
  {
    icon: Orbit,
    title1: 'Manage 100+ clients easily.',
    title2: 'Perfect for CAs, agencies, and businesses.',
  },
]

function FeatureCard({ Icon, title1, title2, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-300/20 text-blue-200 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(59,130,246,0.25)]">
          <Icon className="w-6 h-6" />
        </div>
        <p className="text-white text-lg font-semibold">{title1}</p>
        <p className="text-blue-200/80 mt-2">{title2}</p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_70%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">All the power in elegant 3D</h2>
          <p className="text-blue-200/80 mt-3">Experience depth, motion, and clarity across every module.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <FeatureCard key={i} Icon={c.icon} title1={c.title1} title2={c.title2} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
