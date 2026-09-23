import React from 'react';
import AppLayout from './components/AppLayout';
import { Cat, ArrowRight, Zap, Code2, Sparkles, Terminal } from 'lucide-react';

export default function App() {
  const suggestions = [
    { icon: Code2, title: "Debug React Hooks", desc: "Analyze state sync issues & async memory leaks.", tag: "React" },
    { icon: Terminal, title: "Tailwind v4 Config", desc: "Explore CSS variables & native @theme directives.", tag: "CSS" },
    { icon: Sparkles, title: "System Architecture", desc: "Design resilient frontend component boundaries.", tag: "Design" },
    { icon: Zap, title: "Optimize Performance", desc: "Reduce bundle sizes & dynamic re-renders.", tag: "Speed" }
  ];

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto h-full flex flex-col justify-center items-center text-center space-y-8 py-8">
        
        {/* Glowing Cat Hero Badge */}
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500 opacity-75 blur-lg group-hover:opacity-100 transition duration-500"></div>
          <div className="relative p-5 rounded-2xl glass-panel text-amber-500 flex items-center justify-center">
            <Cat className="h-10 w-10 stroke-[2.2]" />
          </div>
        </div>

        {/* Centered Hero Header Section */}
        <div className="space-y-3 flex flex-col items-center text-center w-full max-w-xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-center">
            How can <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">Echo Cat</span> assist you today?
          </h1>
          <p className="text-[var(--text-muted)] text-sm md:text-base font-medium text-center leading-relaxed">
            Select a high-speed AI model above or trigger one of our custom prompt presets below.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
          {suggestions.map((card, i) => {
            const Icon = card.icon;
            return (
              <button 
                key={i}
                className="p-5 rounded-2xl glass-panel hover:border-violet-500/50 hover:scale-[1.02] transition-all text-left group flex flex-col justify-between h-32"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="p-2 rounded-xl bg-violet-500/10 text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--bg-workspace)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                    {card.tag}
                  </span>
                </div>

                <div>
                  <div className="font-bold text-sm group-hover:text-violet-500 flex items-center justify-between transition-colors">
                    {card.title}
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-1 line-clamp-1">{card.desc}</div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </AppLayout>
  );
}