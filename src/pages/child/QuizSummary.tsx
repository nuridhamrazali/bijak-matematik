import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store';
import { Button } from '../../components/ui/Button';
import { Trophy, Star, ArrowRight, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import bgImage from '../../assets/images/kids_learning_math_bg_1784429493113.jpg';

export default function QuizSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addQuizResult, activeChildId, language } = useAppStore();
  
  const { score, total, year, topic } = location.state || { score: 0, total: 10, year: 1, topic: 'rawak' };
  const percentage = Math.round((score / total) * 100);

  useEffect(() => {
    if (percentage > 50) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#10b981', '#f59e0b', '#ec4899']
      });
    }

    if (activeChildId) {
      addQuizResult(activeChildId, {
        date: new Date().toISOString(),
        tahun: parseInt(year),
        topik: topic === 'rawak' ? 'Rawak' : decodeURIComponent(topic),
        score,
        totalQuestions: total,
        timeSpentSeconds: 120, // hardcoded for MVP
        weakestSubtopic: null
      });
    }
  }, [percentage, score, total, year, topic, activeChildId, addQuizResult]);

  return (
    <div 
      className="min-h-screen p-6 flex flex-col items-center justify-center font-sans relative"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md w-full bg-white rounded-[3rem] p-10 border-b-[12px] border-slate-200 shadow-sm text-center relative z-10"
      >
        <div className="w-40 h-40 mx-auto bg-amber-400 rounded-[2.5rem] flex items-center justify-center mb-8 border-b-[8px] border-amber-600 shadow-inner">
          <Trophy size={80} className="text-white drop-shadow-md" strokeWidth={1.5} />
        </div>
        
        <h1 className="text-5xl font-black text-blue-900 mb-4 uppercase tracking-tight drop-shadow-sm">
          {percentage >= 80 ? (language === 'bm' ? 'Hebat!' : 'Awesome!') : 
           percentage >= 50 ? (language === 'bm' ? 'Bagus!' : 'Good Job!') : 
           (language === 'bm' ? 'Cuba Lagi!' : 'Try Again!')}
        </h1>
        
        <div className="text-7xl font-black text-blue-500 mb-8 border-4 border-blue-100 bg-blue-50 rounded-[2rem] py-4">
          {score} <span className="text-blue-300">/</span> {total}
        </div>

        <div className="flex justify-center items-center gap-3 mb-10 bg-yellow-50 py-4 rounded-3xl text-yellow-600 font-black text-2xl border-4 border-yellow-200 shadow-inner">
          <Star fill="currentColor" size={32} /> +{score * 10} <span className="text-sm mt-1 uppercase tracking-widest">XP</span>
        </div>

        <div className="flex flex-col gap-4">
          <Button size="xl" onClick={() => navigate(`/topic-select/${year}`)}>
            {language === 'bm' ? 'Topik Lain' : 'Other Topics'} <ArrowRight className="ml-2" />
          </Button>
          <Button variant="ghost" size="lg" onClick={() => navigate(`/quiz/${year}/${topic}`)}>
            <RotateCcw className="mr-2" /> {language === 'bm' ? 'Main Semula' : 'Play Again'}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
