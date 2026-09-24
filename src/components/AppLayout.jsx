import React, { useState, useEffect } from 'react';
import SettingsModal from './SettingsModal';
import ModelSelectorModal from './ModelSelectorModal';
import { 
  PanelLeftClose, 
  PanelLeft, 
  SquarePlus, 
  Search, 
  MessageSquare, 
  Settings, 
  Sun, 
  Moon, 
  Cpu, 
  X,
  ChevronDown,
  Cat
} from 'lucide-react';

export default function AppLayout({ children, activeModel, onSelectModel, onNewSession }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModelModalOpen, setIsModelModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // <--- Added Settings state

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const dummyHistory = [
    { id: 1, title: "Refactoring React Hooks", time: "Today" },
    { id: 2, title: "EchoGPT Cyber Architecture", time: "Today" },
    { id: 3, title: "Tailwind v4 Setup Guide", time: "Yesterday" },
    { id: 4, title: "Python Data Processing Script", time: "7 Days Ago" },
  ];

  const filteredHistory = dummyHistory.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--bg-workspace)] text-[var(--text-main)]">
      
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden transition-opacity"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* SIDEBAR */}
      <aside 
        className={`
          fixed md:static inset-y-0 left-0 z-50 flex flex-col
          bg-[var(--bg-surface)] border-r border-[var(--border-subtle)]
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'w-72' : 'w-0 md:w-20'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        aria-label="Main Navigation"
      >
        {/* Header with High-Contrast Echo Cat Badge */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3 overflow-hidden">
            
            {/* High-Contrast Cat Logo Badge */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 dark:bg-[#111726] text-amber-400 border border-slate-700 dark:border-slate-800 shadow-md">
              <Cat className="h-6 w-6 stroke-[2.2]" />
            </div>

            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
                  EchoGPT
                </span>
                <span className="text-[10px] font-bold text-amber-500 tracking-wider uppercase -mt-1">
                  Cyber Suite
                </span>
              </div>
            )}
          </div>

          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hidden md:flex p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-hover)] transition-colors"
            title={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isSidebarOpen ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeft className="h-5 w-5" />}
          </button>

          <button 
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Action Button */}
        <div className="p-3">
          <button 
            onClick={onNewSession}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold shadow-lg shadow-violet-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <SquarePlus className="h-5 w-5 shrink-0" />
            {isSidebarOpen && <span>New Session</span>}
          </button>
        </div>

        {/* Search */}
        {isSidebarOpen && (
          <div className="px-3 py-1">
            <div className="relative flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-[var(--text-muted)]" />
              <input 
                type="text" 
                placeholder="Search history..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[var(--bg-workspace)] border border-[var(--border-subtle)] focus:border-violet-500 outline-none text-[var(--text-main)] placeholder-[var(--text-muted)] transition-all"
              />
            </div>
          </div>
        )}

        {/* History */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
          {isSidebarOpen && (
            <div className="px-2 py-1.5 text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
              Recent Threads
            </div>
          )}
          {filteredHistory.map((item) => (
            <button 
              key={item.id}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-hover)] transition-colors text-left group"
            >
              <MessageSquare className="h-4 w-4 shrink-0 group-hover:text-amber-500 transition-colors" />
              {isSidebarOpen && <span className="truncate flex-1">{item.title}</span>}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-[var(--border-subtle)] space-y-1">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            {isDarkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-violet-600" />}
            {isSidebarOpen && <span>{isDarkMode ? 'Light Aesthetic' : 'Dark Cyber'}</span>}
          </button>

          {/* Preferences Button linked to SettingsModal */}
          <button 
            onClick={() => setIsSettingsOpen(true)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <Settings className="h-4 w-4" />
            {isSidebarOpen && <span>Preferences</span>}
          </button>
        </div>
      </aside>

      {/* WORKSPACE MAIN CONTAINER */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header Bar */}
        <header className="h-16 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/90 backdrop-blur-md flex items-center justify-between px-4 z-10">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsModelModalOpen(true)}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-workspace)] hover:border-violet-500/40 transition-all text-xs font-semibold shadow-sm"
            >
              <Cpu className="h-4 w-4 text-amber-500" />
              <span>{activeModel || "GPT-5 Cyber"}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold shadow-sm">
                CYBER
              </span>
              <ChevronDown className="h-3.5 w-3.5 text-[var(--text-muted)]" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              NEURAL ONLINE
            </span>
          </div>
        </header>

        {/* Content Render Canvas */}
        <main className="flex-1 overflow-y-auto relative p-4 md:p-8">
          {children}
        </main>
      </div>

      {/* Model Selector Modal */}
      <ModelSelectorModal 
        isOpen={isModelModalOpen}
        onClose={() => setIsModelModalOpen(false)}
        selectedModel={activeModel || "GPT-5 Cyber"}
        onSelectModel={onSelectModel}
      />

      {/* Settings Modal */}
      <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

    </div>
  );
}