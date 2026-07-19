import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

export function Button({ variant = 'primary', size = 'md', fullWidth, className = '', children, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-black rounded-2xl transition-all uppercase tracking-wider disabled:opacity-50';
  
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 border-b-[6px] border-blue-700 active:border-b-0 active:translate-y-[6px]',
    secondary: 'bg-purple-500 text-white hover:bg-purple-600 border-b-[6px] border-purple-700 active:border-b-0 active:translate-y-[6px]',
    success: 'bg-emerald-500 text-white hover:bg-emerald-600 border-b-[6px] border-emerald-700 active:border-b-0 active:translate-y-[6px]',
    danger: 'bg-red-500 text-white hover:bg-red-600 border-b-[6px] border-red-700 active:border-b-0 active:translate-y-[6px]',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 shadow-none border-0 active:translate-y-1',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-2xl',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
