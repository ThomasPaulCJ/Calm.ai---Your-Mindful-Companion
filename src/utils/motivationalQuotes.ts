export const motivationalQuotes = [
  "You are not alone in this darkness. Even when you can't see it, there is light waiting for you. 💙",
  "Your feelings are valid, and you don't have to carry them alone. I'm here with you. 🌸",
  "It's okay to not be okay. What matters is that you're still here, and that's enough for today. 💜",
  "You've survived every difficult day so far. That shows incredible strength, even when you don't feel it. 🌟",
  "Be gentle with yourself. You're doing the best you can with what you have right now. 🌿",
  "Your mental health matters. Taking care of yourself isn't selfish - it's necessary and brave. 💚",
  "Healing isn't linear. Some days will be harder than others, and that's perfectly normal. 🌙",
  "You don't have to be perfect or have it all figured out. You just have to be you. ✨",
  "This pain you're feeling is temporary, even when it doesn't feel that way. You will breathe easier again. 🌈",
  "You matter deeply. Your story matters. Your presence in this world makes a difference. 💝",
  "Small steps count. Getting out of bed, taking a shower, eating something - these are victories. 🌱",
  "You are worthy of love and kindness, especially from yourself. 💕",
  "It's brave to keep going when everything feels heavy. You are braver than you know. 🦋",
  "Your struggles don't define you, but your courage in facing them does. 💪",
  "Even in your darkest moments, you are not broken. You are human, and that's beautiful. 🌺"
];

export function getRandomQuote(): string {
  return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}