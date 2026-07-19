import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { LogOut, Plus, Star, Award, Crown, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const { parentUser, children, addChild, logoutParent, language, upgradeToPremium } = useAppStore();
  const [showAddChild, setShowAddChild] = useState(false);
  const [newChild, setNewChild] = useState({ name: '', pin: '', year: 1 });

  if (!parentUser) {
    navigate('/parent-login');
    return null;
  }

  const handleAddChild = (e: React.FormEvent) => {
    e.preventDefault();
    if (newChild.name && newChild.pin.length === 4) {
      addChild({ ...newChild, parentId: parentUser.id });
      setShowAddChild(false);
      setNewChild({ name: '', pin: '', year: 1 });
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-8 rounded-[2.5rem] border-b-[8px] border-slate-200 shadow-sm">
          <div>
            <h1 className="text-3xl font-black text-blue-900 uppercase tracking-tight">
              {language === 'bm' ? 'Papan Pemuka' : 'Dashboard'}
            </h1>
            <p className="text-blue-600 font-bold">{parentUser.email}</p>
          </div>
          <Button variant="ghost" className="bg-red-50 hover:bg-red-100 text-red-500" onClick={() => { logoutParent(); navigate('/'); }}>
            <LogOut size={20} className="mr-2" /> {language === 'bm' ? 'Keluar' : 'Logout'}
          </Button>
        </div>

        {/* Premium Banner */}
        {!parentUser.isPremium && (
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2 flex items-center">
                <Crown className="mr-2 text-yellow-300" /> Bijak Matematik Premium
              </h2>
              <ul className="space-y-1 mb-4 text-purple-100">
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> {language === 'bm' ? 'Akses semua Tahun (1-6)' : 'Access all Years (1-6)'}</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> {language === 'bm' ? 'Tiada Had Kuiz' : 'Unlimited Quizzes'}</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> {language === 'bm' ? 'Laporan Prestasi Terperinci' : 'Detailed Progress Reports'}</li>
              </ul>
            </div>
            <Button className="bg-white text-purple-600 hover:bg-slate-100 border-none whitespace-nowrap" size="lg" onClick={upgradeToPremium}>
              {language === 'bm' ? 'Naik Taraf Sekarang (RM99/thn)' : 'Upgrade Now (RM99/yr)'}
            </Button>
          </div>
        )}

        {/* Children List */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-blue-900 uppercase tracking-tight drop-shadow-sm">
              {language === 'bm' ? 'Profil Murid' : 'Student Profiles'}
            </h2>
            {children.length < (parentUser.isPremium ? 5 : 1) && (
              <Button size="sm" onClick={() => setShowAddChild(true)}>
                <Plus size={16} className="mr-1" /> {language === 'bm' ? 'Tambah Profil' : 'Add Profile'}
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {children.map(child => (
              <Card key={child.id} className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-blue-900">{child.name}</h3>
                    <p className="text-blue-600 font-bold uppercase tracking-wider text-sm">{language === 'bm' ? `Tahun ${child.year}` : `Year ${child.year}`}</p>
                  </div>
                  <div className="bg-slate-100 px-4 py-2 rounded-xl text-lg font-black text-slate-600 border-2 border-slate-200">
                    PIN: {child.pin}
                  </div>
                </div>
                
                <div className="flex gap-4 mt-auto pt-4 border-t-2 border-slate-100">
                  <div className="flex items-center text-orange-500 font-black">
                    <Star size={18} className="mr-1" /> {child.xp} <span className="text-[10px] ml-1 mt-0.5 tracking-widest uppercase">XP</span>
                  </div>
                  <div className="flex items-center text-emerald-500 font-black">
                    <Award size={18} className="mr-1" /> {child.history.length} <span className="text-[10px] ml-1 mt-0.5 tracking-widest uppercase">{language === 'bm' ? 'Kuiz' : 'Quizzes'}</span>
                  </div>
                </div>
              </Card>
            ))}

            {children.length === 0 && !showAddChild && (
              <div className="col-span-full bg-slate-100 border-2 border-dashed border-slate-300 rounded-3xl p-8 text-center text-slate-500">
                {language === 'bm' ? 'Belum ada profil murid.' : 'No student profiles yet.'}
              </div>
            )}
          </div>
        </div>

        {/* Add Child Form */}
        {showAddChild && (
          <Card className="border-4 border-blue-400">
            <h3 className="text-2xl font-black text-blue-900 mb-6 uppercase tracking-tight">
              {language === 'bm' ? 'Tambah Profil Baru' : 'Add New Profile'}
            </h3>
            <form onSubmit={handleAddChild} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{language === 'bm' ? 'Nama Panggilan' : 'Nickname'}</label>
                  <input 
                    type="text" required
                    className="w-full px-4 py-3 rounded-xl border-4 border-slate-100 focus:border-blue-500 bg-slate-50 font-bold text-slate-700 outline-none"
                    value={newChild.name} onChange={e => setNewChild({...newChild, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{language === 'bm' ? 'Tahun (1-6)' : 'Year (1-6)'}</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border-4 border-slate-100 focus:border-blue-500 bg-slate-50 font-bold text-slate-700 outline-none"
                    value={newChild.year} onChange={e => setNewChild({...newChild, year: parseInt(e.target.value)})}
                  >
                    {[1,2,3,4,5,6].map(y => <option key={y} value={y}>Tahun {y}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{language === 'bm' ? 'PIN 4-Digit' : '4-Digit PIN'}</label>
                  <input 
                    type="text" required pattern="\d{4}" maxLength={4}
                    className="w-full px-4 py-3 rounded-xl border-4 border-slate-100 focus:border-blue-500 bg-slate-50 font-black text-slate-700 text-center tracking-widest outline-none"
                    value={newChild.pin} onChange={e => setNewChild({...newChild, pin: e.target.value.replace(/\D/g, '')})}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="ghost" onClick={() => setShowAddChild(false)}>{language === 'bm' ? 'Batal' : 'Cancel'}</Button>
                <Button type="submit">{language === 'bm' ? 'Simpan' : 'Save'}</Button>
              </div>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
}
