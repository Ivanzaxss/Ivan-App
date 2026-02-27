import React, { useState, useEffect } from 'react';
import HomeView from './components/HomeView';
import LessonView from './components/LessonView';
import PetOasisView from './components/PetOasisView';
import { Screen } from './types';
import { LESSONS } from './data/lessons';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [unlockedLessons, setUnlockedLessons] = useState<string[]>(['algorithms']); // Start with first lesson unlocked

  const handleNavigate = (screen: Screen, lessonId?: string) => {
    if (screen === Screen.LESSON && lessonId) {
      setCurrentLessonId(lessonId);
    }
    setCurrentScreen(screen);
  };

  const handleLessonComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      const newCompleted = [...completedLessons, lessonId];
      setCompletedLessons(newCompleted);
      
      // Unlock next lesson logic
      const currentIndex = LESSONS.findIndex(l => l.id === lessonId);
      if (currentIndex !== -1 && currentIndex < LESSONS.length - 1) {
        const nextLessonId = LESSONS[currentIndex + 1].id;
        if (!unlockedLessons.includes(nextLessonId)) {
          setUnlockedLessons(prev => [...prev, nextLessonId]);
        }
      }
    }
    setCurrentScreen(Screen.HOME);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return (
          <HomeView 
            onNavigate={handleNavigate} 
            completedLessons={completedLessons}
            unlockedLessons={unlockedLessons}
          />
        );
      case Screen.LESSON:
        return (
          <LessonView 
            onNavigate={handleNavigate} 
            lessonId={currentLessonId}
            onComplete={handleLessonComplete}
          />
        );
      case Screen.PET_OASIS:
        return (
          <PetOasisView 
            onNavigate={(screen) => handleNavigate(screen)} 
            completedLessonsCount={completedLessons.length}
            totalLessonsCount={LESSONS.length}
          />
        );
      default:
        return (
          <HomeView 
            onNavigate={handleNavigate} 
            completedLessons={completedLessons}
            unlockedLessons={unlockedLessons}
          />
        );
    }
  };

  return (
    <div className="app-container">
      {renderScreen()}
    </div>
  );
};

export default App;