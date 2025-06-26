import { SelfCareActivity, ProblemContext } from '../types';

export const selfCareActivities: Record<string, SelfCareActivity[]> = {
  depression: [
    {
      id: 'tiny-step',
      title: 'One Tiny Step',
      description: 'Choose the smallest possible task - even just sitting up or drinking water counts as a victory',
      duration: '1 minute',
      category: 'Gentle Action',
      icon: '🌱'
    },
    {
      id: 'sunlight',
      title: 'Find Some Light',
      description: 'Sit by a window or step outside for just a moment. Light can help lift the heaviness',
      duration: '5 minutes',
      category: 'Nature',
      icon: '☀️'
    },
    {
      id: 'self-compassion',
      title: 'Speak Kindly to Yourself',
      description: 'Say one gentle thing to yourself that you\'d say to a friend in pain',
      duration: '2 minutes',
      category: 'Self-Compassion',
      icon: '💝'
    },
    {
      id: 'comfort-object',
      title: 'Hold Something Comforting',
      description: 'Wrap yourself in a soft blanket, hold a warm mug, or hug a pillow',
      duration: '5-10 minutes',
      category: 'Comfort',
      icon: '🤗'
    }
  ],
  anxiety: [
    {
      id: 'breathing',
      title: 'Gentle Breathing',
      description: 'Breathe in slowly for 4, hold gently for 4, breathe out for 6. You\'re safe right now',
      duration: '3-5 minutes',
      category: 'Mindfulness',
      icon: '🌬️'
    },
    {
      id: 'grounding',
      title: '5-4-3-2-1 Grounding',
      description: 'Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste',
      duration: '3 minutes',
      category: 'Grounding',
      icon: '🌍'
    },
    {
      id: 'worry-time',
      title: 'Worry Window',
      description: 'Set aside 10 minutes to worry fully, then gently close that window',
      duration: '10 minutes',
      category: 'Mindfulness',
      icon: '⏰'
    },
    {
      id: 'work-anxiety-break',
      title: 'Work Pressure Release',
      description: 'Step away from your workspace, even for 2 minutes. Remind yourself that you are not your job',
      duration: '2-5 minutes',
      category: 'Work Relief',
      icon: '💼',
      problemSpecific: true
    }
  ],
  sadness: [
    {
      id: 'cry-permission',
      title: 'Permission to Cry',
      description: 'Let yourself cry if you need to. Tears are healing and you don\'t need to be strong right now',
      duration: 'As needed',
      category: 'Emotional Release',
      icon: '💧'
    },
    {
      id: 'memory-comfort',
      title: 'Comforting Memory',
      description: 'Think of a time when you felt loved or safe. Hold that feeling gently',
      duration: '5 minutes',
      category: 'Memory',
      icon: '💭'
    },
    {
      id: 'gentle-music',
      title: 'Soothing Sounds',
      description: 'Listen to music that matches your mood - sometimes we need sad songs to feel understood',
      duration: '10-20 minutes',
      category: 'Music',
      icon: '🎵'
    },
    {
      id: 'relationship-comfort',
      title: 'Heart Healing Space',
      description: 'Create a cozy space just for you. Light a candle, make tea, and honor your heartache',
      duration: '15 minutes',
      category: 'Self-Nurturing',
      icon: '🕯️',
      problemSpecific: true
    }
  ],
  loneliness: [
    {
      id: 'virtual-connection',
      title: 'Reach Out Gently',
      description: 'Send a simple "thinking of you" text to someone, or comment on a friend\'s post',
      duration: '2 minutes',
      category: 'Connection',
      icon: '💌'
    },
    {
      id: 'self-letter',
      title: 'Write to Yourself',
      description: 'Write a kind letter to yourself as if you were your own best friend',
      duration: '10 minutes',
      category: 'Self-Connection',
      icon: '✍️'
    },
    {
      id: 'community-space',
      title: 'Be Around People',
      description: 'Go to a coffee shop, library, or park - sometimes just being near others helps',
      duration: '15-30 minutes',
      category: 'Presence',
      icon: '☕'
    }
  ],
  stress: [
    {
      id: 'progressive',
      title: 'Release Physical Tension',
      description: 'Tense and release each muscle group, starting from your toes',
      duration: '10 minutes',
      category: 'Relaxation',
      icon: '💆‍♀️'
    },
    {
      id: 'priorities',
      title: 'Three Things Only',
      description: 'Write down just 3 things that truly need your attention today. The rest can wait',
      duration: '5 minutes',
      category: 'Organization',
      icon: '📝'
    },
    {
      id: 'financial-breath',
      title: 'Money Worry Pause',
      description: 'Take 5 deep breaths and remind yourself: "I am more than my financial situation"',
      duration: '3 minutes',
      category: 'Financial Relief',
      icon: '💰',
      problemSpecific: true
    }
  ],
  overwhelm: [
    {
      id: 'one-thing',
      title: 'Just One Thing',
      description: 'Choose the smallest, easiest task and focus only on that. Everything else can wait',
      duration: 'Variable',
      category: 'Focus',
      icon: '🎯'
    },
    {
      id: 'brain-dump',
      title: 'Empty Your Mind',
      description: 'Write down everything swirling in your head, then pick just one thing',
      duration: '10 minutes',
      category: 'Clarity',
      icon: '🧠'
    }
  ],
  burnout: [
    {
      id: 'rest-permission',
      title: 'Permission to Rest',
      description: 'Lie down without guilt. Rest is not laziness - it\'s necessary healing',
      duration: '15-30 minutes',
      category: 'Rest',
      icon: '😴'
    },
    {
      id: 'micro-joy',
      title: 'Find One Small Joy',
      description: 'Look for one tiny thing that brings a spark - a photo, song, or memory',
      duration: '5 minutes',
      category: 'Joy',
      icon: '✨'
    }
  ],
  anger: [
    {
      id: 'physical-release',
      title: 'Move the Energy',
      description: 'Do jumping jacks, punch a pillow, or stretch to release that intense energy',
      duration: '5-10 minutes',
      category: 'Movement',
      icon: '💪'
    },
    {
      id: 'anger-letter',
      title: 'Angry Letter',
      description: 'Write all your angry thoughts - you never have to send it, just get it out',
      duration: '10-15 minutes',
      category: 'Expression',
      icon: '✍️'
    },
    {
      id: 'family-boundary',
      title: 'Protective Space',
      description: 'Create physical or emotional distance from the family situation. You deserve peace',
      duration: '10-30 minutes',
      category: 'Boundaries',
      icon: '🛡️',
      problemSpecific: true
    }
  ]
};

export function getSelfCareActivity(emotion: string, problemContext?: ProblemContext): SelfCareActivity {
  const activities = selfCareActivities[emotion] || selfCareActivities.depression;
  
  // If there's a problem context, try to find problem-specific activities first
  if (problemContext) {
    const problemSpecificActivities = activities.filter(activity => activity.problemSpecific);
    if (problemSpecificActivities.length > 0) {
      return problemSpecificActivities[Math.floor(Math.random() * problemSpecificActivities.length)];
    }
  }
  
  return activities[Math.floor(Math.random() * activities.length)];
}