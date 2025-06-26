import React from 'react';
import { Message } from '../types';
import { User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

const emotionColors = {
  anxiety: 'bg-amber-100 text-amber-800 border-amber-200',
  stress: 'bg-red-100 text-red-800 border-red-200',
  sadness: 'bg-blue-100 text-blue-800 border-blue-200',
  depression: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  overwhelm: 'bg-purple-100 text-purple-800 border-purple-200',
  burnout: 'bg-gray-100 text-gray-800 border-gray-200',
  anger: 'bg-red-100 text-red-800 border-red-200',
  loneliness: 'bg-slate-100 text-slate-800 border-slate-200',
  neutral: 'bg-green-100 text-green-800 border-green-200'
};

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6 animate-fade-in`}>
      <div className={`flex max-w-[85%] ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-md ${
          isUser ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-white overflow-hidden'
        }`}>
          {isUser ? (
            <User className="w-5 h-5 text-white" />
          ) : (
            <img 
              src="/c.png" 
              alt="Calm.ai" 
              className="w-full h-full object-cover rounded-full"
            />
          )}
        </div>
        
        <div className={`rounded-2xl px-5 py-4 shadow-lg ${
          isUser 
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-br-md' 
            : 'bg-white text-gray-800 rounded-bl-md border border-gray-100'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
          
          {message.emotion && message.emotion.primary !== 'neutral' && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium border shadow-sm ${
                emotionColors[message.emotion.primary as keyof typeof emotionColors]
              }`}>
                {message.emotion.primary} ({Math.round(message.emotion.confidence * 100)}%)
              </span>
              {message.emotion.secondary && (
                <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium border shadow-sm ${
                  emotionColors[message.emotion.secondary as keyof typeof emotionColors]
                }`}>
                  {message.emotion.secondary}
                </span>
              )}
            </div>
          )}
          
          <p className={`text-xs mt-3 ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  );
};