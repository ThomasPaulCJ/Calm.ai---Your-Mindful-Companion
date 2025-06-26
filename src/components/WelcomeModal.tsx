import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';

interface WelcomeModalProps {
  onComplete: (name: string) => void;
  isDarkMode?: boolean;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ onComplete, isDarkMode = false }) => {
  const [name, setName] = useState('');
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onComplete(name.trim());
    }
  };

  const handleSkip = () => {
    onComplete('');
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`max-w-md w-full rounded-3xl p-8 shadow-2xl border-2 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600' 
          : 'bg-gradient-to-br from-white to-purple-50 border-purple-200'
      }`}>
        {step === 1 && (
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg overflow-hidden bg-white">
              <img 
                src="/c.png" 
                alt="Calm.ai Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <h1 className={`text-3xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Welcome to Calm.ai
            </h1>
            
            <p className={`text-lg mb-2 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
              Your mindful companion 🧠💙
            </p>
            
            <p className={`text-sm mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm here to provide you with a safe, compassionate space where your feelings matter and you're never alone. 
              Together, we'll navigate whatever you're going through with understanding and care.
            </p>
            
            <button
              onClick={() => setStep(2)}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 px-6 rounded-xl font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              Let's Begin Your Journey
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg overflow-hidden bg-white">
                <img 
                  src="/c.png" 
                  alt="Calm.ai" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <h2 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                What should I call you?
              </h2>
              
              <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'd love to know your name so I can personalize our conversations and make you feel more at home here. 
                You can always change this later in your preferences.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name..."
                  className={`w-full px-4 py-4 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-center text-lg ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-200 text-gray-800 placeholder-gray-500'
                  }`}
                  autoFocus
                />
              </div>
              
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={!name.trim()}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                >
                  Continue with {name.trim() || 'Name'}
                </button>
                
                <button
                  type="button"
                  onClick={handleSkip}
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                    isDarkMode 
                      ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Skip for now
                </button>
              </div>
            </form>
            
            <p className={`text-xs text-center mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              💙 Your privacy matters to me. Your name is stored locally and never shared.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};