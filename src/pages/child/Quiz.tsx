import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppStore } from '../../store';
import { QUESTIONS } from '../../data/questions';
import { Question } from '../../types';
import { Button } from '../../components/ui/Button';
import { X, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import bgImage from '../../assets/images/kids_learning_math_bg_1784429493113.jpg';

export default function Quiz() {
  const navigate = useNavigate();
  const { year, topic } = useParams();
  const { language, activeChildId } = useAppStore();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  
  // Fill in the blank specific state
  const [fillBlankInput, setFillBlankInput] = useState('');

  useEffect(() => {
    // Filter and randomise questions
    const yearNum = parseInt(year || '1');
    const isRandom = topic === 'rawak';
    
    let filtered = QUESTIONS.filter(q => q.tahun === yearNum);
    if (!isRandom) {
      filtered = filtered.filter(q => q.topik === decodeURIComponent(topic || ''));
    }
    
    // Fallback if no questions found for specific topic, use random year questions
    if (filtered.length === 0) {
      filtered = QUESTIONS.filter(q => q.tahun === yearNum);
    }
    if (filtered.length === 0) {
       filtered = QUESTIONS; // ultimate fallback
    }

    // Shuffle and pick 10 (or less if not enough)
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
  }, [year, topic]);

  const currentQ = questions[currentIndex];

  if (!currentQ) return <div className="p-10 text-center font-bold">Memuatkan / Loading...</div>;

  const handleAnswer = (answer: string) => {
    if (feedback !== null) return; // Prevent multiple clicks
    
    setSelectedAnswer(answer);
    const isCorrect = answer === currentQ.jawapan_betul;
    
    if (isCorrect) {
      setScore(s => s + 1);
      setFeedback('correct');
    } else {
      setFeedback('wrong');
    }

    setTimeout(() => {
      setFeedback(null);
      setSelectedAnswer('');
      setFillBlankInput('');
      
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(i => i + 1);
      } else {
        // End of quiz, navigate to summary
        navigate('/quiz-summary', { 
          state: { 
            score: score + (isCorrect ? 1 : 0), 
            total: questions.length,
            year: year,
            topic: topic 
          } 
        });
      }
    }, 2500);
  };

  const renderQuestion = () => {
    switch (currentQ.jenis_soalan) {
      case 'multiple_choice':
      case 'word_problem':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full">
            {currentQ.pilihan?.map((p, i) => {
              const bgColors = ['bg-pink-400', 'bg-amber-400', 'bg-emerald-400', 'bg-indigo-500'];
              const borderColors = ['border-pink-600', 'border-amber-600', 'border-emerald-600', 'border-indigo-700'];
              const isSelected = selectedAnswer === p;
              return (
                <button 
                  key={i} 
                  className={`relative text-3xl font-black text-white rounded-[2.5rem] border-b-[8px] active:border-b-0 active:translate-y-[8px] p-8 transition-all uppercase tracking-wide ${isSelected ? 'opacity-80 scale-95' : ''} ${bgColors[i%4]} ${borderColors[i%4]}`}
                  onClick={() => handleAnswer(p)}
                >
                  <span className="absolute top-4 left-6 text-xl opacity-30">{String.fromCharCode(65 + i)}</span>
                  {p}
                </button>
              );
            })}
          </div>
        );
      case 'grid_tap':
        return (
          <div className="grid grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto w-full">
            {currentQ.pilihan?.map((p, i) => {
               const bgColors = ['bg-pink-400', 'bg-amber-400', 'bg-emerald-400', 'bg-indigo-500'];
               const borderColors = ['border-pink-600', 'border-amber-600', 'border-emerald-600', 'border-indigo-700'];
               return (
                <button 
                  key={i} 
                  className={`text-5xl font-black text-white h-40 rounded-[2.5rem] border-b-[8px] active:border-b-0 active:translate-y-[8px] transition-all ${selectedAnswer === p ? 'opacity-80 scale-95' : ''} ${bgColors[i%4]} ${borderColors[i%4]}`}
                  onClick={() => handleAnswer(p)}
                >
                  {p}
                </button>
               );
            })}
          </div>
        );
      case 'fill_blank':
        // Vertical math
        return (
          <div className="flex flex-col items-center mt-12 text-7xl font-black text-blue-900 bg-white p-12 rounded-[3rem] border-b-[12px] border-slate-200 shadow-sm w-full max-w-md">
            <div className="flex justify-end w-full tracking-widest pr-8">{currentQ.soalan.top}</div>
            <div className="flex justify-between w-full tracking-widest border-b-[8px] border-slate-300 pb-6 mb-8 pr-8">
              <span className="text-orange-500">{currentQ.soalan.operation}</span>
              <span>{currentQ.soalan.bottom}</span>
            </div>
            <input 
              type="number"
              value={fillBlankInput}
              onChange={e => setFillBlankInput(e.target.value)}
              className="w-full bg-slate-100 rounded-[2rem] text-center outline-none border-[6px] border-slate-200 focus:border-blue-500 py-6 font-black text-blue-900 transition-colors"
              autoFocus
            />
            <Button size="xl" className="mt-8 w-full uppercase tracking-widest" onClick={() => handleAnswer(fillBlankInput)}>
              {language === 'bm' ? 'Semak' : 'Check'}
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col relative overflow-hidden font-sans"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>

      {/* Header & Progress Bar */}
      <div className="p-4 md:p-8 flex items-center gap-4 md:gap-8 z-10 bg-white/95 backdrop-blur-md border-b-4 border-blue-200 shadow-sm relative">
        <button 
          onClick={() => navigate(-1)}
          className="bg-slate-100 rounded-2xl w-12 h-12 md:w-14 md:h-14 shrink-0 border-b-[4px] border-slate-200 flex items-center justify-center hover:bg-slate-200 active:border-b-0 active:translate-y-[4px] transition-all"
        >
          <X className="w-6 h-6 md:w-8 md:h-8 text-slate-500 font-black" />
        </button>
        
        <div className="flex-1 flex items-center gap-2 md:gap-4">
          <div className="w-full h-4 md:h-6 bg-slate-100 rounded-full border-2 border-slate-200 overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
            />
          </div>
          <div className="text-xl md:text-2xl font-black text-blue-900 shrink-0 uppercase tracking-widest">
            {currentIndex + 1}<span className="text-blue-300">/{questions.length}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 max-w-5xl mx-auto w-full z-10">
        
        {/* Question Text */}
        <h2 className="text-4xl md:text-6xl font-black text-blue-900 text-center leading-tight drop-shadow-sm">
          {typeof currentQ.soalan === 'string' ? currentQ.soalan : 'Kira jawapan yang betul:'}
        </h2>

        {/* Question Image */}
        {currentQ.image && (
          <div className="mt-8 mb-4 w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mx-auto">
            <img src={currentQ.image} alt="Soalan" className="w-full h-full object-contain drop-shadow-md" />
          </div>
        )}

        {renderQuestion()}

      </div>

      {/* Feedback Overlay */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className={`absolute bottom-0 left-0 right-0 p-10 rounded-t-[3rem] border-t-[8px] z-50 flex flex-col items-center text-center shadow-[0_-10px_40px_rgba(0,0,0,0.2)] ${
              feedback === 'correct' ? 'bg-emerald-500 border-emerald-400 text-white' : 'bg-red-500 border-red-400 text-white'
            }`}
          >
            {feedback === 'correct' ? (
              <div className="w-24 h-24 bg-emerald-400 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-inner">
                 <CheckCircle size={56} className="text-white" strokeWidth={3} />
              </div>
            ) : (
              <div className="w-24 h-24 bg-red-400 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-inner">
                 <XCircle size={56} className="text-white" strokeWidth={3} />
              </div>
            )}
            <h3 className="text-5xl font-black mb-4 uppercase tracking-wider drop-shadow-sm">
              {feedback === 'correct' ? 'Betul! 🎉' : 'Salah! 😢'}
            </h3>
            {feedback === 'wrong' && (
              <p className="text-2xl font-bold mb-4 bg-red-600/50 px-6 py-2 rounded-2xl">
                Jawapan sebenar: {Array.isArray(currentQ.jawapan_betul) ? currentQ.jawapan_betul.join(', ') : currentQ.jawapan_betul}
              </p>
            )}
            <p className="text-xl font-bold opacity-90 tracking-wide">{currentQ.penjelasan}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
