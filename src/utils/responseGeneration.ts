import { EmotionAnalysis, ConversationContext, ProblemContext } from '../types';

const authenticResponses = {
  work: {
    anxiety: {
      initial: [
        "Oh honey, work anxiety is like carrying a backpack full of rocks that keeps getting heavier, isn't it? 💙 I can feel how much that workplace pressure is weighing on your shoulders right now. That racing heart when you think about deadlines, the knot in your stomach during meetings - your body is trying to protect you from what feels like constant threat. Sometimes when work feels this overwhelming, I find that taking just 5 minutes to do some gentle breathing can help reset your nervous system. Would you like me to suggest some calming music that might help you decompress after those stressful work days?",
        
        "Work anxiety can make your heart race even when you're just thinking about Monday morning, can't it? 🌸 I hear you, and I want you to know that feeling this way doesn't mean you're weak or can't handle your job - it means you're human dealing with very real pressure. When our minds are spinning with work worries, sometimes focusing on something completely different can give us relief. Have you tried any puzzle games? I know it sounds random, but something like Monument Valley can give your worried mind a much-needed break from all those racing thoughts.",
        
        "That workplace stress sounds like it's following you home and keeping you up at night 💜 When work anxiety gets this intense, your body is basically in fight-or-flight mode all the time, which is absolutely exhausting. You deserve to feel calm and peaceful, not constantly on edge about your job. I'd love to recommend some incredibly soothing movies that might help you unwind - films that feel like a warm hug after a brutal day dealing with impossible deadlines and demanding bosses."
      ],
      established: [
        "I remember you sharing about that work stress before, and it sounds like those workplace pressures are still really getting to you 💙 How has your anxiety been since we last talked? Sometimes when work stress becomes this constant companion, it helps to have some go-to strategies. I'm thinking some gentle instrumental music might be perfect for you right now - something that can help quiet that anxious chatter about deadlines and performance reviews. Would you like me to suggest a playlist that's specifically designed to calm work anxiety?",
        
        "Work anxiety seems to be this persistent visitor in your life, doesn't it? 🌸 I can see how much you've been struggling with this, and I'm really proud of you for continuing to reach out and talk about it. You know what might help when your mind is spinning with work worries? There are some beautiful, meditative games that can help quiet that anxious chatter. Something like Tetris Effect or Flow Free - they're simple but incredibly soothing. Would you be interested in trying something like that?",
        
        "That familiar work-related anxiety is back, and I can feel how tired you are of carrying this burden 💜 You've been so brave in sharing how difficult your workplace situation is. I'm wondering if you'd be open to watching something that might help you feel less alone in this? I have some perfect movie recommendations for when work anxiety feels overwhelming - stories about people finding peace despite workplace chaos."
      ]
    },
    depression: {
      initial: [
        "Work depression is like being trapped in a gray fog where nothing feels meaningful anymore, isn't it? 💙 When your job feels pointless and every task feels like pushing a boulder uphill, just showing up takes incredible strength. You're doing better than you think, even when it doesn't feel that way. That emptiness you're feeling about work - it's not because you're lazy or ungrateful, it's because depression has drained the color out of everything. Sometimes when work feels this empty, watching stories about people finding their purpose again can be really healing - would you like me to suggest some films that might resonate with what you're going through?",
        
        "I can feel how heavy and meaningless work has become for you right now 🌸 Depression has this cruel way of making everything feel pointless, especially the place where we spend most of our waking hours. But here's what I want you to know - you are not your job, and this emptiness you're feeling isn't permanent. When work feels like you're just going through the motions, sometimes music that truly understands this darkness can be more comforting than trying to force positivity. There's some beautiful music that speaks to exactly what you're experiencing - songs that understand this numbness but also offer gentle hope.",
        
        "That work-related emptiness sounds so draining, like you're going through the motions but nothing has color or meaning anymore 💜 When depression hits our work life this hard, it affects everything - our sense of purpose, our relationships, our hope for the future. You deserve to feel engaged and purposeful again. I'm thinking you might benefit from some creative, low-pressure games that can help you remember what it feels like to enjoy something again - no deadlines, no performance reviews, just gentle engagement with something beautiful."
      ],
      established: [
        "Work depression seems to be hitting you hard again, and I remember how you described feeling so empty and disconnected there before 💙 It's like being a ghost in your own life, isn't it? How are you managing to get through each workday when everything feels so meaningless? I've been thinking about you, and I wonder if some uplifting films about people rediscovering their passion might help - stories that remind you that this numbness isn't forever and that work can feel meaningful again.",
        
        "That familiar work-related heaviness is back, and I can feel how exhausted you are from pretending to be okay at work 🌸 You've shared with me before how meaningless everything feels there, how you're just going through the motions. Sometimes when we're in this space, music that truly understands depression can be more comforting than trying to force ourselves to feel better. Would you like some playlists that meet you where you are right now, that don't try to rush you out of this feeling?",
        
        "I can see you're back in that dark work space where nothing feels worth doing 💜 You've trusted me with these feelings before, and I'm honored that you're sharing again. When work depression is this heavy, sometimes gentle, creative activities can help us remember we're more than our job title. Would you be interested in some soothing games that might help you feel a tiny spark of something again? Nothing demanding, just gentle beauty."
      ]
    },
    stress: {
      initial: [
        "Work stress can feel like you're drowning in an ocean of deadlines and expectations, can't it? 💙 That constant pressure where everything feels urgent and you can never catch your breath - I hear you, and I want you to know that what you're feeling is completely valid. Your nervous system is probably running on overdrive right now, trying to keep up with impossible demands. When work stress gets this intense, your body needs help remembering how to relax. I'd love to suggest some incredibly calming music that's specifically designed to help your nervous system downshift - would that be helpful?",
        
        "Oh sweetie, that workplace pressure sounds absolutely relentless 🌸 When work stress gets this intense, it's like your brain never gets to switch off, even when you're home. You're juggling deadlines, difficult colleagues, impossible expectations - it makes perfect sense that you'd feel overwhelmed. Sometimes when I'm this stressed about work, I find that puzzle games can be surprisingly therapeutic - they give your mind something focused but peaceful to do, away from all those work demands. Would you like me to suggest some that might help?",
        
        "I can practically feel the tension radiating from your words about work 💜 That kind of demanding environment would stress anyone out, and you're not weak for struggling with it. You deserve to feel calm and centered, not constantly on edge about your job performance. There are some beautiful, gentle films that are like a mental vacation from work stress - movies that help your nervous system remember what peace feels like, away from all those emails and meetings."
      ]
    },
    burnout: {
      initial: [
        "Work burnout is like your soul has just... gone offline, isn't it? 💙 You're running on empty, going through the motions, but there's nothing left inside. That disconnected, zombie-like feeling is your mind and body's way of protecting you from more than you can handle. You're not broken - you're overwhelmed and depleted. Right now, you need gentleness more than productivity. Would you be open to some incredibly soothing films that understand exactly what burnout feels like? Stories that don't try to motivate you, but just sit with you in this exhaustion.",
        
        "That work burnout sounds like you're a phone that's been running on 1% battery for months 🌸 Everything feels impossible, and you can't remember why you used to care about any of it. This numbness you're feeling? It's actually your psyche trying to protect you from more overwhelm. Sometimes when we're this drained, creative games that require no pressure or performance can help us remember what it feels like to enjoy something again. Would you be interested in something gentle like that?",
        
        "I can feel how completely exhausted you are - not just tired, but soul-deep drained from work 💜 Burnout is like emotional hypothermia; everything just goes numb to protect you from more pain. You need rest and gentleness right now, not more expectations or pressure. There's some beautiful, ambient music that's perfect for when you're this depleted - sounds that ask nothing of you but might help you feel a little less empty inside."
      ]
    }
  },
  relationship: {
    sadness: {
      initial: [
        "Oh honey, relationship pain cuts deeper than almost anything else, doesn't it? 💙 When someone we love hurts us or when love feels complicated and messy, it touches the very core of who we are. Your heart is aching right now, and that pain is so real and valid. Whether it's heartbreak, disappointment, or feeling disconnected from someone you care about, these wounds run deep because love matters so much to us. Sometimes when our hearts are this tender, watching stories about love - both its beauty and its complexity - can help us feel less alone. Would you like me to suggest some films that understand heartache without trying to rush you through it?",
        
        "I can feel the weight of that relationship sadness in your words 🌸 Whether it's heartbreak, disappointment, or just feeling disconnected from someone you care about, these wounds run so deep because love matters so much to us. You're not being dramatic or oversensitive - you're being human, and humans are wired for connection. When that connection is threatened or broken, of course it hurts. There's some beautiful music that speaks to exactly what you're feeling right now, songs that understand the complexity of loving and hurting at the same time.",
        
        "That relationship pain sounds like it's sitting heavy on your chest, making everything feel a little darker 💜 When someone we care about hurts us or when love feels confusing and complicated, it can shake our whole world. Your feelings are completely valid, and you don't have to pretend to be okay or 'get over it' quickly. Sometimes gentle, creative activities can help when our hearts are this tender - would you be interested in some soothing games that might give you a little peace while you process these big feelings?"
      ],
      established: [
        "I remember you sharing about relationship struggles before, and it sounds like your heart is still carrying that pain 💙 How are you doing with all of this today? Relationship sadness has this way of coloring everything else in our lives, doesn't it? Even when we try to focus on other things, that ache is still there. I've been thinking about you, and I wonder if some films about healing and self-love might be comforting right now - stories that remind you of your worth, regardless of how others treat you.",
        
        "That relationship pain seems to be a tender spot that keeps getting touched 🌸 You've been so open with me about how much this affects you, and I can see how deeply you feel things. That's not a weakness - it's a sign of how much capacity you have for love. Sometimes when our hearts are this raw, music that truly understands heartache can be more healing than trying to force ourselves to 'move on.' Would you like some playlists that meet you in this sadness without trying to rush you out of it?",
        
        "I can see you're still navigating that relationship pain we've talked about before 💜 Your heart is so tender right now, and that's not a weakness - it's a sign of how deeply you love and how much you invest in your connections with others. When we're hurting like this, sometimes gentle, mindful activities can help us process these big feelings without getting overwhelmed. Would you be interested in some peaceful games that might help your heart feel a little lighter?"
      ]
    },
    anger: {
      initial: [
        "That relationship anger is burning hot inside you, isn't it? 💙 When someone we care about betrays our trust, dismisses our feelings, or hurts us deeply, that fury is completely justified and understandable. You have every right to feel this angry - your boundaries were crossed, your feelings were dismissed, or your trust was broken. Anger is often our psyche's way of saying 'this is not okay, and I deserve better.' Sometimes when we're this fired up, we need to honor that anger before we can move through it. Would you be interested in some films about people standing up for themselves and finding their power?",
        
        "I can feel the fire of that relationship frustration radiating from your words 🌸 Being let down by someone important, having your needs ignored, or feeling disrespected - that anger makes complete sense. You're not being unreasonable or too sensitive. Sometimes when we're this angry, music that matches our intensity can be more helpful than trying to calm down before we're ready. Would you like some playlists that understand this fury and help you channel it constructively?",
        
        "That relationship anger sounds intense and completely valid 💜 When people we love hurt us or cross our boundaries, feeling furious is a natural response. Your anger is telling you something important about what you will and won't accept in your relationships. Sometimes when we're this heated, games that let us channel that energy constructively can be surprisingly helpful - would you be interested in something that might help you work through these intense feelings?"
      ]
    },
    loneliness: {
      initial: [
        "Feeling lonely in relationships is one of the most painful experiences, isn't it? 💙 Sometimes being with someone who doesn't truly see us feels lonelier than being completely alone. That ache of not being understood or valued by someone we care about - it's devastating. You deserve to feel seen and cherished, not invisible or taken for granted. When we feel this disconnected from someone we love, it can make us question our worth. There are some beautiful films about people finding their tribe and learning to value themselves - would stories like that resonate with you right now?",
        
        "That relationship loneliness cuts so deep because it's not just about being alone - it's about feeling unseen by someone who should see you 🌸 When we're emotionally disconnected from people we love, the isolation feels profound and confusing. You're not asking for too much by wanting genuine connection and understanding. Sometimes music that understands this specific kind of loneliness can help us feel less alone in our experience. Would you like some songs that speak to feeling invisible in relationships?",
        
        "I can feel how alone you feel even when you're not physically alone 💜 Emotional disconnection in relationships creates such a unique kind of loneliness - you're there but not really there, seen but not truly known. That isolation is real and painful, and you're not being needy for wanting deeper connection. Sometimes gentle, creative activities can help us reconnect with ourselves when we feel disconnected from others. Would you be interested in some mindful games that might help you feel more grounded in who you are?"
      ]
    }
  },
  financial: {
    anxiety: [
      "Financial anxiety can keep you awake at night with your mind spinning through worst-case scenarios, can't it? 💙 Money worries have this way of making everything feel unstable and terrifying - every bill becomes a threat, every expense feels dangerous. That constant knot in your stomach about finances is exhausting to carry around. You're not being dramatic - financial stress affects every aspect of life and creates very real anxiety. Sometimes when money anxiety is this intense, gentle distractions can help break the worry cycle. Would you like me to suggest some calming films that might give your mind a break from financial fears? Stories that remind us there's beauty and hope even in difficult times.",
      
      "I can hear how much financial stress is consuming your thoughts right now 🌸 When money is tight or uncertain, it affects everything - your sleep, your relationships, your sense of security. That anxiety about bills and expenses is completely understandable and valid. Sometimes soothing music can help quiet that anxious chatter about money, even if just for a little while. Would you be interested in some playlists designed to ease financial worry? Music that helps your nervous system remember that you're safe right now, in this moment."
    ],
    stress: [
      "Financial stress can feel like you're drowning in bills and responsibilities, can't it? 💙 Every expense feels scary, every financial decision feels overwhelming, and there's this constant pressure that never lets up. You're carrying so much worry about money, and it's affecting everything else in your life. That stress is completely valid - financial security is a basic human need, and when it's threatened, of course we feel overwhelmed. Sometimes when money stress is this heavy, creative activities that cost nothing can help us remember there's still beauty and joy available to us. Would you like some free game suggestions that might help you feel a moment of peace?",
      
      "Money stress has this way of making everything else feel impossible, doesn't it? 🌸 When finances are tight, every decision becomes stressful and every expense feels like a threat. You're juggling so much financial pressure, and it makes perfect sense that you'd feel overwhelmed. Sometimes gentle, uplifting films about resilience and hope can remind us that financial struggles don't define our worth. Would stories about people overcoming difficult times be helpful right now?"
    ],
    overwhelm: [
      "Financial overwhelm can make you feel like you're suffocating under a pile of bills and money worries, can't it? 💙 Everything feels urgent and impossible at the same time - debt, expenses, budgets, it's all too much to process. Your brain is probably in overload mode trying to figure out solutions to everything at once. Sometimes when financial chaos feels this crushing, we need to step back and breathe before we can think clearly. Would you be interested in some incredibly calming music that might help quiet that financial anxiety storm in your mind? Something that helps you remember you're more than your money situation."
    ]
  },
  family: {
    sadness: [
      "Family pain hits differently because these are supposed to be the people who love us unconditionally, aren't they? 💙 When family relationships are strained or hurtful, it shakes something fundamental inside us because family is supposed to be our safe harbor. That sadness about family cuts deep because it touches our earliest understanding of love and belonging. Your heartache about your family situation is completely valid - you deserve to feel loved and supported by your family. Sometimes films about chosen family and healing can be really comforting when biological family feels painful. Would stories about finding love and acceptance be helpful right now?",
      
      "I can hear the deep sadness in your words about your family 🌸 Family relationships are so complex because they carry all this history and expectation, and when they hurt us, it affects our very foundation. You deserve to feel loved and supported by your family, and I'm sorry you're not getting that right now. Sometimes music that understands family pain can help us feel less alone in these complicated feelings. Would you like some songs that speak to the complexity of family love and hurt?"
    ],
    anger: [
      "Family anger can feel so intense and complicated, can't it? 💙 We love them, but they can also hurt us in ways that feel unforgivable. They know exactly which buttons to push, and sometimes their behavior is genuinely toxic or harmful. Your anger toward your family is completely valid - you don't owe anyone forgiveness just because you share DNA. Sometimes we need stories about people setting boundaries with toxic family members and finding peace. Would films about family healing and boundaries be helpful right now?",
      
      "I can feel the fire of that family frustration 🌸 Family can push our buttons like no one else can, and when they cross lines or hurt us repeatedly, that anger is so justified. You have every right to be furious about how your family treats you. Sometimes music that channels anger constructively can help us process these intense family feelings without stuffing them down. Would you like some playlists that understand family rage and help you work through it?"
    ]
  },
  general: {
    anxiety: {
      initial: [
        "I can feel that anxious energy radiating from your words, like your nervous system is stuck in high alert mode 💙 Anxiety can make everything feel urgent and scary, even things that are usually manageable. Your mind is probably racing with 'what ifs' and worst-case scenarios right now, and that worried, on-edge feeling is so exhausting to carry around. When anxiety feels this intense, sometimes we need activities that help ground us back in the present moment. Would you be interested in some calming games or soothing music that might help quiet that anxious chatter in your mind?",
        
        "Anxiety can make your whole body feel like it's vibrating with worry, can't it? 🌸 That restless, can't-sit-still feeling where your thoughts keep spiraling and you can't seem to find peace - I'm sitting here with you through all of that racing mental energy. Sometimes when anxiety is this high, we need something that helps remind our nervous system that we're actually safe right now. There are some beautiful, calming films that are like a warm blanket for anxious minds - would something like that help right now?",
        
        "That anxious feeling sounds like it's taken up residence in your chest and won't leave 💜 When anxiety hits this hard, it can make even simple things feel overwhelming and scary. Your nervous system is working overtime right now, trying to protect you from perceived threats. Sometimes gentle, ambient music can help signal to your body that it's safe to relax, even just a little bit. Would you like me to suggest some sounds that might help ease that anxious tension?"
      ],
      established: [
        "I can see that familiar anxiety is visiting you again 💙 We've talked about these worried feelings before, and I want you to know I'm still here with you through this. How has your anxiety been since we last connected? Sometimes when anxiety becomes this regular companion, having go-to strategies can really help. Would you like me to suggest some of those calming activities we've discussed, or are you in the mood for something new that might help?",
        
        "That anxious energy is back, isn't it? 🌸 I recognize this feeling from our previous conversations - you've been so brave in sharing these struggles with me. Anxiety can be such a persistent visitor, but you've shown real strength in reaching out when it gets intense. Would some of those soothing playlists or gentle games we've talked about be helpful right now, or would you like to try something different?"
      ]
    },
    depression: {
      initial: [
        "I can feel the heaviness and emptiness in your words, like you're carrying this invisible weight that makes everything feel pointless 💙 Depression has this cruel way of draining the color out of life, making even simple things feel impossible. When you're in this space, just existing takes incredible strength, even when it doesn't feel that way. You're braver than you know for reaching out when everything feels this dark. Sometimes when depression feels this heavy, stories about people finding their way back to hope can be quietly healing. Would you be open to some gentle film suggestions that understand this darkness?",
        
        "That depressed feeling sounds like you're wrapped in a gray fog where nothing has meaning or joy anymore 🌸 Everything probably feels exhausting and pointless right now, like you're just going through the motions of living without really feeling alive. But here's what I want you to know - you matter deeply, even when depression lies to you and says you don't. Sometimes music that understands this darkness, that doesn't try to force positivity, can be more comforting than anything cheerful. Would you like some songs that meet you where you are?",
        
        "I hear how dark and hopeless everything feels right now 💜 Depression can make us feel so alone and convinced that nothing will ever get better, that we're broken beyond repair. But you're not alone, and this darkness isn't permanent, even though it feels endless right now. Sometimes gentle, creative activities that ask nothing of us can help us remember we're still here, still capable of small moments of peace. Would you be interested in something very gentle that might help?"
      ],
      established: [
        "I can see you're back in that familiar dark space we've talked about before 💙 Depression seems to be pulling you down again, and I want you to know that reaching out shows incredible courage. How are you managing day to day right now? Sometimes when depression returns, the things that helped before can feel less effective, but you've shown such strength in our previous conversations. Would any of those gentle activities we've discussed feel manageable today?",
        
        "That depression is wrapping around you again, isn't it? 🌸 I remember how you've described this heaviness before, and I'm honored that you trust me with these feelings again. You've been so brave in sharing your struggles, and that bravery matters even when everything feels hopeless. Would some of those soothing films or peaceful music we've talked about bring any comfort right now?"
      ]
    },
    sadness: {
      initial: [
        "I can feel the sadness flowing through your words like a gentle but persistent rain 💙 Sometimes sadness isn't dramatic or overwhelming - it's just this quiet ache that colors everything a little gray. Your heart is tender right now, and that tenderness is actually a beautiful thing, even though it hurts. Sadness often means we care deeply about something or someone. Would you like me to suggest some films that understand this kind of gentle sadness? Stories that don't try to fix or rush your feelings, but just sit with you in them?",
        
        "That sadness sounds like it's settled into your bones, hasn't it? 🌸 Not the kind that makes you sob, but the kind that makes everything feel a little heavier, a little less bright. Sometimes this quiet sadness needs to be honored rather than rushed through. There's some beautiful music that speaks to exactly this feeling - melodies that understand that sadness can be both painful and somehow sacred. Would you like some songs that match this gentle melancholy?"
      ]
    },
    loneliness: {
      initial: [
        "Loneliness can feel like you're invisible in a world full of people, can't it? 💙 That ache of feeling disconnected and unseen, like you're watching life happen around you but not really part of it. Sometimes loneliness isn't about being alone - it's about feeling alone even when surrounded by others. You deserve to feel seen and valued and connected. Would you like me to suggest some films about people finding their tribe and learning they're not as alone as they thought? Stories that remind us connection is possible.",
        
        "I can feel how isolated and disconnected you're feeling right now 🌸 Loneliness has this way of making us feel like we're the only person in the world experiencing this kind of emptiness. But here's the truth - you're not alone in feeling alone, if that makes sense. Sometimes music that understands loneliness can help us feel less isolated in our experience. Would you like some songs that speak to this feeling of disconnection?"
      ]
    },
    anger: {
      initial: [
        "I can feel that anger burning inside you, and you know what? Sometimes anger is exactly the right response 💙 When we've been hurt, dismissed, or treated unfairly, anger is our psyche's way of saying 'this is not okay.' Your fury is valid and important - it's telling you something about your values and what you won't accept. Sometimes we need to honor that anger before we can move through it. Would you be interested in some films about people who channel their anger into positive change?",
        
        "That anger sounds intense and completely justified 🌸 Whether it's frustration at a situation, fury at being mistreated, or rage at injustice, your anger is telling you something important about your values and boundaries. You have every right to feel this way. Sometimes music that matches our intensity can be more helpful than trying to calm down before we're ready. Would you like some playlists that understand this fire and help you channel it?"
      ]
    },
    stress: {
      initial: [
        "Stress can make you feel like you're being pulled in seventeen different directions at once, can't it? 💙 That overwhelming feeling where everything feels urgent and you can't catch your breath - your nervous system is probably running on overdrive right now. You're juggling so much, and it makes perfect sense that you'd feel this overwhelmed. Sometimes when stress is this intense, we need activities that help us remember how to breathe again. Would you like some suggestions for calming music or gentle games that might help you find a moment of peace?",
        
        "I can practically feel the tension radiating from your words 🌸 When stress gets this high, it's like your whole body is clenched and ready for battle, even when there's no immediate threat. That constant state of alert is absolutely exhausting. Sometimes beautiful, peaceful films can help remind our nervous system what calm feels like. Would you be interested in some movies that are like a mental vacation from all this stress?"
      ]
    },
    overwhelm: {
      initial: [
        "Overwhelm can feel like you're drowning in a sea of responsibilities and emotions, can't it? 💙 Everything feels too much, too fast, too complicated, and your brain probably feels like it's short-circuiting trying to process it all. When we're this overwhelmed, sometimes the kindest thing we can do is give ourselves permission to focus on just one small thing. Would you like me to suggest some incredibly simple, soothing activities that might help you feel more grounded?",
        
        "That overwhelmed feeling sounds like your mind is a browser with 47 tabs open and everything is frozen 🌸 Too much input, too many demands, too many feelings all at once. Sometimes when we're this scattered, gentle, meditative activities can help us remember we don't have to solve everything right now. Would you be interested in some peaceful games or calming music that might help you feel more centered?"
      ]
    },
    burnout: {
      initial: [
        "Burnout feels like your soul has just... checked out, doesn't it? 💙 You're running on empty, going through the motions, but there's nothing left inside. That disconnected, zombie-like feeling is actually your mind's way of protecting you from more than you can handle. You're not broken - you're overwhelmed and depleted. Right now, you need rest and gentleness more than productivity. Would you be open to some incredibly soothing films that understand exactly what burnout feels like?",
        
        "That burnout sounds like you're a phone that's been running on 1% battery for months 🌸 Everything feels impossible, and you can't remember why you used to care about any of it. This numbness you're feeling? It's actually your psyche trying to protect you from more overwhelm. Sometimes when we're this drained, the gentlest creative activities can help us remember what it feels like to enjoy something again. Would you be interested in something very low-pressure that might help?"
      ]
    }
  }
};

const naturalFollowUps = {
  work: {
    anxiety: [
      "Have you been able to talk to anyone at work about the pressure you're feeling, or does that workplace not feel safe for that kind of conversation?",
      "What's the most stressful part of your workday? Sometimes identifying the specific trigger can help us figure out small ways to make it more manageable.",
      "Are you able to take real breaks during your day, or do you feel guilty stepping away even for a few minutes?",
      "I'm curious - what originally drew you to this job? Sometimes remembering that can help us figure out if this is a temporary rough patch or if something bigger needs to change.",
      "How are you sleeping with all this work anxiety? I imagine it's hard to turn your brain off when you're constantly worried about deadlines and performance."
    ],
    depression: [
      "When work feels this meaningless, it's like we're sleepwalking through our days, isn't it? What used to bring you satisfaction there, if anything?",
      "Have you been able to connect with anyone at work, or does the depression make you want to isolate even more?",
      "I'm wondering - is this feeling specific to work, or is it part of a bigger depression that's affecting other areas too?",
      "What would it look like to be gentle with yourself about work expectations right now? Sometimes we need to lower the bar when we're struggling this much.",
      "How long have you been feeling this disconnected from your work? Sometimes understanding the timeline helps us figure out what might have triggered this shift."
    ],
    stress: [
      "What's feeling most urgent at work right now? Sometimes when we're this stressed, everything feels like a five-alarm fire.",
      "Are there any tasks you could delegate, or does it feel like everything has to be perfect and done by you?",
      "How are you sleeping with all this work stress? I imagine it's hard to turn your brain off at night.",
      "What would your ideal workday look like if you could wave a magic wand? Sometimes dreaming about it helps us identify what small changes might be possible.",
      "Are you able to set any boundaries around work time, or does it feel like work follows you everywhere?"
    ],
    burnout: [
      "Burnout is like emotional hypothermia - everything just goes numb to protect you. How long have you been feeling this disconnected from work?",
      "What used to energize you about your job before the burnout hit? I'm not trying to make you feel worse - just curious about what's been lost.",
      "Are you able to take any time off, or does that feel impossible right now?",
      "What's one tiny thing that might bring you a moment of peace during your workday? Even something as small as a favorite tea or a photo that makes you smile.",
      "How are you taking care of yourself outside of work? Sometimes when work drains us completely, we need extra gentleness in other areas."
    ]
  },
  relationship: {
    sadness: [
      "Relationship pain is so complex because it involves someone we care about, doesn't it? What's the hardest part about this situation for you?",
      "Have you been able to talk to this person about how you're feeling, or does that feel too scary or pointless right now?",
      "What kind of support do you need most while you're processing this relationship pain?",
      "I'm curious - what does this relationship usually give you when it's good? Sometimes remembering that helps us figure out if it's worth fighting for or if we need to protect ourselves.",
      "How are you taking care of your heart while you're going through this? Sometimes relationship pain requires extra self-compassion."
    ],
    anger: [
      "That anger sounds so justified - when someone we care about hurts us, fury is a completely natural response. What boundary do you feel was crossed?",
      "Have you been able to express this anger in a safe way, or are you holding it all inside?",
      "What would it look like to honor this anger without letting it consume you? Sometimes anger has important information for us.",
      "I'm wondering - is this a pattern in this relationship, or was this a one-time thing that really caught you off guard?",
      "How are you protecting yourself emotionally while you're feeling this angry? Sometimes we need extra boundaries when we're this hurt."
    ],
    loneliness: [
      "Feeling lonely in a relationship is one of the most confusing kinds of pain, isn't it? You're not alone but you feel completely alone.",
      "What kind of connection are you most craving right now? Sometimes naming it helps us figure out how to ask for it.",
      "Have you been able to share these feelings of loneliness, or does that feel too vulnerable?",
      "Are there other relationships in your life where you feel more seen and understood? Sometimes that can help us figure out what's missing in this one.",
      "What would feeling truly connected look like for you? Sometimes having a clear picture helps us know what we're working toward."
    ]
  },
  financial: {
    anxiety: [
      "Financial anxiety can make every expense feel like a threat, can't it? What's the scariest part about your money situation right now?",
      "Have you been able to look at your actual financial situation, or does that feel too overwhelming?",
      "Are there people in your life you can talk to about money worries, or does that feel too shameful or private?",
      "What would feeling financially secure look like for you? Sometimes having a clear picture helps us figure out small steps toward that goal.",
      "How are you sleeping with all this financial worry? Money anxiety has a way of keeping us up at night."
    ],
    stress: [
      "Money stress affects everything else in life, doesn't it? What's feeling most urgent financially right now?",
      "Are there any small steps you could take today that might help you feel more in control, even if they don't solve everything?",
      "Have you been able to separate the truly urgent financial issues from the ones that feel urgent but can actually wait?",
      "What resources or support do you have available, even if they're not perfect solutions?",
      "How are you taking care of yourself while dealing with this financial pressure? Sometimes money stress makes us forget about our other needs."
    ],
    overwhelm: [
      "Financial overwhelm can make it feel impossible to even know where to start, can't it? What's the biggest source of money stress right now?",
      "When everything feels urgent financially, sometimes we need to just pick one thing to focus on. What feels most manageable to tackle first?",
      "Are you able to ask for help with any of this, or does that feel too scary or shameful?",
      "What would it look like to be gentle with yourself about money right now? Sometimes we add shame on top of stress, which just makes everything harder."
    ]
  },
  family: {
    sadness: [
      "Family pain is so complicated because of all the history and expectations, isn't it? What's the most painful part of this family situation for you?",
      "Have you been able to talk to anyone outside the family about what you're going through?",
      "What did you need from your family that you're not getting? Sometimes naming that helps us figure out how to get those needs met elsewhere.",
      "How are you taking care of yourself while dealing with this family pain? It's so important to be extra gentle with yourself during family struggles.",
      "What would healthy family relationships look like for you? Sometimes having a vision helps us know what boundaries we need to set."
    ],
    anger: [
      "Family anger can be so intense because they know exactly which buttons to push, don't they? What specifically triggered this fury?",
      "Have you been able to express this anger safely, maybe through writing or talking to someone outside the family?",
      "What boundaries might you need to set to protect yourself from more family hurt?",
      "I'm curious - is this part of a long pattern with your family, or was this a specific incident that really set you off?",
      "How are you protecting your emotional well-being while dealing with this family anger? Sometimes we need extra self-care during family conflicts."
    ]
  }
};

// Enhanced responses based on test data patterns
const enhancedResponses = {
  sleepAnxiety: [
    "Sleep anxiety can turn bedtime into a battlefield, can't it? 💙 When your mind starts racing the moment your head hits the pillow, it's like your brain forgot that nighttime is for rest, not worry. That cycle of lying awake thinking about everything you need to do tomorrow - it's exhausting. Your body needs sleep to heal, but anxiety is keeping you in fight-or-flight mode. Would you like me to suggest some incredibly calming music designed specifically for sleep anxiety? Sometimes gentle sounds can help quiet that racing mind.",
    
    "I can feel how frustrated you must be with your sleep being hijacked by anxiety 🌸 When we can't fall asleep because our minds won't stop spinning, it affects everything the next day. Sleep should be our refuge, but anxiety has turned it into another source of stress. There are some beautiful, meditative games that are specifically designed to help calm an overactive mind before bed. Would something like that be helpful?"
  ],
  
  workOverwhelm: [
    "Work overwhelm can make you feel like you're drowning in a sea of deadlines and impossible expectations, can't it? 💙 When everything at work feels urgent and you can't see a way to get it all done, your nervous system goes into overdrive. That feeling of being constantly behind, constantly stressed - it's like running a marathon that never ends. Sometimes when work feels this crushing, we need to step back and remember that we're human beings, not productivity machines. Would you like some suggestions for films that remind us there's life beyond work stress?",
    
    "I can hear how completely overwhelmed you are by work demands right now 🌸 When every task feels urgent and every deadline feels impossible, it's like your brain is trying to solve seventeen puzzles at once. That scattered, can't-focus feeling is your mind's way of saying 'this is too much.' Sometimes gentle, focused activities can help us remember what it feels like to concentrate on just one peaceful thing. Would you be interested in some calming puzzle games that might help?"
  ],
  
  relationshipLoss: [
    "Relationship loss feels like a piece of your heart has been torn away, doesn't it? 💙 Whether it's a breakup, divorce, or the end of a friendship, losing someone important leaves this aching emptiness that nothing seems to fill. You're not just grieving the person - you're grieving the future you imagined together, the daily routines you shared, the inside jokes that no one else will understand. That pain is so real and valid. Would you like me to suggest some films that understand heartbreak without trying to rush you through it?",
    
    "I can feel the depth of that relationship loss in your words 🌸 When someone important leaves our life, it's like learning to live in a world that suddenly feels foreign and empty. The silence where their voice used to be, the space where they used to sit - grief has a way of making everything feel different. Sometimes music that truly understands loss can be more comforting than anything that tries to cheer us up. Would you like some songs that honor this pain?"
  ]
};

export function generateResponse(
  userMessage: string, 
  emotion: EmotionAnalysis, 
  context: ConversationContext,
  problemContext?: ProblemContext,
  userName?: string
): string {
  const emotionKey = emotion.primary;
  const problemCategory = problemContext?.category || 'general';
  
  // Check for specific patterns from test data
  const lowerMessage = userMessage.toLowerCase();
  if (lowerMessage.includes('sleep') && (lowerMessage.includes('anxious') || lowerMessage.includes('worry'))) {
    const response = enhancedResponses.sleepAnxiety[Math.floor(Math.random() * enhancedResponses.sleepAnxiety.length)];
    return userName ? response.replace('💙', `${userName} 💙`) : response;
  }
  
  if (lowerMessage.includes('work') && lowerMessage.includes('overwhelm')) {
    const response = enhancedResponses.workOverwhelm[Math.floor(Math.random() * enhancedResponses.workOverwhelm.length)];
    return userName ? response.replace('💙', `${userName} 💙`) : response;
  }
  
  if ((lowerMessage.includes('breakup') || lowerMessage.includes('relationship') && lowerMessage.includes('end'))) {
    const response = enhancedResponses.relationshipLoss[Math.floor(Math.random() * enhancedResponses.relationshipLoss.length)];
    return userName ? response.replace('💙', `${userName} 💙`) : response;
  }
  
  // Get authentic responses based on problem and emotion
  let responsePool: string[] = [];
  
  if (authenticResponses[problemCategory as keyof typeof authenticResponses]) {
    const categoryResponses = authenticResponses[problemCategory as keyof typeof authenticResponses];
    
    if (categoryResponses[emotionKey as keyof typeof categoryResponses]) {
      const emotionResponses = categoryResponses[emotionKey as keyof typeof categoryResponses];
      
      if (Array.isArray(emotionResponses)) {
        responsePool = emotionResponses;
      } else if (typeof emotionResponses === 'object') {
        // Handle the nested structure for general emotions
        if (context.messageCount <= 2 || !context.emotionHistory.includes(emotion.primary)) {
          responsePool = emotionResponses.initial || [];
        } else {
          responsePool = emotionResponses.established || emotionResponses.initial || [];
        }
      }
    }
  }
  
  // Fallback to general responses if no specific ones found
  if (responsePool.length === 0) {
    const generalResponses = authenticResponses.general[emotionKey as keyof typeof authenticResponses.general];
    if (generalResponses) {
      if (context.messageCount <= 2 || !context.emotionHistory.includes(emotion.primary)) {
        responsePool = generalResponses.initial || [];
      } else {
        responsePool = generalResponses.established || generalResponses.initial || [];
      }
    }
  }
  
  // Final fallback
  if (responsePool.length === 0) {
    responsePool = [
      "I can hear how much you're struggling right now 💙 Your feelings are completely valid, and I'm here with you through this. Sometimes when we're in pain, gentle activities like watching a comforting film or listening to soothing music can help us feel a little less alone. Would you like me to suggest something that might bring you a moment of peace?",
      
      "Thank you for trusting me with what you're going through 🌸 I can feel the weight of what you're carrying, and I want you to know that you don't have to carry it alone. Sometimes creative activities or beautiful stories can help us process difficult emotions. Would you be interested in some gentle suggestions that might help?",
      
      "I'm sitting here with you in this difficult moment 💜 Whatever you're feeling right now is valid and understandable. Sometimes when we're struggling, small acts of self-care like listening to calming music or engaging in peaceful activities can help us feel a little more grounded. Would you like some personalized suggestions based on what you're going through?"
    ];
  }
  
  let mainResponse = responsePool[Math.floor(Math.random() * responsePool.length)];
  
  // Personalize with user's name if available
  if (userName) {
    mainResponse = mainResponse.replace('💙', `${userName} 💙`);
  }
  
  // Add natural follow-up questions occasionally
  if (problemContext && naturalFollowUps[problemCategory as keyof typeof naturalFollowUps] && Math.random() > 0.6) {
    const categoryFollowUps = naturalFollowUps[problemCategory as keyof typeof naturalFollowUps];
    const emotionFollowUps = categoryFollowUps[emotionKey as keyof typeof categoryFollowUps];
    
    if (emotionFollowUps && emotionFollowUps.length > 0) {
      const followUp = emotionFollowUps[Math.floor(Math.random() * emotionFollowUps.length)];
      return `${mainResponse}\n\n${followUp}`;
    }
  }
  
  return mainResponse;
}