import React, { useState } from 'react';
import { Cat, Menu, X, ArrowRight, Sparkles, Code2, Shield, Cpu, Zap, Star } from 'lucide-react';

export default function LandingPage({ onLaunchApp }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-violet-500 selection:text-white">
      {/* --- RESPONSIVE NAVBAR --- */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 px-4 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={onLaunchApp}>
            <div className="p-2 rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-amber-500 text-slate-950 shadow-md shadow-violet-500/20">
              <Cat className="h-5 w-5 stroke-[2.5]" />
            </div>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Echo Cat AI
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#models" className="hover:text-white transition-colors">AI Models</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onLaunchApp}
              className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm shadow-lg shadow-violet-600/30 hover:shadow-violet-500/50 transition-all flex items-center gap-2"
            >
              Launch Workspace
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-2 border-t border-slate-800 flex flex-col gap-3 text-sm font-medium text-slate-300 animate-in fade-in slide-in-from-top-2">
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
            >
              Features
            </a>
            <a 
              href="#models" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
            >
              AI Models
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onLaunchApp(); }}
              className="mt-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-md"
            >
              Launch Workspace
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative px-4 sm:px-8 py-16 md:py-24 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Next-Gen Multi-Model AI Interface</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight max-w-3xl">
          Supercharge your workflow with <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent">Echo Cat</span>
        </h1>

        <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
          Switch seamlessly between cutting-edge LLMs, generate code, debug instantly, and manage structured prompts in one unified workspace.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={onLaunchApp}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 hover:opacity-95 text-white font-bold text-base shadow-xl shadow-violet-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
          >
            Open Interactive App
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* --- FEATURES GRID SECTION --- */}
      <section id="features" className="px-4 sm:px-8 py-16 bg-slate-900/50 border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Built for modern developers</h2>
            <p className="text-slate-400 text-sm mt-2">Everything you need to write, debug, and ideate faster.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3">
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 w-fit">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-white text-lg">Multi-Engine Support</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Switch dynamically between top-tier language models depending on your specific task.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3">
              <div className="p-2.5 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 w-fit">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-white text-lg">Code Optimization</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Get clean, formatted code blocks with language highlighting and instant debug suggestions.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 w-fit">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-white text-lg">Low-Latency Streaming</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Enjoy smooth real-time generation indicators and instant prompt presets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-800/80 py-8 px-4 text-center text-xs text-slate-500">
        <p>© 2026 Echo Cat AI. All rights reserved.</p>
      </footer>
    </div>
  );
}