/* =========================================================
   EVERYDAY LIFE QUESTS
   RANDOM SITUATIONS + NEXT QUESTION SYSTEM
========================================================= */

const lifeQuests = {

    morning: {
        title: "☀️ Morning Quest",
        question: "You wake up and realise you have limited time before school. What is the best approach?",
        answers: [
            {
                text: "📱 Spend most of the time scrolling",
                correct: false,
                explanation: "That can make you even more rushed. Prioritise the things you actually need to do first."
            },
            {
                text: "🧠 Quickly prioritise what you need and get ready",
                correct: true,
                explanation: "Great! When time is limited, focus on the important tasks first."
            },
            {
                text: "😴 Ignore the time and continue sleeping",
                correct: false,
                explanation: "Ignoring the situation usually makes the morning more stressful."
            }
        ]
    },

    study: {
        title: "📚 Study Quest",
        question: "You have a large amount of homework. What is a useful way to handle it?",
        answers: [
            {
                text: "😵 Try to do everything at once",
                correct: false,
                explanation: "Trying to handle everything simultaneously can feel overwhelming."
            },
            {
                text: "📝 Break it into smaller tasks",
                correct: true,
                explanation: "Exactly! Smaller tasks can make a big workload feel more manageable."
            },
            {
                text: "🙈 Avoid it completely",
                correct: false,
                explanation: "Avoiding the work doesn't solve the problem and may make it more stressful later."
            }
        ]
    },

    time: {
        title: "⏰ Time Quest",
        question: "You have several things to do today. What should you do first?",
        answers: [
            {
                text: "🎲 Choose tasks completely at random",
                correct: false,
                explanation: "A little planning can make your day easier to manage."
            },
            {
                text: "📋 Identify important tasks and plan when to do them",
                correct: true,
                explanation: "Great choice! Prioritising helps you use your time more effectively."
            },
            {
                text: "📱 Keep checking your phone instead",
                correct: false,
                explanation: "Frequent distractions can make it harder to finish what you need to do."
            }
        ]
    },

    social: {
        title: "💬 Social Quest",
        question: "A friend tells you about a problem. What is a helpful first response?",
        answers: [
            {
                text: "😂 Make fun of the situation",
                correct: false,
                explanation: "Someone sharing a problem usually needs to feel heard rather than laughed at."
            },
            {
                text: "👂 Listen and ask what kind of help they need",
                correct: true,
                explanation: "Excellent! Listening first helps you understand what the other person actually needs."
            },
            {
                text: "🗣️ Immediately tell everyone else",
                correct: false,
                explanation: "Sharing someone's private situation without permission can damage trust."
            }
        ]
    },

    money: {
        title: "💰 Money Quest",
        question: "You want something, but you don't need it right now. What is a thoughtful choice?",
        answers: [
            {
                text: "🛒 Buy it immediately",
                correct: false,
                explanation: "Taking a moment to think can help you avoid unnecessary spending."
            },
            {
                text: "🤔 Think about whether you really want or need it",
                correct: true,
                explanation: "Good choice! Pausing before spending can help you make more thoughtful decisions."
            },
            {
                text: "💸 Spend all your available money",
                correct: false,
                explanation: "Keeping some money available for future needs can be useful."
            }
        ]
    },

    home: {
        title: "🏠 Home Quest",
        question: "Your room has become messy and you don't know where to start. What could help?",
        answers: [
            {
                text: "🙈 Ignore everything",
                correct: false,
                explanation: "The mess is unlikely to disappear by itself."
            },
            {
                text: "🧺 Pick one small area and tidy it first",
                correct: true,
                explanation: "Exactly! Starting small makes a large task feel easier."
            },
            {
                text: "😵 Try to clean everything at the same time",
                correct: false,
                explanation: "A smaller, focused task can make cleaning less overwhelming."
            }
        ]
    },

    exam: {
        title: "📝 Exam Quest",
        question: "Your exam is next week and you have many chapters to revise. What should you do?",
        answers: [
            {
                text: "😱 Panic and do nothing",
                correct: false,
                explanation: "Panic doesn't help you organise your revision."
            },
            {
                text: "📅 Make a realistic revision plan",
                correct: true,
                explanation: "Great! A simple plan helps you divide your revision into manageable sections."
            },
            {
                text: "🌙 Study everything in one night",
                correct: false,
                explanation: "Trying to do everything at once is usually less effective than spreading your work out."
            }
        ]
    },

    group: {
        title: "👥 Group Project Quest",
        question: "Your group project has no clear plan. What should your group do?",
        answers: [
            {
                text: "🙈 Let everyone do whatever they want",
                correct: false,
                explanation: "Without coordination, important parts may be missed."
            },
            {
                text: "📋 Divide the tasks clearly",
                correct: true,
                explanation: "Excellent! Clear responsibilities help everyone know what they need to do."
            },
            {
                text: "😡 Blame one person",
                correct: false,
                explanation: "Blaming someone doesn't solve the organisation problem."
            }
        ]
    },

    late: {
        title: "⏱️ Running Late Quest",
        question: "You are running late for school. What should you focus on?",
        answers: [
            {
                text: "📱 Start watching videos",
                correct: false,
                explanation: "That will make you even later."
            },
            {
                text: "🎒 Focus on the essential things you need",
                correct: true,
                explanation: "Good choice! Focus on the essentials instead of trying to do everything."
            },
            {
                text: "😴 Go back to sleep",
                correct: false,
                explanation: "That would make the problem bigger."
            }
        ]
    },

    concentration: {
        title: "🧠 Concentration Quest",
        question: "You keep getting distracted while studying. What could help?",
        answers: [
            {
                text: "📱 Keep every notification turned on",
                correct: false,
                explanation: "Notifications can make concentration harder."
            },
            {
                text: "🔕 Remove unnecessary distractions",
                correct: true,
                explanation: "Exactly! Reducing distractions can make it easier to focus."
            },
            {
                text: "🎮 Play games instead",
                correct: false,
                explanation: "That doesn't address the original study problem."
            }
        ]
    },

    forgotten: {
        title: "🧠 Forgotten Task Quest",
        question: "You keep forgetting small tasks. What could help?",
        answers: [
            {
                text: "🙈 Just hope you remember",
                correct: false,
                explanation: "A reminder system is more reliable."
            },
            {
                text: "📝 Use a checklist or planner",
                correct: true,
                explanation: "Great! Writing things down reduces the chance of forgetting them."
            },
            {
                text: "🎲 Remember everything mentally",
                correct: false,
                explanation: "It can be difficult to remember many tasks without a system."
            }
        ]
    },

    chores: {
        title: "🧹 Chore Quest",
        question: "You have several chores to complete. What is a useful strategy?",
        answers: [
            {
                text: "😵 Do everything randomly",
                correct: false,
                explanation: "A simple order can make chores easier."
            },
            {
                text: "📋 Prioritise and complete them one by one",
                correct: true,
                explanation: "Exactly! One task at a time makes the workload more manageable."
            },
            {
                text: "🙈 Ignore them",
                correct: false,
                explanation: "Ignoring chores doesn't make them disappear."
            }
        ]
    },

    laundry: {
        title: "🧺 Laundry Quest",
        question: "Your laundry has become a huge pile. What should you do?",
        answers: [
            {
                text: "🙈 Ignore it",
                correct: false,
                explanation: "The pile will probably become larger."
            },
            {
                text: "👕 Sort and handle a small amount at a time",
                correct: true,
                explanation: "Good! Breaking the task down makes it easier."
            },
            {
                text: "😱 Throw everything around",
                correct: false,
                explanation: "That creates more work instead of solving the problem."
            }
        ]
    },

    dishes: {
        title: "🍽️ Dishes Quest",
        question: "The sink is full of dishes. What is a sensible approach?",
        answers: [
            {
                text: "🙈 Leave everything there forever",
                correct: false,
                explanation: "The dishes will continue to build up."
            },
            {
                text: "🧽 Wash them in manageable batches",
                correct: true,
                explanation: "Great! Small batches make the task easier."
            },
            {
                text: "🍽️ Add more dishes",
                correct: false,
                explanation: "That makes the problem worse."
            }
        ]
    },

    friendship: {
        title: "🤝 Friendship Quest",
        question: "You and your friend disagree about something. What could you do?",
        answers: [
            {
                text: "😡 Insult them",
                correct: false,
                explanation: "Insults usually make disagreements worse."
            },
            {
                text: "💬 Explain your view calmly and listen",
                correct: true,
                explanation: "Excellent! Calm communication can help both people understand each other."
            },
            {
                text: "📢 Tell everyone immediately",
                correct: false,
                explanation: "Sharing the disagreement widely can create more conflict."
            }
        ]
    },

    read: {
        title: "📖 Listening Quest",
        question: "Someone is explaining a problem to you. What should you do?",
        answers: [
            {
                text: "📱 Look at your phone",
                correct: false,
                explanation: "That can make the person feel ignored."
            },
            {
                text: "👂 Listen carefully",
                correct: true,
                explanation: "Good! Listening helps you understand what the person is saying."
            },
            {
                text: "🗣️ Interrupt constantly",
                correct: false,
                explanation: "Interrupting can make communication harder."
            }
        ]
    },

    privacy: {
        title: "🔒 Privacy Quest",
        question: "A friend asks you for your account password. What should you do?",
        answers: [
            {
                text: "🔑 Give it to them",
                correct: false,
                explanation: "Passwords should be kept private."
            },
            {
                text: "🔐 Keep your password private",
                correct: true,
                explanation: "Correct! Account passwords should not be shared."
            },
            {
                text: "📢 Post it publicly",
                correct: false,
                explanation: "Never post passwords publicly."
            }
        ]
    },

    suspicious: {
        title: "📩 Suspicious Message Quest",
        question: "You receive a strange message asking for personal information. What should you do?",
        answers: [
            {
                text: "📤 Send the information",
                correct: false,
                explanation: "You should not rush to share personal information."
            },
            {
                text: "🛑 Pause and ask a trusted adult if unsure",
                correct: true,
                explanation: "Great! Being cautious with suspicious messages is a smart habit."
            },
            {
                text: "🔗 Click every link",
                correct: false,
                explanation: "Unexpected links can be risky."
            }
        ]
    },

    screen: {
        title: "📱 Screen Time Quest",
        question: "You planned to use your phone for ten minutes but an hour has passed. What could help?",
        answers: [
            {
                text: "📱 Keep scrolling",
                correct: false,
                explanation: "That doesn't help you regain control of your time."
            },
            {
                text: "⏰ Set a reminder before using it",
                correct: true,
                explanation: "Good! A reminder can help you notice when it is time to switch activities."
            },
            {
                text: "🎮 Open another app",
                correct: false,
                explanation: "That continues the distraction."
            }
        ]
    },

    online: {
        title: "💻 Online Quest",
        question: "Someone leaves a mean comment about you online. What is a sensible response?",
        answers: [
            {
                text: "😡 Start an argument",
                correct: false,
                explanation: "Arguments can make online situations worse."
            },
            {
                text: "🚫 Consider blocking or reporting it",
                correct: true,
                explanation: "Good choice! You don't have to engage with harmful comments."
            },
            {
                text: "📢 Share it everywhere",
                correct: false,
                explanation: "Sharing it more widely may increase the problem."
            }
        ]
    },

    saving: {
        title: "🏦 Saving Quest",
        question: "You receive some money and don't need anything immediately. What could you do?",
        answers: [
            {
                text: "💸 Spend everything",
                correct: false,
                explanation: "You don't have to spend money simply because you have it."
            },
            {
                text: "🐷 Save some for later",
                correct: true,
                explanation: "Excellent! Saving gives you more choices in the future."
            },
            {
                text: "🎲 Spend it randomly",
                correct: false,
                explanation: "A little planning can help you make better decisions."
            }
        ]
    },

    sale: {
        title: "🏷️ Sale Quest",
        question: "You see something on sale that you weren't planning to buy. What should you ask yourself?",
        answers: [
            {
                text: "🛒 Buy it because it is cheap",
                correct: false,
                explanation: "A discount doesn't automatically mean you need something."
            },
            {
                text: "🤔 Would I buy this without the sale?",
                correct: true,
                explanation: "Exactly! This helps you avoid impulse purchases."
            },
            {
                text: "🛍️ Buy several because of the discount",
                correct: false,
                explanation: "Multiple unnecessary purchases can still cost a lot."
            }
        ]
    },

    snack: {
        title: "🍟 Snack Quest",
        question: "You keep spending small amounts on snacks and your money disappears quickly. What could help?",
        answers: [
            {
                text: "💸 Spend even more",
                correct: false,
                explanation: "That would make your remaining money smaller."
            },
            {
                text: "📋 Set a spending limit",
                correct: true,
                explanation: "Good! A simple limit can help you stay aware of your spending."
            },
            {
                text: "🙈 Never check your spending",
                correct: false,
                explanation: "Knowing where your money goes is useful."
            }
        ]
    },

    needs: {
        title: "🛍️ Needs vs Wants Quest",
        question: "You need a school notebook but also want a decoration. You can only afford one. What should you choose?",
        answers: [
            {
                text: "🎀 Buy the decoration",
                correct: false,
                explanation: "The decoration can wait if the notebook is an important school need."
            },
            {
                text: "📚 Buy the notebook",
                correct: true,
                explanation: "Excellent! Important needs generally come before optional wants."
            },
            {
                text: "💸 Borrow money just to buy both",
                correct: false,
                explanation: "It's better to prioritise the important purchase."
            }
        ]
    },

    budget: {
        title: "💰 Budget Quest",
        question: "You have RM30 left but may need money later. You see something fun for RM25. What is sensible?",
        answers: [
            {
                text: "🛒 Buy it immediately",
                correct: false,
                explanation: "That would leave very little money for future needs."
            },
            {
                text: "🏦 Keep the money for now",
                correct: true,
                explanation: "Good thinking! Keeping some money available gives you flexibility."
            },
            {
                text: "💸 Spend the rest too",
                correct: false,
                explanation: "Using all your remaining money leaves no room for unexpected needs."
            }
        ]
    },

    impulse: {
        title: "⚡ Impulse Quest",
        question: "You suddenly really want to buy something. What can you do before purchasing?",
        answers: [
            {
                text: "🛒 Buy it immediately",
                correct: false,
                explanation: "A short pause can help you decide more carefully."
            },
            {
                text: "⏳ Wait and think about it",
                correct: true,
                explanation: "Great! Waiting can reduce impulse spending."
            },
            {
                text: "🛍️ Buy two",
                correct: false,
                explanation: "Buying more increases unnecessary spending."
            }
        ]
    },

    comparison: {
        title: "💵 Price Comparison Quest",
        question: "You need to buy something and see several prices. What should you do?",
        answers: [
            {
                text: "🎲 Pick randomly",
                correct: false,
                explanation: "Comparing options can help you make a more informed decision."
            },
            {
                text: "🔎 Compare prices and what each option offers",
                correct: true,
                explanation: "Excellent! Looking at your options can help you choose wisely."
            },
            {
                text: "💸 Always choose the most expensive",
                correct: false,
                explanation: "The most expensive option isn't automatically the best."
            }
        ]
    },

    transport: {
        title: "🚌 Transport Quest",
        question: "You need to travel somewhere nearby. What should you consider?",
        answers: [
            {
                text: "🚗 Always choose the most expensive option",
                correct: false,
                explanation: "Cost and practicality are useful things to consider."
            },
            {
                text: "🚌 Consider safe and practical transport options",
                correct: true,
                explanation: "Good! Think about safety, time, cost and practicality."
            },
            {
                text: "🎲 Choose randomly",
                correct: false,
                explanation: "A little planning can make transportation easier."
            }
        ]
    },

    recycling: {
        title: "♻️ Recycling Quest",
        question: "You aren't sure which recycling bin an item belongs in. What should you do?",
        answers: [
            {
                text: "🗑️ Guess",
                correct: false,
                explanation: "Guessing can lead to incorrect recycling."
            },
            {
                text: "🔎 Check the local recycling guidance",
                correct: true,
                explanation: "Exactly! Local recycling rules can vary."
            },
            {
                text: "🌳 Throw it outside",
                correct: false,
                explanation: "Littering creates another problem."
            }
        ]
    },

    park: {
        title: "🌳 Community Quest",
        question: "You notice rubbish in a public park. What could you do if it is safe?",
        answers: [
            {
                text: "🙈 Ignore it completely",
                correct: false,
                explanation: "You could consider a safe and appropriate way to help."
            },
            {
                text: "♻️ Put suitable rubbish in the correct bin",
                correct: true,
                explanation: "Great! Small actions can help keep shared spaces cleaner."
            },
            {
                text: "🗑️ Throw everything anywhere",
                correct: false,
                explanation: "That would make the area worse."
            }
        ]
    },

    inclusion: {
        title: "♿ Inclusion Quest",
        question: "Someone is having difficulty accessing an activity. What is a helpful approach?",
        answers: [
            {
                text: "🙈 Ignore them",
                correct: false,
                explanation: "Ignoring a barrier doesn't help remove it."
            },
            {
                text: "💬 Ask what support would help",
                correct: true,
                explanation: "Excellent! Asking rather than assuming helps identify useful support."
            },
            {
                text: "😂 Make fun of the difficulty",
                correct: false,
                explanation: "Everyone deserves respectful treatment."
            }
        ]
    },

    kindness: {
        title: "💚 Kindness Quest",
        question: "You notice someone having a difficult day. What could you do?",
        answers: [
            {
                text: "😂 Make fun of them",
                correct: false,
                explanation: "That could make them feel worse."
            },
            {
                text: "💬 Offer a kind word or ask if they are okay",
                correct: true,
                explanation: "Great! A small act of kindness can make a difference."
            },
            {
                text: "📢 Tell everyone about their problem",
                correct: false,
                explanation: "Respect their privacy."
            }
        ]
    },

    argument: {
        title: "😤 Argument Quest",
        question: "You are getting angry during a disagreement. What could help?",
        answers: [
            {
                text: "🔥 Keep shouting",
                correct: false,
                explanation: "Continuing to shout can make the disagreement worse."
            },
            {
                text: "⏸️ Take a pause and calm down",
                correct: true,
                explanation: "Good! Taking a pause can help you respond more thoughtfully."
            },
            {
                text: "📱 Post about it",
                correct: false,
                explanation: "Posting during an argument can create additional problems."
            }
        ]
    },

    communication: {
        title: "🗣️ Communication Quest",
        question: "Someone misunderstands what you said. What should you do?",
        answers: [
            {
                text: "😡 Get angry immediately",
                correct: false,
                explanation: "Anger may make the misunderstanding harder to solve."
            },
            {
                text: "💬 Explain what you meant clearly",
                correct: true,
                explanation: "Excellent! Clear communication can solve many misunderstandings."
            },
            {
                text: "🙈 Never speak again",
                correct: false,
                explanation: "A misunderstanding doesn't necessarily mean communication should stop."
            }
        ]
    },

    confidence: {
        title: "🌱 Confidence Quest",
        question: "You want to improve at something but aren't very good at it yet. What should you do?",
        answers: [
            {
                text: "🙈 Give up immediately",
                correct: false,
                explanation: "Skills usually improve through practice."
            },
            {
                text: "🎯 Set a small goal and practise",
                correct: true,
                explanation: "Great! Small goals make progress easier to notice."
            },
            {
                text: "😡 Expect perfection immediately",
                correct: false,
                explanation: "Learning takes time and mistakes are part of practice."
            }
        ]
    },

    rest: {
        title: "😴 Rest Quest",
        question: "You have many things to do but feel tired. What should you consider?",
        answers: [
            {
                text: "🌙 Ignore your need for rest",
                correct: false,
                explanation: "Rest is an important part of managing your energy."
            },
            {
                text: "📋 Prioritise important tasks and allow appropriate rest",
                correct: true,
                explanation: "Good! Balancing responsibilities with rest can help you manage your day."
            },
            {
                text: "🎮 Keep distracting yourself",
                correct: false,
                explanation: "Distraction doesn't solve the underlying tiredness."
            }
        ]
    },

    weather: {
        title: "☔ Weather Quest",
        question: "You are going outside and the weather forecast suggests rain. What could you do?",
        answers: [
            {
                text: "☔ Prepare suitable rain protection",
                correct: true,
                explanation: "Great! Checking the weather and preparing ahead can make your day easier."
            },
            {
                text: "🙈 Ignore it completely",
                correct: false,
                explanation: "A little preparation can help you avoid unnecessary inconvenience."
            },
            {
                text: "🌧️ Walk into unsafe conditions",
                correct: false,
                explanation: "Safety should come first."
            }
        ]
    },

    calendar: {
        title: "📅 Calendar Quest",
        question: "You have several deadlines coming up. What can help?",
        answers: [
            {
                text: "🙈 Try to remember everything",
                correct: false,
                explanation: "A reminder system is more reliable."
            },
            {
                text: "📅 Put important dates into one calendar",
                correct: true,
                explanation: "Excellent! A calendar helps you keep track of deadlines."
            },
            {
                text: "🎲 Choose dates randomly",
                correct: false,
                explanation: "Important dates need to be recorded accurately."
            }
        ]
    },

    breakfast: {
        title: "🍳 Breakfast Quest",
        question: "You often rush in the morning and forget to prepare food. What could help?",
        answers: [
            {
                text: "🙈 Ignore the problem",
                correct: false,
                explanation: "Planning ahead could make your mornings easier."
            },
            {
                text: "🧺 Prepare simple options ahead of time",
                correct: true,
                explanation: "Good! Preparing ahead can reduce morning stress."
            },
            {
                text: "⏰ Wake up even later",
                correct: false,
                explanation: "That would give you less time."
            }
        ]
    },

    lost: {
        title: "🔎 Lost Item Quest",
        question: "You cannot find something important. What should you do first?",
        answers: [
            {
                text: "😡 Blame someone",
                correct: false,
                explanation: "Blaming someone doesn't help you locate the item."
            },
            {
                text: "🔎 Retrace your recent steps",
                correct: true,
                explanation: "Excellent! Retracing your steps is a practical first step."
            },
            {
                text: "🛍️ Immediately buy another one",
                correct: false,
                explanation: "You may find the original item."
            }
        ]
    },

    distraction: {
        title: "🎧 Distraction Quest",
        question: "You need to finish a task but keep getting distracted. What could help?",
        answers: [
            {
                text: "📱 Turn on more notifications",
                correct: false,
                explanation: "More notifications create more distractions."
            },
            {
                text: "🎯 Focus on one task for a short period",
                correct: true,
                explanation: "Great! Short focused periods can make tasks easier to start."
            },
            {
                text: "🎮 Start another activity",
                correct: false,
                explanation: "That doesn't help you finish the original task."
            }
        ]
    },

    weekend: {
        title: "🗓️ Weekend Quest",
        question: "Your weekend is packed with activities. What should you remember?",
        answers: [
            {
                text: "📅 Fill every minute",
                correct: false,
                explanation: "A completely packed schedule can leave little time to recharge."
            },
            {
                text: "🌱 Leave some time for rest and enjoyable activities",
                correct: true,
                explanation: "Good! A balanced schedule includes both responsibilities and downtime."
            },
            {
                text: "🙈 Cancel everything",
                correct: false,
                explanation: "You don't necessarily need to cancel everything; balance is the goal."
            }
        ]
    },

    decision: {
        title: "🧩 Decision Quest",
        question: "You have several choices and aren't sure what to do. What could help?",
        answers: [
            {
                text: "🎲 Choose without thinking",
                correct: false,
                explanation: "Taking a moment to compare your options can help."
            },
            {
                text: "📝 List the options and consider the consequences",
                correct: true,
                explanation: "Excellent! Thinking through your choices can make decisions clearer."
            },
            {
                text: "😵 Let someone else always decide",
                correct: false,
                explanation: "It's useful to develop your own decision-making skills."
            }
        ]
    },

    goal: {
        title: "🎯 Goal Quest",
        question: "You have a big goal that feels difficult. What could make it easier?",
        answers: [
            {
                text: "🙈 Ignore the goal",
                correct: false,
                explanation: "Ignoring it doesn't move you closer."
            },
            {
                text: "🪜 Break it into smaller goals",
                correct: true,
                explanation: "Exactly! Smaller steps can make a big goal more manageable."
            },
            {
                text: "⚡ Expect instant results",
                correct: false,
                explanation: "Most goals require time and consistent effort."
            }
        ]
    },

    volunteering: {
        title: "🤝 Community Helper Quest",
        question: "You want to help your community. What could you do?",
        answers: [
            {
                text: "🙈 Do nothing",
                correct: false,
                explanation: "There are many small ways to contribute."
            },
            {
                text: "🌱 Find a suitable activity or small helpful action",
                correct: true,
                explanation: "Great! Community involvement can start with something small."
            },
            {
                text: "📢 Force everyone else to help",
                correct: false,
                explanation: "Helping works better when people participate appropriately."
            }
        ]
    },

    environment: {
        title: "🌍 Environment Quest",
        question: "You want to make a small positive environmental difference. What could you do?",
        answers: [
            {
                text: "🙈 Assume one person cannot matter",
                correct: false,
                explanation: "Small actions can contribute to larger changes."
            },
            {
                text: "♻️ Choose one practical eco-friendly habit",
                correct: true,
                explanation: "Excellent! Consistent small habits can be meaningful."
            },
            {
                text: "🗑️ Create more waste",
                correct: false,
                explanation: "That works against the goal."
            }
        ]
    },

    preparation: {
        title: "🎒 Preparation Quest",
        question: "You have something important tomorrow. What could help tonight?",
        answers: [
            {
                text: "🙈 Do nothing",
                correct: false,
                explanation: "Preparing ahead can reduce tomorrow's stress."
            },
            {
                text: "🎒 Prepare the things you will need",
                correct: true,
                explanation: "Great! A little preparation can make the next day smoother."
            },
            {
                text: "🎲 Decide everything at the last second",
                correct: false,
                explanation: "Last-minute decisions can make things more stressful."
            }
        ]
    },

    advice: {
        title: "💡 Advice Quest",
        question: "A friend gives you advice that doesn't feel right. What should you do?",
        answers: [
            {
                text: "🤖 Follow it without thinking",
                correct: false,
                explanation: "You should consider whether advice is suitable for your situation."
            },
            {
                text: "🧠 Think about whether it is safe and sensible",
                correct: true,
                explanation: "Good! You can listen to advice while still making your own thoughtful decisions."
            },
            {
                text: "😡 Get angry immediately",
                correct: false,
                explanation: "You can disagree respectfully."
            }
        ]
    },

    help: {
        title: "🆘 Asking for Help Quest",
        question: "You are stuck on a problem and don't know what to do next. What could you do?",
        answers: [
            {
                text: "🙈 Keep struggling silently forever",
                correct: false,
                explanation: "You don't have to solve every problem completely alone."
            },
            {
                text: "🗣️ Ask a trusted person for help",
                correct: true,
                explanation: "Excellent! Asking for appropriate help is a useful life skill."
            },
            {
                text: "🎲 Ignore the problem",
                correct: false,
                explanation: "Ignoring the problem may make it harder later."
            }
        ]
    },

    patience: {
        title: "⏳ Patience Quest",
        question: "Something you want is taking longer than expected. What could you do?",
        answers: [
            {
                text: "😡 Get angry immediately",
                correct: false,
                explanation: "Getting angry may not change the situation."
            },
            {
                text: "🧘 Stay patient and check what you can control",
                correct: true,
                explanation: "Great! Focusing on what you can control is often more useful."
            },
            {
                text: "📢 Blame everyone",
                correct: false,
                explanation: "Blaming others doesn't necessarily solve the delay."
            }
        ]
    },

    mistakes: {
        title: "🔄 Mistake Quest",
        question: "You make a mistake while working on something. What should you do?",
        answers: [
            {
                text: "🙈 Pretend it never happened",
                correct: false,
                explanation: "Recognising the mistake can help you correct it."
            },
            {
                text: "🧠 Learn what happened and try again",
                correct: true,
                explanation: "Excellent! Mistakes can provide useful information for improving."
            },
            {
                text: "😡 Give up immediately",
                correct: false,
                explanation: "One mistake doesn't mean you cannot improve."
            }
        ]
    },

    routine: {
        title: "🔁 Routine Quest",
        question: "You want to build a useful daily habit. What is a good approach?",
        answers: [
            {
                text: "⚡ Change everything overnight",
                correct: false,
                explanation: "Trying to change too many things at once can be difficult."
            },
            {
                text: "🌱 Start with one small consistent habit",
                correct: true,
                explanation: "Great! Small consistent habits are easier to maintain."
            },
            {
                text: "🙈 Never practise it",
                correct: false,
                explanation: "Habits need repetition."
            }
        ]
    },

    tidying: {
        title: "🧺 Tidying Quest",
        question: "You have several things lying around your room. What is a useful first step?",
        answers: [
            {
                text: "😵 Move everything randomly",
                correct: false,
                explanation: "A simple system makes tidying easier."
            },
            {
                text: "📦 Sort items and return them to their places",
                correct: true,
                explanation: "Exactly! Sorting helps you see what needs to be done."
            },
            {
                text: "🙈 Hide everything under the bed",
                correct: false,
                explanation: "That doesn't really solve the organisation problem."
            }
        ]
    },

    priorities: {
        title: "⭐ Priority Quest",
        question: "You have five tasks but only enough time to complete three. What should you do?",
        answers: [
            {
                text: "🎲 Choose randomly",
                correct: false,
                explanation: "Some tasks may be more important or urgent than others."
            },
            {
                text: "📋 Choose the most important or urgent tasks",
                correct: true,
                explanation: "Excellent! Prioritising helps you use limited time wisely."
            },
            {
                text: "📱 Avoid all five",
                correct: false,
                explanation: "Avoiding them doesn't help you manage the workload."
            }
        ]
    },

    problem: {
        title: "🧩 Problem-Solving Quest",
        question: "You face a problem that seems complicated. What is a useful first step?",
        answers: [
            {
                text: "😱 Panic immediately",
                correct: false,
                explanation: "Staying calm can make it easier to understand the problem."
            },
            {
                text: "🔎 Identify what the actual problem is",
                correct: true,
                explanation: "Great! Understanding the problem is the first step toward finding a solution."
            },
            {
                text: "🙈 Ignore it",
                correct: false,
                explanation: "Ignoring a problem doesn't help you understand it."
            }
        ]
    },

    listening: {
        title: "👂 Listening Quest",
        question: "Someone is speaking to you about something important. What shows that you are listening?",
        answers: [
            {
                text: "📱 Keep looking at your phone",
                correct: false,
                explanation: "That can make it seem like you aren't paying attention."
            },
            {
                text: "👀 Pay attention and let them finish",
                correct: true,
                explanation: "Excellent! Giving someone your attention shows respect."
            },
            {
                text: "🗣️ Interrupt constantly",
                correct: false,
                explanation: "Interrupting can make communication difficult."
            }
        ]
    },

    future: {
        title: "🔮 Future Quest",
        question: "You have a choice that could affect your future. What is sensible?",
        answers: [
            {
                text: "🎲 Choose without thinking",
                correct: false,
                explanation: "Important decisions deserve some thought."
            },
            {
                text: "🧠 Consider the possible consequences",
                correct: true,
                explanation: "Good! Thinking ahead can help you make more informed choices."
            },
            {
                text: "🙈 Let someone else always decide",
                correct: false,
                explanation: "Learning to make thoughtful choices is an important skill."
            }
        ]
    },

    smartspending: {
        title: "🛍️ Smart Spending Quest",
        question: "You see a new item you really like, but you already have something similar. What should you do?",
        answers: [
            {
                text: "⚡ Buy it immediately",
                correct: false,
                explanation: "Pausing first can help you decide whether the new item is actually useful."
            },
            {
                text: "🤔 Wait and ask whether you really need it",
                correct: true,
                explanation: "Excellent! Thinking before spending can help prevent unnecessary purchases."
            },
            {
                text: "🛒 Buy several because you like them",
                correct: false,
                explanation: "Buying several unnecessary items can quickly use up your money."
            }
        ]
    },

    /* =====================================================
       EXTRA LIFE SITUATIONS
    ===================================================== */

    communication2: {
        title: "🗣️ Clear Message Quest",
        question: "You need to tell someone something important. What is the best approach?",
        answers: [
            {
                text: "😶 Say almost nothing",
                correct: false,
                explanation: "The other person may not understand what you mean."
            },
            {
                text: "💬 Explain your point clearly and politely",
                correct: true,
                explanation: "Clear and respectful communication reduces misunderstandings."
            },
            {
                text: "😡 Shout the message",
                correct: false,
                explanation: "Shouting can make communication harder."
            }
        ]
    },

    teamwork: {
        title: "🤝 Teamwork Quest",
        question: "A teammate is struggling with their part of a project. What could you do?",
        answers: [
            {
                text: "😂 Laugh at them",
                correct: false,
                explanation: "That does not help the team solve the problem."
            },
            {
                text: "💬 Ask how you can support the team",
                correct: true,
                explanation: "Good teamwork involves communication and appropriate support."
            },
            {
                text: "🙈 Ignore the problem",
                correct: false,
                explanation: "Ignoring it could affect the whole project."
            }
        ]
    },

    deadline: {
        title: "⏰ Deadline Quest",
        question: "A deadline is approaching and your work is not finished. What should you do?",
        answers: [
            {
                text: "🎮 Forget about it",
                correct: false,
                explanation: "Ignoring the deadline will not solve the problem."
            },
            {
                text: "📋 Work out what remains and prioritise it",
                correct: true,
                explanation: "Breaking down the remaining work helps you focus."
            },
            {
                text: "😱 Panic without doing anything",
                correct: false,
                explanation: "A calm plan is more useful than panic."
            }
        ]
    },

    feedback: {
        title: "💬 Feedback Quest",
        question: "Someone gives you useful feedback about your work. What should you do?",
        answers: [
            {
                text: "😡 Reject everything immediately",
                correct: false,
                explanation: "Feedback can sometimes help you identify ways to improve."
            },
            {
                text: "🧠 Consider the feedback and decide what is useful",
                correct: true,
                explanation: "Excellent! You can learn from feedback while thinking critically."
            },
            {
                text: "🙈 Never listen to feedback",
                correct: false,
                explanation: "Ignoring all feedback can make improvement harder."
            }
        ]
    },

    responsibility: {
        title: "🎯 Responsibility Quest",
        question: "You promised to complete a task but realise you may not finish on time. What should you do?",
        answers: [
            {
                text: "🙈 Say nothing",
                correct: false,
                explanation: "Communication is important when plans change."
            },
            {
                text: "💬 Explain the situation early and discuss a solution",
                correct: true,
                explanation: "Taking responsibility includes communicating when something changes."
            },
            {
                text: "😡 Blame someone else",
                correct: false,
                explanation: "Blaming others doesn't solve the situation."
            }
        ]
    },

    borrowing: {
        title: "📚 Borrowing Quest",
        question: "You borrow something from a friend. What should you remember?",
        answers: [
            {
                text: "🙈 Keep it forever",
                correct: false,
                explanation: "Borrowed items should be returned."
            },
            {
                text: "🤝 Take care of it and return it as agreed",
                correct: true,
                explanation: "Respecting other people's belongings builds trust."
            },
            {
                text: "🗑️ Leave it somewhere random",
                correct: false,
                explanation: "You should take reasonable care of borrowed items."
            }
        ]
    },

    apology: {
        title: "💚 Apology Quest",
        question: "You realise you made a mistake that affected someone else. What could you do?",
        answers: [
            {
                text: "🙈 Pretend nothing happened",
                correct: false,
                explanation: "Ignoring the situation doesn't repair the problem."
            },
            {
                text: "💬 Acknowledge it and apologise sincerely",
                correct: true,
                explanation: "Taking responsibility can help repair trust."
            },
            {
                text: "😡 Blame them",
                correct: false,
                explanation: "Blaming the other person avoids responsibility."
            }
        ]
    },

    sharing: {
        title: "🍪 Sharing Quest",
        question: "You have something that can be shared fairly with others. What could you do?",
        answers: [
            {
                text: "🙈 Take everything",
                correct: false,
                explanation: "Fairness means considering other people's needs too."
            },
            {
                text: "🤝 Share appropriately",
                correct: true,
                explanation: "Sharing fairly can help create a positive environment."
            },
            {
                text: "😡 Refuse because others exist",
                correct: false,
                explanation: "Considering others is an important social skill."
            }
        ]
    },

    queue: {
        title: "🚶 Queue Quest",
        question: "You are waiting in a queue and someone arrives after you. What is fair?",
        answers: [
            {
                text: "🏃 Let them push ahead",
                correct: false,
                explanation: "Queues work best when everyone follows the same order."
            },
            {
                text: "⏳ Continue waiting your turn",
                correct: true,
                explanation: "Following the queue keeps things fair."
            },
            {
                text: "😡 Start an argument",
                correct: false,
                explanation: "Staying calm is usually more helpful."
            }
        ]
    },

    public: {
        title: "🏙️ Public Space Quest",
        question: "You are in a shared public space. What is a responsible habit?",
        answers: [
            {
                text: "🗑️ Leave rubbish behind",
                correct: false,
                explanation: "Shared spaces should be treated with care."
            },
            {
                text: "♻️ Keep the area clean and respect others",
                correct: true,
                explanation: "Good! Respecting shared spaces benefits everyone."
            },
            {
                text: "📢 Make unnecessary noise",
                correct: false,
                explanation: "Being considerate helps everyone enjoy shared spaces."
            }
        ]
    },

    electricity: {
        title: "💡 Energy Quest",
        question: "You leave a room and notice the lights are still on. What could you do?",
        answers: [
            {
                text: "💡 Leave everything on",
                correct: false,
                explanation: "Unnecessary electricity use can be avoided."
            },
            {
                text: "🔌 Turn off what is not needed",
                correct: true,
                explanation: "Great! Saving energy can start with simple habits."
            },
            {
                text: "⚡ Turn on more lights",
                correct: false,
                explanation: "That uses even more energy."
            }
        ]
    },

    water: {
        title: "💧 Water Quest",
        question: "You notice a tap has been left running unnecessarily. What should you do?",
        answers: [
            {
                text: "🙈 Ignore it",
                correct: false,
                explanation: "Leaving water running wastes a useful resource."
            },
            {
                text: "🚰 Turn it off if appropriate",
                correct: true,
                explanation: "Good! Avoiding unnecessary water use is a useful habit."
            },
            {
                text: "💦 Make the water run longer",
                correct: false,
                explanation: "That increases unnecessary water use."
            }
        ]
    },

    borrowing2: {
        title: "✏️ School Supplies Quest",
        question: "You forgot a school supply and need to borrow one. What should you do?",
        answers: [
            {
                text: "📝 Take someone's item without asking",
                correct: false,
                explanation: "You should respect other people's belongings."
            },
            {
                text: "🙋 Ask politely and return it afterward",
                correct: true,
                explanation: "Excellent! Asking permission and returning items shows responsibility."
            },
            {
                text: "🏃 Hide it afterward",
                correct: false,
                explanation: "Borrowed items should be returned."
            }
        ]
    },

    classroom: {
        title: "🏫 Classroom Quest",
        question: "The teacher is explaining something important but your friend wants to chat. What should you do?",
        answers: [
            {
                text: "🗣️ Keep chatting",
                correct: false,
                explanation: "That can distract you and others."
            },
            {
                text: "👂 Pay attention and talk later",
                correct: true,
                explanation: "Good! Paying attention helps you learn and respect the class."
            },
            {
                text: "📱 Use your phone",
                correct: false,
                explanation: "That creates another distraction."
            }
        ]
    },

    presentation: {
        title: "🎤 Presentation Quest",
        question: "You feel nervous before presenting your work. What could help?",
        answers: [
            {
                text: "🙈 Refuse to prepare",
                correct: false,
                explanation: "Preparation can make a presentation feel more manageable."
            },
            {
                text: "📝 Practise the main points beforehand",
                correct: true,
                explanation: "Great! Practising can improve familiarity and confidence."
            },
            {
                text: "😱 Assume everything will go wrong",
                correct: false,
                explanation: "Negative assumptions don't help you prepare."
            }
        ]
    },

    curiosity: {
        title: "🔎 Curiosity Quest",
        question: "You don't understand something in class. What could you do?",
        answers: [
            {
                text: "🙈 Pretend you understand",
                correct: false,
                explanation: "You may continue being confused."
            },
            {
                text: "🙋 Ask a suitable question",
                correct: true,
                explanation: "Excellent! Asking questions is an important part of learning."
            },
            {
                text: "😴 Ignore the lesson",
                correct: false,
                explanation: "Ignoring the problem won't improve your understanding."
            }
        ]
    },

    organization: {
        title: "🗂️ Organisation Quest",
        question: "Your school files are difficult to find. What could help?",
        answers: [
            {
                text: "📁 Organise them into clear folders",
                correct: true,
                explanation: "Great! A simple organisation system makes information easier to find."
            },
            {
                text: "🙈 Keep everything mixed together",
                correct: false,
                explanation: "Mixed files can be harder to locate."
            },
            {
                text: "🗑️ Delete everything",
                correct: false,
                explanation: "You may need important files later."
            }
        ]
    },

    stress: {
        title: "🌿 Stress Quest",
        question: "You have several responsibilities and feel overwhelmed. What could help?",
        answers: [
            {
                text: "😱 Panic about everything at once",
                correct: false,
                explanation: "Thinking about everything simultaneously can feel even more overwhelming."
            },
            {
                text: "📋 Break things down and focus on the next manageable step",
                correct: true,
                explanation: "Good! Focusing on one manageable step can make a situation clearer."
            },
            {
                text: "🙈 Ignore everything forever",
                correct: false,
                explanation: "Ignoring responsibilities usually doesn't solve them."
            }
        ]
    },

    kindness2: {
        title: "🌟 Helping Quest",
        question: "You finish your part of a shared task early. What could you do?",
        answers: [
            {
                text: "🙈 Leave immediately without checking anything",
                correct: false,
                explanation: "There may be something useful you can do."
            },
            {
                text: "🤝 Ask whether anyone needs reasonable help",
                correct: true,
                explanation: "Great! Helping appropriately can strengthen teamwork."
            },
            {
                text: "😡 Tell everyone they are too slow",
                correct: false,
                explanation: "That can create unnecessary conflict."
            }
        ]
    },

    responsibility2: {
        title: "🧹 Responsibility Quest",
        question: "You notice a small mess that you caused. What should you do?",
        answers: [
            {
                text: "🙈 Leave it for someone else",
                correct: false,
                explanation: "Taking responsibility means dealing with your own actions."
            },
            {
                text: "🧹 Clean it up",
                correct: true,
                explanation: "Exactly! Cleaning up after yourself is a simple responsible habit."
            },
            {
                text: "😡 Blame someone else",
                correct: false,
                explanation: "Blaming others doesn't solve the mess."
            }
        ]
    },

    change: {
        title: "🔄 Change Quest",
        question: "A plan suddenly changes. What is a useful response?",
        answers: [
            {
                text: "😡 Refuse to adapt",
                correct: false,
                explanation: "Some situations require flexibility."
            },
            {
                text: "🧠 Understand the new situation and adjust your plan",
                correct: true,
                explanation: "Great! Flexibility helps you handle unexpected changes."
            },
            {
                text: "🙈 Ignore the new information",
                correct: false,
                explanation: "Ignoring changes may create more problems."
            }
        ]
    },

    research: {
        title: "🔎 Research Quest",
        question: "You find information online that sounds surprising. What should you do?",
        answers: [
            {
                text: "📢 Share it immediately",
                correct: false,
                explanation: "Not everything online is accurate."
            },
            {
                text: "🔎 Check reliable sources before believing it",
                correct: true,
                explanation: "Excellent! Checking sources helps you evaluate information."
            },
            {
                text: "🤖 Believe it because it looks professional",
                correct: false,
                explanation: "Appearance alone doesn't prove information is reliable."
            }
        ]
    },

    password: {
        title: "🔐 Password Quest",
        question: "You need to create a password for an account. What is a sensible habit?",
        answers: [
            {
                text: "🔑 Use the same simple password everywhere",
                correct: false,
                explanation: "Using predictable passwords can make accounts less secure."
            },
            {
                text: "🔐 Use a strong, unique password and keep it private",
                correct: true,
                explanation: "Good! Strong and private passwords help protect accounts."
            },
            {
                text: "📢 Share it with friends",
                correct: false,
                explanation: "Passwords should remain private."
            }
        ]
    },

    balance: {
        title: "⚖️ Balance Quest",
        question: "You have schoolwork, chores and hobbies to manage. What is a good approach?",
        answers: [
            {
                text: "🎮 Spend all day on hobbies",
                correct: false,
                explanation: "Important responsibilities still need attention."
            },
            {
                text: "📋 Create a balanced plan",
                correct: true,
                explanation: "Excellent! A balanced plan can make room for responsibilities and enjoyable activities."
            },
            {
                text: "📚 Work nonstop without breaks",
                correct: false,
                explanation: "Breaks and balance can help you manage your time."
            }
        ]
    },

    choices: {
        title: "🧠 Choice Quest",
        question: "Two choices both seem possible. What should you consider?",
        answers: [
            {
                text: "🎲 Pick randomly",
                correct: false,
                explanation: "Thinking about the options can help you decide."
            },
            {
                text: "⚖️ Compare the benefits and possible consequences",
                correct: true,
                explanation: "Great! Comparing consequences supports thoughtful decisions."
            },
            {
                text: "🙈 Avoid deciding forever",
                correct: false,
                explanation: "Sometimes a decision still needs to be made."
            }
        ]
    }

};


/* =========================================================
   PLAYER SCORE
========================================================= */

let lifeScore = 0;


/* =========================================================
   QUEST STATE
========================================================= */

let playedQuests = [];

let currentQuestType = null;

let currentQuestNumber = 0;

let answeredCurrentQuest = false;


/* =========================================================
   GET TOTAL QUESTIONS
========================================================= */

function getTotalLifeQuests() {

    return Object.keys(lifeQuests).length;

}


/* =========================================================
   START RANDOM QUEST
========================================================= */

function startRandomLifeQuest() {

    playedQuests = [];

    currentQuestNumber = 0;

    nextLifeQuestion();

}


/* =========================================================
   START SPECIFIC QUEST
========================================================= */

function startLifeQuest(type) {

    const quest =
        lifeQuests[type];

    if (!quest) {

        return;

    }


    currentQuestType =
        type;

    answeredCurrentQuest =
        false;


    /* TITLE */

    const title =
        document.getElementById(
            "life-question-title"
        );

    if (title) {

        title.textContent =
            quest.title;

    }


    /* QUESTION */

    const question =
        document.getElementById(
            "life-question-text"
        );

    if (question) {

        question.textContent =
            quest.question;

    }


    /* FEEDBACK */

    const feedback =
        document.getElementById(
            "life-feedback"
        );

    if (feedback) {

        feedback.textContent = "";

        feedback.style.color = "";

    }


    /* ANSWERS */

    const answerBox =
        document.getElementById(
            "life-answers"
        );

    if (!answerBox) {

        return;

    }


    answerBox.innerHTML = "";


    quest.answers.forEach(
        function(answer) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "life-answer";


            button.textContent =
                answer.text;


            button.onclick =
                function() {

                    checkLifeAnswer(
                        answer,
                        button
                    );

                };


            answerBox.appendChild(
                button
            );

        }
    );


    /* HIDE NEXT BUTTON */

    const nextButton =
        document.getElementById(
            "next-life-question"
        );

    if (nextButton) {

        nextButton.style.display =
            "none";

    }


    /* UPDATE PROGRESS */

    updateQuestProgress();


    /* SCROLL */

    const questionBox =
        document.getElementById(
            "life-question"
        );

    if (questionBox) {

        questionBox.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }

}


/* =========================================================
   NEXT RANDOM QUESTION
========================================================= */

function nextLifeQuestion() {

    const questTypes =
        Object.keys(lifeQuests);


    /* ALL QUESTIONS COMPLETED */

    if (
        playedQuests.length >=
        questTypes.length
    ) {

        showLifeComplete();

        return;

    }


    /* FIND UNUSED QUESTIONS */

    const availableQuests =
        questTypes.filter(
            function(type) {

                return !playedQuests.includes(
                    type
                );

            }
        );


    /* RANDOM */

    const randomIndex =
        Math.floor(
            Math.random() *
            availableQuests.length
        );


    const nextType =
        availableQuests[randomIndex];


    /* SAVE AS PLAYED */

    playedQuests.push(
        nextType
    );


    currentQuestNumber++;


    /* SHOW QUESTION */

    startLifeQuest(
        nextType
    );

}


/* =========================================================
   CHECK ANSWER
========================================================= */

function checkLifeAnswer(
    answer,
    button
) {

    if (answeredCurrentQuest) {

        return;

    }


    answeredCurrentQuest =
        true;


    /* DISABLE ALL BUTTONS */

    const buttons =
        document.querySelectorAll(
            ".life-answer"
        );


    buttons.forEach(
        function(item) {

            item.disabled =
                true;

        }
    );


    const feedback =
        document.getElementById(
            "life-feedback"
        );


    /* =====================================================
       CORRECT ANSWER
    ===================================================== */

    if (answer.correct) {

        lifeScore += 10;


        if (feedback) {

            feedback.textContent =
                "🌟 Great choice! +10 Life XP — "
                + answer.explanation;

            feedback.style.color =
                "#4f8a60";

        }


        button.style.background =
            "#e5f5e9";


        button.style.borderColor =
            "#86bb91";


        updateLifeScore();

    }


    /* =====================================================
       WRONG ANSWER
    ===================================================== */

    else {

        if (feedback) {

            feedback.textContent =
                "💡 Think about it this way: "
                + answer.explanation;

            feedback.style.color =
                "#9a7445";

        }


        button.style.background =
            "#fff0df";


        button.style.borderColor =
            "#d6b47f";

    }


    /* SHOW NEXT */

    const nextButton =
        document.getElementById(
            "next-life-question"
        );


    if (nextButton) {

        nextButton.style.display =
            "block";


        if (
            playedQuests.length >=
            getTotalLifeQuests()
        ) {

            nextButton.textContent =
                "🏆 Finish Quest";

        }

        else {

            nextButton.textContent =
                "➡️ Next Situation";

        }

    }

}


/* =========================================================
   QUEST PROGRESS
========================================================= */

function updateQuestProgress() {

    const progress =
        document.getElementById(
            "life-question-progress"
        );


    if (!progress) {

        return;

    }


    const total =
        getTotalLifeQuests();


    progress.textContent =
        "🌟 Situation "
        + currentQuestNumber
        + " / "
        + total;

}


/* =========================================================
   QUEST COMPLETE
========================================================= */

function showLifeComplete() {

    const title =
        document.getElementById(
            "life-question-title"
        );


    const question =
        document.getElementById(
            "life-question-text"
        );


    const answers =
        document.getElementById(
            "life-answers"
        );


    const feedback =
        document.getElementById(
            "life-feedback"
        );


    const nextButton =
        document.getElementById(
            "next-life-question"
        );


    if (title) {

        title.textContent =
            "🏆 Life Quest Complete!";

    }


    if (question) {

        question.textContent =
            "You completed every Life Situation! Great job learning useful everyday skills.";

    }


    if (answers) {

        answers.innerHTML = "";

    }


    if (feedback) {

        feedback.textContent =
            "🌟 Final Score: "
            + lifeScore
            + " XP";

        feedback.style.color =
            "#4f8a60";

    }


    if (nextButton) {

        nextButton.textContent =
            "🔄 Play Again";

        nextButton.style.display =
            "block";


        nextButton.onclick =
            function() {

                startRandomLifeQuest();

            };

    }

}


/* =========================================================
   UPDATE LIFE SCORE
========================================================= */

function updateLifeScore() {

    const scoreElement =
        document.getElementById(
            "life-score"
        );


    if (scoreElement) {

        scoreElement.textContent =
            lifeScore
            + " XP";

    }


    const maxXP =
        getTotalLifeQuests()
        * 10;


    let percentage =
        (lifeScore / maxXP)
        * 100;


    if (percentage > 100) {

        percentage = 100;

    }


    const xpFill =
        document.getElementById(
            "life-xp-fill"
        );


    if (xpFill) {

        xpFill.style.width =
            percentage
            + "%";

    }


    updateLifeRank();

}


/* =========================================================
   LIFE RANK
========================================================= */

function updateLifeRank() {

    let rank;


    const maxXP =
        getTotalLifeQuests()
        * 10;


    if (
        lifeScore >=
        maxXP
    ) {

        rank =
            "🏆 Life Master";

    }

    else if (
        lifeScore >=
        maxXP * 0.8
    ) {

        rank =
            "🌈 Life Pro";

    }

    else if (
        lifeScore >=
        maxXP * 0.6
    ) {

        rank =
            "⭐ Life Explorer";

    }

    else if (
        lifeScore >=
        maxXP * 0.4
    ) {

        rank =
            "🌿 Life Learner";

    }

    else if (
        lifeScore >=
        maxXP * 0.2
    ) {

        rank =
            "✨ Getting Started";

    }

    else {

        rank =
            "🌱 Just Starting";

    }


    const rankElement =
        document.getElementById(
            "life-rank"
        );


    if (rankElement) {

        rankElement.textContent =
            rank;

    }

}


/* =========================================================
   DAILY MISSIONS
========================================================= */

const dailyMissions = [

    "🧹 Tidy one small area around you.",

    "📚 Finish one small task you've been putting off.",

    "💧 Remember to drink some water today.",

    "📝 Write down three things you need to do.",

    "🧺 Put away something that is out of place.",

    "💬 Say something encouraging to someone.",

    "📵 Take a short break from your screen.",

    "🎒 Prepare something you need for tomorrow.",

    "🧠 Spend a few minutes learning something new.",

    "🌱 Do one small helpful thing without being asked.",

    "♻️ Put recyclable items in the correct bin.",

    "💡 Turn off an unnecessary light.",

    "📖 Read something educational.",

    "🤝 Help someone with a small task.",

    "🗂️ Organise one folder or school item.",

    "🧠 Learn one new fact.",

    "🏠 Help tidy a shared area.",

    "⏰ Check what you need to do tomorrow.",

    "💬 Thank someone for something they did.",

    "🌳 Spend a little time outside safely."

];


function newDailyMission() {

    const randomIndex =
        Math.floor(
            Math.random()
            * dailyMissions.length
        );


    const mission =
        document.getElementById(
            "daily-mission"
        );


    if (mission) {

        mission.textContent =
            dailyMissions[
                randomIndex
            ];

    }

}


/* =========================================================
   MY LITTLE HOUSE GAME
========================================================= */

let houseXP = 0;

let houseCoins = 0;

let houseHappiness = 0;


/* =========================================================
   HOUSE TASKS
========================================================= */

const houseTasks = {

    bed: {

        xp: 10,

        coins: 5,

        message:
            "🛏️ Nice! Your bed is ready for the day."

    },

    trash: {

        xp: 10,

        coins: 5,

        message:
            "🗑️ Clean space! The house feels better already."

    },

    clothes: {

        xp: 10,

        coins: 5,

        message:
            "👕 Clothes are organised! Great job."

    },

    dishes: {

        xp: 10,

        coins: 5,

        message:
            "🍽️ Clean dishes! Your kitchen is happier."

    },

    plant: {

        xp: 10,

        coins: 5,

        message:
            "🌱 Your plants are happy and hydrated!"

    },

    pet: {

        xp: 10,

        coins: 5,

        message:
            "🐱 Your little friend is happy!"

    }

};


/* =========================================================
   COMPLETE HOUSE TASK
========================================================= */

function completeHouseTask(task) {

    const taskData =
        houseTasks[task];


    if (!taskData) {

        return;

    }


    const buttons =
        document.querySelectorAll(
            ".house-task"
        );


    const clickedButton =
        Array.from(buttons)
            .find(
                function(button) {

                    const onclick =
                        button.getAttribute(
                            "onclick"
                        );


                    return onclick &&
                        onclick.includes(
                            "'" + task + "'"
                        );

                }
            );


    /* ALREADY COMPLETE */

    if (
        clickedButton &&
        clickedButton.classList.contains(
            "done"
        )
    ) {

        return;

    }


    /* REWARDS */

    houseXP +=
        taskData.xp;


    houseCoins +=
        taskData.coins;


    houseHappiness +=
        100 / 6;


    if (
        houseHappiness >
        100
    ) {

        houseHappiness =
            100;

    }


    /* BUTTON */

    if (clickedButton) {

        clickedButton.classList.add(
            "done"
        );


        clickedButton.innerHTML =
            "✅<br><strong>Completed!</strong>";

    }


    /* CLEAN VISUAL OBJECTS */

    if (
        task === "trash"
    ) {

        cleanMess("mess2");

    }


    if (
        task === "clothes"
    ) {

        cleanMess("mess1");

        cleanMess("mess4");

    }


    if (
        task === "dishes"
    ) {

        cleanMess("mess3");

    }


    if (
        task === "pet"
    ) {

        const pet =
            document.getElementById(
                "house-pet"
            );


        if (pet) {

            pet.classList.remove(
                "happy"
            );


            void pet.offsetWidth;


            pet.classList.add(
                "happy"
            );

        }

    }


    updateHouseGame();


    showHouseMessage(
        taskData.message
    );

}


/* =========================================================
   CLEAN MESS
========================================================= */

function cleanMess(id) {

    const mess =
        document.getElementById(
            id
        );


    if (mess) {

        mess.classList.add(
            "cleaned"
        );

    }

}


/* =========================================================
   UPDATE HOUSE GAME
========================================================= */

function updateHouseGame() {

    const xp =
        document.getElementById(
            "house-xp"
        );


    const coins =
        document.getElementById(
            "house-coins"
        );


    const fill =
        document.getElementById(
            "house-progress-fill"
        );


    const happinessText =
        document.getElementById(
            "house-happiness-text"
        );


    if (xp) {

        xp.textContent =
            Math.floor(
                houseXP
            );

    }


    if (coins) {

        coins.textContent =
            houseCoins;

    }


    if (fill) {

        fill.style.width =
            houseHappiness
            + "%";

    }


    if (happinessText) {

        happinessText.textContent =
            Math.floor(
                houseHappiness
            )
            + "%";

    }


    updateHouseMessage();

}


/* =========================================================
   HOUSE MESSAGE
========================================================= */

function updateHouseMessage() {

    const message =
        document.getElementById(
            "house-message"
        );


    if (!message) {

        return;

    }


    if (
        houseHappiness >=
        100
    ) {

        message.textContent =
            "🏆 Your house is sparkling! You are a House Hero!";

    }

    else if (
        houseHappiness >=
        66
    ) {

        message.textContent =
            "🌟 Your house is looking great! Keep going!";

    }

    else if (
        houseHappiness >=
        33
    ) {

        message.textContent =
            "✨ Your house is getting cleaner!";

    }

    else {

        message.textContent =
            "🏠 Your house is waiting for you!";

    }

}


/* =========================================================
   SHOW HOUSE MESSAGE
========================================================= */

function showHouseMessage(text) {

    const message =
        document.getElementById(
            "house-message"
        );


    if (!message) {

        return;

    }


    message.textContent =
        text;


    if (message.animate) {

        message.animate(

            [
                {
                    transform:
                        "scale(1)"
                },

                {
                    transform:
                        "scale(1.05)"
                },

                {
                    transform:
                        "scale(1)"
                }

            ],

            {
                duration:
                    400
            }

        );

    }

}


/* =========================================================
   INITIALISE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        newDailyMission();

        updateLifeScore();

        updateHouseGame();

    }
);
