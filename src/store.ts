import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ChildProfile, ParentUser, QuizAttempt } from './types';

interface AppState {
  parentUser: ParentUser | null;
  children: ChildProfile[];
  activeChildId: string | null;
  language: 'bm' | 'en';
  
  // Actions
  loginParent: (email: string) => void;
  logoutParent: () => void;
  upgradeToPremium: () => void;
  addChild: (child: Omit<ChildProfile, 'id' | 'xp' | 'streak' | 'lastActive' | 'badges' | 'history'>) => void;
  
  loginChild: (pin: string) => boolean;
  logoutChild: () => void;
  addQuizResult: (childId: string, result: Omit<QuizAttempt, 'id'>) => void;
  
  setLanguage: (lang: 'bm' | 'en') => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      parentUser: null,
      children: [],
      activeChildId: null,
      language: 'bm',

      loginParent: (email) => {
        set({
          parentUser: {
            id: 'parent-' + Date.now(),
            email,
            isPremium: false,
            role: 'parent',
          },
        });
      },
      
      logoutParent: () => {
        set({ parentUser: null });
      },

      upgradeToPremium: () => {
        const { parentUser } = get();
        if (parentUser) {
          set({ parentUser: { ...parentUser, isPremium: true } });
        }
      },

      addChild: (childData) => {
        set((state) => ({
          children: [
            ...state.children,
            {
              ...childData,
              id: 'child-' + Date.now(),
              xp: 0,
              streak: 0,
              lastActive: null,
              badges: [],
              history: [],
            },
          ],
        }));
      },

      loginChild: (pin) => {
        const { children } = get();
        const child = children.find((c) => c.pin === pin);
        if (child) {
          set({ activeChildId: child.id });
          return true;
        }
        return false;
      },

      logoutChild: () => {
        set({ activeChildId: null });
      },

      addQuizResult: (childId, result) => {
        set((state) => {
          const children = state.children.map((child) => {
            if (child.id === childId) {
              // Calculate streak
              const today = new Date().toISOString().split('T')[0];
              const lastActiveDate = child.lastActive ? child.lastActive.split('T')[0] : null;
              
              let newStreak = child.streak;
              if (lastActiveDate !== today) {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                if (lastActiveDate === yesterday.toISOString().split('T')[0]) {
                  newStreak += 1;
                } else {
                  newStreak = 1;
                }
              }

              // Calculate XP
              const earnedXp = result.score * 10;

              return {
                ...child,
                xp: child.xp + earnedXp,
                streak: newStreak,
                lastActive: new Date().toISOString(),
                history: [
                  ...child.history,
                  { ...result, id: 'attempt-' + Date.now() },
                ],
              };
            }
            return child;
          });
          return { children };
        });
      },
      
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'bijak-matematik-storage',
    }
  )
);
