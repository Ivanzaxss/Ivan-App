import React, { useState, useRef, useEffect } from "react";
import { Screen } from "../types";
import { createGeminiInstance } from "../utils/gemini";

interface PetOasisViewProps {
  onNavigate: (screen: Screen) => void;
  completedLessonsCount: number;
  totalLessonsCount: number;
}

interface Message {
  role: "user" | "model";
  text: string;
}

const PetOasisView: React.FC<PetOasisViewProps> = ({ onNavigate, completedLessonsCount, totalLessonsCount }) => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Woof! I'm Sparky v2.0. Ready to learn something new?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const progressPercentage = Math.round((completedLessonsCount / totalLessonsCount) * 100);

  useEffect(() => {
    if (showChat && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, showChat]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setIsTyping(true);

    try {
      const ai = createGeminiInstance();
      // In a real app, we'd maintain chat history. For simplicity/Flash-Lite usage:
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `
          You are Sparky, a digital cyber-pup companion in a learning app. 
          Your personality: Loyal, energetic, slightly glitchy (in a cute way), and very encouraging.
          User said: "${userMsg}"
          Respond as Sparky (keep it under 40 words).
        `,
      });

      setMessages(prev => [...prev, { role: "model", text: response.text || "Woof? (Connection error)" }]);
    } catch (error) {
       console.error("Chat Error:", error);
       setMessages(prev => [...prev, { role: "model", text: "*Sad robot noises* I couldn't reach the server. Please check your API key configuration." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-hidden h-screen w-full flex flex-col items-center relative">
      <div className="w-full h-full max-w-md flex flex-col shadow-2xl overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-64 h-64 bg-[#00ff9d]/10 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-6 pt-8 pb-4">
          <button 
             onClick={() => onNavigate(Screen.HOME)}
             className="flex items-center gap-2 text-white/80 hover:text-white"
          >
             <span className="material-symbols-outlined">arrow_back</span>
             <h1 className="text-xl font-bold tracking-tight">Pet Oasis</h1>
          </button>
          
          <div className="flex items-center gap-1.5 bg-surface-dark/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full shadow-lg">
            <span className="material-symbols-outlined text-primary text-[18px]">
              bolt
            </span>
            <span className="text-sm font-semibold text-white">
              {completedLessonsCount * 100} Neural Points
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto no-scrollbar relative z-10 pb-24 flex flex-col items-center w-full px-6">
          {/* Progress Stats */}
          <div className="w-full flex flex-col items-center justify-center mt-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-orange-500 fill-1">
                school
              </span>
              <h2 className="text-2xl font-bold tracking-tight">
                Progress: {completedLessonsCount}/{totalLessonsCount} Lessons
              </h2>
            </div>
            <div className="flex gap-3">
              {Array.from({ length: totalLessonsCount }).map((_, i) => (
                <div 
                  key={i} 
                  className={`h-3 w-3 rounded-full ${i < completedLessonsCount ? 'bg-primary shadow-neon' : 'bg-surface-dark border border-white/10'}`}
                ></div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2 font-medium">
              {completedLessonsCount === totalLessonsCount ? "Max Level Reached!" : `${totalLessonsCount - completedLessonsCount} more to fully evolve!`}
            </p>
          </div>

          {/* Pet Visual */}
          <div className="relative w-full aspect-square max-h-[340px] mb-6 group cursor-pointer" onClick={() => setShowChat(true)}>
            <div className="absolute inset-4 bg-gradient-to-t from-primary/30 to-transparent rounded-full blur-xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/5 bg-surface-dark/30 backdrop-blur-sm shadow-neon-strong animate-float flex flex-col">
              <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold tracking-wider text-neon-green border border-neon-green/30 uppercase">
                {progressPercentage === 100 ? "Fully Evolved" : "Evolving"}
              </div>
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqTTqgzRN0LN-R6gtUxwfeG8ACYjFDPZUMkx4h_-SxVwbZtLtVyhvcksDv-JJvVXNoBYLnt0biCJuN1zk4f45ASFhIS47EvoHBSbVOJhqH2nqxWnwA9roNmpCQPtd4F_rsiMWD6swUmxGr35CYeXx8iN-xeNW9YPiRazgNhJIvpdOCrvLELAp8tKkGlKUtz3JpL7Hi6abFfv3NrNFLLNBKe8UkqaESW4Hq8RC1h-XBRM2_EG25c_jff3nVJfD3yJUc8FS8yZbd4Sw')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
                  Cyber-Pup v2.0
                </h3>
                <p className="text-sm text-gray-300">
                  {progressPercentage === 100 ? "Stage 3 • Master" : "Stage 2 • Learning"}
                </p>
                <div className="mt-2 inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-sm">chat</span> Tap to chat
                </div>
              </div>
            </div>
          </div>

          {/* Evolution Meter */}
          <div className="w-full bg-surface-dark border border-white/5 p-5 rounded-2xl mb-6 shadow-lg">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-semibold text-white">
                Evolution Progress
              </span>
              <span className="text-xs font-bold text-primary">{progressPercentage}%</span>
            </div>
            <div className="relative h-4 w-full bg-background-dark rounded-full overflow-hidden border border-white/5">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-purple-400 rounded-full shadow-[0_0_10px_rgba(140,43,238,0.7)] transition-all duration-1000"
                style={{ width: `${progressPercentage}%` }}
              ></div>
              {/* Pattern */}
              <div
                className="absolute top-0 left-0 h-full w-full opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)",
                  backgroundSize: "1rem 1rem",
                }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                info
              </span>
              {progressPercentage === 100 ? "Maximum potential reached!" : "Complete lessons to evolve Sparky!"}
            </p>
          </div>

          {/* Actions */}
          <div className="w-full">
            <button 
              onClick={() => setShowChat(true)}
              className="w-full flex items-center justify-center gap-3 p-4 bg-surface-dark hover:bg-surface-dark/80 active:scale-95 transition-all rounded-2xl border border-white/5 group"
            >
              <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-white group-hover:text-primary">
                  chat_bubble
                </span>
              </div>
              <span className="text-sm font-semibold">Chat with Sparky</span>
            </button>
          </div>

          <div className="h-8"></div>
        </main>

        {/* Bottom Nav */}
        <nav className="absolute bottom-0 left-0 w-full bg-surface-dark/90 backdrop-blur-xl border-t border-white/10 px-6 py-4 pb-8 z-50 flex justify-center">
           <button
             onClick={() => onNavigate(Screen.HOME)}
             className="flex flex-col items-center justify-center gap-0.5 w-16 h-12 rounded-full bg-primary/20 text-primary transition-all"
           >
             <span className="material-symbols-outlined text-[24px] font-variation-settings-'FILL'1">
               home
             </span>
           </button>
        </nav>

        {/* Chat Overlay */}
        {showChat && (
          <div className="absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-end">
            <div className="w-full h-[85%] bg-[#1E1E1E] rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up border-t border-white/10">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/5 bg-[#252525]">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-primary p-0.5">
                     <img 
                       src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqTTqgzRN0LN-R6gtUxwfeG8ACYjFDPZUMkx4h_-SxVwbZtLtVyhvcksDv-JJvVXNoBYLnt0biCJuN1zk4f45ASFhIS47EvoHBSbVOJhqH2nqxWnwA9roNmpCQPtd4F_rsiMWD6swUmxGr35CYeXx8iN-xeNW9YPiRazgNhJIvpdOCrvLELAp8tKkGlKUtz3JpL7Hi6abFfv3NrNFLLNBKe8UkqaESW4Hq8RC1h-XBRM2_EG25c_jff3nVJfD3yJUc8FS8yZbd4Sw" 
                       className="w-full h-full rounded-full object-cover" 
                       alt="Sparky"
                     />
                   </div>
                   <div>
                     <h3 className="font-bold text-white">Sparky v2.0</h3>
                     <span className="text-xs text-neon-green flex items-center gap-1">
                       <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"></span> Online
                     </span>
                   </div>
                </div>
                <button 
                  onClick={() => setShowChat(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div 
                      className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-primary text-white rounded-br-none' 
                          : 'bg-surface-card border border-white/10 text-gray-200 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                   <div className="flex justify-start">
                     <div className="bg-surface-card border border-white/10 p-3 rounded-2xl rounded-bl-none flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                     </div>
                   </div>
                )}
                <div ref={chatEndRef}></div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-white/5 bg-[#252525]">
                 <div className="flex gap-2">
                   <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask Sparky anything..."
                      className="flex-1 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-500"
                   />
                   <button 
                      onClick={handleSend}
                      disabled={!input.trim() || isTyping}
                      className="bg-primary hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-colors flex items-center justify-center"
                   >
                     <span className="material-symbols-outlined">send</span>
                   </button>
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetOasisView;