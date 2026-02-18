
import React from 'react';
import { Block, Newsletter } from '../../types';
import { THEMES } from '../../constants';
import { 
  AlignLeft, AlignCenter, AlignRight, Layout, Square, 
  Link as LinkIcon, CaseSensitive, MousePointerClick, Info 
} from 'lucide-react';

interface InspectorProps {
  block: Block;
  theme: Newsletter['theme'];
  onThemeChange: (theme: Newsletter['theme']) => void;
  onChange: (updates: Partial<Block>) => void;
}

const FONT_OPTIONS = [
  { label: 'Default (Inherit)', value: '' },
  { label: 'Inter', value: 'Inter, sans-serif' },
  { label: 'Roboto', value: 'Roboto, sans-serif' },
  { label: 'Open Sans', value: 'Open Sans, sans-serif' },
  { label: 'Montserrat', value: 'Montserrat, sans-serif' },
  { label: 'Poppins', value: 'Poppins, sans-serif' },
  { label: 'Playfair Display', value: 'Playfair Display, serif' },
  { label: 'Merriweather', value: 'Merriweather, serif' },
  { label: 'Lato', value: 'Lato, sans-serif' },
  { label: 'Oswald', value: 'Oswald, sans-serif' },
];

export const Inspector: React.FC<InspectorProps> = ({ block, theme, onThemeChange, onChange }) => {
  const updateStyle = (styleUpdates: any) => {
    onChange({ style: { ...block.style, ...styleUpdates } });
  };

  const isTextType = ['text', 'header', 'button'].includes(block.type);
  const isHeaderOrText = ['text', 'header'].includes(block.type);
  const isButton = block.type === 'button';
  const isImage = block.type === 'image';

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 transition-colors">
      <div className="p-4 border-b border-slate-100 dark:border-slate-800">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center">
          <Layout className="w-3.5 h-3.5 mr-2 text-blue-500" />
          Block Settings
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Content Area (Source / Text) */}
        {(isTextType || block.type === 'video' || isImage) && (
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight">
              {isImage || block.type === 'video' ? 'Source URL (Asset)' : 'Content'}
            </label>
            <textarea
              value={block.type === 'video' || isImage ? (block.src || '') : (block.content || '')}
              onChange={(e) => block.type === 'video' || isImage ? onChange({ src: e.target.value }) : onChange({ content: e.target.value })}
              className="w-full p-3 text-sm border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-950 dark:text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none shadow-inner"
              rows={3}
              placeholder={isImage ? "https://example.com/image.jpg" : "Enter content..."}
            />
          </div>
        )}

        {/* Link & Alt Text Settings for Images */}
        {isImage && (
          <div className="space-y-4 pt-2">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase flex items-center tracking-tight">
                <LinkIcon className="w-3 h-3 mr-2 text-blue-500" />
                Image Link
              </label>
              <input
                type="text"
                value={block.href || ''}
                onChange={(e) => onChange({ href: e.target.value })}
                placeholder="https://acasting.se/..."
                className="w-full p-3 text-sm border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-950 dark:text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-inner"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase flex items-center tracking-tight">
                <Info className="w-3 h-3 mr-2 text-slate-400" />
                Alt Text
              </label>
              <input
                type="text"
                value={block.alt || ''}
                onChange={(e) => onChange({ alt: e.target.value })}
                placeholder="Brief accessibility description"
                className="w-full p-3 text-sm border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-950 dark:text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-inner"
              />
            </div>
          </div>
        )}

        {/* Button Specific Settings */}
        {isButton && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase flex items-center tracking-tight">
                <LinkIcon className="w-3 h-3 mr-2 text-blue-500" />
                Button Link
              </label>
              <input
                type="text"
                value={block.href || ''}
                onChange={(e) => onChange({ href: e.target.value })}
                placeholder="https://example.com"
                className="w-full p-3 text-sm border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-950 dark:text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-inner"
              />
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
              <label className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase flex items-center tracking-widest">
                <MousePointerClick className="w-3.5 h-3.5 mr-2" />
                Hover Interaction
              </label>
              
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-slate-400 uppercase">Hover Background</label>
                <div className="flex items-center space-x-2">
                  <input 
                    type="color" 
                    value={block.style.hoverBackgroundColor || '#0047CC'} 
                    onChange={(e) => updateStyle({ hoverBackgroundColor: e.target.value })}
                    className="w-10 h-10 rounded-xl border-none cursor-pointer overflow-hidden shadow-sm"
                  />
                  <input 
                    type="text" 
                    value={block.style.hoverBackgroundColor || '#0047CC'} 
                    onChange={(e) => updateStyle({ hoverBackgroundColor: e.target.value })}
                    className="flex-1 p-2 text-xs border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[9px] font-bold text-slate-400 uppercase">Hover Scale Factor</label>
                  <span className="text-[11px] font-black text-blue-600 dark:text-blue-400 font-mono">{block.style.hoverScale || '1.00'}x</span>
                </div>
                <div className="px-1">
                  <input 
                    type="range" 
                    min="1" 
                    max="1.2" 
                    step="0.01"
                    value={parseFloat(block.style.hoverScale || '1.0')} 
                    onChange={(e) => updateStyle({ hoverScale: e.target.value })} 
                    className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600" 
                  />
                  <div className="flex justify-between text-[8px] text-slate-400 font-black px-0.5 mt-2 uppercase tracking-tighter">
                    <span>Normal</span>
                    <span>1.10x</span>
                    <span>Max (1.20x)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Text & Typography Styling */}
        {isTextType && (
          <div className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-4">
            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight">Typography</label>
            
            <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-950 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Align</label>
              <div className="flex bg-slate-200 dark:bg-slate-800 rounded-lg p-0.5">
                {[
                  { val: 'left', icon: AlignLeft },
                  { val: 'center', icon: AlignCenter },
                  { val: 'right', icon: AlignRight }
                ].map((item) => (
                  <button
                    key={item.val}
                    onClick={() => updateStyle({ textAlign: item.val })}
                    className={`p-1.5 rounded-md transition-all ${block.style.textAlign === item.val ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-400 uppercase flex items-center">
                <CaseSensitive className="w-3 h-3 mr-1" />
                Font Family
              </label>
              <select
                value={block.style.fontFamily || ''}
                onChange={(e) => updateStyle({ fontFamily: e.target.value })}
                className="w-full p-2 text-xs border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 outline-none transition-all hover:border-slate-300 dark:hover:border-slate-700"
              >
                {FONT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} style={{ fontFamily: opt.value }}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-400 uppercase">Size</label>
                <input 
                  type="text" 
                  value={block.style.fontSize} 
                  onChange={(e) => updateStyle({ fontSize: e.target.value })}
                  className="w-full p-2 text-xs border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-400 uppercase">Line Height</label>
                <input 
                  type="text" 
                  value={block.style.lineHeight || '1.5'} 
                  onChange={(e) => updateStyle({ lineHeight: e.target.value })}
                  className="w-full p-2 text-xs border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950" 
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-400 uppercase">
                  {isButton ? 'Base Background' : 'Text Color'}
                </label>
                <div className="flex items-center space-x-2">
                  <input 
                    type="color" 
                    value={isButton ? (block.style.backgroundColor || '#0057FF') : (block.style.color || '#000000')} 
                    onChange={(e) => updateStyle(isButton ? { backgroundColor: e.target.value } : { color: e.target.value })}
                    className="w-8 h-8 rounded-lg border-none cursor-pointer"
                  />
                  <input 
                    type="text" 
                    value={isButton ? (block.style.backgroundColor || '#0057FF') : (block.style.color || '#000000')} 
                    onChange={(e) => updateStyle(isButton ? { backgroundColor: e.target.value } : { color: e.target.value })}
                    className="flex-1 p-2 text-xs border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 font-mono"
                  />
                </div>
              </div>

              {isHeaderOrText && (
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-slate-400 uppercase">Block Background</label>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="color" 
                      value={block.style.backgroundColor || 'transparent'} 
                      onChange={(e) => updateStyle({ backgroundColor: e.target.value })}
                      className="w-8 h-8 rounded-lg border-none cursor-pointer"
                    />
                    <input 
                      type="text" 
                      value={block.style.backgroundColor || 'transparent'} 
                      onChange={(e) => updateStyle({ backgroundColor: e.target.value })}
                      className="flex-1 p-2 text-xs border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 font-mono"
                      placeholder="transparent"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Border Controls (Specifically for Text and Header) */}
        {isHeaderOrText && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase flex items-center tracking-tight">
              <Square className="w-3 h-3 mr-2 text-slate-400" />
              Border Settings
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-400 uppercase">Width</label>
                <input 
                  type="text" 
                  placeholder="0px"
                  value={block.style.borderWidth || ''} 
                  onChange={(e) => updateStyle({ borderWidth: e.target.value })}
                  className="w-full p-2 text-xs border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-400 uppercase">Style</label>
                <select
                  value={block.style.borderStyle || 'none'}
                  onChange={(e) => updateStyle({ borderStyle: e.target.value })}
                  className="w-full p-2 text-xs border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 outline-none"
                >
                  <option value="none">None</option>
                  <option value="solid">Solid</option>
                  <option value="dashed">Dashed</option>
                  <option value="dotted">Dotted</option>
                  <option value="double">Double</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-400 uppercase">Color</label>
              <div className="flex items-center space-x-2">
                <input 
                  type="color" 
                  value={block.style.borderColor || '#000000'} 
                  onChange={(e) => updateStyle({ borderColor: e.target.value })}
                  className="w-8 h-8 rounded-lg border-none cursor-pointer"
                />
                <input 
                  type="text" 
                  value={block.style.borderColor || '#000000'} 
                  onChange={(e) => updateStyle({ borderColor: e.target.value })}
                  className="flex-1 p-2 text-xs border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-950 font-mono"
                />
              </div>
            </div>
          </div>
        )}

        {/* Spacing & Borders */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight">Spacing & Corners</label>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Margin Y</label>
                <input type="text" value={block.style.marginTop} onChange={(e) => updateStyle({ marginTop: e.target.value, marginBottom: e.target.value })} className="w-full p-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg shadow-inner" />
             </div>
             <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Padding Y</label>
                <input type="text" value={block.style.padding} onChange={(e) => updateStyle({ padding: e.target.value })} className="w-full p-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg shadow-inner" />
             </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Border Radius</label>
              <span className="text-[9px] font-mono text-slate-500">{block.style.borderRadius || '0px'}</span>
            </div>
            <input type="range" min="0" max="100" value={parseInt(block.style.borderRadius || '0')} onChange={(e) => updateStyle({ borderRadius: `${e.target.value}px` })} className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          </div>
        </div>

        {/* Theme Library */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
          <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block mb-3 tracking-widest">Global Themes</label>
          <div className="grid grid-cols-1 gap-2.5">
            {Object.entries(THEMES).map(([key, t]) => (
              <button
                key={key}
                onClick={() => onThemeChange(t)}
                className={`flex items-center p-2 rounded-2xl border-2 transition-all group ${
                  theme.name === t.name ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10' : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <div className="w-9 h-9 rounded-xl mr-3 shadow-md border border-white dark:border-slate-700 transition-transform group-hover:scale-105" style={{ backgroundColor: t.primaryColor }}></div>
                <div className="flex-1 text-left">
                  <p className="text-[10px] font-black text-slate-800 dark:text-slate-200 leading-none">{t.name}</p>
                  <p className="text-[8px] text-slate-400 uppercase mt-1.5 font-bold tracking-widest">{t.fontFamily.split(',')[0]}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
