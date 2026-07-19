import React from 'react';

export function Card({ children, className = '', onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
  const clickableStyle = onClick ? 'cursor-pointer transition-transform hover:-translate-y-1 active:translate-y-[6px] active:border-b-0' : '';
  const borderStyle = onClick ? 'border-b-[8px] border-slate-200' : 'border-2 border-slate-100 shadow-sm';
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-[2.5rem] p-8 ${borderStyle} ${clickableStyle} ${className}`}
    >
      {children}
    </div>
  );
}
