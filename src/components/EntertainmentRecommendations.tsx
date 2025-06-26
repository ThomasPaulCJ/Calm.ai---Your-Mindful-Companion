import React from 'react';
import { EntertainmentRecommendation } from '../types';
import { EntertainmentCard } from './EntertainmentCard';
import { Sparkles, X } from 'lucide-react';

interface EntertainmentRecommendationsProps {
  recommendations: EntertainmentRecommendation;
  onSelectItem: (type: 'movie' | 'playlist' | 'game', id: string) => void;
  onDismiss: () => void;
  isDarkMode?: boolean;
}

export const EntertainmentRecommendations: React.FC<EntertainmentRecommendationsProps> = ({
  recommendations,
  onSelectItem,
  onDismiss,
  isDarkMode = false
}) => {
  return (
    <div className={`rounded-2xl p-6 mb-6 border-2 shadow-lg transition-all duration-300 animate-slide-up ${
      isDarkMode 
        ? 'bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border-indigo-700/50' 
        : 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Sparkles className={`w-6 h-6 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
          <div>
            <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Personalized Recommendations
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>
              {recommendations.personalizedMessage}
            </p>
          </div>
        </div>
        <button
          onClick={onDismiss}
          className={`p-2 rounded-full transition-colors ${
            isDarkMode ? 'hover:bg-slate-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
          }`}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        {/* Movies */}
        {recommendations.movies.length > 0 && (
          <div>
            <h4 className={`font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              🎬 Movies to Soothe Your Soul
            </h4>
            <div className="grid gap-3">
              {recommendations.movies.map(movie => (
                <EntertainmentCard
                  key={movie.id}
                  type="movie"
                  item={movie}
                  onSelect={(id) => onSelectItem('movie', id)}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        )}

        {/* Playlists */}
        {recommendations.playlists.length > 0 && (
          <div>
            <h4 className={`font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              🎵 Music for Your Heart
            </h4>
            <div className="grid gap-3">
              {recommendations.playlists.map(playlist => (
                <EntertainmentCard
                  key={playlist.id}
                  type="playlist"
                  item={playlist}
                  onSelect={(id) => onSelectItem('playlist', id)}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        )}

        {/* Games */}
        {recommendations.games.length > 0 && (
          <div>
            <h4 className={`font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              🎮 Games to Ease Your Mind
            </h4>
            <div className="grid gap-3">
              {recommendations.games.map(game => (
                <EntertainmentCard
                  key={game.id}
                  type="game"
                  item={game}
                  onSelect={(id) => onSelectItem('game', id)}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};