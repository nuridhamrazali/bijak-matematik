import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import bgImage from '../../assets/images/kids_learning_math_bg_1784429493113.jpg';

export default function ParentLogin() {
  const navigate = useNavigate();
  const { loginParent, language } = useAppStore();
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      loginParent(email);
      navigate('/parent-dashboard');
    }
  };

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
      
      <div className="w-full max-w-md relative z-10">
        <Button variant="ghost" className="mb-6 bg-white border-b-[4px] border-slate-200" onClick={() => navigate('/')}>
          <ArrowLeft className="mr-2" /> {language === 'bm' ? 'Kembali' : 'Back'}
        </Button>
        
        <Card>
          <h2 className="text-3xl font-black text-blue-900 mb-2 uppercase tracking-tight">
            {language === 'bm' ? 'Log Masuk Ibu Bapa / Guru' : 'Parent / Teacher Login'}
          </h2>
          <p className="text-blue-600 font-bold mb-8">
            {language === 'bm' ? 'Urus profil anak dan pantau kemajuan.' : 'Manage child profiles and track progress.'}
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-blue-900 uppercase tracking-widest mb-2">Email</label>
              <input 
                type="email" 
                required
                className="w-full px-6 py-4 rounded-2xl border-[4px] border-slate-100 focus:border-blue-500 focus:ring-0 outline-none transition-colors text-xl font-bold text-slate-700 bg-slate-50"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <Button type="submit" size="lg" fullWidth>
              {language === 'bm' ? 'Teruskan' : 'Continue'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
