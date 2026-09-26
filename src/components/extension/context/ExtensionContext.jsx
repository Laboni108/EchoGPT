import React, { createContext, useContext, useState } from 'react';

// Context create kora hocche
const ExtensionContext = createContext();

export const ExtensionProvider = ({ children }) => {
  // 1. Theme State (dark ba light)
  const [theme, setTheme] = useState('dark');

  // 2. Active Tab / Webpage State (Chrome active tab metadata)
  const [activeTab, setActiveTab] = useState({
    title: 'React v19 Release Notes & Server Components Overview',
    url: 'https://react.dev/blog/2026/09/react-v19-updates',
    favicon: 'https://react.dev/favicon.ico',
    selectedText: 'React Server Components allow developers to render components on the server for faster initial page loads.'
  });

  // 3. Model Selector State
  const [selectedModel, setSelectedModel] = useState('gpt-5-cyber');

  // 4. View State ('main' | 'history' | 'settings')
  const [activeView, setActiveView] = useState('main');

  // 5. Chat Messages State
  const [messages, setMessages] = useState([]);

  // 6. Loading State (AI processing kinah)
  const [isGenerating, setIsGenerating] = useState(false);

  // Theme change korar handler
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  // Webpage selected text clear korar function
  const clearSelection = () => setActiveTab(prev => ({ ...prev, selectedText: '' }));

  return (
    <ExtensionContext.Provider value={{
      theme, toggleTheme,
      activeTab, clearSelection,
      selectedModel, setSelectedModel,
      activeView, setActiveView,
      messages, setMessages,
      isGenerating, setIsGenerating
    }}>
      <div className={theme === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}>
        {children}
      </div>
    </ExtensionContext.Provider>
  );
};

// Custom Hook shortcut
export const useExtension = () => useContext(ExtensionContext);