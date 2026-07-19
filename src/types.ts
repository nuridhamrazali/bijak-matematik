export type QuestionType = 'multiple_choice' | 'grid_tap' | 'fill_blank' | 'word_problem';

export interface Question {
  id: string;
  tahun: number;
  topik: string;
  subtopik: string;
  jenis_soalan: QuestionType;
  soalan: string | any; // Could be a string or a more complex object for grid/fill_blank
  image?: string;
  pilihan?: string[]; // For multiple choice
  jawapan_betul: string | string[]; // Can be array for multiple blanks
  penjelasan: string;
  tahap_kesukaran: 1 | 2 | 3;
}

export interface ChildProfile {
  id: string;
  parentId: string;
  name: string;
  pin: string; // 4-digit PIN
  year: number; // 1-6
  xp: number;
  streak: number;
  lastActive: string | null; // ISO Date string
  badges: string[];
  history: QuizAttempt[];
}

export interface QuizAttempt {
  id: string;
  date: string;
  tahun: number;
  topik: string;
  score: number;
  totalQuestions: number;
  timeSpentSeconds: number;
  weakestSubtopic: string | null;
}

export interface ParentUser {
  id: string;
  email: string;
  isPremium: boolean;
  role: 'parent' | 'teacher';
}
