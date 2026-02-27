import React, { useState } from "react";
import { Screen } from "../types";
import { LESSONS } from "../data/lessons";

interface HomeViewProps {
  onNavigate: (screen: Screen, lessonId?: string) => void;
  completedLessons: string[];
  unlockedLessons: string[];
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate, completedLessons, unlockedLessons }) => {
  const [showBonusModal, setShowBonusModal] = useState(false);
  const isBonusUnlocked = completedLessons.length === LESSONS.length;

  const getPositionClass = (index: number) => {
    // 0: Center, 1: Left, 2: Right, 3: Center (or Left/Right depending on path)
    // Matching the previous hardcoded layout:
    // Node 1 (Index 0): Center
    // Node 2 (Index 1): Left (-ml-16)
    // Node 3 (Index 2): Right (ml-16)
    // Node 4 (Index 3): Center (no margin)
    switch (index % 4) {
      case 0: return "";
      case 1: return "-ml-16";
      case 2: return "ml-16";
      case 3: return ""; // Back to center
      default: return "";
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen pb-24 relative overflow-hidden">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5 px-4 py-3 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Avatar */}
          <div className="flex items-center gap-3">
            <div className="relative group cursor-pointer" onClick={() => alert("Profile Settings: Coming Soon!")}>
              <div
                className="size-10 rounded-full bg-cover bg-center border-2 border-white/10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIHs7pPFpAz6HGaMjfV_7-Wm4GY7XJMOZ48Cq3fSCbGmV8fF9ofBkdjy_FOZoN8Zty4Kd_PnC5ysdwNs85ASe9v0jURcvgf08igOlfnSgp0U1HeQEbz1ysHcTHOoiD00wlBCLkuMb8qnqLYl7Dcav_dnFmxduZwlJ4gYDzIR4gt0nr9K6ZGBxUPmCmfqJTQMBYwB6a0Pf2smjg6af64v-dkeW_z7vbVkagLZD3_qVYVRVzLZKjVdlOxpPckNemGypSjFmCEcGHCNU")',
                }}
              ></div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 size-3 rounded-full border-2 border-[#121212]"></div>
            </div>
          </div>
          {/* Stats */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-red-500/10 px-3 py-1.5 rounded-full border border-red-500/20">
              <span className="material-symbols-outlined text-red-500 text-[20px] font-variation-settings-'FILL'1">
                local_fire_department
              </span>
              <span className="text-red-500 font-bold text-sm">{completedLessons.length * 12}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
              <span className="material-symbols-outlined text-blue-400 text-[20px] font-variation-settings-'FILL'1">
                diamond
              </span>
              <span className="text-blue-400 font-bold text-sm">{completedLessons.length * 150}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="p-4 flex flex-col gap-6">
        {/* Pet Status Card */}
        <section className="@container">
          <div className="relative overflow-hidden rounded-2xl bg-surface-card border border-white/5 shadow-xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="flex flex-col sm:flex-row">
              {/* Pet Visual */}
              <div className="w-full h-48 relative bg-gradient-to-br from-[#2a2435] to-[#1a1620] flex items-center justify-center">
                <div className="relative size-32 animate-bounce-slow">
                  <img
                    className="w-full h-full object-cover rounded-xl shadow-lg border-2 border-primary/30"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjqpiG2cRPKV1tmlFTmWD49XpxM2MSmMRxQ2c989G9qBJhoCskn5xv3scdNSPPb5iSQW7jxzQDvRaHVP0LuovyT_j-gBBi0-rj8iNeMEczoynUrgc5fBhKgm0PPFzWZCJXwDw-WbYw_XimEgkylRKPkqLofIgPQEWcKvp8FcaIffbY4xy8COe0hbiFhg4cuekiwbKlmVyNMWbkJNevJ8F-9JBUAg59iDnmDxzYHxIVjsw1mSbJaK2Kq1JYheTJdx_eH72YWvLr53o"
                    alt="Pet"
                  />
                  <div className="absolute -top-2 -right-2 bg-green-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-surface-card">
                    {Math.round((completedLessons.length / LESSONS.length) * 100)}%
                  </div>
                </div>
              </div>
              {/* Pet Info */}
              <div className="p-5 flex flex-col justify-center gap-3 w-full z-10">
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {completedLessons.length === LESSONS.length ? "Sparky is Fully Evolved!" : "Sparky is Evolving"}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Complete lessons to help Sparky reach 100%.
                  </p>
                </div>
                {/* Battery Bar */}
                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${(completedLessons.length / LESSONS.length) * 100}%` }}
                  ></div>
                </div>
                <button
                  onClick={() => onNavigate(Screen.PET_OASIS)}
                  className="mt-2 w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white text-sm font-bold py-2.5 px-4 rounded-xl transition-colors active:scale-95 transform"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    smart_toy
                  </span>
                  Visit Pet Oasis
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="mt-2 relative">
          <div className="flex items-center justify-between mb-8 px-2">
            <div>
              <h2 className="text-lg font-bold text-white">
                Unit 1: Digital Basics
              </h2>
              <p className="text-sm text-gray-400">Master the fundamentals of AI</p>
            </div>
            <button className="p-2 rounded-full hover:bg-white/5 text-gray-400 transition-colors">
              <span className="material-symbols-outlined">info</span>
            </button>
          </div>

          <div className="relative flex flex-col gap-8 pb-10">
            {/* Connector Line SVG */}
            <svg
              className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-[90%] z-0 opacity-20 pointer-events-none"
              viewBox="0 0 100 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 0 C 50 50, 20 80, 20 150 C 20 220, 80 250, 80 320 C 80 390, 50 420, 50 490 C 50 560, 20 590, 20 660 C 20 730, 50 750, 50 800"
                stroke="#8c2bee"
                strokeDasharray="10 10"
                strokeLinecap="round"
                strokeWidth="4"
              ></path>
            </svg>

            {LESSONS.map((lesson, index) => {
              const isCompleted = completedLessons.includes(lesson.id);
              const isUnlocked = unlockedLessons.includes(lesson.id);
              const isNext = isUnlocked && !isCompleted;
              const positionClass = getPositionClass(index);

              return (
                <div key={lesson.id} className={`relative z-10 flex flex-col items-center gap-2 ${positionClass}`}>
                  {isCompleted ? (
                    // Completed State
                    <button 
                      onClick={() => onNavigate(Screen.LESSON, lesson.id)}
                      className="group relative size-20 rounded-full bg-[#2a2435] border-4 border-[#8c2bee] flex items-center justify-center shadow-[0_4px_0_#5b1a9e] active:translate-y-[4px] active:shadow-none transition-all hover:scale-105"
                    >
                      <span className="material-symbols-outlined text-[#8c2bee] text-[32px] font-variation-settings-'FILL'1">
                        check_circle
                      </span>
                      <div className="absolute -bottom-1 -right-1 bg-[#8c2bee] text-white rounded-full p-1 border-4 border-background-dark flex items-center justify-center">
                        <span className="material-symbols-outlined text-[16px] font-bold">
                          replay
                        </span>
                      </div>
                    </button>
                  ) : isNext ? (
                    // Next/Active State
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-primary blur-md animate-pulse"></div>
                      <button 
                        onClick={() => onNavigate(Screen.LESSON, lesson.id)}
                        className="relative size-24 rounded-full bg-primary flex items-center justify-center shadow-[0_0_25px_rgba(140,43,238,0.6)] animate-pulse-glow z-20 border-4 border-white/20 hover:scale-105 transition-transform"
                      >
                        <span className="material-symbols-outlined text-white text-[40px] font-variation-settings-'FILL'1">
                          play_arrow
                        </span>
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-black uppercase tracking-wider py-1 px-3 rounded-lg shadow-lg whitespace-nowrap animate-bounce">
                          Start
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                        </div>
                      </button>
                    </div>
                  ) : (
                    // Locked State
                    <button 
                      onClick={() => alert("Complete previous lessons to unlock this one!")}
                      className="group relative size-20 rounded-full bg-[#211c27] border-4 border-[#302839] flex items-center justify-center shadow-[0_4px_0_#1a1620] cursor-not-allowed grayscale opacity-70"
                    >
                      <span className="material-symbols-outlined text-gray-500 text-[32px]">
                        lock
                      </span>
                    </button>
                  )}
                  
                  <div className="text-center mt-1">
                    <span className={`text-sm font-bold ${isUnlocked ? 'text-white' : 'text-gray-500'}`}>
                      {lesson.title}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Bonus Chest */}
            <div className="relative z-10 flex flex-col items-center gap-2 mt-4">
              <button 
                onClick={() => isBonusUnlocked ? setShowBonusModal(true) : alert("Complete all lessons to unlock the bonus chest!")}
                className={`group relative size-16 rounded-2xl flex items-center justify-center transition-all ${
                  isBonusUnlocked 
                    ? "bg-gradient-to-b from-yellow-400 to-orange-500 shadow-[0_4px_0_#b45309] active:translate-y-[4px] active:shadow-none animate-bounce" 
                    : "bg-gray-800 border-4 border-gray-700 grayscale opacity-50 cursor-not-allowed"
                }`}
              >
                <span className="material-symbols-outlined text-white text-[28px] drop-shadow-md">
                  inventory_2
                </span>
              </button>
              <div className="text-center">
                <span className={`text-xs font-bold uppercase tracking-wider ${isBonusUnlocked ? 'text-yellow-500' : 'text-gray-600'}`}>
                  Bonus Chest
                </span>
              </div>
            </div>
          </div>
        </section>
        
        <div className="h-16"></div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[200px] bg-[#211c27]/90 dark:bg-[#211c27]/95 backdrop-blur-lg border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-50 p-2 flex justify-center">
        <button className="flex flex-col items-center justify-center gap-0.5 w-16 h-12 rounded-full bg-primary/20 text-primary transition-all">
          <span className="material-symbols-outlined text-[24px] font-variation-settings-'FILL'1">
            home
          </span>
        </button>
      </nav>

      {/* Bonus Modal */}
      {showBonusModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface-card border-2 border-yellow-500 rounded-3xl p-8 max-w-sm w-full text-center relative shadow-[0_0_50px_rgba(234,179,8,0.3)] animate-scale-up">
            <button 
              onClick={() => setShowBonusModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <div className="mb-6 relative flex justify-center">
              <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full animate-pulse"></div>
              <span className="material-symbols-outlined text-yellow-500 text-[64px] relative z-10 drop-shadow-lg">
                emoji_events
              </span>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-2">Congratulations!</h2>
            <p className="text-gray-300 mb-6">
              You've completed the Digital Basics Unit! You are now a certified Digital Citizen.
            </p>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6">
              <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-1">Reward Unlocked</p>
              <p className="text-white font-medium">Golden Cyber-Pup Skin</p>
            </div>
            
            <button 
              onClick={() => setShowBonusModal(false)}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold py-3 rounded-xl transition-all transform active:scale-95 shadow-lg"
            >
              Claim Reward
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeView;