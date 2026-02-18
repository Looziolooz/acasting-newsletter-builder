
"use client";

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { INITIAL_NEWSLETTER, THEMES } from '../constants';
import { Newsletter, Block, EditorTab, BlockType } from '../types';
import { BlockRenderer } from '../components/Editor/BlockRenderer';
import { Inspector } from '../components/Editor/Inspector';
import { AIAssistant } from '../components/Editor/AIAssistant';
import { persistenceService } from '../services/persistenceService';
import { 
  Sun, Moon, Undo2, Layout, Settings, Sparkles, Smartphone, Monitor, Save, 
  Send, Eye, Download, Search, PlusCircle, Type as TypeIcon, Play, Minus, Maximize,
  MousePointer2
} from 'lucide-react';

export default function NewsletterEditor() {
  const [newsletter, setNewsletter] = useState<Newsletter>(INITIAL_NEWSLETTER);
  const [history, setHistory] = useState<Newsletter[]>([]);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<EditorTab>('blocks');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isSaving, setIsSaving] = useState(false);
  const [hasKey, setHasKey] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('editor-theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const checkKey = async () => {
      // @ts-ignore
      if (window.aistudio) {
        const ok = await window.aistudio.hasSelectedApiKey();
        setHasKey(ok);
      } else {
        setHasKey(true);
      }
    };
    checkKey();

    const loadData = async () => {
      const saved = await persistenceService.getNewsletterById(INITIAL_NEWSLETTER.id);
      if (saved && Array.isArray(saved.blocks)) {
        setNewsletter(saved);
      }
    };
    loadData();
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('editor-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('editor-theme', 'light');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(async () => {
      setIsSaving(true);
      await persistenceService.saveNewsletter(newsletter);
      setIsSaving(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [newsletter]);

  const pushToHistory = useCallback((state: Newsletter) => {
    setHistory(prev => [...prev.slice(-19), JSON.parse(JSON.stringify(state))]);
  }, []);

  const undo = useCallback(() => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setNewsletter(prev);
  }, [history]);

  const selectedBlock = useMemo(
    () => (newsletter?.blocks || []).find((b) => b.id === selectedBlockId),
    [newsletter?.blocks, selectedBlockId]
  );

  const handleUpdateTheme = useCallback((theme: Newsletter['theme']) => {
    pushToHistory(newsletter);
    setNewsletter(prev => ({
      ...prev,
      theme,
      blocks: (prev?.blocks || []).map(b => ({
        ...b,
        style: { ...b.style, fontFamily: theme.fontFamily }
      }))
    }));
  }, [newsletter, pushToHistory]);

  const handleAddBlock = useCallback((type: BlockType, data?: Partial<Block>) => {
    pushToHistory(newsletter);
    const newBlock: Block = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: data?.content || (type === 'text' ? 'Write your message here...' : type === 'header' ? 'New Section' : type === 'button' ? 'Learn More' : ''),
      src: data?.src || (type === 'image' ? 'https://picsum.photos/800/400' : type === 'video' ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' : ''),
      style: {
        padding: '20px',
        textAlign: 'left',
        fontSize: type === 'header' ? '24px' : '16px',
        fontWeight: type === 'header' ? '700' : '400',
        fontFamily: newsletter.theme.fontFamily,
        borderRadius: '0px',
        ...(type === 'button' ? { 
          backgroundColor: newsletter.theme.primaryColor, 
          color: '#FFFFFF', 
          borderRadius: '8px',
          textAlign: 'center',
          padding: '12px 24px'
        } : {}),
        ...data?.style
      },
      ...data
    };
    setNewsletter(prev => ({ ...prev, blocks: [...(prev?.blocks || []), newBlock] }));
    setSelectedBlockId(newBlock.id);
    setActiveTab('settings');
  }, [newsletter, pushToHistory]);

  const handleUpdateBlock = useCallback((id: string, updates: Partial<Block>) => {
    setNewsletter(prev => ({
      ...prev,
      blocks: (prev?.blocks || []).map(b => b.id === id ? { ...b, ...updates } : b)
    }));
  }, []);

  if (!hasKey) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-900 text-white p-8">
        <Sparkles className="w-16 h-16 text-blue-500 mb-8 animate-pulse" />
        <h1 className="text-4xl font-black mb-4 tracking-tighter italic">ACASTING AI STUDIO</h1>
        <p className="text-slate-400 mb-12 text-center max-w-md font-medium">Activate your creative co-pilot to generate free editorial images and high-impact copy for your subscribers.</p>
        <button
          onClick={async () => {
            // @ts-ignore
            await window.aistudio.openSelectKey();
            setHasKey(true);
          }}
          className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-2xl transition-all active:scale-95 flex items-center space-x-3 uppercase tracking-widest text-xs"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Configure Workspace</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 font-sans overflow-hidden transition-colors duration-500">
      {/* Sidebar */}
      <aside className="w-[320px] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shadow-2xl z-30 transition-colors">
        <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-black text-xl italic tracking-tighter">A</span>
            </div>
            <div>
              <h1 className="font-black text-xs text-slate-800 dark:text-slate-100 tracking-tighter uppercase leading-none">Acasting</h1>
              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest leading-none">Studio v2</span>
            </div>
          </div>
          <button 
            onClick={undo} 
            disabled={history.length === 0} 
            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg disabled:opacity-20 transition-all"
          >
            <Undo2 className="w-4 h-4" />
          </button>
        </div>

        <div className="flex border-b border-slate-100 dark:border-slate-800 p-1 bg-white dark:bg-slate-900">
          {[
            { id: 'blocks', icon: Layout, label: 'Add' },
            { id: 'settings', icon: Settings, label: 'Edit' },
            { id: 'ai', icon: Sparkles, label: 'AI' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as EditorTab)}
              className={`flex-1 py-3 flex flex-col items-center justify-center text-[9px] font-black uppercase tracking-widest transition-all rounded-lg ${
                activeTab === tab.id 
                ? 'text-blue-600 bg-blue-50/50 dark:bg-blue-900/10' 
                : 'text-slate-400 dark:text-slate-500 hover:text-slate-600'
              }`}
            >
              <tab.icon className={`w-4 h-4 mb-1 ${activeTab === tab.id ? 'animate-bounce-short' : ''}`} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto">
          {activeTab === 'blocks' && (
             <div className="p-5 grid grid-cols-2 gap-4">
              {[
                { type: 'header', icon: <TypeIcon />, label: 'Header' },
                { type: 'text', icon: <Search className="w-4 h-4" />, label: 'Text' },
                { type: 'image', icon: <Monitor className="w-4 h-4" />, label: 'Image' },
                { type: 'video', icon: <Play className="w-4 h-4" />, label: 'Video' },
                { type: 'button', icon: <Smartphone className="w-4 h-4" />, label: 'Button' },
                { type: 'divider', icon: <Minus />, label: 'Line' },
                { type: 'spacer', icon: <Maximize />, label: 'Space' },
              ].map((item) => (
                <button
                  key={item.type}
                  onClick={() => handleAddBlock(item.type as BlockType)}
                  className="p-6 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-blue-400 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/10 flex flex-col items-center justify-center space-y-3 bg-slate-50 dark:bg-slate-800/30 transition-all group shadow-sm active:scale-95"
                >
                  <div className="text-slate-400 dark:text-slate-500 group-hover:text-blue-600 transition-colors scale-125">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tighter">{item.label}</span>
                </button>
              ))}
            </div>
          )}
          {activeTab === 'settings' && (
            selectedBlock ? (
              <Inspector 
                block={selectedBlock} 
                theme={newsletter.theme} 
                onThemeChange={handleUpdateTheme} 
                onChange={(u) => handleUpdateBlock(selectedBlock.id, u)} 
              />
            ) : (
              <div className="p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-300">
                    <MousePointer2 className="w-8 h-8" />
                </div>
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Select a block to edit</p>
              </div>
            )
          )}
          {activeTab === 'ai' && (
            <AIAssistant 
              onAddBlock={(u) => handleAddBlock(u.type as BlockType, u)} 
              onUpdateTitle={(t) => setNewsletter(prev => ({ ...prev, title: t }))} 
              currentNewsletterContext={(newsletter?.blocks || []).map(b => b.content || '').join(' ')} 
            />
          )}
        </div>
      </aside>

      {/* Workspace Area */}
      <main className="flex-1 flex flex-col items-center overflow-hidden relative">
        <header className="w-full h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between z-20 shadow-sm transition-colors">
          <div className="flex items-center space-x-6">
            <input
              type="text"
              value={newsletter.title}
              onChange={(e) => setNewsletter({ ...newsletter, title: e.target.value })}
              className="font-black text-slate-700 dark:text-slate-200 bg-transparent border-none focus:ring-0 px-0 rounded-none transition-all outline-none w-80 text-lg tracking-tighter"
            />
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              <button 
                onClick={() => setPreviewMode('desktop')} 
                className={`px-4 py-1.5 flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${previewMode === 'desktop' ? 'bg-white dark:bg-slate-700 shadow-md text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button 
                onClick={() => setPreviewMode('mobile')} 
                className={`px-4 py-1.5 flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${previewMode === 'mobile' ? 'bg-white dark:bg-slate-700 shadow-md text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>

            <div className="h-6 w-px bg-slate-200 dark:border-slate-800"></div>

            <div className="flex items-center space-x-3">
                <button onClick={toggleDarkMode} className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-500 hover:bg-slate-200 transition-all">
                    {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
                <button className="flex items-center space-x-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-[10px] uppercase tracking-widest rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95">
                    <Send className="w-3.5 h-3.5" />
                    <span>Publish</span>
                </button>
            </div>
          </div>
        </header>

        <div className="flex-1 w-full overflow-y-auto p-12 transition-all duration-700 bg-slate-200 dark:bg-slate-900/50" style={{ backgroundColor: newsletter.theme.backgroundColor }}>
          <div 
            className={`mx-auto bg-white shadow-2xl transition-all duration-500 overflow-hidden relative ${previewMode === 'desktop' ? 'w-[640px] rounded-sm' : 'w-[375px] rounded-[40px] border-[8px] border-slate-800 ring-4 ring-slate-700 shadow-[0_0_80px_rgba(0,0,0,0.4)]'}`} 
            style={{ 
              backgroundColor: newsletter.theme.canvasColor, 
              minHeight: previewMode === 'desktop' ? '800px' : '667px',
              fontFamily: newsletter.theme.fontFamily 
            }}
          >
            <div className="pb-32">
                {(newsletter?.blocks || []).map((block) => (
                <BlockRenderer
                    key={block.id}
                    block={block}
                    isSelected={selectedBlockId === block.id}
                    onClick={() => { setSelectedBlockId(block.id); setActiveTab('settings'); }}
                    onRemove={() => setNewsletter(prev => ({ ...prev, blocks: (prev?.blocks || []).filter(b => b.id !== block.id) }))}
                    onMove={(dir) => {
                    const index = (newsletter.blocks || []).findIndex(b => b.id === block.id);
                    if (index === -1) return;
                    const newBlocks = [...(newsletter.blocks || [])];
                    const target = dir === 'up' ? index - 1 : index + 1;
                    if (target >= 0 && target < newBlocks.length) {
                        [newBlocks[index], newBlocks[target]] = [newBlocks[target], newBlocks[index]];
                        setNewsletter(prev => ({ ...prev, blocks: newBlocks }));
                    }
                    }}
                    onDuplicate={() => {
                    const index = (newsletter.blocks || []).findIndex(b => b.id === block.id);
                    if (index === -1) return;
                    const newBlock = JSON.parse(JSON.stringify(block));
                    newBlock.id = Math.random().toString(36).substr(2, 9);
                    const newBlocks = [...(newsletter.blocks || [])];
                    newBlocks.splice(index + 1, 0, newBlock);
                    setNewsletter(prev => ({ ...prev, blocks: newBlocks }));
                    }}
                />
                ))}
            </div>

            {previewMode === 'mobile' && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-300 rounded-full"></div>
            )}
          </div>
        </div>
        
        {isSaving && (
          <div className="absolute bottom-10 right-10 flex items-center space-x-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-5 py-3 rounded-2xl text-[10px] text-slate-600 dark:text-slate-300 font-black uppercase tracking-widest border border-slate-100 dark:border-slate-800 shadow-2xl animate-in slide-in-from-right-8 duration-500">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            <span>Cloud Sync Active</span>
          </div>
        )}
      </main>
    </div>
  );
}
