import React from 'react'
import { Whatsapp, Mail, Linkedin, FileText, Lock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-blue-200/80">© {new Date().getFullYear()} PaySure</div>
        <div className="flex items-center gap-5 text-blue-200/90">
          <a href="#" className="hover:text-white transition inline-flex items-center gap-2"><Whatsapp className="w-5 h-5" /> WhatsApp</a>
          <a href="#" className="hover:text-white transition inline-flex items-center gap-2"><Mail className="w-5 h-5" /> Email</a>
          <a href="#" className="hover:text-white transition inline-flex items-center gap-2"><Linkedin className="w-5 h-5" /> LinkedIn</a>
          <a href="#" className="hover:text-white transition inline-flex items-center gap-2"><FileText className="w-5 h-5" /> T&Cs</a>
          <a href="#" className="hover:text-white transition inline-flex items-center gap-2"><Lock className="w-5 h-5" /> Privacy</a>
        </div>
      </div>
    </footer>
  )
}
