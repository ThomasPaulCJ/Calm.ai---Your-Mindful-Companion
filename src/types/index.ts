export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  emotion?: EmotionAnalysis;
  followUpSuggestions?: string[];
  problemContext?: ProblemContext;
}

export interface EmotionAnalysis {
  primary: string;
  confidence: number;
  secondary?: string;
  keywords: string[];
  intensity: 'low' | 'medium' | 'high';
}

export interface ProblemContext {
  category: 'work' | 'relationship' | 'financial' | 'health' | 'family' | 'academic' | 'social' | 'personal' | 'general';
  specificIssues: string[];
  urgency: 'low' | 'medium' | 'high';
  duration: 'recent' | 'ongoing' | 'chronic';
}

export interface SelfCareActivity {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  icon: string;
  problemSpecific?: boolean;
}

export interface ConversationContext {
  emotionHistory: string[];
  topicHistory: string[];
  sessionStartTime: Date;
  messageCount: number;
  lastEmotion?: string;
  userConcerns: string[];
  previousTopics: string[];
  supportLevel: 'initial' | 'building' | 'established';
  problemPatterns: ProblemContext[];
  userBackground: {
    mentionedWork?: boolean;
    mentionedRelationship?: boolean;
    mentionedFinances?: boolean;
    mentionedFamily?: boolean;
    mentionedHealth?: boolean;
  };
}

export interface ConversationMemory {
  recentTopics: string[];
  emotionalPatterns: Record<string, number>;
  userPreferences: string[];
  previousSessions: number;
  problemHistory: ProblemContext[];
}

export interface UserProfile {
  id: string;
  name?: string;
  movieGenres: string[];
  musicGenres: string[];
  gameTypes: string[];
  preferredMood: 'calm' | 'uplifting' | 'motivational' | 'mixed';
  avoidGenres: string[];
  lastUpdated: Date;
  watchedMovies: string[];
  playedGames: string[];
  personalContext: {
    commonProblems: string[];
    copingStrategies: string[];
    triggers: string[];
  };
}

export interface MovieSuggestion {
  id: string;
  title: string;
  genre: string[];
  mood: 'calming' | 'uplifting' | 'motivational';
  description: string;
  year: number;
  rating: string;
  duration: string;
  emotionalBenefit: string;
  trigger_warnings?: string[];
  problemRelevant?: string[];
}

export interface PlaylistSuggestion {
  id: string;
  name: string;
  genre: string;
  mood: 'calming' | 'uplifting' | 'motivational';
  description: string;
  duration: string;
  tracks: string[];
  emotionalBenefit: string;
  problemRelevant?: string[];
}

export interface GameSuggestion {
  id: string;
  name: string;
  type: 'puzzle' | 'creative' | 'mindful' | 'casual' | 'story';
  mood: 'relaxing' | 'engaging' | 'meditative';
  description: string;
  duration: string;
  platform: string[];
  mentalBenefit: string;
  difficulty: 'easy' | 'medium' | 'challenging';
  problemRelevant?: string[];
}

export interface EntertainmentRecommendation {
  movies: MovieSuggestion[];
  playlists: PlaylistSuggestion[];
  games: GameSuggestion[];
  personalizedMessage: string;
}