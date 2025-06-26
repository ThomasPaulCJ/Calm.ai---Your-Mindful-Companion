import { PlaylistSuggestion, UserProfile } from '../types';

export const playlistDatabase: PlaylistSuggestion[] = [
  // Calming Playlists
  {
    id: 'calm-1',
    name: 'Gentle Rain',
    genre: 'ambient',
    mood: 'calming',
    description: 'Soft instrumental music mixed with gentle rain sounds',
    duration: '45 min',
    tracks: ['Raindrops on Leaves', 'Peaceful Storm', 'Morning Mist', 'Quiet Thunder'],
    emotionalBenefit: 'Reduces anxiety and promotes deep relaxation'
  },
  {
    id: 'calm-2',
    name: 'Classical Serenity',
    genre: 'classical',
    mood: 'calming',
    description: 'Peaceful classical pieces for meditation and rest',
    duration: '60 min',
    tracks: ['Clair de Lune - Debussy', 'Gymnopédie No.1 - Satie', 'The Swan - Saint-Saëns'],
    emotionalBenefit: 'Calms racing thoughts and soothes the nervous system'
  },
  {
    id: 'calm-3',
    name: 'Indie Folk Comfort',
    genre: 'indie',
    mood: 'calming',
    description: 'Gentle indie folk songs that feel like a warm hug',
    duration: '50 min',
    tracks: ['Holocene - Bon Iver', 'First Time - Hozier', 'Vienna - Billy Joel'],
    emotionalBenefit: 'Provides emotional comfort and understanding'
  },

  // Uplifting Playlists
  {
    id: 'uplift-1',
    name: 'Sunshine Vibes',
    genre: 'pop',
    mood: 'uplifting',
    description: 'Feel-good pop songs to brighten your day',
    duration: '40 min',
    tracks: ['Good as Hell - Lizzo', 'Happy - Pharrell Williams', 'Count on Me - Bruno Mars'],
    emotionalBenefit: 'Boosts mood and energy levels naturally'
  },
  {
    id: 'uplift-2',
    name: 'Acoustic Hope',
    genre: 'folk',
    mood: 'uplifting',
    description: 'Hopeful acoustic songs about overcoming challenges',
    duration: '55 min',
    tracks: ['Three Little Birds - Bob Marley', 'Here Comes the Sun - The Beatles', 'Brave - Sara Bareilles'],
    emotionalBenefit: 'Instills hope and reminds you of your strength'
  },
  {
    id: 'uplift-3',
    name: 'Jazz Café',
    genre: 'jazz',
    mood: 'uplifting',
    description: 'Smooth jazz that makes everything feel a little brighter',
    duration: '65 min',
    tracks: ['Feeling Good - Nina Simone', 'What a Wonderful World - Louis Armstrong', 'Fly Me to the Moon - Frank Sinatra'],
    emotionalBenefit: 'Creates a sophisticated, optimistic atmosphere'
  },

  // Motivational Playlists
  {
    id: 'motivate-1',
    name: 'Rise Up',
    genre: 'pop',
    mood: 'motivational',
    description: 'Empowering songs to help you find your inner strength',
    duration: '45 min',
    tracks: ['Stronger - Kelly Clarkson', 'Fight Song - Rachel Platten', 'Roar - Katy Perry'],
    emotionalBenefit: 'Builds confidence and determination'
  },
  {
    id: 'motivate-2',
    name: 'Overcome',
    genre: 'rock',
    mood: 'motivational',
    description: 'Rock anthems about perseverance and triumph',
    duration: '50 min',
    tracks: ['Eye of the Tiger - Survivor', 'Don\'t Stop Believin\' - Journey', 'We Are the Champions - Queen'],
    emotionalBenefit: 'Energizes and motivates action'
  },
  {
    id: 'motivate-3',
    name: 'Soul Power',
    genre: 'r&b',
    mood: 'motivational',
    description: 'Soulful songs about resilience and self-worth',
    duration: '55 min',
    tracks: ['Respect - Aretha Franklin', 'I Can See Clearly Now - Johnny Nash', 'Ain\'t No Mountain High Enough - Marvin Gaye'],
    emotionalBenefit: 'Reinforces self-worth and personal power'
  }
];

export function getPlaylistRecommendations(
  emotion: string,
  profile: UserProfile,
  count: number = 2
): PlaylistSuggestion[] {
  let targetMood: 'calming' | 'uplifting' | 'motivational';
  
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

  let filteredPlaylists = playlistDatabase.filter(playlist => playlist.mood === targetMood);

  // Prioritize user's preferred music genres
  if (profile.musicGenres.length > 0) {
    const preferredPlaylists = filteredPlaylists.filter(playlist =>
      profile.musicGenres.includes(playlist.genre)
    );
    
    if (preferredPlaylists.length >= count) {
      filteredPlaylists = preferredPlaylists;
    }
  }

  const shuffled = filteredPlaylists.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}