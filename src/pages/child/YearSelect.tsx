import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store';
import { Button } from '../../components/ui/Button';
import { LogOut, Star } from 'lucide-react';
import { motion } from 'motion/react';
import bgImage from '../../assets/images/kids_learning_math_bg_1784429493113.jpg';

export default function YearSelect() {
  const navigate = useNavigate();
  const { children, activeChildId, logoutChild, language } = useAppStore();
  
  const child = children.find(c => c.id === activeChildId);

  if (!child) {
    navigate('/child-login');
    return null;
  }

  const years = [
    { num: 1, color: 'bg-pink-400 border-pink-600', badgeColor: 'bg-pink-500', label: '1 - 100', icon: '🎒' },
    { num: 2, color: 'bg-amber-400 border-amber-600', badgeColor: 'bg-amber-500', label: '1 - 1000', icon: '🦒' },
    { num: 3, color: 'bg-emerald-400 border-emerald-600', badgeColor: 'bg-emerald-500', label: '1 - 10 000', icon: '🦖' },
    { num: 4, color: 'bg-indigo-500 border-indigo-700', badgeColor: 'bg-indigo-600', label: '1 - 100 000', icon: '🚀' },
    { num: 5, color: 'bg-purple-500 border-purple-700', badgeColor: 'bg-purple-600', label: '1 - 1 000 000', icon: '🧬' },
    { num: 6, color: 'bg-slate-700 border-slate-900', badgeColor: 'bg-slate-800', label: 'Nisbah & Data', icon: '🏆' },
  ];

  return (
    <div 
      className="min-h-screen p-6 flex flex-col font-sans text-slate-800 relative"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Header */}
        <header className="pt-4 md:pt-6 pb-6 md:pb-10 text-center">
          <div className="flex flex-wrap justify-between items-center mb-6 md:mb-10 bg-white px-4 md:px-8 py-3 md:py-4 rounded-3xl border-b-4 border-blue-200 shadow-sm gap-4">
            <div className="flex items-center gap-2 md:gap-4 min-w-0">
              <div className="relative shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full border-4 border-white flex items-center justify-center text-2xl md:text-3xl shadow-sm">🧒</div>
              </div>
              <div className="text-left min-w-0">
                <h2 className="text-lg md:text-2xl font-black text-blue-900 tracking-tight truncate">{child.name}</h2>
                <div className="flex gap-2 md:gap-3 mt-1">
                  <div className="bg-orange-50 border-2 border-orange-200 px-2 md:px-3 py-0.5 md:py-1 rounded-xl flex items-center w-fit">
                    <span className="text-orange-600 font-black flex items-center text-sm md:text-base"><Star size={14} fill="currentColor" className="mr-1 md:w-4 md:h-4 w-3 h-3"/> {child.xp}</span>
                    <span className="text-[9px] md:text-[10px] font-bold text-orange-400 uppercase ml-1 mt-0.5">XP</span>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => { logoutChild(); navigate('/'); }} 
              className="bg-red-50 hover:bg-red-100 text-red-500 rounded-xl px-3 py-2 md:px-4 md:py-3 flex items-center justify-center border-b-4 border-red-200 active:border-b-0 active:translate-y-[4px] transition-all shrink-0"
            >
              <LogOut className="w-5 h-5 md:w-6 md:h-6 md:mr-2" /> 
              <span className="hidden md:inline font-black uppercase tracking-wider text-sm">{language === 'bm' ? 'Keluar' : 'Exit'}</span>
            </button>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-blue-900 mb-2 drop-shadow-sm tracking-tight">
            {language === 'bm' ? `Halo, ${child.name}! 👋` : `Hello, ${child.name}! 👋`}
          </h1>
          <p className="text-lg md:text-xl text-blue-600 font-bold tracking-wide">
            {language === 'bm' ? 'Pilih Tahun kamu!' : 'Choose your Year!'}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-12">
          {years.map((y, index) => (
            <motion.div
              key={y.num}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/topic-select/${y.num}`)}
              className={`group relative ${y.color} rounded-[2.5rem] border-b-[12px] flex flex-col items-center justify-center p-8 text-white cursor-pointer hover:translate-y-1 hover:border-b-[8px] hover:mb-1 transition-all active:translate-y-[12px] active:border-b-0`}
            >
              <span className="text-[10rem] leading-none font-black opacity-20 absolute top-4 left-6 pointer-events-none">{y.num}</span>
              <div className="text-7xl mb-4 relative z-10">{y.icon}</div>
              <h3 className="text-3xl font-black mt-2 uppercase tracking-wide relative z-10">Tahun {y.num}</h3>
              <div className={`text-sm font-black ${y.badgeColor} px-6 py-2 rounded-full mt-4 uppercase tracking-widest relative z-10 shadow-sm`}>{y.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
