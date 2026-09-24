import React from 'react';
import { Cat, Sparkles, ArrowRight, ShieldCheck, Zap, Bot } from 'lucide-react';

export default function LandingPage({ onLaunchApp }) {
  return (
    <div className="min-h-screen w-full bg-[#0a0d14] text-slate-100 flex flex-col font-sans selection:bg-violet-500 selection:text-white">
      
      {/* 1. TOP NAVIGATION BAR */}
      <nav className="h-20 border-b border-slate-800/80 bg-[#0a0d14]/80 backdrop-blur-md sticky top-0 z-50 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 shadow-lg">
            <Cat className="h-6 w-6 stroke-[2.2]" />
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent">
            EchoGPT
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#models" className="hover:text-white transition-colors">AI Models</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <button 
          onClick={onLaunchApp}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 text-white font-semibold text-sm shadow-lg shadow-violet-600/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <span>Launch Workspace</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative px-6 pt-20 pb-16 md:pt-32 md:pb-24 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Cyber Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold mb-8 animate-fade-in">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>Next-Gen Neural Intelligence Suite v4.0</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Supercharge your workflow with{' '}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent">
            EchoGPT Cyber
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Access frontier AI reasoning models, instant code synthesis, and high-performance prompt streaming in one high-contrast workspace.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button 
            onClick={onLaunchApp}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-base shadow-xl shadow-violet-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            <span>Start Prompting Free</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

      </section>

    </div>
  );
}