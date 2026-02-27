export enum Screen {
  HOME = 'HOME',
  LESSON = 'LESSON',
  PET_OASIS = 'PET_OASIS'
}

export interface Post {
  id: string;
  author: string;
  handle: string;
  avatar: string;
  image?: string;
  content?: string;
  type: 'organic' | 'suggested' | 'sponsored';
  title?: string;
  views?: string;
  isFollowing?: boolean;
}

export interface LessonSection {
  heading: string;
  text: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Lesson {
  id: string;
  title: string;
  sections: LessonSection[];
  questions: Question[];
}

export type LessonStatus = 'locked' | 'unlocked' | 'completed';

export interface UserProgress {
  completedLessons: string[];
  currentLessonId: string;
  unlockedLessons: string[];
}
