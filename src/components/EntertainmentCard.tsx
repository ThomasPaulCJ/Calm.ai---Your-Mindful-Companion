import React from 'react';
import { MovieSuggestion, PlaylistSuggestion, GameSuggestion } from '../types';
import { Play, Music, Gamepad2, Clock, Star, Monitor } from 'lucide-react';

interface EntertainmentCardProps {
  type: 'movie' | 'playlist' | 'game';
  item: MovieSuggestion | PlaylistSuggestion | GameSuggestion;
  onSelect: (id: string) => void;
  isDarkMode?: boolean;
}

export const EntertainmentCard: React.FC<EntertainmentCardProps> = ({ 
  type, 
  item, 
  onSelect, 
  isDarkMode = false 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'movie': return <Play className="w-5 h-5" />;
      case 'playlist': return <Music className="w-5 h-5" />;
      case 'game': return <Gamepad2 className="w-5 h-5" />;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'movie': return isDarkMode ? 'from-purple-600 to-pink-600' : 'from-purple-500 to-pink-500';
      case 'playlist': return isDarkMode ? 'from-green-600 to-teal-600' : 'from-green-500 to-teal-500';
      case 'game': return isDarkMode ? 'from-blue-600 to-indigo-600' : 'from-blue-500 to-indigo-500';
    }
  };

  const renderMovieDetails = (movie: MovieSuggestion) => (
    <>
      <div className="flex items-center gap-2 text-xs mb-2">
        <span className={`px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
          {movie.year}
        </span>
        <span className={`px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
          {movie.rating}
        </span>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{movie.duration}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 mb-3">
        {movie.genre.slice(0, 3).map(genre => (
          <span key={genre} className={`text-xs px-2 py-1 rounded-full ${
            isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'
          }`}>
            {genre}
          </span>
        ))}
      </div>
    </>
  );

  const renderPlaylistDetails = (playlist: PlaylistSuggestion) => (
    <>
      <div className="flex items-center gap-2 text-xs mb-2">
        <span className={`px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
          {playlist.genre}
        </span>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{playlist.duration}</span>
        </div>
      </div>
      <div className="mb-3">
        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {playlist.tracks.length} tracks including:
        </p>
        <p className={`text-xs italic ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {playlist.tracks.slice(0, 2).join(', ')}...
        </p>
      </div>
    </>
  );

  const renderGameDetails = (game: GameSuggestion) => (
    <>
      <div className="flex items-center gap-2 text-xs mb-2">
        <span className={`px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
          {game.type}
        </span>
        <span className={`px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
          {game.difficulty}
        </span>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{game.duration}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <Monitor className="w-3 h-3" />
        <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {game.platform.join(', ')}
        </span>
      </div>
    </>
  );

  return (
    <div className={`rounded-xl p-4 border transition-all duration-300 hover:shadow-lg cursor-pointer ${
      isDarkMode 
        ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70' 
        : 'bg-white/70 border-white/50 hover:bg-white/90'
    }`}
    onClick={() => onSelect(item.id)}>
      <div className="flex items-start gap-3 mb-3">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${getTypeColor()} flex items-center justify-center text-white shadow-md`}>
          {getIcon()}
        </div>
        <div className="flex-1">
          <h4 className={`font-semibold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {'title' in item ? item.title : 'name' in item ? item.name : item.name}
          </h4>
          <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {item.description}
          </p>
        </div>
      </div>

      {type === 'movie' && renderMovieDetails(item as MovieSuggestion)}
      {type === 'playlist' && renderPlaylistDetails(item as PlaylistSuggestion)}
      {type === 'game' && renderGameDetails(item as GameSuggestion)}

      <div className={`text-xs p-3 rounded-lg ${
        isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'
      }`}>
        <div className="flex items-center gap-2 mb-1">
          <Star className="w-3 h-3 text-yellow-500" />
          <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            Mental Health Benefit:
          </span>
        </div>
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {'emotionalBenefit' in item ? item.emotionalBenefit : item.mentalBenefit}
        </p>
      </div>
    </div>
  );
};