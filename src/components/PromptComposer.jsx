import React, { useState } from 'react';
import { Send, Paperclip, Mic, Sparkles } from 'lucide-react';

export default function PromptComposer({ onSend, activeModel }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto pt-2 pb-1">
      <form 
        onSubmit={handleSubmit}
        className="relative rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] focus-within:border-violet-500/60 focus-within:ring-2 focus-within:ring-violet-500/20 shadow-2xl transition-all p-3.5 overflow-hidden"
      >
        {/* Soft Rounded Text Input Area */}
        <textarea
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Ask ${activeModel || 'Echo Cat'} anything... (Press Enter to send)`}
          className="w-full bg-transparent resize-none outline-none border-none focus:ring-0 focus:outline-none text-xs md:text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] px-2 pr-10 rounded-2xl"
        />

        {/* Inner Controls Bar */}
        <div className="flex items-center justify-between pt-2 px-1 border-t border-[var(--border-subtle)]/30 mt-1">
          
          {/* Left Tool Icons & Engine Pill */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              className="p-1.5 rounded-full text-[var(--text-muted)] hover:text-violet-400 hover:bg-[var(--bg-workspace)] transition-colors"
              title="Attach File"
            >
              <Paperclip className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              className="p-1.5 rounded-full text-[var(--text-muted)] hover:text-violet-400 hover:bg-[var(--bg-workspace)] transition-colors"
              title="Voice Input"
            >
              <Mic className="h-3.5 w-3.5" />
            </button>

            <div className="h-3 w-[1px] bg-[var(--border-subtle)] mx-1" />

            <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[var(--bg-workspace)] text-violet-400 border border-[var(--border-subtle)] flex items-center gap-1 shadow-inner">
              <Sparkles className="h-2.5 w-2.5" />
              {activeModel || "GPT-5 Cyber"}
            </span>
          </div>

          {/* Pill Send Button */}
          <button
            type="submit"
            disabled={!input.trim()}
            className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 text-xs font-semibold ${
              input.trim()
                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-600/25 hover:scale-105 active:scale-95 cursor-pointer'
                : 'bg-[var(--bg-workspace)] text-[var(--text-muted)] cursor-not-allowed opacity-50'
            }`}
          >
            <span>Send</span>
            <Send className="h-3 w-3" />
          </button>

        </div>
      </form>
    </div>
  );
}