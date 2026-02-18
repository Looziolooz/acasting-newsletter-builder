
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { INITIAL_NEWSLETTER, COLORS, THEMES } from './constants';
import { Newsletter, Block, EditorTab, BlockType } from './types';
import { BlockRenderer } from './components/Editor/BlockRenderer';
import { Inspector } from './components/Editor/Inspector';
import { AIAssistant } from './components/Editor/AIAssistant';
import { persistenceService } from './services/persistenceService';
import { GoogleGenAI } from "@google/genai";
// Added missing icon imports from lucide-react
import { Sparkles, Undo2, Save } from 'lucide-react';

const App: React.FC = () => {
  const [newsletter, setNewsletter] = useState<Newsletter>(INITIAL_NEWSLETTER);
  const [history, setHistory] = useState<Newsletter[]>([]);
  const [redoStack, setRedoStack] = useState<Newsletter[]>([]);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<EditorTab>('blocks');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isSaving, setIsSaving] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
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
    }
    loadData();
  }, []);

  const handleOpenKeyDialog = async () => {
    // @ts-ignore
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      setHasKey(true);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(async () => {
      setIsSaving(true);
      await persistenceService.saveNewsletter(newsletter);
      setIsSaving(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [newsletter]);

  const pushToHistory = useCallback((state: Newsletter) => {
    setHistory(prev => [...prev.slice(-19), newsletter]);
    setRedoStack([]);
  }, [newsletter]);

  const undo = useCallback(() => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setRedoStack(rs => [...rs, newsletter]);
    setHistory(h => h.slice(0, -1));
    setNewsletter(prev);
  }, [history, newsletter]);

  const redo = useCallback(() => {
    if (redoStack.length === 0) return;
    const next = redoStack[redoStack.length - 1];
    setHistory(h => [...h, newsletter]);
    setRedoStack(rs => rs.slice(0, -1));
    setNewsletter(next);
  }, [redoStack, newsletter]);

  const selectedBlock = useMemo(
    () => (newsletter?.blocks || []).find((b) => b.id === selectedBlockId),
    [newsletter?.blocks, selectedBlockId]
  );

  const handleUpdateTheme = useCallback((theme: Newsletter['theme']) => {
    pushToHistory(newsletter);
    setNewsletter(prev => ({
      ...prev,
      theme,
      blocks: (prev?.blocks || []).map(b => {
        const newStyle = { ...b.style, fontFamily: theme.fontFamily };
        if (b.type === 'button' && b.style.backgroundColor === prev.theme.primaryColor) {
          newStyle.backgroundColor = theme.primaryColor;
        }
        return { ...b, style: newStyle };
      })
    }));
  }, [newsletter, pushToHistory]);

  const handleAddBlock = useCallback((type: BlockType, data?: Partial<Block>) => {
    pushToHistory(newsletter);
    const newBlock: Block = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: data?.content || (type === 'text' ? 'Contenuto del blocco...' : type === 'button' ? 'Clicca qui' : ''),
      src: data?.src || (type === 'image' ? 'https://picsum.photos/600/300' : ''),
      style: {
        padding: '20px',
        textAlign: 'left',
        fontSize: '16px',
        color: '#333333',
        fontFamily: newsletter.theme.fontFamily,
        ...(type === 'button' ? { 
          backgroundColor: newsletter.theme.primaryColor, 
          hoverBackgroundColor: '#0047CC',
          hoverScale: '1.05',
          color: '#FFFFFF', 
          borderRadius: '9999px', 
          textAlign: 'center',
          fontWeight: '600'
        } : {}),
        ...data?.style
      },
      ...data
    };
    setNewsletter((prev) => ({
      ...prev,
      blocks: [...(prev?.blocks || []), newBlock]
    }));
    setSelectedBlockId(newBlock.id);
    setActiveTab('settings');
  }, [newsletter, pushToHistory]);

  const handleUpdateBlock = useCallback((id: string, updates: Partial<Block>) => {
    setNewsletter((prev) => ({
      ...prev,
      blocks: (prev?.blocks || []).map((b) => (b.id === id ? { ...b, ...updates } : b))
    }));
  }, []);

  const handleRemoveBlock = useCallback((id: string) => {
    pushToHistory(newsletter);
    setNewsletter((prev) => ({
      ...prev,
      blocks: (prev?.blocks || []).filter((b) => b.id !== id)
    }));
    setSelectedBlockId(null);
  }, [newsletter, pushToHistory]);

  const handleMoveBlock = useCallback((id: string, direction: 'up' | 'down') => {
    pushToHistory(newsletter);
    setNewsletter(prev => {
      const index = (prev.blocks || []).findIndex(b => b.id === id);
      if (index === -1) return prev;
      const newBlocks = [...prev.blocks];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= newBlocks.length) return prev;
      [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]];
      return { ...prev, blocks: newBlocks };
    });
  }, [newsletter, pushToHistory]);

  const handleDuplicateBlock = useCallback((id: string) => {
    pushToHistory(newsletter);
    setNewsletter(prev => {
      const index = (prev.blocks || []).findIndex(b => b.id === id);
      if (index === -1) return prev;
      const blockToClone = prev.blocks[index];
      const clonedBlock = { ...blockToClone, id: Math.random().toString(36).substr(2, 9) };
      const newBlocks = [...prev.blocks];
      newBlocks.splice(index + 1, 0, clonedBlock);
      return { ...prev, blocks: newBlocks };
    });
  }, [newsletter, pushToHistory]);

  if (!hasKey) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-900 text-white p-8">
        <Sparkles className="w-12 h-12 text-blue-500 mb-6 animate-pulse" />
        <h1 className="text-3xl font-bold mb-4 tracking-tight text-center">AI Co-pilot Setup</h1>
        <p className="text-slate-400 max-w-md text-center mb-8">
          Seleziona una chiave API valida per attivare le funzioni di generazione immagini e testi.
        </p>
        <button
          onClick={handleOpenKeyDialog}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg transition-all active:scale-95"
        >
          Seleziona API Key
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
      <aside className="w-80 bg-white border-r border-slate-200 flex flex-col shadow-xl z-20">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl italic">A</span>
            </div>
            <h1 className="font-bold text-slate-800 tracking-tight">ACASTING <span className="text-blue-600">AI</span></h1>
          </div>
          <div className="flex space-x-1">
            <button onClick={undo} disabled={history.length === 0} className="p-1.5 text-slate-400 hover:text-blue-600 disabled:opacity-30 transition-colors">
               <Undo2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex border-b border-slate-100">
          {(['blocks', 'settings', 'ai'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto">
          {activeTab === 'blocks' && (
            <div className="p-4 grid grid-cols-2 gap-3">
              {[
                { type: 'header', icon: 'H1', label: 'Header' },
                { type: 'text', icon: '¶', label: 'Paragraph' },
                { type: 'image', icon: 'IMG', label: 'Image' },
                { type: 'button', icon: 'BTN', label: 'Button' },
                { type: 'divider', icon: '—', label: 'Divider' },
              ].map((item) => (
                <button
                  key={item.type}
                  onClick={() => handleAddBlock(item.type as BlockType)}
                  className="p-4 border border-slate-100 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all flex flex-col items-center justify-center space-y-2 group bg-slate-50"
                >
                  <span className="text-xl font-bold text-slate-400 group-hover:text-blue-500">{item.icon}</span>
                  <span className="text-[10px] font-bold text-slate-500 group-hover:text-blue-600 uppercase tracking-tighter">{item.label}</span>
                </button>
              ))}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="h-full flex flex-col">
              {selectedBlock ? (
                <Inspector
                  block={selectedBlock}
                  theme={newsletter.theme}
                  onThemeChange={handleUpdateTheme}
                  onChange={(updates) => handleUpdateBlock(selectedBlock.id, updates)}
                />
              ) : (
                <div className="p-6 space-y-8 text-center">
                  <p className="text-sm text-slate-400 bg-slate-50 p-8 rounded-2xl border-2 border-dashed border-slate-200">Seleziona un blocco.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'ai' && (
            <AIAssistant
              onAddBlock={(updates) => handleAddBlock(updates.type as BlockType, updates)}
              onUpdateTitle={(t) => setNewsletter(prev => ({ ...prev, title: t }))}
              currentNewsletterContext={(newsletter?.blocks || []).map(b => b.content || "").join(' ')}
            />
          )}
        </div>
      </aside>

      <main className="flex-1 flex flex-col items-center overflow-hidden relative">
        <header className="w-full h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between z-10">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={newsletter.title}
              onChange={(e) => setNewsletter({ ...newsletter, title: e.target.value })}
              className="font-semibold text-slate-700 bg-transparent border-none focus:ring-2 focus:ring-blue-100 px-2 rounded-md transition-all outline-none w-64"
            />
          </div>

          <div className="flex items-center bg-slate-100 p-1 rounded-lg">
            <button onClick={() => setPreviewMode('desktop')} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${previewMode === 'desktop' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}>Desktop</button>
            <button onClick={() => setPreviewMode('mobile')} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${previewMode === 'mobile' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}>Mobile</button>
          </div>
        </header>

        <div className="flex-1 w-full overflow-y-auto p-12 bg-slate-100 transition-colors duration-500 flex justify-center" style={{ backgroundColor: newsletter.theme.backgroundColor }}>
          <div
            className={`transition-all duration-500 bg-white shadow-2xl rounded-sm ${previewMode === 'desktop' ? 'w-[640px]' : 'w-[375px]'}`}
            style={{ backgroundColor: newsletter.theme.canvasColor, minHeight: '800px', fontFamily: newsletter.theme.fontFamily }}
          >
            {(newsletter?.blocks || []).map((block) => (
              <BlockRenderer
                key={block.id}
                block={block}
                isSelected={selectedBlockId === block.id}
                onClick={() => { setSelectedBlockId(block.id); setActiveTab('settings'); }}
                onRemove={() => handleRemoveBlock(block.id)}
                onMove={(dir) => handleMoveBlock(block.id, dir)}
                onDuplicate={() => handleDuplicateBlock(block.id)}
              />
            ))}
          </div>
        </div>

        {isSaving && (
          <div className="absolute bottom-6 right-6 flex items-center space-x-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[11px] text-slate-500 font-bold border border-slate-100 shadow-lg">
            <Save className="w-3.5 h-3.5 animate-bounce" />
            <span>Salvataggio...</span>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
