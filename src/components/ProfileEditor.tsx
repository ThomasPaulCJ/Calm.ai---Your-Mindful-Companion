import React, { useState } from 'react';
import { UserProfile } from '../types';
import { Settings, X, Save } from 'lucide-react';

interface ProfileEditorProps {
  profile: UserProfile;
  onSave: (profile: UserProfile) => void;
  onClose: () => void;
  isDarkMode?: boolean;
}

export const ProfileEditor: React.FC<ProfileEditorProps> = ({ 
  profile, 
  onSave, 
  onClose, 
  isDarkMode = false 
}) => {
  const [editedProfile, setEditedProfile] = useState<UserProfile>({ ...profile });

  const movieGenreOptions = ['comedy', 'drama', 'romance', 'action', 'thriller', 'horror', 'sci-fi', 'fantasy', 'documentary', 'animation', 'musical'];
  const musicGenreOptions = ['pop', 'rock', 'jazz', 'classical', 'indie', 'folk', 'electronic', 'r&b', 'country', 'hip-hop', 'ambient'];
  const gameTypeOptions = ['puzzle', 'creative', 'mindful', 'casual', 'story'];

  const toggleGenre = (genre: string, type: 'movie' | 'music' | 'game' | 'avoid') => {
    const key = type === 'movie' ? 'movieGenres' : 
                type === 'music' ? 'musicGenres' : 
                type === 'game' ? 'gameTypes' : 'avoidGenres';
    
    const currentList = editedProfile[key] as string[];
    const newList = currentList.includes(genre)
      ? currentList.filter(g => g !== genre)
      : [...currentList, genre];
    
    setEditedProfile(prev => ({ ...prev, [key]: newList }));
  };

  const handleSave = () => {
    onSave(editedProfile);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-6 ${
        isDarkMode ? 'bg-slate-800' : 'bg-white'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Settings className={`w-6 h-6 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Customize Your Preferences
            </h2>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode ? 'hover:bg-slate-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Movie Preferences */}
          <div>
            <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Movie Genres You Enjoy
            </h3>
            <div className="flex flex-wrap gap-2">
              {movieGenreOptions.map(genre => (
                <button
                  key={genre}
                  onClick={() => toggleGenre(genre, 'movie')}
                  className={`px-3 py-2 rounded-full text-sm transition-all ${
                    editedProfile.movieGenres.includes(genre)
                      ? 'bg-purple-500 text-white shadow-md'
                      : isDarkMode
                        ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Music Preferences */}
          <div>
            <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Music Genres You Love
            </h3>
            <div className="flex flex-wrap gap-2">
              {musicGenreOptions.map(genre => (
                <button
                  key={genre}
                  onClick={() => toggleGenre(genre, 'music')}
                  className={`px-3 py-2 rounded-full text-sm transition-all ${
                    editedProfile.musicGenres.includes(genre)
                      ? 'bg-green-500 text-white shadow-md'
                      : isDarkMode
                        ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Game Preferences */}
          <div>
            <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Game Types You Prefer
            </h3>
            <div className="flex flex-wrap gap-2">
              {gameTypeOptions.map(type => (
                <button
                  key={type}
                  onClick={() => toggleGenre(type, 'game')}
                  className={`px-3 py-2 rounded-full text-sm transition-all ${
                    editedProfile.gameTypes.includes(type)
                      ? 'bg-blue-500 text-white shadow-md'
                      : isDarkMode
                        ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Avoid Genres */}
          <div>
            <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Genres to Avoid
            </h3>
            <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Select any genres that might be triggering or that you simply don't enjoy
            </p>
            <div className="flex flex-wrap gap-2">
              {[...movieGenreOptions, ...musicGenreOptions].filter((item, index, arr) => arr.indexOf(item) === index).map(genre => (
                <button
                  key={genre}
                  onClick={() => toggleGenre(genre, 'avoid')}
                  className={`px-3 py-2 rounded-full text-sm transition-all ${
                    editedProfile.avoidGenres.includes(genre)
                      ? 'bg-red-500 text-white shadow-md'
                      : isDarkMode
                        ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Preferred Mood */}
          <div>
            <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Overall Preference
            </h3>
            <div className="flex gap-2">
              {(['calm', 'uplifting', 'motivational', 'mixed'] as const).map(mood => (
                <button
                  key={mood}
                  onClick={() => setEditedProfile(prev => ({ ...prev, preferredMood: mood }))}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    editedProfile.preferredMood === mood
                      ? 'bg-indigo-500 text-white shadow-md'
                      : isDarkMode
                        ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={handleSave}
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Preferences
          </button>
          <button
            onClick={onClose}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              isDarkMode 
                ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};