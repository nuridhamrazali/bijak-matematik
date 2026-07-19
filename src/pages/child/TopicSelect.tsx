import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppStore } from '../../store';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, Play, Dices } from 'lucide-react';
import { TOPICS_BY_YEAR } from '../../data/questions';
import bgImage from '../../assets/images/kids_learning_math_bg_1784429493113.jpg';

export default function TopicSelect() {
  const navigate = useNavigate();
  const { year } = useParams();
  const { language } = useAppStore();
  
  const yearNum = parseInt(year || '1');
  const topics = TOPICS_BY_YEAR[yearNum] || [];

  return (
    <div 
      className="min-h-screen p-6 font-sans relative"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="flex items-center mb-6 md:mb-10 bg-white p-4 rounded-3xl border-b-4 border-blue-200 shadow-sm">
          <button 
            onClick={() => navigate('/year-select')} 
            className="bg-slate-100 rounded-2xl w-12 h-12 md:w-14 md:h-14 mr-4 md:mr-6 shrink-0 border-b-[4px] border-slate-200 flex items-center justify-center hover:bg-slate-200 active:border-b-0 active:translate-y-[4px] transition-all"
          >
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 text-blue-900" />
          </button>
          <h1 className="text-2xl md:text-4xl font-black text-blue-900 tracking-tight uppercase line-clamp-1">
            {language === 'bm' ? `Topik Tahun ${yearNum}` : `Year ${yearNum} Topics`}
          </h1>
        </div>

        <button 
          className="w-full mb-10 bg-orange-500 hover:bg-orange-600 border-b-[8px] border-orange-700 active:border-b-0 active:translate-y-[8px] transition-all rounded-[2.5rem] p-8 text-white flex flex-col items-center justify-center shadow-sm group"
          onClick={() => navigate(`/quiz/${yearNum}/rawak`)}
        >
          <div className="bg-orange-400 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform shadow-inner">
            <Dices size={48} className="text-white" />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-widest drop-shadow-sm">
            {language === 'bm' ? 'Cabaran Rawak' : 'Random Challenge'}
          </h2>
          <p className="text-orange-100 font-bold mt-2 tracking-wide uppercase text-sm">
            {language === 'bm' ? 'Campuran Semua Topik' : 'Mix of All Topics'}
          </p>
        </button>

        <div className="space-y-6">
          {topics.map((topic, idx) => (
            <div 
              key={idx}
              onClick={() => navigate(`/quiz/${yearNum}/${encodeURIComponent(topic)}`)}
              className="bg-white p-8 rounded-[2.5rem] border-b-[8px] border-slate-200 shadow-sm flex items-center justify-between cursor-pointer hover:-translate-y-1 hover:border-blue-300 hover:shadow-md active:translate-y-[8px] active:border-b-0 transition-all group"
            >
              <h3 className="text-2xl font-black text-blue-900 uppercase tracking-tight">{topic}</h3>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors shadow-inner">
                <Play size={28} fill="currentColor" className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
