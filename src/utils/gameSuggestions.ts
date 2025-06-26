import { GameSuggestion, UserProfile } from '../types';

export const gameDatabase: GameSuggestion[] = [
  // Puzzle Games
  {
    id: 'puzzle-1',
    name: 'Monument Valley',
    type: 'puzzle',
    mood: 'meditative',
    description: 'Beautiful geometric puzzles in impossible architecture',
    duration: '2-3 hours',
    platform: ['Mobile', 'PC'],
    mentalBenefit: 'Promotes focus and provides gentle mental stimulation',
    difficulty: 'easy'
  },
  {
    id: 'puzzle-2',
    name: 'Tetris Effect',
    type: 'puzzle',
    mood: 'meditative',
    description: 'Classic Tetris with mesmerizing visuals and music',
    duration: '15-30 min sessions',
    platform: ['PC', 'Console', 'Mobile'],
    mentalBenefit: 'Enters flow state, reduces anxiety through repetitive action',
    difficulty: 'medium'
  },
  {
    id: 'puzzle-3',
    name: 'Flow Free',
    type: 'puzzle',
    mood: 'relaxing',
    description: 'Connect matching colors with pipe to create a flow',
    duration: '10-20 min sessions',
    platform: ['Mobile'],
    mentalBenefit: 'Simple, satisfying puzzles that calm the mind',
    difficulty: 'easy'
  },

  // Creative Games
  {
    id: 'creative-1',
    name: 'Animal Crossing',
    type: 'creative',
    mood: 'relaxing',
    description: 'Build and customize your own peaceful island paradise',
    duration: '30-60 min sessions',
    platform: ['Nintendo Switch'],
    mentalBenefit: 'Provides sense of accomplishment and creative expression',
    difficulty: 'easy'
  },
  {
    id: 'creative-2',
    name: 'Minecraft (Creative Mode)',
    type: 'creative',
    mood: 'engaging',
    description: 'Build anything you can imagine in a blocky world',
    duration: '30+ min sessions',
    platform: ['PC', 'Console', 'Mobile'],
    mentalBenefit: 'Encourages creativity and provides sense of control',
    difficulty: 'easy'
  },
  {
    id: 'creative-3',
    name: 'Unpacking',
    type: 'creative',
    mood: 'meditative',
    description: 'Unpack belongings and arrange them in living spaces',
    duration: '4-6 hours total',
    platform: ['PC', 'Console'],
    mentalBenefit: 'Therapeutic organizing activity with storytelling',
    difficulty: 'easy'
  },

  // Mindful Games
  {
    id: 'mindful-1',
    name: 'Journey',
    type: 'mindful',
    mood: 'meditative',
    description: 'A wordless adventure through beautiful landscapes',
    duration: '2-3 hours',
    platform: ['PC', 'Console'],
    mentalBenefit: 'Promotes mindfulness and emotional connection',
    difficulty: 'easy'
  },
  {
    id: 'mindful-2',
    name: 'Flower',
    type: 'mindful',
    mood: 'relaxing',
    description: 'Guide flower petals through peaceful environments',
    duration: '2-3 hours',
    platform: ['PC', 'Console', 'Mobile'],
    mentalBenefit: 'Deeply relaxing and connects you with nature',
    difficulty: 'easy'
  },
  {
    id: 'mindful-3',
    name: 'Meditation Studio',
    type: 'mindful',
    mood: 'meditative',
    description: 'Guided meditation sessions in beautiful virtual environments',
    duration: '5-30 min sessions',
    platform: ['Mobile', 'VR'],
    mentalBenefit: 'Direct mindfulness and stress reduction practice',
    difficulty: 'easy'
  },

  // Casual Games
  {
    id: 'casual-1',
    name: 'Stardew Valley',
    type: 'casual',
    mood: 'relaxing',
    description: 'Farm, fish, and build relationships in a charming town',
    duration: '30+ min sessions',
    platform: ['PC', 'Console', 'Mobile'],
    mentalBenefit: 'Provides routine, accomplishment, and social connection',
    difficulty: 'easy'
  },
  {
    id: 'casual-2',
    name: 'Two Dots',
    type: 'casual',
    mood: 'engaging',
    description: 'Connect dots to complete objectives in beautiful levels',
    duration: '10-20 min sessions',
    platform: ['Mobile'],
    mentalBenefit: 'Light mental engagement without pressure',
    difficulty: 'easy'
  },

  // Story Games
  {
    id: 'story-1',
    name: 'Spiritfarer',
    type: 'story',
    mood: 'engaging',
    description: 'Care for spirits on their journey to the afterlife',
    duration: '20+ hours',
    platform: ['PC', 'Console'],
    mentalBenefit: 'Explores themes of loss and acceptance with compassion',
    difficulty: 'easy'
  },
  {
    id: 'story-2',
    name: 'A Short Hike',
    type: 'story',
    mood: 'relaxing',
    description: 'Explore a peaceful mountain park at your own pace',
    duration: '1-2 hours',
    platform: ['PC', 'Console'],
    mentalBenefit: 'Promotes exploration and self-discovery',
    difficulty: 'easy'
  }
];

export function getGameRecommendations(
  emotion: string,
  profile: UserProfile,
  count: number = 2
): GameSuggestion[] {
  let targetMood: 'relaxing' | 'engaging' | 'meditative';
  
  switch (emotion) {
    case 'anxiety':
    case 'stress':
    case 'overwhelm':
      targetMood = 'meditative';
      break;
    case 'depression':
    case 'sadness':
    case 'loneliness':
      targetMood = 'engaging';
      break;
    case 'burnout':
      targetMood = 'relaxing';
      break;
    default:
      targetMood = 'relaxing';
  }

  let filteredGames = gameDatabase.filter(game => game.mood === targetMood);

  // Prioritize user's preferred game types
  if (profile.gameTypes.length > 0) {
    const preferredGames = filteredGames.filter(game =>
      profile.gameTypes.includes(game.type)
    );
    
    if (preferredGames.length >= count) {
      filteredGames = preferredGames;
    }
  }

  // Avoid games user has already played recently
  filteredGames = filteredGames.filter(game => !profile.playedGames.includes(game.id));

  const shuffled = filteredGames.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function markGameAsPlayed(gameId: string, profile: UserProfile): UserProfile {
  return {
    ...profile,
    playedGames: [...profile.playedGames.slice(-10), gameId] // Keep last 10 played games
  };
}