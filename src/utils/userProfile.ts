import { UserProfile } from '../types';

const DEFAULT_PROFILE: UserProfile = {
  id: 'default',
  movieGenres: [],
  musicGenres: [],
  gameTypes: [],
  preferredMood: 'mixed',
  avoidGenres: [],
  lastUpdated: new Date(),
  watchedMovies: [],
  playedGames: [],
  personalContext: {
    commonProblems: [],
    copingStrategies: [],
    triggers: []
  }
};

export function getUserProfile(): UserProfile {
  const stored = localStorage.getItem('mindfulchat_profile');
  if (stored) {
    const profile = JSON.parse(stored);
    return { ...profile, lastUpdated: new Date(profile.lastUpdated) };
  }
  return DEFAULT_PROFILE;
}

export function saveUserProfile(profile: UserProfile): void {
  profile.lastUpdated = new Date();
  localStorage.setItem('mindfulchat_profile', JSON.stringify(profile));
}

export function updateProfileFromMessage(message: string, currentProfile: UserProfile): UserProfile {
  const lowerMessage = message.toLowerCase();
  const newProfile = { ...currentProfile };
  
  // Detect movie preferences
  const movieGenres = ['comedy', 'drama', 'romance', 'action', 'thriller', 'horror', 'sci-fi', 'fantasy', 'documentary', 'animation', 'musical'];
  movieGenres.forEach(genre => {
    if (lowerMessage.includes(genre) && !newProfile.movieGenres.includes(genre)) {
      newProfile.movieGenres.push(genre);
    }
  });
  
  // Detect music preferences
  const musicGenres = ['pop', 'rock', 'jazz', 'classical', 'indie', 'folk', 'electronic', 'r&b', 'country', 'hip-hop', 'ambient'];
  musicGenres.forEach(genre => {
    if (lowerMessage.includes(genre) && !newProfile.musicGenres.includes(genre)) {
      newProfile.musicGenres.push(genre);
    }
  });
  
  // Detect game preferences
  const gameTypes = ['puzzle', 'creative', 'mindful', 'casual', 'story'];
  gameTypes.forEach(type => {
    if (lowerMessage.includes(type) && !newProfile.gameTypes.includes(type)) {
      newProfile.gameTypes.push(type);
    }
  });
  
  // Detect dislikes
  if (lowerMessage.includes("don't like") || lowerMessage.includes("hate") || lowerMessage.includes("avoid")) {
    movieGenres.forEach(genre => {
      if (lowerMessage.includes(genre) && !newProfile.avoidGenres.includes(genre)) {
        newProfile.avoidGenres.push(genre);
      }
    });
  }
  
  return newProfile;
}

export function getPersonalizedRecommendations(emotion: string, profile: UserProfile): string[] {
  const recommendations = [];
  
  if (emotion === 'depression' || emotion === 'sadness') {
    if (profile.movieGenres.includes('comedy')) {
      recommendations.push("Since you enjoy comedy, I have some gentle, uplifting films that might bring a smile");
    }
    if (profile.musicGenres.includes('indie') || profile.musicGenres.includes('folk')) {
      recommendations.push("I know you like indie/folk music - I have some soothing playlists that might comfort you");
    }
  }
  
  if (emotion === 'anxiety' || emotion === 'stress') {
    if (profile.gameTypes.includes('puzzle')) {
      recommendations.push("You mentioned liking puzzles - I have some calming puzzle games that might help focus your mind");
    }
    if (profile.musicGenres.includes('classical') || profile.musicGenres.includes('ambient')) {
      recommendations.push("Given your taste for calming music, I have some perfect playlists for anxiety relief");
    }
  }
  
  return recommendations;
}