import { MovieSuggestion, UserProfile } from '../types';

export const movieDatabase: MovieSuggestion[] = [
  // Calming Movies
  {
    id: 'studio-ghibli-1',
    title: 'My Neighbor Totoro',
    genre: ['animation', 'family', 'fantasy'],
    mood: 'calming',
    description: 'A gentle story about childhood wonder and the healing power of nature',
    year: 1988,
    rating: 'G',
    duration: '86 min',
    emotionalBenefit: 'Provides comfort through innocent wonder and beautiful nature scenes'
  },
  {
    id: 'calming-1',
    title: 'A Good Year',
    genre: ['comedy', 'drama', 'romance'],
    mood: 'calming',
    description: 'A stressed businessman discovers peace in the French countryside',
    year: 2006,
    rating: 'PG-13',
    duration: '117 min',
    emotionalBenefit: 'Shows the beauty of slowing down and finding joy in simple pleasures'
  },
  {
    id: 'calming-2',
    title: 'Julie & Julia',
    genre: ['comedy', 'drama', 'biography'],
    mood: 'calming',
    description: 'Two women find purpose and joy through cooking',
    year: 2009,
    rating: 'PG-13',
    duration: '123 min',
    emotionalBenefit: 'Celebrates finding passion and purpose in everyday activities'
  },
  {
    id: 'calming-3',
    title: 'The Secret Garden',
    genre: ['drama', 'family', 'fantasy'],
    mood: 'calming',
    description: 'A young girl discovers healing through nurturing a hidden garden',
    year: 2020,
    rating: 'PG',
    duration: '99 min',
    emotionalBenefit: 'Shows how nature and care can heal emotional wounds'
  },

  // Uplifting Movies
  {
    id: 'uplifting-1',
    title: 'Paddington',
    genre: ['animation', 'comedy', 'family'],
    mood: 'uplifting',
    description: 'A polite bear brings joy and kindness to everyone he meets',
    year: 2014,
    rating: 'PG',
    duration: '95 min',
    emotionalBenefit: 'Reminds us that kindness and optimism can brighten any day'
  },
  {
    id: 'uplifting-2',
    title: 'The Grand Budapest Hotel',
    genre: ['comedy', 'drama'],
    mood: 'uplifting',
    description: 'A whimsical tale of friendship and elegance in difficult times',
    year: 2014,
    rating: 'R',
    duration: '99 min',
    emotionalBenefit: 'Beautiful visuals and gentle humor that lifts the spirit'
  },
  {
    id: 'uplifting-3',
    title: 'Little Women',
    genre: ['drama', 'romance'],
    mood: 'uplifting',
    description: 'Four sisters support each other through life\'s challenges',
    year: 2019,
    rating: 'PG',
    duration: '135 min',
    emotionalBenefit: 'Celebrates family bonds and following your dreams'
  },
  {
    id: 'uplifting-4',
    title: 'The Hundred-Foot Journey',
    genre: ['comedy', 'drama'],
    mood: 'uplifting',
    description: 'Food brings together two cultures and heals old wounds',
    year: 2014,
    rating: 'PG',
    duration: '122 min',
    emotionalBenefit: 'Shows how passion and understanding can overcome differences'
  },

  // Motivational Movies
  {
    id: 'motivational-1',
    title: 'The Pursuit of Happyness',
    genre: ['biography', 'drama'],
    mood: 'motivational',
    description: 'A father\'s determination to build a better life for his son',
    year: 2006,
    rating: 'PG-13',
    duration: '117 min',
    emotionalBenefit: 'Inspires perseverance through the darkest times'
  },
  {
    id: 'motivational-2',
    title: 'Hidden Figures',
    genre: ['biography', 'drama', 'history'],
    mood: 'motivational',
    description: 'Brilliant women overcome barriers to achieve greatness',
    year: 2016,
    rating: 'PG',
    duration: '127 min',
    emotionalBenefit: 'Empowers viewers to believe in their own potential'
  },
  {
    id: 'motivational-3',
    title: 'Good Will Hunting',
    genre: ['drama'],
    mood: 'motivational',
    description: 'A young man discovers his worth with help from a caring therapist',
    year: 1997,
    rating: 'R',
    duration: '126 min',
    emotionalBenefit: 'Shows that healing and growth are possible with support'
  },
  {
    id: 'motivational-4',
    title: 'The Intern',
    genre: ['comedy', 'drama'],
    mood: 'motivational',
    description: 'A senior intern proves that it\'s never too late to start over',
    year: 2015,
    rating: 'PG-13',
    duration: '121 min',
    emotionalBenefit: 'Inspires confidence in new beginnings at any age'
  },
  {
    id: 'motivational-5',
    title: 'Chef',
    genre: ['comedy', 'drama'],
    mood: 'motivational',
    description: 'A chef rediscovers his passion by starting fresh',
    year: 2014,
    rating: 'R',
    duration: '114 min',
    emotionalBenefit: 'Encourages following your passion and rebuilding relationships'
  }
];

export function getMovieRecommendations(
  emotion: string, 
  profile: UserProfile, 
  count: number = 3
): MovieSuggestion[] {
  let targetMood: 'calming' | 'uplifting' | 'motivational';
  
  // Determine mood based on emotion
  switch (emotion) {
    case 'anxiety':
    case 'stress':
    case 'overwhelm':
      targetMood = 'calming';
      break;
    case 'depression':
    case 'sadness':
    case 'loneliness':
      targetMood = 'uplifting';
      break;
    case 'burnout':
    case 'anger':
      targetMood = 'motivational';
      break;
    default:
      targetMood = 'uplifting';
  }

  // Filter movies by mood and user preferences
  let filteredMovies = movieDatabase.filter(movie => {
    // Match target mood
    if (movie.mood !== targetMood) return false;
    
    // Avoid genres user dislikes
    if (movie.genre.some(genre => profile.avoidGenres.includes(genre))) return false;
    
    // Skip already watched movies
    if (profile.watchedMovies.includes(movie.id)) return false;
    
    return true;
  });

  // If user has preferred genres, prioritize them
  if (profile.movieGenres.length > 0) {
    const preferredMovies = filteredMovies.filter(movie =>
      movie.genre.some(genre => profile.movieGenres.includes(genre))
    );
    
    if (preferredMovies.length >= count) {
      filteredMovies = preferredMovies;
    }
  }

  // Shuffle and return requested count
  const shuffled = filteredMovies.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function markMovieAsWatched(movieId: string, profile: UserProfile): UserProfile {
  return {
    ...profile,
    watchedMovies: [...profile.watchedMovies, movieId]
  };
}