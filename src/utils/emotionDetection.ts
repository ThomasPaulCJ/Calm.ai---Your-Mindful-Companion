import { EmotionAnalysis, ProblemContext } from '../types';

const emotionKeywords = {
  anxiety: {
    keywords: [
      'anxious', 'worried', 'nervous', 'panic', 'fear', 'scared', 'overwhelmed',
      'racing thoughts', 'can\'t breathe', 'heart racing', 'restless', 'on edge',
      'what if', 'catastrophizing', 'spiraling', 'worst case', 'terrified',
      'freaking out', 'losing control', 'going crazy'
    ],
    intensity: {
      high: ['panic', 'terrified', 'can\'t breathe', 'losing control', 'going crazy'],
      medium: ['anxious', 'worried', 'nervous', 'overwhelmed', 'racing thoughts'],
      low: ['concerned', 'uneasy', 'restless', 'on edge']
    }
  },
  stress: {
    keywords: [
      'stressed', 'pressure', 'deadline', 'busy', 'exhausted', 'tension',
      'work', 'school', 'overloaded', 'juggling', 'demanding', 'hectic',
      'too much', 'can\'t handle', 'breaking point', 'burned out', 'swamped'
    ],
    intensity: {
      high: ['breaking point', 'can\'t handle', 'burned out', 'crashing'],
      medium: ['stressed', 'overloaded', 'exhausted', 'pressure'],
      low: ['busy', 'hectic', 'demanding']
    }
  },
  sadness: {
    keywords: [
      'sad', 'down', 'depressed', 'crying', 'tears', 'empty', 'hopeless',
      'lonely', 'worthless', 'dark', 'heavy', 'lost', 'hurt', 'broken',
      'numb', 'hollow', 'pointless', 'meaningless', 'devastated', 'heartbroken'
    ],
    intensity: {
      high: ['devastated', 'heartbroken', 'hopeless', 'worthless', 'broken'],
      medium: ['sad', 'down', 'crying', 'hurt', 'empty'],
      low: ['blue', 'disappointed', 'melancholy']
    }
  },
  depression: {
    keywords: [
      'depressed', 'depression', 'suicidal', 'want to die', 'end it all',
      'no point', 'give up', 'can\'t go on', 'tired of living', 'burden',
      'hate myself', 'worthless', 'failure', 'nothing matters', 'empty inside',
      'no hope', 'can\'t feel anything'
    ],
    intensity: {
      high: ['suicidal', 'want to die', 'end it all', 'can\'t go on', 'no hope'],
      medium: ['depressed', 'give up', 'worthless', 'nothing matters'],
      low: ['down', 'low mood', 'unmotivated']
    }
  },
  overwhelm: {
    keywords: [
      'overwhelmed', 'too much', 'drowning', 'suffocating', 'can\'t cope',
      'falling apart', 'breaking point', 'chaos', 'spinning', 'scattered',
      'everything at once', 'can\'t think straight', 'paralyzed'
    ],
    intensity: {
      high: ['drowning', 'suffocating', 'falling apart', 'paralyzed'],
      medium: ['overwhelmed', 'can\'t cope', 'breaking point'],
      low: ['too much', 'scattered', 'busy']
    }
  },
  burnout: {
    keywords: [
      'burnout', 'burnt out', 'drained', 'exhausted', 'empty', 'numb',
      'disconnected', 'unmotivated', 'going through motions', 'zombie',
      'no energy', 'can\'t care anymore', 'checked out'
    ],
    intensity: {
      high: ['burnt out', 'zombie', 'can\'t care anymore', 'checked out'],
      medium: ['burnout', 'drained', 'exhausted', 'disconnected'],
      low: ['tired', 'unmotivated', 'low energy']
    }
  },
  anger: {
    keywords: [
      'angry', 'furious', 'mad', 'frustrated', 'annoyed', 'rage', 'irritated',
      'pissed', 'heated', 'boiling', 'explosive', 'triggered', 'fed up',
      'livid', 'seething'
    ],
    intensity: {
      high: ['furious', 'rage', 'livid', 'seething', 'explosive'],
      medium: ['angry', 'mad', 'frustrated', 'pissed'],
      low: ['annoyed', 'irritated', 'bothered']
    }
  },
  loneliness: {
    keywords: [
      'lonely', 'alone', 'isolated', 'no one understands', 'no friends',
      'abandoned', 'forgotten', 'invisible', 'disconnected', 'outsider',
      'left out', 'rejected'
    ],
    intensity: {
      high: ['abandoned', 'forgotten', 'invisible', 'rejected'],
      medium: ['lonely', 'isolated', 'disconnected', 'outsider'],
      low: ['alone', 'left out', 'distant']
    }
  }
};

const problemContextKeywords = {
  work: [
    'job', 'work', 'boss', 'colleague', 'office', 'career', 'promotion', 'salary',
    'workplace', 'meeting', 'deadline', 'project', 'coworker', 'manager',
    'interview', 'unemployment', 'fired', 'quit', 'resignation', 'overtime',
    'workload', 'toxic workplace', 'harassment', 'discrimination'
  ],
  relationship: [
    'boyfriend', 'girlfriend', 'husband', 'wife', 'partner', 'dating', 'love',
    'breakup', 'divorce', 'marriage', 'relationship', 'romantic', 'crush',
    'cheating', 'infidelity', 'argument', 'fight', 'couple', 'single',
    'heartbreak', 'rejection', 'toxic relationship', 'abuse'
  ],
  financial: [
    'money', 'debt', 'bills', 'rent', 'mortgage', 'loan', 'credit', 'budget',
    'broke', 'poor', 'financial', 'income', 'salary', 'paycheck', 'savings',
    'bankruptcy', 'foreclosure', 'eviction', 'unemployed', 'layoff',
    'expensive', 'afford', 'struggling financially'
  ],
  family: [
    'family', 'parents', 'mother', 'father', 'mom', 'dad', 'siblings', 'brother',
    'sister', 'children', 'kids', 'son', 'daughter', 'grandparents',
    'relatives', 'family drama', 'family issues', 'toxic family', 'abuse',
    'neglect', 'family conflict'
  ],
  health: [
    'sick', 'illness', 'disease', 'pain', 'doctor', 'hospital', 'medication',
    'therapy', 'treatment', 'diagnosis', 'chronic', 'disability', 'injury',
    'mental health', 'physical health', 'symptoms', 'medical', 'healthcare'
  ],
  academic: [
    'school', 'college', 'university', 'student', 'exam', 'test', 'grade',
    'homework', 'assignment', 'thesis', 'dissertation', 'professor', 'teacher',
    'studying', 'education', 'academic', 'failing', 'graduation'
  ],
  social: [
    'friends', 'friendship', 'social', 'party', 'group', 'peer pressure',
    'bullying', 'social anxiety', 'awkward', 'fitting in', 'popularity',
    'social media', 'online', 'community', 'belonging'
  ]
};

export function detectEmotion(text: string): EmotionAnalysis {
  const words = text.toLowerCase().split(/\s+/);
  const emotionScores: Record<string, { score: number; intensity: 'low' | 'medium' | 'high' }> = {};
  const foundKeywords: string[] = [];

  // Calculate emotion scores and intensity
  Object.entries(emotionKeywords).forEach(([emotion, data]) => {
    let score = 0;
    let maxIntensity: 'low' | 'medium' | 'high' = 'low';

    data.keywords.forEach(keyword => {
      if (text.toLowerCase().includes(keyword.toLowerCase())) {
        const keywordWeight = keyword.split(' ').length;
        score += keywordWeight;
        foundKeywords.push(keyword);

        // Determine intensity
        if (data.intensity.high.includes(keyword)) {
          maxIntensity = 'high';
        } else if (data.intensity.medium.includes(keyword) && maxIntensity !== 'high') {
          maxIntensity = 'medium';
        }
      }
    });

    if (score > 0) {
      emotionScores[emotion] = { score, intensity: maxIntensity };
    }
  });

  // Find primary emotion
  const sortedEmotions = Object.entries(emotionScores)
    .sort(([, a], [, b]) => b.score - a.score);

  if (sortedEmotions.length === 0) {
    return {
      primary: 'neutral',
      confidence: 0.3,
      keywords: [],
      intensity: 'low'
    };
  }

  const [primaryEmotion, primaryData] = sortedEmotions[0];
  const totalScore = Object.values(emotionScores).reduce((sum, data) => sum + data.score, 0);
  const confidence = Math.min(primaryData.score / Math.max(totalScore, 1), 1);

  return {
    primary: primaryEmotion,
    confidence: Math.max(confidence, 0.1),
    secondary: sortedEmotions[1]?.[0],
    keywords: foundKeywords.slice(0, 3),
    intensity: primaryData.intensity
  };
}

export function detectProblemContext(text: string): ProblemContext | null {
  const lowerText = text.toLowerCase();
  const detectedProblems: { category: string; issues: string[]; score: number }[] = [];

  Object.entries(problemContextKeywords).forEach(([category, keywords]) => {
    const foundIssues: string[] = [];
    let score = 0;

    keywords.forEach(keyword => {
      if (lowerText.includes(keyword)) {
        foundIssues.push(keyword);
        score += keyword.split(' ').length;
      }
    });

    if (score > 0) {
      detectedProblems.push({
        category,
        issues: foundIssues,
        score
      });
    }
  });

  if (detectedProblems.length === 0) return null;

  // Get the most relevant problem category
  const primaryProblem = detectedProblems.sort((a, b) => b.score - a.score)[0];

  // Determine urgency based on emotional intensity and keywords
  let urgency: 'low' | 'medium' | 'high' = 'low';
  const urgentKeywords = ['crisis', 'emergency', 'urgent', 'desperate', 'can\'t take it', 'breaking point'];
  if (urgentKeywords.some(keyword => lowerText.includes(keyword))) {
    urgency = 'high';
  } else if (primaryProblem.score > 3) {
    urgency = 'medium';
  }

  // Determine duration
  let duration: 'recent' | 'ongoing' | 'chronic' = 'recent';
  const ongoingKeywords = ['always', 'constantly', 'every day', 'months', 'years', 'chronic'];
  const recentKeywords = ['today', 'yesterday', 'this week', 'just happened', 'recently'];
  
  if (ongoingKeywords.some(keyword => lowerText.includes(keyword))) {
    duration = 'chronic';
  } else if (!recentKeywords.some(keyword => lowerText.includes(keyword)) && primaryProblem.score > 2) {
    duration = 'ongoing';
  }

  return {
    category: primaryProblem.category as any,
    specificIssues: primaryProblem.issues.slice(0, 3),
    urgency,
    duration
  };
}