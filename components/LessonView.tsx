import React, { useState, useEffect } from "react";
import { Screen } from "../types";
import { createGeminiInstance } from "../utils/gemini";
import { LESSONS } from "../data/lessons";

interface LessonViewProps {
  onNavigate: (screen: Screen) => void;
  lessonId: string | null;
  onComplete: (lessonId: string) => void;
}

const LessonView: React.FC<LessonViewProps> = ({ onNavigate, lessonId, onComplete }) => {
  const [phase, setPhase] = useState<'reading' | 'quiz'>('reading');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [feedback, setFeedback] = useState<{
    correct: boolean;
    message: string;
  } | null>(null);

  // Find the current lesson
  const currentLesson = LESSONS.find(l => l.id === lessonId) || LESSONS[0];

  // Reset state when lesson changes
  useEffect(() => {
    setPhase('reading');
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setFeedback(null);
  }, [lessonId]);

  const currentQuestion = currentLesson.questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / currentLesson.questions.length) * 100;

  const handleNextQuestion = () => {
    setFeedback(null);
    setSelectedOption(null);
    if (currentQuestionIndex < currentLesson.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Lesson Complete
      onComplete(currentLesson.id);
    }
  };

  const handleCheckAnswer = async () => {
    if (!selectedOption) return;
    setIsChecking(true);
    setFeedback(null);

    try {
      const ai = createGeminiInstance();
      const isCorrect = selectedOption === currentQuestion.correctAnswer;

      const prompt = `
        You are Sparky, a friendly, futuristic robot pet tutor for a digital literacy app.
        
        Context: The student is taking a lesson on "${currentLesson.title}".
        Question: "${currentQuestion.question}"
        Correct Answer: "${currentQuestion.correctAnswer}"
        The student selected: "${selectedOption}"

        Task: Provide a short (max 2 sentences), encouraging feedback message explaining why they are right or wrong. 
        Tone: Enthusiastic, supportive, tech-savvy. Use emojis.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      setFeedback({
        correct: isCorrect,
        message: response.text || "Connection interrupted! But I think you're on the right track.",
      });
    } catch (error) {
      console.error("AI Error:", error);
      // Fallback if AI fails
      setFeedback({
        correct: selectedOption === currentQuestion.correctAnswer,
        message: selectedOption === currentQuestion.correctAnswer 
          ? "Spot on! My circuits are buzzing with joy!" 
          : "Not quite, but learning is an iterative process!",
      });
    } finally {
      setIsChecking(false);
    }
  };

  if (phase === 'reading') {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white h-screen flex flex-col overflow-hidden relative">
        <header className="flex items-center gap-4 px-4 py-6 shrink-0 z-20 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-white/5">
          <button
            onClick={() => onNavigate(Screen.HOME)}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h1 className="text-xl font-bold tracking-tight">
            Unit 1: Digital Basics
          </h1>
        </header>

        <main className="flex-1 overflow-y-auto p-6 pb-32 max-w-2xl mx-auto w-full">
           {/* Virtual Pet Helper Mini */}
           <div className="flex items-center gap-3 mb-8 bg-surface-card p-3 rounded-full border border-white/5 w-fit">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-primary p-0.5">
                <img
                  alt="Robot Pet"
                  className="w-full h-full object-cover rounded-full bg-black"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrUMY_ZjUE50tOFo2iUJ29KRhV6kVfDZ03JDjX5Ajad7CMbsR02LjhU5xNYkmQ88nhlGKN3Dm1uXxY6KVOMja5oHTYMsOEyVBKvCdlW8O7cLD1hZcaepUfQTqGYUym0P719-Lp3GNBUFIoUTV_Ok6iou8lu38p9i-B8Lqy8nHZHSXx1W_NlQ2RegnLHSTob0y4Vf2v7zZck-jQTaALxNph9aRFJ-GU0d8qhsB5QqHF_w1-aGTaQHHZQAUKEJzFX0U1YRfY2ieYfQA"
                />
              </div>
              <span className="text-xs font-medium text-slate-300 pr-2">Read this carefully before we start!</span>
           </div>

           <h2 className="text-3xl font-bold text-primary mb-2">{currentLesson.title}</h2>
           <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>

           <div className="space-y-8">
             {currentLesson.sections.map((section, index) => (
               <section key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                 <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                   <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-white/60">
                     {index + 1}
                   </span>
                   {section.heading}
                 </h3>
                 <p className="text-slate-300 leading-relaxed text-base">
                   {section.text}
                 </p>
               </section>
             ))}
           </div>
           
           <div className="h-12"></div>
        </main>

        <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-dark via-background-dark to-transparent z-30 flex justify-center">
            <button 
              onClick={() => setPhase('quiz')}
              className="w-full max-w-md bg-primary hover:bg-primary-light text-white font-bold text-lg py-4 rounded-xl shadow-[0_4px_14px_rgba(140,43,238,0.4)] hover:shadow-[0_6px_20px_rgba(140,43,238,0.6)] transition-all flex items-center justify-center gap-2"
            >
              Start Challenge
              <span className="material-symbols-outlined">play_arrow</span>
            </button>
        </div>
      </div>
    );
  }

  // Quiz Phase
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white h-screen flex flex-col overflow-hidden selection:bg-primary selection:text-white relative">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 shrink-0 z-20 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-white/5">
        <button
          onClick={() => setPhase('reading')}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300"
        >
          <span className="material-symbols-outlined">text_snippet</span>
        </button>
        <div className="flex flex-col items-center flex-1 mx-2">
          <h1 className="text-sm font-bold tracking-tight mb-1 text-center truncate w-full">
            Challenge: {currentLesson.title}
          </h1>
          <div className="w-32 h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full shadow-[0_0_8px_rgba(140,43,238,0.5)] transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <span className="text-xs font-bold text-slate-400">
            {currentQuestionIndex + 1}/{currentLesson.questions.length}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col">
        {/* Virtual Pet Helper */}
        <div className="px-5 py-6 flex items-start gap-4 shrink-0">
          <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-primary p-0.5 shadow-lg shadow-primary/20">
            <div className="w-full h-full rounded-full bg-black/50 overflow-hidden relative">
              <img
                alt="Robot Pet"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrUMY_ZjUE50tOFo2iUJ29KRhV6kVfDZ03JDjX5Ajad7CMbsR02LjhU5xNYkmQ88nhlGKN3Dm1uXxY6KVOMja5oHTYMsOEyVBKvCdlW8O7cLD1hZcaepUfQTqGYUym0P719-Lp3GNBUFIoUTV_Ok6iou8lu38p9i-B8Lqy8nHZHSXx1W_NlQ2RegnLHSTob0y4Vf2v7zZck-jQTaALxNph9aRFJ-GU0d8qhsB5QqHF_w1-aGTaQHHZQAUKEJzFX0U1YRfY2ieYfQA"
              />
            </div>
          </div>
          <div className="relative bg-surface-light dark:bg-surface-dark p-4 rounded-2xl rounded-tl-none border border-slate-200 dark:border-white/10 shadow-sm max-w-[80%]">
            <div className="absolute -left-2 top-4 w-4 h-4 bg-surface-light dark:bg-surface-dark border-l border-b border-slate-200 dark:border-white/10 transform rotate-45"></div>
            <p className="text-sm font-medium leading-relaxed relative z-10 text-slate-700 dark:text-slate-200">
              {currentQuestionIndex === 0 
                ? <>Recall what you just read about {currentLesson.title}. Which answer fits best?</>
                : "Keep going! You're decoding the matrix of social media."
              }
            </p>
          </div>
        </div>

        {/* Feed Header */}
        <div className="px-5 mb-2 flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Simulation
          </h2>
          <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-bold border border-red-500/20 animate-pulse">
            LIVE
          </span>
        </div>

        {/* Simulated Feed - Static Background */}
        <div className="flex-1 bg-slate-100 dark:bg-black/20 mx-4 mb-24 rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden flex flex-col relative shadow-inner opacity-50 pointer-events-none grayscale-[50%]">
          <div className="h-12 bg-white dark:bg-surface-dark flex items-center px-4 justify-between border-b border-slate-200 dark:border-white/5 shrink-0">
            <span className="font-display font-bold text-lg italic tracking-tight">
              SocialFlow
            </span>
            <div className="flex gap-3 text-slate-400">
              <span className="material-symbols-outlined text-xl">search</span>
              <span className="material-symbols-outlined text-xl">
                notifications
              </span>
            </div>
          </div>

          <div className="overflow-y-auto flex-1 p-3 flex flex-col gap-4 no-scrollbar pb-32">
            <div className="bg-white dark:bg-[#2A2433] rounded-xl p-3 shadow-sm border border-transparent">
               <div className="w-full h-32 bg-slate-200 dark:bg-white/5 rounded animate-pulse"></div>
            </div>
             <div className="bg-white dark:bg-[#2A2433] rounded-xl p-3 shadow-sm border border-transparent">
               <div className="w-full h-32 bg-slate-200 dark:bg-white/5 rounded animate-pulse"></div>
            </div>
          </div>
          
           {/* Overlay to focus on question */}
           <div className="absolute inset-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-[2px] z-10 flex items-center justify-center p-6 text-center">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Answer Question Below
              </p>
           </div>
        </div>
      </main>

      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-30 flex justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.3)] p-6 pb-8 border-t border-white/10 glass-panel dark:!bg-[#1E1E1E]/95 backdrop-blur-xl transition-all duration-500 max-h-[80vh] overflow-y-auto">
            <div className="w-12 h-1.5 bg-slate-200 dark:bg-white/10 rounded-full mx-auto mb-6 shrink-0"></div>
            
            {feedback ? (
               <div className="animate-slide-up">
                 <div className={`flex items-center gap-3 mb-4 ${feedback.correct ? 'text-green-400' : 'text-orange-400'}`}>
                    <span className="material-symbols-outlined text-3xl filled">
                      {feedback.correct ? 'check_circle' : 'error'}
                    </span>
                    <h3 className="text-xl font-bold">
                      {feedback.correct ? 'Correct!' : 'Not quite...'}
                    </h3>
                 </div>
                 <div className="bg-surface-dark/50 p-4 rounded-xl border border-white/5 mb-6">
                    <p className="text-slate-200 text-sm leading-relaxed">
                      <span className="font-bold text-primary">Sparky says: </span>
                      "{feedback.message}"
                    </p>
                 </div>
                 <button 
                  onClick={handleNextQuestion}
                  className="w-full bg-primary text-white font-bold text-base py-4 rounded-xl shadow-[0_4px_14px_rgba(140,43,238,0.4)] hover:shadow-[0_6px_20px_rgba(140,43,238,0.6)] transition-all flex items-center justify-center gap-2"
                 >
                   {currentQuestionIndex < currentLesson.questions.length - 1 ? 'Next Question' : 'Finish Lesson'}
                   <span className="material-symbols-outlined">arrow_forward</span>
                 </button>
               </div>
            ) : (
              <div className="animate-slide-up">
                <div className="mb-6">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
                    Question {currentQuestionIndex + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    {currentQuestion.question}
                  </h3>
                </div>
                <div className="flex flex-col gap-3 mb-6">
                  {currentQuestion.options.map((option) => (
                    <label
                      key={option}
                      className={`relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all group overflow-hidden ${
                        selectedOption === option
                          ? "border-primary bg-primary/10"
                          : "border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10"
                      }`}
                      onClick={() => setSelectedOption(option)}
                    >
                      <input
                        className="peer sr-only"
                        type="radio"
                        name={`quiz-${currentQuestionIndex}`}
                        checked={selectedOption === option}
                        readOnly
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 shrink-0 z-10 transition-all ${
                          selectedOption === option
                            ? "border-primary border-[6px]"
                            : "border-slate-400"
                        }`}
                      ></div>
                      <span
                        className={`text-sm font-medium z-10 ${
                          selectedOption === option
                            ? "text-primary"
                            : "text-slate-700 dark:text-slate-200"
                        }`}
                      >
                        {option}
                      </span>
                      {selectedOption === option && (
                        <div className="absolute right-4 text-primary animate-bounce">
                          <span className="material-symbols-outlined filled">
                            check_circle
                          </span>
                        </div>
                      )}
                    </label>
                  ))}
                </div>
                <button 
                  onClick={handleCheckAnswer}
                  disabled={isChecking || !selectedOption}
                  className="w-full bg-primary disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-base py-4 rounded-xl shadow-[0_4px_14px_rgba(140,43,238,0.4)] hover:shadow-[0_6px_20px_rgba(140,43,238,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  {isChecking ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Sparky is thinking...
                    </>
                  ) : (
                    <>
                      Check Answer
                      <span className="material-symbols-outlined text-xl">
                        arrow_forward
                      </span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonView;