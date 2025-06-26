import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageCircle, Moon, Sun, Settings } from 'lucide-react';
import { Message, ConversationContext, SelfCareActivity, UserProfile, EntertainmentRecommendation } from './types';
import { detectEmotion, detectProblemContext } from './utils/emotionDetection';
import { generateResponse } from './utils/responseGeneration';
import { getSelfCareActivity } from './utils/selfCareActivities';
import { getRandomQuote } from './utils/motivationalQuotes';
import { getUserProfile, saveUserProfile, updateProfileFromMessage, getPersonalizedRecommendations } from './utils/userProfile';
import { getMovieRecommendations, markMovieAsWatched } from './utils/movieSuggestions';
import { getPlaylistRecommendations } from './utils/playlistSuggestions';
import { getGameRecommendations, markGameAsPlayed } from './utils/gameSuggestions';
import { ChatMessage } from './components/ChatMessage';
import { SelfCareCard } from './components/SelfCareCard';
import { EmotionInsights } from './components/EmotionInsights';
import { EntertainmentRecommendations } from './components/EntertainmentRecommendations';
import { ProfileEditor } from './components/ProfileEditor';
import { WelcomeModal } from './components/WelcomeModal';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentQuote, setCurrentQuote] = useState('');
  const [showSelfCare, setShowSelfCare] = useState<SelfCareActivity | null>(null);
  const [showEntertainment, setShowEntertainment] = useState<EntertainmentRecommendation | null>(null);
  const [showProfileEditor, setShowProfileEditor] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>(getUserProfile());
  const [context, setContext] = useState<ConversationContext>({
    emotionHistory: [],
    topicHistory: [],
    sessionStartTime: new Date(),
    messageCount: 0,
    userConcerns: [],
    previousTopics: [],
    supportLevel: 'initial',
    problemPatterns: [],
    userBackground: {}
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCurrentQuote(getRandomQuote());
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // Rotate quotes every 45 seconds for more gentle pacing
    const interval = setInterval(() => {
      setCurrentQuote(getRandomQuote());
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  const handleWelcomeComplete = (name: string) => {
    const updatedProfile = { ...userProfile, name: name || undefined };
    setUserProfile(updatedProfile);
    saveUserProfile(updatedProfile);
    setShowWelcomeModal(false);
    
    // Add personalized welcome message
    const welcomeMessage: Message = {
      id: 'welcome',
      content: name 
        ? `Hello ${name}, beautiful soul 💙 I'm Calm.ai, your calming companion, and I'm genuinely honored that you're here with me today. This is a safe space where your feelings matter, where you don't have to pretend to be okay, and where you're never alone.\n\nI want you to know that whatever brought you here today - whether you're struggling with work stress, relationship challenges, financial worries, or just need someone to listen - I'm here for you completely. I understand that life can feel overwhelming sometimes, and I'm here to help you find your calm.\n\nHow are you feeling right now, ${name}? Please, be as honest as you need to be. I'm listening with my whole heart. 🌸\n\nWhenever you're ready, I can also suggest movies, music, and games that might help you feel better - just let me know what resonates with you! ✨`
        : "Hello there, beautiful soul 💙 I'm Calm.ai, your calming companion, and I'm genuinely honored that you're here with me today. This is a safe space where your feelings matter, where you don't have to pretend to be okay, and where you're never alone.\n\nI want you to know that whatever brought you here today - whether you're struggling with work stress, relationship challenges, financial worries, or just need someone to listen - I'm here for you completely. I understand that life can feel overwhelming sometimes, and I'm here to help you find your calm.\n\nHow are you feeling right now? Please, be as honest as you need to be. I'm listening with my whole heart. 🌸\n\nWhenever you're ready, I can also suggest movies, music, and games that might help you feel better - just let me know what resonates with you! ✨",
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    // Update user profile based on message content
    const updatedProfile = updateProfileFromMessage(inputText, userProfile);
    if (JSON.stringify(updatedProfile) !== JSON.stringify(userProfile)) {
      setUserProfile(updatedProfile);
      saveUserProfile(updatedProfile);
    }

    // Detect emotion and problem context
    const emotion = detectEmotion(inputText);
    const problemContext = detectProblemContext(inputText);
    
    userMessage.emotion = emotion;
    userMessage.problemContext = problemContext;

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Update context with conversation memory and problem patterns
    const newContext: ConversationContext = {
      ...context,
      emotionHistory: [...context.emotionHistory, emotion.primary],
      messageCount: context.messageCount + 1,
      lastEmotion: emotion.primary,
      userConcerns: [...context.userConcerns, ...emotion.keywords],
      supportLevel: context.messageCount > 5 ? 'established' : context.messageCount > 2 ? 'building' : 'initial',
      problemPatterns: problemContext ? [...context.problemPatterns, problemContext] : context.problemPatterns,
      userBackground: {
        ...context.userBackground,
        mentionedWork: context.userBackground.mentionedWork || problemContext?.category === 'work',
        mentionedRelationship: context.userBackground.mentionedRelationship || problemContext?.category === 'relationship',
        mentionedFinances: context.userBackground.mentionedFinances || problemContext?.category === 'financial',
        mentionedFamily: context.userBackground.mentionedFamily || problemContext?.category === 'family',
        mentionedHealth: context.userBackground.mentionedHealth || problemContext?.category === 'health'
      }
    };
    setContext(newContext);

    // Generate response with more realistic timing
    setTimeout(() => {
      const response = generateResponse(inputText, emotion, newContext, problemContext, updatedProfile.name);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 2000); // More human-like response time
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const generateEntertainmentRecommendations = (emotion: string, profile: UserProfile): EntertainmentRecommendation => {
    const movies = getMovieRecommendations(emotion, profile, 2);
    const playlists = getPlaylistRecommendations(emotion, profile, 2);
    const games = getGameRecommendations(emotion, profile, 2);
    
    const personalizedMessages = getPersonalizedRecommendations(emotion, profile);
    const defaultMessage = "I've curated some personalized recommendations that might help you find your calm right now 💜";
    
    return {
      movies,
      playlists,
      games,
      personalizedMessage: personalizedMessages.length > 0 ? personalizedMessages[0] : defaultMessage
    };
  };

  const handleEntertainmentSelect = (type: 'movie' | 'playlist' | 'game', id: string) => {
    let updatedProfile = userProfile;
    
    if (type === 'movie') {
      updatedProfile = markMovieAsWatched(id, userProfile);
    } else if (type === 'game') {
      updatedProfile = markGameAsPlayed(id, userProfile);
    }
    
    setUserProfile(updatedProfile);
    saveUserProfile(updatedProfile);
    
    // Add a supportive message
    const supportMessage: Message = {
      id: Date.now().toString(),
      content: `That's a wonderful choice! 💜 I hope this ${type} brings you some peace and comfort. Remember, taking time for yourself is an act of self-care and healing. You deserve this moment of calm. ✨`,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, supportMessage]);
    setShowEntertainment(null);
  };

  const handleProfileSave = (newProfile: UserProfile) => {
    setUserProfile(newProfile);
    saveUserProfile(newProfile);
    
    // Add a supportive message about updating preferences
    const supportMessage: Message = {
      id: Date.now().toString(),
      content: `Thank you for sharing your preferences with me! 💙 This helps me understand you better and provide more personalized recommendations that truly resonate with you. I'm here to support you in the way that feels most comforting and helpful. 🌸`,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, supportMessage]);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50'
    }`}>
      <div className="container mx-auto max-w-6xl h-screen flex flex-col">
        {/* Header */}
        <div className={`backdrop-blur-md border-b sticky top-0 z-10 transition-all duration-300 ${
          isDarkMode 
            ? 'bg-slate-800/80 border-slate-700/50' 
            : 'bg-white/80 border-white/50'
        }`}>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white">
                <img 
                  src="/c.png" 
                  alt="Calm.ai Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Calm.ai
                </h1>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Your mindful companion 🧠💙
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {userProfile.name && (
                <div className="text-right">
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Welcome back, {userProfile.name}
                  </p>
                </div>
              )}
              <button
                onClick={() => setShowProfileEditor(true)}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-700 hover:bg-slate-600 text-cyan-400' 
                    : 'bg-gray-100 hover:bg-gray-200 text-cyan-600'
                }`}
                title="Edit Preferences"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-700 hover:bg-slate-600 text-yellow-400' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <div className="text-right">
                <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <MessageCircle className="w-4 h-4" />
                  <span>{messages.length} messages shared</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex gap-6 p-6 overflow-hidden">
          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Motivational Quote */}
            <div className={`border-2 rounded-2xl p-6 mb-6 shadow-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-cyan-900/50 to-teal-900/50 border-cyan-700/50' 
                : 'bg-gradient-to-r from-cyan-100 to-teal-100 border-cyan-200'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className={`w-5 h-5 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <span className={`text-sm font-bold ${isDarkMode ? 'text-cyan-300' : 'text-cyan-800'}`}>
                  A gentle reminder for you
                </span>
              </div>
              <p className={`text-sm italic leading-relaxed ${isDarkMode ? 'text-cyan-200' : 'text-cyan-700'}`}>
                {currentQuote}
              </p>
            </div>

            {/* Entertainment Recommendations */}
            {showEntertainment && (
              <EntertainmentRecommendations
                recommendations={showEntertainment}
                onSelectItem={handleEntertainmentSelect}
                onDismiss={() => setShowEntertainment(null)}
                isDarkMode={isDarkMode}
              />
            )}

            {/* Self-Care Card */}
            {showSelfCare && (
              <SelfCareCard
                activity={showSelfCare}
                onDismiss={() => setShowSelfCare(null)}
              />
            )}

            {/* Messages */}
            <div className={`flex-1 overflow-y-auto rounded-2xl p-6 mb-6 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/30 backdrop-blur-sm' 
                : 'bg-white/40 backdrop-blur-sm'
            }`}>
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              
              {isTyping && (
                <div className="flex justify-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-md overflow-hidden bg-white">
                      <img 
                        src="/c.png" 
                        alt="Calm.ai" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className={`rounded-2xl rounded-bl-md px-5 py-4 shadow-lg ${
                      isDarkMode ? 'bg-slate-700' : 'bg-white'
                    }`}>
                      <div className="flex gap-1">
                        <div className={`w-2 h-2 rounded-full animate-bounce ${
                          isDarkMode ? 'bg-gray-400' : 'bg-gray-500'
                        }`}></div>
                        <div className={`w-2 h-2 rounded-full animate-bounce ${
                          isDarkMode ? 'bg-gray-400' : 'bg-gray-500'
                        }`} style={{ animationDelay: '0.1s' }}></div>
                        <div className={`w-2 h-2 rounded-full animate-bounce ${
                          isDarkMode ? 'bg-gray-400' : 'bg-gray-500'
                        }`} style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className={`backdrop-blur-md rounded-2xl p-6 border-2 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/80 border-slate-700/50' 
                : 'bg-white/80 border-white/50'
            }`}>
              <div className="flex gap-4">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={userProfile.name 
                    ? `Share whatever is on your heart, ${userProfile.name}... I'm here to listen with compassion and understanding 💙`
                    : "Share whatever is on your heart... I'm here to listen with compassion and understanding 💙"
                  }
                  className={`flex-1 px-5 py-4 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none transition-all duration-200 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-200 text-gray-800 placeholder-gray-500'
                  }`}
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl hover:from-cyan-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-3 font-medium shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Send
                </button>
              </div>
              <p className={`text-xs mt-3 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                💙 I'm here to support you, but I'm not a replacement for professional mental health care when you need it
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80 hidden lg:block">
            <EmotionInsights context={context} />
            
            <div className={`backdrop-blur-md rounded-2xl p-5 border-2 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/80 border-slate-700/50' 
                : 'bg-white/80 border-white/50'
            }`}>
              <h3 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Quick Recommendations
              </h3>
              <button
                onClick={() => {
                  const entertainment = generateEntertainmentRecommendations('depression', userProfile);
                  setShowEntertainment(entertainment);
                }}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 mb-3 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 hover:from-blue-800/50 hover:to-indigo-800/50' 
                    : 'bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎬</span>
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      Movies & Music
                    </p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Personalized entertainment
                    </p>
                  </div>
                </div>
              </button>
              
              <button
                onClick={() => {
                  const activity = getSelfCareActivity('anxiety');
                  setShowSelfCare(activity);
                }}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-green-900/50 to-emerald-900/50 hover:from-green-800/50 hover:to-emerald-800/50' 
                    : 'bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌬️</span>
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      Self-Care Activities
                    </p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Gentle healing practices
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Modal */}
      {showWelcomeModal && (
        <WelcomeModal
          onComplete={handleWelcomeComplete}
          isDarkMode={isDarkMode}
        />
      )}

      {/* Profile Editor Modal */}
      {showProfileEditor && (
        <ProfileEditor
          profile={userProfile}
          onSave={handleProfileSave}
          onClose={() => setShowProfileEditor(false)}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
}

export default App;