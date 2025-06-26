import React from 'react';
import { ConversationContext } from '../types';
import { BarChart3, TrendingUp, Clock, Brain } from 'lucide-react';

interface EmotionInsightsProps {
  context: ConversationContext;
}

export const EmotionInsights: React.FC<EmotionInsightsProps> = ({ context }) => {
  const sessionDuration = Math.floor((Date.now() - context.sessionStartTime.getTime()) / 60000);
  
  const emotionCounts = context.emotionHistory.reduce((acc, emotion) => {
    acc[emotion] = (acc[emotion] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const topEmotion = Object.entries(emotionCounts)
    .sort(([, a], [, b]) => b - a)[0]?.[0] || 'neutral';

  const supportMessages = [
    "You're being so brave by sharing your feelings 💙",
    "I'm proud of you for reaching out today 🌸",
    "Your feelings matter and so do you 💜",
    "Thank you for trusting me with your thoughts ✨"
  ];

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/50 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-5 h-5 text-purple-500" />
        <h3 className="font-bold text-gray-800">Your Journey Today</h3>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-800">Time Together</span>
          </div>
          <p className="text-2xl font-bold text-indigo-800">{sessionDuration}m</p>
        </div>
        
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-800">Messages Shared</span>
          </div>
          <p className="text-2xl font-bold text-emerald-800">{context.messageCount}</p>
        </div>
        
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <BarChart3 className="w-4 h-4 text-rose-600" />
            <span className="text-sm font-medium text-rose-800">Primary Feeling</span>
          </div>
          <p className="text-lg font-bold text-rose-800 capitalize">{topEmotion}</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 text-center">
        <p className="text-sm text-orange-700 font-medium">
          {supportMessages[Math.floor(Math.random() * supportMessages.length)]}
        </p>
      </div>
    </div>
  );
};