import React, { useState } from 'react';
import { 
  Bot, 
  User, 
  Copy, 
  Check, 
  RotateCw, 
  ThumbsUp, 
  ThumbsDown, 
  Sparkles,
  Code
} from 'lucide-react';

export default function ChatMessage({ message, onRegenerate }) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex gap-4 p-4 rounded-3xl transition-all group ${
      isUser 
        ? 'flex-row-reverse bg-[var(--bg-surface)]/40 border border-[var(--border-subtle)]/50 ml-auto max-w-[85%]' 
        : 'bg-[var(--bg-surface)] border border-[var(--border-subtle)] mr-auto max-w-[90%]'
    }`}>
      
      {/* Avatar Icon */}
      <div className={`h-8 w-8 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
        isUser 
          ? 'bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white' 
          : 'bg-[var(--bg-workspace)] border border-[var(--border-subtle)] text-violet-400'
      }`}>
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      {/* Message Content Container */}
      <div className="flex-1 space-y-2 min-w-0">
        
        {/* Header Metadata */}
        <div className={`flex items-center gap-2 text-[11px] font-semibold text-[var(--text-muted)] ${
          isUser ? 'justify-end' : 'justify-start'
        }`}>
          <span>{isUser ? 'You' : message.modelName || 'Neural Engine'}</span>
          <span>•</span>
          <span>{message.timestamp || 'Just now'}</span>
        </div>

        {/* Text Body */}
        <div className={`text-sm leading-relaxed text-[var(--text-main)] ${
          isUser ? 'text-right font-medium' : 'text-left'
        }`}>
          {message.content}
        </div>

      {/* Embedded Code Snippet Card */}
{message.codeSnippet && (
  <div className="mt-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-workspace)] overflow-hidden shadow-sm">
    
    {/* Code Block Header */}
    <div className="px-4 py-2 border-b border-[var(--border-subtle)] bg-slate-200 dark:bg-slate-900 flex items-center justify-between text-xs font-mono">
      <span className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-violet-300">
        <Code className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
        {message.codeLanguage || 'javascript'}
      </span>
      <button 
        onClick={handleCopy}
        className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors flex items-center gap-1 px-2 py-0.5 rounded-md hover:bg-slate-300 dark:hover:bg-slate-800"
      >
        {copied ? <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="h-3 w-3" />}
        <span>{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </div>

    {/* Code Content Area */}
    <pre className="p-4 text-xs font-mono overflow-x-auto bg-slate-100 dark:bg-[#080C14] text-slate-800 dark:text-violet-200">
      <code>{message.codeSnippet}</code>
    </pre>

  </div>
)}
        {/* Message Action Bar (Assistant Only) */}
        {!isUser && (
          <div className="pt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-muted)]">
            <button 
              onClick={handleCopy}
              className="p-1.5 rounded-lg hover:bg-[var(--bg-workspace)] hover:text-[var(--text-main)] transition-colors"
              title="Copy response"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            </button>

            {onRegenerate && (
              <button 
                onClick={onRegenerate}
                className="p-1.5 rounded-lg hover:bg-[var(--bg-workspace)] hover:text-[var(--text-main)] transition-colors"
                title="Regenerate answer"
              >
                <RotateCw className="h-3.5 w-3.5" />
              </button>
            )}

            <div className="h-3 w-[1px] bg-[var(--border-subtle)] mx-1" />

            <button 
              className="p-1.5 rounded-lg hover:bg-[var(--bg-workspace)] hover:text-[var(--text-main)] transition-colors"
              title="Good response"
            >
              <ThumbsUp className="h-3.5 w-3.5" />
            </button>
            <button 
              className="p-1.5 rounded-lg hover:bg-[var(--bg-workspace)] hover:text-[var(--text-main)] transition-colors"
              title="Bad response"
            >
              <ThumbsDown className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}