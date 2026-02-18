
import React, { useState } from 'react';
import { Block } from '../../types';
import { Trash2, Copy, ArrowUp, ArrowDown, Play } from 'lucide-react';

interface BlockRendererProps {
  block: Block;
  isSelected: boolean;
  onClick: () => void;
  onRemove: () => void;
  onMove: (direction: 'up' | 'down') => void;
  onDuplicate: () => void;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ 
  block, isSelected, onClick, onRemove, onMove, onDuplicate 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const style = {
    ...block.style,
    cursor: 'pointer',
    position: 'relative' as const,
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const renderContent = () => {
    switch (block.type) {
      case 'header':
        return <h1 style={style} className="m-0">{block.content}</h1>;
      case 'text':
        return <p style={style} className="m-0 whitespace-pre-wrap">{block.content}</p>;
      case 'image':
        const imageElement = (
          <img 
            src={block.src || 'https://picsum.photos/800/400?text=No+Image'} 
            alt={block.alt || ""} 
            className="w-full h-auto block" 
          />
        );
        return (
          <div className="w-full overflow-hidden" style={{ borderRadius: block.style.borderRadius }}>
            {block.href ? (
              <a href={block.href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                {imageElement}
              </a>
            ) : (
              imageElement
            )}
          </div>
        );
      case 'video':
        return (
          <div className="relative group/video bg-black aspect-video flex items-center justify-center overflow-hidden" style={{ borderRadius: block.style.borderRadius }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover/video:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
              <p className="text-white text-[10px] font-bold mt-3 opacity-80 uppercase tracking-widest">Video Content</p>
            </div>
            {block.src && <div className="absolute bottom-2 left-2 right-2 text-[8px] text-white/40 truncate">{block.src}</div>}
          </div>
        );
      case 'button':
        const buttonInner = (
          <div
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
            style={{
              backgroundColor: isBtnHovered && block.style.hoverBackgroundColor ? block.style.hoverBackgroundColor : block.style.backgroundColor,
              color: block.style.color,
              padding: block.style.padding || '12px 24px',
              borderRadius: block.style.borderRadius,
              fontFamily: block.style.fontFamily,
              fontWeight: block.style.fontWeight,
              fontSize: block.style.fontSize,
              textAlign: 'center',
              boxShadow: isBtnHovered ? '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' : '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              transform: isBtnHovered && block.style.hoverScale ? `scale(${block.style.hoverScale})` : 'scale(1)',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {block.content}
          </div>
        );
        return (
          <div className="flex" style={{ justifyContent: block.style.textAlign === 'left' ? 'flex-start' : block.style.textAlign === 'right' ? 'flex-end' : 'center' }}>
            {block.href ? (
              <a href={block.href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="no-underline block">
                {buttonInner}
              </a>
            ) : (
              buttonInner
            )}
          </div>
        );
      case 'divider':
        return <hr style={{ border: 'none', borderTop: `${block.style.borderWidth || '1px'} ${block.style.borderStyle || 'solid'} ${block.style.borderColor || '#eee'}` }} />;
      case 'spacer':
        return <div style={{ height: block.style.height || '20px' }} />;
      default:
        return null;
    }
  };

  return (
    <div
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative py-1 transition-all ${
        isSelected ? 'ring-2 ring-blue-500 ring-inset z-10' : 'hover:bg-blue-50/30'
      }`}
    >
      {/* Controls UI */}
      {(isSelected || isHovered) && (
        <div className="absolute -top-4 right-2 flex items-center space-x-1 z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex bg-white shadow-xl border border-slate-200 rounded-lg overflow-hidden h-8">
            <button onClick={(e) => { e.stopPropagation(); onMove('up'); }} className="px-2 hover:bg-slate-50 text-slate-600"><ArrowUp className="w-3.5 h-3.5" /></button>
            <button onClick={(e) => { e.stopPropagation(); onMove('down'); }} className="px-2 hover:bg-slate-50 text-slate-600 border-l border-slate-100"><ArrowDown className="w-3.5 h-3.5" /></button>
            <button onClick={(e) => { e.stopPropagation(); onDuplicate(); }} className="px-2 hover:bg-slate-50 text-slate-600 border-l border-slate-100"><Copy className="w-3.5 h-3.5" /></button>
            <button onClick={(e) => { e.stopPropagation(); onRemove(); }} className="px-2 hover:bg-red-50 text-red-600 border-l border-slate-100"><Trash2 className="w-3.5 h-3.5" /></button>
          </div>
        </div>
      )}
      
      <div className="px-4">
        {renderContent()}
      </div>
    </div>
  );
};
