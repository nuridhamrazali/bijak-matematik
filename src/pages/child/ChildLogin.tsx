import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, Delete } from 'lucide-react';
import { motion } from 'motion/react';
import bgImage from '../../assets/images/kids_learning_math_bg_1784429493113.jpg';

export default function ChildLogin() {
  const navigate = useNavigate();
  const { loginChild, language } = useAppStore();
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handlePress = (num: string) => {
    if (pin.length < 4) {
      setError(false);
      const newPin = pin + num;
      setPin(newPin);
      if (newPin.length === 4) {
        // Auto-submit
        setTimeout(() => {
          if (loginChild(newPin)) {
            navigate('/year-select');
          } else {
            setError(true);
            setPin('');
          }
        }, 300);
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
    setError(false);
  };

  return (
    <div 
      className="min-h-screen p-6 flex flex-col items-center justify-center relative"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
      
      <button 
        className="absolute top-4 left-4 md:top-6 md:left-6 bg-white border-b-[4px] border-slate-200 rounded-full w-12 h-12 md:w-14 md:h-14 shadow-sm z-50 flex items-center justify-center hover:bg-slate-50 active:border-b-0 active:translate-y-[4px] transition-all" 
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 text-blue-900" />
      </button>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-sm w-full bg-white rounded-[2.5rem] p-6 md:p-10 border-b-[12px] border-slate-200 shadow-sm text-center relative z-10"
      >
        <h2 className="text-2xl md:text-4xl font-black text-blue-900 mb-6 uppercase tracking-tight drop-shadow-sm">
          {language === 'bm' ? 'Masukkan PIN' : 'Enter PIN'}
        </h2>
        
        {/* PIN Display */}
        <div className={`flex justify-center gap-3 md:gap-4 mb-6 md:mb-8 ${error ? 'animate-bounce' : ''}`}>
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-4xl md:text-5xl font-black border-b-[6px] transition-colors ${
                pin[i] ? 'bg-blue-500 text-white border-blue-700' : 
                error ? 'border-red-500 bg-red-100' : 'border-slate-300 bg-slate-100'
              }`}
            >
              {pin[i] ? '*' : ''}
            </div>
          ))}
        </div>

        {/* Numpad */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 bg-slate-50 p-4 md:p-6 rounded-[2.5rem] border-2 border-slate-100">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handlePress(num.toString())}
              className="h-16 md:h-20 text-3xl md:text-4xl font-black text-slate-700 bg-white rounded-[1.5rem] border-b-[6px] border-slate-200 hover:bg-slate-50 active:border-b-0 active:translate-y-[6px] transition-all"
            >
              {num}
            </button>
          ))}
          <div className="h-16 md:h-20"></div> {/* Empty space */}
          <button
            onClick={() => handlePress('0')}
            className="h-16 md:h-20 text-3xl md:text-4xl font-black text-slate-700 bg-white rounded-[1.5rem] border-b-[6px] border-slate-200 hover:bg-slate-50 active:border-b-0 active:translate-y-[6px] transition-all"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="h-16 md:h-20 flex items-center justify-center text-red-500 bg-red-50 rounded-[1.5rem] border-b-[6px] border-red-200 hover:bg-red-100 active:border-b-0 active:translate-y-[6px] transition-all"
          >
            <Delete className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
