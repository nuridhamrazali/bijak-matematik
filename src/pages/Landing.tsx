import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAppStore } from '../store';
import { Calculator, Users } from 'lucide-react';
import { motion } from 'motion/react';
import bgImage from '../assets/images/kids_learning_math_bg_1784429493113.jpg';

export default function Landing() {
  const navigate = useNavigate();
  const { language, setLanguage } = useAppStore();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans text-slate-800"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Semi-transparent overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>

      {/* Decorative background blobs (made slightly more opaque since we have an overlay) */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

      <div className="absolute top-4 right-4 md:top-6 md:right-8 z-20">

        <div className="flex bg-slate-100 p-1 rounded-full border-2 border-slate-200">
          <button 
            className={`px-3 py-1.5 md:px-6 md:py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-wider transition-colors ${language === 'bm' ? 'bg-white shadow-sm text-blue-900' : 'text-slate-500 hover:bg-slate-200'}`}
            onClick={() => setLanguage('bm')}
          >
            BM
          </button>
          <button 
            className={`px-3 py-1.5 md:px-6 md:py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-wider transition-colors ${language === 'en' ? 'bg-white shadow-sm text-blue-900' : 'text-slate-500 hover:bg-slate-200'}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.5 }}
        className="z-10 flex flex-col items-center max-w-md w-full text-center"
      >
        <div className="w-32 h-32 bg-orange-400 rounded-[2.5rem] mb-6 shadow-inner flex items-center justify-center border-b-[8px] border-orange-600">
           <Calculator size={64} className="text-white drop-shadow-sm" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-2 tracking-tight drop-shadow-sm uppercase">
          BIJAK <span className="text-orange-500">MATEMATIK</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-600 mb-8 md:mb-12 font-bold tracking-wide">
          {language === 'bm' ? 'Ulangkaji Mudah & Seronok untuk Tahun 1-6' : 'Easy & Fun Revision for Year 1-6'}
        </p>

        <div className="flex flex-col gap-4 w-full">
          <Button size="xl" onClick={() => navigate('/child-login')} className="flex items-center gap-2 md:gap-3 !text-lg md:!text-2xl px-4 py-4 md:px-10 md:py-5">
            <span className="text-2xl md:text-3xl">👧👦</span>
            <span className="truncate">{language === 'bm' ? 'Masuk sebagai Murid (PIN)' : 'Student Login (PIN)'}</span>
          </Button>
          
          <Button variant="secondary" size="lg" onClick={() => navigate('/parent-login')} className="flex items-center gap-2 mt-2 md:mt-4 !text-sm md:!text-lg">
            <Users className="w-5 h-5 md:w-6 md:h-6" />
            {language === 'bm' ? 'Log Masuk Ibu Bapa / Guru' : 'Parent / Teacher Login'}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
