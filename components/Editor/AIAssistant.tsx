
import React, { useState } from 'react';
import { 
  generateNewsletterCopyFast, 
  generateNewsletterCopyPro, 
  generateImageFlash, 
  generateEmailSubject 
} from '../../services/geminiService';
import { Block, AspectRatio } from '../../types';
import { Sparkles, Brain, Zap, ImageIcon, Copy, Check, Image as ImageLucide, Loader2, Plus, RefreshCw } from 'lucide-react';

interface AIAssistantProps {
  onAddBlock: (block: Partial<Block>) => void;
  onUpdateTitle: (title: string) => void;
  currentNewsletterContext: string;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ onAddBlock, onUpdateTitle, currentNewsletterContext }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [subjectLoading, setSubjectLoading] = useState(false);
  
  const [suggestion, setSuggestion] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [subjectSuggestions, setSubjectSuggestions] = useState<string[]>([]);
  const [selectedRatio, setSelectedRatio] = useState<AspectRatio>("16:9");

  const handleGenerateCopy = async (isPro: boolean = false) => {
    if (!prompt) return;
    setLoading(true);
    try {
      const text = isPro 
        ? await generateNewsletterCopyPro(prompt, currentNewsletterContext)
        : await generateNewsletterCopyFast(prompt, currentNewsletterContext);
      setSuggestion(text || '');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!prompt) return;
    setImageLoading(true);
    setGeneratedImage(null);
    try {
      const img = await generateImageFlash(prompt, selectedRatio);
      if (img) setGeneratedImage(img);
    } catch (error) {
      alert("Error generating image. Please check your API limits.");
    } finally {
      setImageLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full p-4 space-y-6 overflow-y-auto pb-10 bg-white dark:bg-slate-900 transition-colors">
      
      {/* Subject Line Generator */}
      <div className="space-y-3">
        <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Content Analyzer</label>
        <button
          onClick={async () => {
             setSubjectLoading(true);
             try {
               const subjects = await generateEmailSubject(currentNewsletterContext || "Acasting Podcast");
               setSubjectSuggestions(subjects || []);
             } finally {
               setSubjectLoading(false);
             }
          }}
          disabled={subjectLoading}
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all border border-blue-100 dark:border-blue-800"
        >
          <Brain className="w-4 h-4" />
          <span>{subjectLoading ? 'Analyzing...' : 'Generate Subject Lines'}</span>
        </button>
        {subjectSuggestions.length > 0 && (
          <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
            {subjectSuggestions.map((subject, idx) => (
              <button
                key={idx}
                onClick={() => { onUpdateTitle(subject); setSubjectSuggestions([]); }}
                className="w-full text-left p-3 text-xs bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl hover:border-blue-400 transition-all"
              >
                <span className="text-slate-600 dark:text-slate-300 font-medium">{subject}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Prompt Input */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
        <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 block">Creative Co-pilot</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what you want to create... (e.g., 'Write a short intro for a true crime podcast episode')"
          className="w-full h-28 p-4 text-sm bg-slate-50 dark:bg-slate-950 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none shadow-sm"
        />
        
        {/* Actions */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            onClick={() => handleGenerateCopy(false)}
            disabled={loading || !prompt}
            className="flex flex-col items-center justify-center p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-all shadow-sm"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin mb-1" /> : <Zap className="w-4 h-4 mb-1" />}
            <span className="text-[9px] font-bold uppercase">Write Copy</span>
          </button>
          
          <button
            onClick={handleGenerateImage}
            disabled={imageLoading || !prompt}
            className="flex flex-col items-center justify-center p-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 disabled:opacity-50 transition-all shadow-sm"
          >
            {imageLoading ? <Loader2 className="w-4 h-4 animate-spin mb-1" /> : <ImageLucide className="w-4 h-4 mb-1" />}
            <span className="text-[9px] font-bold uppercase">AI Image</span>
          </button>
        </div>

        {/* Aspect Ratio Selector */}
        <div className="flex items-center justify-center space-x-2 mt-4">
           {(["16:9", "1:1", "4:3"] as AspectRatio[]).map(ratio => (
             <button 
              key={ratio}
              onClick={() => setSelectedRatio(ratio)}
              className={`text-[8px] font-black px-2 py-1 rounded-md border transition-all ${selectedRatio === ratio ? 'bg-slate-900 text-white border-slate-900 scale-105 shadow-sm' : 'text-slate-400 border-slate-200 dark:border-slate-800'}`}
             >
               {ratio}
             </button>
           ))}
        </div>
      </div>

      {/* Copy Result Area */}
      {suggestion && (
        <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-2xl border border-blue-100 dark:border-slate-700 space-y-3 animate-in slide-in-from-bottom-2">
          <div className="flex justify-between items-start">
            <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest">AI Suggestion</span>
            <button 
              onClick={() => handleGenerateCopy(false)} 
              className="p-1 text-blue-400 hover:text-blue-600 transition-colors"
              title="Regenerate"
            >
              <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            {suggestion}
          </p>
          <div className="flex space-x-2 pt-1">
            <button
              onClick={() => { onAddBlock({ type: 'text', content: suggestion }); setSuggestion(''); }}
              className="flex-1 py-2 bg-blue-600 text-white text-[10px] font-bold rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2 shadow-sm transition-all active:scale-95"
            >
              <Plus className="w-3 h-3" />
              <span>Insert Block</span>
            </button>
          </div>
        </div>
      )}

      {/* Image Result Area */}
      {generatedImage && (
        <div className="p-3 bg-emerald-50 dark:bg-slate-800 rounded-2xl border border-emerald-100 dark:border-slate-700 space-y-3 animate-in zoom-in-95">
          <img src={generatedImage} alt="AI Generated" className="w-full h-auto rounded-lg shadow-inner" />
          <div className="flex space-x-2">
            <button
              onClick={() => { onAddBlock({ type: 'image', src: generatedImage }); setGeneratedImage(null); }}
              className="flex-1 py-2 bg-emerald-600 text-white text-[10px] font-bold rounded-lg hover:bg-emerald-700 flex items-center justify-center space-x-2 shadow-sm transition-all active:scale-95"
            >
              <Plus className="w-3 h-3" />
              <span>Insert Image</span>
            </button>
            <button
              onClick={handleGenerateImage}
              className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-200 transition-all"
            >
              <RefreshCw className={`w-4 h-4 ${imageLoading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      )}

      {/* Plan Usage Info */}
      <div className="mt-auto p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-2 mb-1 text-emerald-600 dark:text-emerald-400">
           <Check className="w-3 h-3" />
           <span className="text-[9px] font-black uppercase tracking-wider">Free Usage Tier</span>
        </div>
        <p className="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">
          Powered by <strong>Gemini 2.5 Flash</strong>. High-speed generation is free for creators using the standard Google AI Studio tier.
        </p>
      </div>

    </div>
  );
};
