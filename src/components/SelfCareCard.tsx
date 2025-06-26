import React from 'react';
import { SelfCareActivity } from '../types';
import { Clock, Tag, X } from 'lucide-react';

interface SelfCareCardProps {
  activity: SelfCareActivity;
  onDismiss: () => void;
}

export const SelfCareCard: React.FC<SelfCareCardProps> = ({ activity, onDismiss }) => {
  return (
    <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-2 border-emerald-200 rounded-2xl p-6 mb-6 shadow-lg animate-slide-up">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{activity.icon}</span>
          <h3 className="font-bold text-emerald-800 text-lg">{activity.title}</h3>
        </div>
        <button
          onClick={onDismiss}
          className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <p className="text-emerald-700 text-sm mb-4 leading-relaxed">
        {activity.description}
      </p>
      
      <div className="flex items-center gap-6 text-xs text-emerald-600">
        <div className="flex items-center gap-2 bg-emerald-100 px-3 py-1.5 rounded-full">
          <Clock className="w-3 h-3" />
          <span className="font-medium">{activity.duration}</span>
        </div>
        <div className="flex items-center gap-2 bg-teal-100 px-3 py-1.5 rounded-full">
          <Tag className="w-3 h-3" />
          <span className="font-medium">{activity.category}</span>
        </div>
      </div>
    </div>
  );
};