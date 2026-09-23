import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { Sparkles, Terminal, MessageSquare } from 'lucide-react';

export default function ChatTranscript({ messages, activeModel, onRegenerate }) {
  const bottomRef = useRef(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Welcome Empty State
  if (!messages || messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-lg mx-auto">
        <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white flex items-center justify-center shadow-lg shadow-violet-600/20 mb-4 animate-bounce">
          <Sparkles className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-bold text-[var(--text-main)] mb-1">
          EchoGPT Neural Workspace
        </h2>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
          Active engine: <span className="text-violet-400 font-semibold">{activeModel}</span>. Ask a question or paste code to begin.
        </p>

        {/* Quick Suggestion Chips */}
        <div className="grid grid-cols-2 gap-2 w-full">
          <div className="p-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-violet-500/40 transition-all text-left cursor-pointer group">
            <Terminal className="h-4 w-4 text-violet-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-[var(--text-main)]">Refactor React Hook</div>
            <div className="text-[10px] text-[var(--text-muted)]">Optimize state re-renders</div>
          </div>
          <div className="p-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-violet-500/40 transition-all text-left cursor-pointer group">
            <MessageSquare className="h-4 w-4 text-fuchsia-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-[var(--text-main)]">Architect DB Schema</div>
            <div className="text-[10px] text-[var(--text-muted)]">PostgreSQL indexing strategy</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {messages.map((msg, index) => (
          <ChatMessage 
            key={msg.id || index} 
            message={msg} 
            onRegenerate={index === messages.length - 1 && msg.role === 'assistant' ? onRegenerate : null}
          />
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}