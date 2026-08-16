/* =========================================================
   SMART SPENDING
   MONEY QUEST — 50 SITUATIONS
========================================================= */


/* =========================================================
   GAME VARIABLES
========================================================= */

let budget = 50;

let score = 0;

let streak = 0;

let bestStreak = 0;

let level = 1;

let currentQuestion = 0;

let answered = false;


/* =========================================================
   50 QUESTIONS
========================================================= */

const questions = [

    /* =====================================================
       1
    ===================================================== */

    {
        icon: "🛒",
        category: "SHOPPING",

        question:
            "You see a cool item that costs RM20. You already have something similar at home. What should you do?",

        description:
            "You have RM50 available, but the item isn't something you need.",

        choices: [
            {
                icon: "🛍️",
                title: "Buy it immediately",
                description: "It looks fun!",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "Pausing before buying can help you decide whether you really need another one."
            },
            {
                icon: "🤔",
                title: "Wait and think about it",
                description: "Maybe I don't need it.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Great choice! Giving yourself time before buying can prevent unnecessary spending."
            },
            {
                icon: "💸",
                title: "Buy two",
                description: "More is better!",
                correct: false,
                points: 0,
                money: -40,
                feedback:
                    "Buying more of something you already have can use a large part of your budget."
            }
        ]
    },


    /* =====================================================
       2
    ===================================================== */

    {
        icon: "📚",
        category: "NEEDS VS WANTS",

        question:
            "You need a notebook for school, but you also want a new decoration.",

        description:
            "You have enough money for only one right now.",

        choices: [
            {
                icon: "📚",
                title: "Buy the notebook",
                description: "School need first.",
                correct: true,
                points: 10,
                money: -8,
                feedback:
                    "Excellent! Important needs generally come before optional wants."
            },
            {
                icon: "🎀",
                title: "Buy the decoration",
                description: "It looks nice!",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "The decoration can wait if you currently need the notebook."
            },
            {
                icon: "🛍️",
                title: "Buy both",
                description: "I'll figure it out later.",
                correct: false,
                points: 0,
                money: -23,
                feedback:
                    "Buying both uses more money even though you only have enough for one."
            }
        ]
    },


    /* =====================================================
       3
    ===================================================== */

    {
        icon: "🏷️",
        category: "SALES",

        question:
            "A shop has a huge SALE sign. You see something that you weren't planning to buy.",

        description:
            "It is cheaper than usual, but you don't really need it.",

        choices: [
            {
                icon: "🏃",
                title: "Buy it because it's on sale",
                description: "It's cheaper!",
                correct: false,
                points: 0,
                money: -12,
                feedback:
                    "A discount doesn't automatically make something worth buying."
            },
            {
                icon: "🧠",
                title: "Think before buying",
                description: "Would I buy it normally?",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! A sale is useful only when the item is actually worth buying."
            },
            {
                icon: "🛒",
                title: "Buy several",
                description: "It's cheap!",
                correct: false,
                points: 0,
                money: -30,
                feedback:
                    "Several small purchases can still become expensive."
            }
        ]
    },


    /* =====================================================
       4
    ===================================================== */

    {
        icon: "🎁",
        category: "SAVING",

        question:
            "You receive RM20 as a gift. You don't currently need anything.",

        description:
            "You could spend it now or keep some for later.",

        choices: [
            {
                icon: "🛍️",
                title: "Spend all of it",
                description: "Treat myself!",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "You don't have to spend money just because you have it."
            },
            {
                icon: "🏦",
                title: "Keep some for later",
                description: "Future me might need it.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Great thinking! Saving some money gives you more choices later."
            },
            {
                icon: "🎲",
                title: "Spend randomly",
                description: "I'll decide later.",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "Having a plan is usually more useful than spending randomly."
            }
        ]
    },


    /* =====================================================
       5
    ===================================================== */

    {
        icon: "📱",
        category: "WAITING",

        question:
            "You see a new accessory for your device that you really like.",

        description:
            "Your current accessory still works perfectly.",

        choices: [
            {
                icon: "⚡",
                title: "Buy it right away",
                description: "I really want it!",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "A strong want can feel urgent, but you don't have to buy immediately."
            },
            {
                icon: "⏳",
                title: "Wait a few days",
                description: "See if I still want it.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! Waiting can help you tell a temporary want from something you genuinely value."
            },
            {
                icon: "🛍️",
                title: "Buy two versions",
                description: "More choices!",
                correct: false,
                points: 0,
                money: -30,
                feedback:
                    "Buying extra items you don't need can quickly reduce your available money."
            }
        ]
    },


    /* =====================================================
       6
    ===================================================== */

    {
        icon: "🍱",
        category: "PLANNING",

        question:
            "You have a limited amount of money for the week.",

        description:
            "You know you'll need money for school and transport.",

        choices: [
            {
                icon: "📋",
                title: "Plan important expenses first",
                description: "Know where my money needs to go.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Smart! Planning important expenses first helps prevent unexpected problems."
            },
            {
                icon: "🍭",
                title: "Spend most today",
                description: "Today is more fun!",
                correct: false,
                points: 0,
                money: -25,
                feedback:
                    "Spending most of your money early can make later needs harder to manage."
            },
            {
                icon: "🎮",
                title: "Ignore the future",
                description: "I'll deal with it later.",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "Thinking ahead can make everyday money decisions much easier."
            }
        ]
    },


    /* =====================================================
       7
    ===================================================== */

    {
        icon: "💰",
        category: "BUDGETING",

        question:
            "You have RM30 left. You see something fun that costs RM25.",

        description:
            "You aren't sure whether you'll need the remaining money later.",

        choices: [
            {
                icon: "🛒",
                title: "Buy it immediately",
                description: "I still have RM5.",
                correct: false,
                points: 0,
                money: -25,
                feedback:
                    "Keeping some money available gives you flexibility for future needs."
            },
            {
                icon: "🏦",
                title: "Keep the money",
                description: "I might need it later.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Good thinking! Saving some of your remaining money gives you more choices."
            },
            {
                icon: "💸",
                title: "Spend everything",
                description: "Use it all!",
                correct: false,
                points: 0,
                money: -30,
                feedback:
                    "Using your entire remaining budget leaves no room for future needs."
            }
        ]
    },


    /* =====================================================
       8
    ===================================================== */

    {
        icon: "🍫",
        category: "SMALL SPENDING",

        question:
            "You keep buying small snacks every day after school.",

        description:
            "Each snack is inexpensive, but the spending adds up.",

        choices: [
            {
                icon: "🧾",
                title: "Notice how much you spend",
                description: "Track it for a few days.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Great! Small purchases can add up, so noticing your spending is useful."
            },
            {
                icon: "🍫",
                title: "Buy even more",
                description: "They're only small purchases.",
                correct: false,
                points: 0,
                money: -10,
                feedback:
                    "Small purchases can become a significant amount when repeated."
            },
            {
                icon: "🙈",
                title: "Don't think about it",
                description: "It doesn't matter.",
                correct: false,
                points: 0,
                money: -5,
                feedback:
                    "Knowing where your money goes makes planning easier."
            }
        ]
    },


    /* =====================================================
       9
    ===================================================== */

    {
        icon: "🐷",
        category: "SAVING",

        question:
            "You want to save for something important in the future.",

        description:
            "You receive a small amount of money regularly.",

        choices: [
            {
                icon: "🐷",
                title: "Save part of it regularly",
                description: "Build my savings slowly.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! Small regular savings can build up over time."
            },
            {
                icon: "🎮",
                title: "Spend everything",
                description: "I'll save next time.",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "Saving becomes easier when you make it part of your routine."
            },
            {
                icon: "🎲",
                title: "Decide randomly",
                description: "Maybe I'll save.",
                correct: false,
                points: 0,
                money: -10,
                feedback:
                    "A clear saving plan is easier to follow than a random approach."
            }
        ]
    },


    /* =====================================================
       10
    ===================================================== */

    {
        icon: "🧾",
        category: "PRICE CHECK",

        question:
            "You want to buy something, but you notice another shop sells a similar item for less.",

        description:
            "The cheaper option appears to meet your needs.",

        choices: [
            {
                icon: "🔎",
                title: "Compare the options",
                description: "Check price and usefulness.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Smart! Comparing options can help you make better spending decisions."
            },
            {
                icon: "🏃",
                title: "Buy the first one",
                description: "I don't want to wait.",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "Taking a moment to compare can sometimes save money."
            },
            {
                icon: "💸",
                title: "Buy both",
                description: "Then I can choose later.",
                correct: false,
                points: 0,
                money: -35,
                feedback:
                    "Buying both creates extra spending when one may be enough."
            }
        ]
    },


    /* =====================================================
       11
    ===================================================== */

    {
        icon: "🎮",
        category: "WANTS",

        question:
            "You see a new game you want, but you already have several games you haven't finished.",

        description:
            "The new game costs RM18.",

        choices: [
            {
                icon: "⏳",
                title: "Wait before buying",
                description: "Finish what I already have.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Good choice! Using what you already own can help avoid unnecessary purchases."
            },
            {
                icon: "🛒",
                title: "Buy it immediately",
                description: "It's new!",
                correct: false,
                points: 0,
                money: -18,
                feedback:
                    "New doesn't always mean necessary."
            },
            {
                icon: "🎮",
                title: "Buy three games",
                description: "More fun!",
                correct: false,
                points: 0,
                money: -45,
                feedback:
                    "Buying several games at once can use a large part of your budget."
            }
        ]
    },


    /* =====================================================
       12
    ===================================================== */

    {
        icon: "👟",
        category: "NEEDS",

        question:
            "Your shoes are damaged and you need them for school.",

        description:
            "You have enough money for a basic replacement.",

        choices: [
            {
                icon: "👟",
                title: "Buy a suitable replacement",
                description: "I need usable shoes.",
                correct: true,
                points: 10,
                money: -20,
                feedback:
                    "Correct! Replacing something you genuinely need is a sensible use of money."
            },
            {
                icon: "🎀",
                title: "Buy an expensive style instead",
                description: "It looks cooler.",
                correct: false,
                points: 0,
                money: -40,
                feedback:
                    "A more expensive option may not be necessary when a suitable replacement is available."
            },
            {
                icon: "🙈",
                title: "Ignore the problem",
                description: "I'll keep using them.",
                correct: false,
                points: 0,
                money: 0,
                feedback:
                    "Important needs should not always be postponed just to avoid spending."
            }
        ]
    },


    /* =====================================================
       13
    ===================================================== */

    {
        icon: "☕",
        category: "DAILY SPENDING",

        question:
            "You buy an expensive drink every day even though you could bring one from home.",

        description:
            "You want to save more money.",

        choices: [
            {
                icon: "🥤",
                title: "Bring a drink from home sometimes",
                description: "Reduce repeated spending.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Great! Changing one repeated spending habit can make budgeting easier."
            },
            {
                icon: "☕",
                title: "Buy two drinks",
                description: "Why not?",
                correct: false,
                points: 0,
                money: -10,
                feedback:
                    "Adding more repeated spending works against your saving goal."
            },
            {
                icon: "💸",
                title: "Ignore the cost",
                description: "It's only a drink.",
                correct: false,
                points: 0,
                money: -5,
                feedback:
                    "Repeated small expenses can add up."
            }
        ]
    },


    /* =====================================================
       14
    ===================================================== */

    {
        icon: "🎒",
        category: "SCHOOL",

        question:
            "You want a new pencil case, but your current one still works.",

        description:
            "The new one costs RM12.",

        choices: [
            {
                icon: "⏳",
                title: "Keep using the current one",
                description: "It still works.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! Using something until it needs replacing can reduce unnecessary spending."
            },
            {
                icon: "🛍️",
                title: "Buy the new one",
                description: "It looks nicer.",
                correct: false,
                points: 0,
                money: -12,
                feedback:
                    "Wanting something new is understandable, but the old one still meets your need."
            },
            {
                icon: "🛒",
                title: "Buy two",
                description: "One as backup.",
                correct: false,
                points: 0,
                money: -24,
                feedback:
                    "Buying backups isn't always useful when the current item works."
            }
        ]
    },


    /* =====================================================
       15
    ===================================================== */

    {
        icon: "🎟️",
        category: "ENTERTAINMENT",

        question:
            "Your friends invite you to an activity that costs RM15.",

        description:
            "You have several upcoming expenses to consider.",

        choices: [
            {
                icon: "📋",
                title: "Check my budget first",
                description: "See whether I can afford it.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Smart! Checking your budget before agreeing helps you make informed choices."
            },
            {
                icon: "🎟️",
                title: "Say yes immediately",
                description: "I'll worry later.",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "It is useful to know whether you can afford something before committing."
            },
            {
                icon: "💸",
                title: "Spend even more",
                description: "Let's make it a huge day!",
                correct: false,
                points: 0,
                money: -25,
                feedback:
                    "Extra spending can make an already limited budget harder to manage."
            }
        ]
    },


    /* =====================================================
       16
    ===================================================== */

    {
        icon: "📦",
        category: "ONLINE SHOPPING",

        question:
            "You put several items into an online shopping cart.",

        description:
            "You realise you don't actually need most of them.",

        choices: [
            {
                icon: "🧹",
                title: "Remove unnecessary items",
                description: "Keep only what I really need.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Great! Reviewing your cart before paying can prevent impulse purchases."
            },
            {
                icon: "💳",
                title: "Buy everything",
                description: "It's already in my cart.",
                correct: false,
                points: 0,
                money: -30,
                feedback:
                    "Adding something to a cart doesn't mean you need to buy it."
            },
            {
                icon: "🛒",
                title: "Add more",
                description: "Free shipping!",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "Buying unnecessary items just to reach a promotion can cost more."
            }
        ]
    },


    /* =====================================================
       17
    ===================================================== */

    {
        icon: "🚚",
        category: "DELIVERY",

        question:
            "You are about to place an online order and notice a delivery fee.",

        description:
            "You could wait and combine it with another planned purchase later.",

        choices: [
            {
                icon: "📋",
                title: "Check whether the purchase is worth it",
                description: "Consider the total cost.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Good thinking! Looking at the total cost gives you a clearer picture."
            },
            {
                icon: "⚡",
                title: "Order immediately",
                description: "I don't care about the fee.",
                correct: false,
                points: 0,
                money: -8,
                feedback:
                    "Delivery fees are part of the total cost and are worth considering."
            },
            {
                icon: "🛍️",
                title: "Add random items",
                description: "Get free delivery.",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "Buying unnecessary things to avoid a fee can cost more overall."
            }
        ]
    },


    /* =====================================================
       18
    ===================================================== */

    {
        icon: "🧃",
        category: "COMPARISON",

        question:
            "Two similar drinks have different prices.",

        description:
            "Both seem to meet your needs.",

        choices: [
            {
                icon: "🔎",
                title: "Compare prices and value",
                description: "Choose thoughtfully.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! Comparing similar options can help you spend more thoughtfully."
            },
            {
                icon: "💰",
                title: "Always choose the most expensive",
                description: "Expensive must be better.",
                correct: false,
                points: 0,
                money: -8,
                feedback:
                    "A higher price doesn't automatically mean better value."
            },
            {
                icon: "🎲",
                title: "Pick randomly",
                description: "I don't care.",
                correct: false,
                points: 0,
                money: -5,
                feedback:
                    "Taking a moment to compare can help you make a more informed choice."
            }
        ]
    },


    /* =====================================================
       19
    ===================================================== */

    {
        icon: "💵",
        category: "CHANGE",

        question:
            "You receive some change after buying something.",

        description:
            "You are tempted to spend it immediately.",

        choices: [
            {
                icon: "🐷",
                title: "Keep it for later",
                description: "Small amounts still count.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Nice! Small amounts can contribute to your savings."
            },
            {
                icon: "🍬",
                title: "Spend it immediately",
                description: "It's only change.",
                correct: false,
                points: 0,
                money: -5,
                feedback:
                    "Small amounts can add up when you keep them rather than spending them."
            },
            {
                icon: "🛍️",
                title: "Buy something random",
                description: "Use it somehow.",
                correct: false,
                points: 0,
                money: -5,
                feedback:
                    "Money doesn't have to be spent just because you have it."
            }
        ]
    },


    /* =====================================================
       20
    ===================================================== */

    {
        icon: "🎂",
        category: "GIFTS",

        question:
            "You want to give a friend a birthday gift but have a small budget.",

        description:
            "You want the gift to be meaningful.",

        choices: [
            {
                icon: "🎨",
                title: "Choose a thoughtful affordable gift",
                description: "Meaning matters more than price.",
                correct: true,
                points: 10,
                money: -5,
                feedback:
                    "Great! A thoughtful gift doesn't have to be expensive."
            },
            {
                icon: "💎",
                title: "Buy the most expensive thing",
                description: "More expensive is better.",
                correct: false,
                points: 0,
                money: -35,
                feedback:
                    "Overspending on gifts can create unnecessary financial pressure."
            },
            {
                icon: "💸",
                title: "Spend all my money",
                description: "It's worth it.",
                correct: false,
                points: 0,
                money: -40,
                feedback:
                    "A gift should not require you to use up all your available money."
            }
        ]
    },


    /* =====================================================
       21
    ===================================================== */

    {
        icon: "🧮",
        category: "BUDGETING",

        question:
            "You have RM50 and know you need RM15 for something important later.",

        description:
            "You want to spend some money today.",

        choices: [
            {
                icon: "📊",
                title: "Set aside the RM15 first",
                description: "Protect money for the need.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! Setting aside money for known needs is a strong budgeting habit."
            },
            {
                icon: "🛍️",
                title: "Spend the RM15 too",
                description: "I'll replace it later.",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "Spending money reserved for an important need can cause problems later."
            },
            {
                icon: "🎮",
                title: "Spend everything",
                description: "Today is more important.",
                correct: false,
                points: 0,
                money: -30,
                feedback:
                    "Planning for known future expenses helps prevent running out of money."
            }
        ]
    },


    /* =====================================================
       22
    ===================================================== */

    {
        icon: "🛍️",
        category: "IMPULSE BUYING",

        question:
            "You suddenly want something because you saw an exciting advertisement.",

        description:
            "You weren't thinking about buying it before seeing the advertisement.",

        choices: [
            {
                icon: "⏸️",
                title: "Pause before deciding",
                description: "Think first.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! Advertisements are designed to attract attention, so pausing can help."
            },
            {
                icon: "💳",
                title: "Buy immediately",
                description: "The advertisement convinced me.",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "An advertisement does not necessarily mean the item is useful for you."
            },
            {
                icon: "🛒",
                title: "Buy two",
                description: "Limited offer!",
                correct: false,
                points: 0,
                money: -30,
                feedback:
                    "Limited-time pressure can encourage unnecessary spending."
            }
        ]
    },


    /* =====================================================
       23
    ===================================================== */

    {
        icon: "📅",
        category: "PLANNING",

        question:
            "You know you will have several school expenses next month.",

        description:
            "You currently have some money available.",

        choices: [
            {
                icon: "📅",
                title: "Plan ahead",
                description: "Prepare for upcoming costs.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Great! Planning ahead gives you more control over your money."
            },
            {
                icon: "🎮",
                title: "Spend it all now",
                description: "Next month is far away.",
                correct: false,
                points: 0,
                money: -30,
                feedback:
                    "Future expenses are easier to handle when you prepare for them early."
            },
            {
                icon: "🙈",
                title: "Ignore the expenses",
                description: "I'll figure it out later.",
                correct: false,
                points: 0,
                money: -10,
                feedback:
                    "Ignoring known expenses can make them harder to manage later."
            }
        ]
    },


    /* =====================================================
       24
    ===================================================== */

    {
        icon: "🍿",
        category: "ENTERTAINMENT",

        question:
            "You want to watch a movie with friends, but the ticket costs more than you expected.",

        description:
            "You need to consider your available budget.",

        choices: [
            {
                icon: "🧮",
                title: "Check whether it fits my budget",
                description: "Decide based on what I can afford.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Smart! Entertainment is fine to enjoy, but it should fit your available budget."
            },
            {
                icon: "💸",
                title: "Spend anyway",
                description: "I'll worry later.",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "Checking your budget first helps prevent financial surprises."
            },
            {
                icon: "💳",
                title: "Spend all my money",
                description: "The movie is worth it.",
                correct: false,
                points: 0,
                money: -40,
                feedback:
                    "One activity shouldn't leave you without money for other needs."
            }
        ]
    },


    /* =====================================================
       25
    ===================================================== */

    {
        icon: "🧴",
        category: "NEEDS VS WANTS",

        question:
            "You need a basic personal-care item, but you also want a fancy version.",

        description:
            "Both versions do the same basic job.",

        choices: [
            {
                icon: "🧴",
                title: "Choose the suitable affordable option",
                description: "Meet the need without overspending.",
                correct: true,
                points: 10,
                money: -5,
                feedback:
                    "Good choice! You can meet a need without always choosing the most expensive option."
            },
            {
                icon: "✨",
                title: "Choose the most expensive",
                description: "It looks better.",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "A more expensive option isn't automatically necessary."
            },
            {
                icon: "🛍️",
                title: "Buy several",
                description: "Stock up!",
                correct: false,
                points: 0,
                money: -30,
                feedback:
                    "Buying more than you need can tie up money unnecessarily."
            }
        ]
    },


    /* =====================================================
       26
    ===================================================== */

    {
        icon: "🔋",
        category: "REPLACEMENT",

        question:
            "Your device accessory still works, but a new model has just been released.",

        description:
            "The new model has extra features you don't really need.",

        choices: [
            {
                icon: "⏳",
                title: "Keep using the current one",
                description: "It still works.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! You don't have to replace something simply because a newer version exists."
            },
            {
                icon: "🛍️",
                title: "Upgrade immediately",
                description: "New is better.",
                correct: false,
                points: 0,
                money: -25,
                feedback:
                    "Newer products aren't always necessary if your current one works."
            },
            {
                icon: "💸",
                title: "Buy two new ones",
                description: "One for backup.",
                correct: false,
                points: 0,
                money: -45,
                feedback:
                    "Buying multiple unnecessary replacements can use a large amount of money."
            }
        ]
    },


    /* =====================================================
       27
    ===================================================== */

    {
        icon: "🏷️",
        category: "DISCOUNTS",

        question:
            "A shop says 'BUY 2 GET 1 FREE'. You only need one item.",

        description:
            "The promotion makes the deal look attractive.",

        choices: [
            {
                icon: "🧠",
                title: "Buy only what I need",
                description: "Don't let the promotion decide for me.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! A promotion isn't really a saving if you buy things you don't need."
            },
            {
                icon: "🛒",
                title: "Buy three",
                description: "It's free!",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "You still have to pay for the items you didn't originally need."
            },
            {
                icon: "💸",
                title: "Buy six",
                description: "More free items!",
                correct: false,
                points: 0,
                money: -40,
                feedback:
                    "A bigger promotion can still lead to bigger spending."
            }
        ]
    },


    /* =====================================================
       28
    ===================================================== */

    {
        icon: "💳",
        category: "PAYMENT",

        question:
            "You are about to buy something online but aren't sure whether the website is trustworthy.",

        description:
            "The website is asking for personal and payment information.",

        choices: [
            {
                icon: "🔎",
                title: "Check the site and ask a trusted adult if unsure",
                description: "Make sure it is safe first.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Good choice! Being cautious with online purchases can protect both your money and information."
            },
            {
                icon: "💳",
                title: "Enter everything immediately",
                description: "I don't want to miss the deal.",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "Rushing can lead to unsafe or unwanted purchases."
            },
            {
                icon: "📩",
                title: "Send my password too",
                description: "They asked for it.",
                correct: false,
                points: 0,
                money: 0,
                feedback:
                    "Passwords should not be shared with other people or suspicious websites."
            }
        ]
    },


    /* =====================================================
       29
    ===================================================== */

    {
        icon: "🍔",
        category: "FOOD",

        question:
            "You are hungry after school and have money for food.",

        description:
            "You could buy an expensive meal or choose an affordable option.",

        choices: [
            {
                icon: "🥪",
                title: "Choose an affordable suitable meal",
                description: "Meet the need sensibly.",
                correct: true,
                points: 10,
                money: -8,
                feedback:
                    "Good! You can meet your needs while still being mindful of your budget."
            },
            {
                icon: "🍔",
                title: "Buy the most expensive meal",
                description: "Go big!",
                correct: false,
                points: 0,
                money: -25,
                feedback:
                    "The most expensive choice isn't always necessary."
            },
            {
                icon: "🍟",
                title: "Buy several meals",
                description: "I'll eat them later.",
                correct: false,
                points: 0,
                money: -30,
                feedback:
                    "Buying more food than you need can waste both food and money."
            }
        ]
    },


    /* =====================================================
       30
    ===================================================== */

    {
        icon: "📱",
        category: "SUBSCRIPTIONS",

        question:
            "You notice you are paying for a subscription you rarely use.",

        description:
            "The subscription costs RM10 each month.",

        choices: [
            {
                icon: "🔎",
                title: "Check whether I still need it",
                description: "Review the subscription.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Great! Reviewing recurring expenses can help prevent paying for things you don't use."
            },
            {
                icon: "💳",
                title: "Keep paying without checking",
                description: "It's only RM10.",
                correct: false,
                points: 0,
                money: -10,
                feedback:
                    "Recurring small costs can add up over time."
            },
            {
                icon: "➕",
                title: "Add another subscription",
                description: "More entertainment!",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "Adding another recurring cost may make your budget harder to manage."
            }
        ]
    },


    /* =====================================================
       31
    ===================================================== */

    {
        icon: "📒",
        category: "TRACKING",

        question:
            "You aren't sure where your money went this week.",

        description:
            "You made several small purchases.",

        choices: [
            {
                icon: "📝",
                title: "Write down recent spending",
                description: "See where the money went.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! Tracking spending can reveal patterns you might not notice otherwise."
            },
            {
                icon: "🙈",
                title: "Ignore it",
                description: "It doesn't matter.",
                correct: false,
                points: 0,
                money: 0,
                feedback:
                    "Understanding your spending makes future planning easier."
            },
            {
                icon: "💸",
                title: "Spend more",
                description: "Maybe it will make sense later.",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "More spending won't solve the problem of not knowing where your money goes."
            }
        ]
    },


    /* =====================================================
       32
    ===================================================== */

    {
        icon: "🧸",
        category: "COLLECTING",

        question:
            "You collect small items and see a new one you want.",

        description:
            "You already have many similar items.",

        choices: [
            {
                icon: "⏳",
                title: "Think about whether it adds value",
                description: "Pause before buying.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Good thinking! Collecting can be fun, but planning your spending still matters."
            },
            {
                icon: "🛍️",
                title: "Buy it immediately",
                description: "I need it for my collection!",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "A collection doesn't mean every new item has to be purchased."
            },
            {
                icon: "🛒",
                title: "Buy five",
                description: "Complete the collection!",
                correct: false,
                points: 0,
                money: -40,
                feedback:
                    "Buying several at once can quickly use your available money."
            }
        ]
    },


    /* =====================================================
       33
    ===================================================== */

    {
        icon: "🎨",
        category: "HOBBIES",

        question:
            "You want to start a new hobby but the equipment is expensive.",

        description:
            "You aren't sure whether you will continue the hobby.",

        choices: [
            {
                icon: "🔎",
                title: "Try a low-cost version first",
                description: "See if I enjoy it.",
                correct: true,
                points: 10,
                money: -5,
                feedback:
                    "Smart! Trying something affordably first can help you decide whether it's worth a larger investment."
            },
            {
                icon: "💰",
                title: "Buy the most expensive equipment",
                description: "Start professionally.",
                correct: false,
                points: 0,
                money: -40,
                feedback:
                    "Spending a lot before knowing whether you enjoy a hobby can be risky."
            },
            {
                icon: "🛍️",
                title: "Buy everything",
                description: "I'll definitely use it.",
                correct: false,
                points: 0,
                money: -45,
                feedback:
                    "Buying everything at once may lead to unnecessary spending."
            }
        ]
    },


    /* =====================================================
       34
    ===================================================== */

    {
        icon: "🎒",
        category: "REUSE",

        question:
            "You need something for school, but you discover you already have an unused one at home.",

        description:
            "It is still in good condition.",

        choices: [
            {
                icon: "♻️",
                title: "Use the one I already have",
                description: "Reuse before buying.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! Reusing things you already own can save money and reduce waste."
            },
            {
                icon: "🛍️",
                title: "Buy another",
                description: "I want a new one.",
                correct: false,
                points: 0,
                money: -12,
                feedback:
                    "Buying another item isn't necessary when you already have a suitable one."
            },
            {
                icon: "💸",
                title: "Buy several",
                description: "I'll use them eventually.",
                correct: false,
                points: 0,
                money: -25,
                feedback:
                    "Buying things for future use can still reduce the money available now."
            }
        ]
    },


    /* =====================================================
       35
    ===================================================== */

    {
        icon: "🧹",
        category: "DECLUTTER",

        question:
            "You find several items you bought but barely use.",

        description:
            "You are thinking about buying more similar things.",

        choices: [
            {
                icon: "🧠",
                title: "Consider why I bought them",
                description: "Learn from past spending.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Great! Looking at past purchases can help you make better future decisions."
            },
            {
                icon: "🛒",
                title: "Buy more",
                description: "Maybe I'll use them.",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "If you rarely use similar items, buying more may not solve the problem."
            },
            {
                icon: "💸",
                title: "Spend without thinking",
                description: "It's my money.",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "Thinking about past spending can help you avoid repeating unwanted purchases."
            }
        ]
    },


    /* =====================================================
       36
    ===================================================== */

    {
        icon: "🚲",
        category: "TRANSPORT",

        question:
            "You need to travel somewhere nearby.",

        description:
            "You have several safe and practical transport options.",

        choices: [
            {
                icon: "🚶",
                title: "Choose a suitable low-cost option",
                description: "Consider walking or another practical option.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Good! When practical and safe, lower-cost transport can help you manage money."
            },
            {
                icon: "🚕",
                title: "Always choose the most expensive option",
                description: "It's more convenient.",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "Convenience matters, but the most expensive option isn't always necessary."
            },
            {
                icon: "💸",
                title: "Spend extra for no reason",
                description: "Why not?",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "Choosing unnecessary extra costs can make your budget harder to manage."
            }
        ]
    },


    /* =====================================================
       37
    ===================================================== */

    {
        icon: "🎉",
        category: "EVENTS",

        question:
            "Your friends are planning an expensive outing.",

        description:
            "You have other important expenses coming soon.",

        choices: [
            {
                icon: "🧮",
                title: "Check my budget before agreeing",
                description: "Make sure it fits.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! You can enjoy activities while still considering your budget."
            },
            {
                icon: "💸",
                title: "Spend everything to join",
                description: "I don't want to miss out.",
                correct: false,
                points: 0,
                money: -35,
                feedback:
                    "Feeling left out can be difficult, but spending beyond your budget may create bigger problems."
            },
            {
                icon: "💳",
                title: "Borrow money without a plan",
                description: "I'll worry later.",
                correct: false,
                points: 0,
                money: 0,
                feedback:
                    "It is better to understand your budget before committing to an expense."
            }
        ]
    },


    /* =====================================================
       38
    ===================================================== */

    {
        icon: "🧃",
        category: "BUDGETING",

        question:
            "You have RM10 left until your next planned allowance.",

        description:
            "You are considering buying something for RM8 that you don't need.",

        choices: [
            {
                icon: "🐷",
                title: "Keep the money",
                description: "I may need it.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Good choice! Keeping some money available is useful when your budget is already low."
            },
            {
                icon: "🛍️",
                title: "Buy it",
                description: "I still have RM2.",
                correct: false,
                points: 0,
                money: -8,
                feedback:
                    "Leaving yourself with very little money can make unexpected needs difficult."
            },
            {
                icon: "💸",
                title: "Spend the remaining RM2 too",
                description: "Use everything.",
                correct: false,
                points: 0,
                money: -10,
                feedback:
                    "Using all your remaining money leaves no flexibility."
            }
        ]
    },


    /* =====================================================
       39
    ===================================================== */

    {
        icon: "📦",
        category: "RETURNS",

        question:
            "You bought something and later realise it isn't what you expected.",

        description:
            "You are checking what options are available.",

        choices: [
            {
                icon: "📋",
                title: "Check the shop's return policy",
                description: "Understand my options.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Good! Knowing the rules can help you make a sensible next decision."
            },
            {
                icon: "🛍️",
                title: "Buy another one immediately",
                description: "Maybe that fixes it.",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "Buying another item before checking your options may create unnecessary spending."
            },
            {
                icon: "💸",
                title: "Ignore the problem",
                description: "Nothing can be done.",
                correct: false,
                points: 0,
                money: 0,
                feedback:
                    "It can be useful to check whether the seller provides any reasonable options."
            }
        ]
    },


    /* =====================================================
       40
    ===================================================== */

    {
        icon: "📝",
        category: "LISTS",

        question:
            "You are going shopping for several things.",

        description:
            "You often buy extra things when you shop without a plan.",

        choices: [
            {
                icon: "📝",
                title: "Make a shopping list",
                description: "Know what I need.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! A list can help you stay focused on what you actually planned to buy."
            },
            {
                icon: "🛒",
                title: "Buy whatever looks interesting",
                description: "Decide in the shop.",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "Shopping without a plan can make impulse purchases more likely."
            },
            {
                icon: "💸",
                title: "Bring extra money just in case",
                description: "I'll probably spend it.",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "Having a plan is often more useful than giving yourself extra opportunities to overspend."
            }
        ]
    },


    /* =====================================================
       41
    ===================================================== */

    {
        icon: "📣",
        category: "ADVERTISING",

        question:
            "An advertisement says you absolutely NEED a new product.",

        description:
            "You were perfectly fine without it yesterday.",

        choices: [
            {
                icon: "🧠",
                title: "Ask whether I actually need it",
                description: "Think independently.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Great! Advertising can influence emotions, so checking your actual needs is useful."
            },
            {
                icon: "🛒",
                title: "Buy it immediately",
                description: "The advertisement says I need it.",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "Advertisements are designed to persuade you, so it's worth thinking before buying."
            },
            {
                icon: "💸",
                title: "Buy several",
                description: "It must be important.",
                correct: false,
                points: 0,
                money: -35,
                feedback:
                    "An advertisement doesn't mean you need multiple copies."
            }
        ]
    },


    /* =====================================================
       42
    ===================================================== */

    {
        icon: "🎒",
        category: "SCHOOL BUDGET",

        question:
            "You have limited money for school supplies.",

        description:
            "You need some basic supplies and also want fancy stationery.",

        choices: [
            {
                icon: "📚",
                title: "Buy the important supplies first",
                description: "Needs before wants.",
                correct: true,
                points: 10,
                money: -10,
                feedback:
                    "Excellent! Prioritising school needs helps you use your budget effectively."
            },
            {
                icon: "✨",
                title: "Buy only fancy stationery",
                description: "It looks better.",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "Fancy items can wait when you still need basic supplies."
            },
            {
                icon: "🛍️",
                title: "Buy everything",
                description: "I'll figure it out.",
                correct: false,
                points: 0,
                money: -30,
                feedback:
                    "Buying everything may leave you without enough money for important supplies."
            }
        ]
    },


    /* =====================================================
       43
    ===================================================== */

    {
        icon: "💡",
        category: "VALUE",

        question:
            "You find two products that do almost exactly the same thing.",

        description:
            "One costs much more because of its branding.",

        choices: [
            {
                icon: "🔎",
                title: "Compare what I actually get",
                description: "Look at value, not just branding.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Smart! Comparing usefulness and price helps you think about value."
            },
            {
                icon: "💎",
                title: "Choose the expensive one automatically",
                description: "It must be better.",
                correct: false,
                points: 0,
                money: -25,
                feedback:
                    "A higher price does not automatically guarantee better value."
            },
            {
                icon: "🛒",
                title: "Buy both",
                description: "Problem solved!",
                correct: false,
                points: 0,
                money: -35,
                feedback:
                    "Buying both may be unnecessary when one product already meets the need."
            }
        ]
    },


    /* =====================================================
       44
    ===================================================== */

    {
        icon: "🐷",
        category: "GOALS",

        question:
            "You are saving toward a goal, but you want to spend some of the money.",

        description:
            "The purchase is something you want, not something you need.",

        choices: [
            {
                icon: "🎯",
                title: "Remember my saving goal",
                description: "Keep working toward it.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! Keeping your goal in mind can help you make consistent choices."
            },
            {
                icon: "🛍️",
                title: "Spend the savings",
                description: "I'll start again later.",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "Using your savings for unrelated wants can delay your goal."
            },
            {
                icon: "💸",
                title: "Spend everything",
                description: "I'll save next month.",
                correct: false,
                points: 0,
                money: -40,
                feedback:
                    "A goal is easier to reach when you protect the money you've already saved."
            }
        ]
    },


    /* =====================================================
       45
    ===================================================== */

    {
        icon: "🧠",
        category: "IMPULSE CONTROL",

        question:
            "You suddenly feel like buying something because you are bored.",

        description:
            "You don't actually need anything.",

        choices: [
            {
                icon: "🎨",
                title: "Find another activity first",
                description: "Do something without spending.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Great! Not every feeling of boredom needs to turn into a purchase."
            },
            {
                icon: "🛍️",
                title: "Go shopping",
                description: "Shopping will fix the boredom.",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "Shopping when bored can lead to purchases you didn't really plan."
            },
            {
                icon: "💸",
                title: "Buy random things",
                description: "Anything is fine.",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "Random purchases can make it harder to know where your money went."
            }
        ]
    },


    /* =====================================================
       46
    ===================================================== */

    {
        icon: "📊",
        category: "BUDGET REVIEW",

        question:
            "Your budget isn't working as planned.",

        description:
            "You keep spending more in one category than expected.",

        choices: [
            {
                icon: "📊",
                title: "Review and adjust the plan",
                description: "Find what needs changing.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! Budgets are tools that can be adjusted when your situation changes."
            },
            {
                icon: "🙈",
                title: "Ignore it",
                description: "Maybe it will fix itself.",
                correct: false,
                points: 0,
                money: 0,
                feedback:
                    "Reviewing the problem makes it easier to find a solution."
            },
            {
                icon: "💸",
                title: "Spend even more",
                description: "The budget is already broken.",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "A budget problem is usually a reason to review spending, not increase it."
            }
        ]
    },


    /* =====================================================
       47
    ===================================================== */

    {
        icon: "🛒",
        category: "SHOPPING LIST",

        question:
            "You go to a shop for one item and see many interesting things.",

        description:
            "You only planned to buy one thing.",

        choices: [
            {
                icon: "📝",
                title: "Stick to the plan",
                description: "Buy what I came for.",
                correct: true,
                points: 10,
                money: -8,
                feedback:
                    "Great! Sticking to your plan can protect you from impulse purchases."
            },
            {
                icon: "🛍️",
                title: "Buy everything interesting",
                description: "Why not?",
                correct: false,
                points: 0,
                money: -30,
                feedback:
                    "Interesting doesn't always mean necessary."
            },
            {
                icon: "💸",
                title: "Spend my entire budget",
                description: "I came shopping anyway.",
                correct: false,
                points: 0,
                money: -40,
                feedback:
                    "Using your entire budget can leave you without money for future needs."
            }
        ]
    },


    /* =====================================================
       48
    ===================================================== */

    {
        icon: "🔄",
        category: "RECONSIDER",

        question:
            "You put an item in your cart, but after waiting you realise you don't want it anymore.",

        description:
            "You haven't paid yet.",

        choices: [
            {
                icon: "❌",
                title: "Remove it from the cart",
                description: "I changed my mind.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "Excellent! Changing your mind before paying can prevent unnecessary spending."
            },
            {
                icon: "💳",
                title: "Buy it anyway",
                description: "It's already in my cart.",
                correct: false,
                points: 0,
                money: -15,
                feedback:
                    "You are allowed to change your mind before purchasing."
            },
            {
                icon: "➕",
                title: "Add another item",
                description: "Maybe I'll like it later.",
                correct: false,
                points: 0,
                money: -20,
                feedback:
                    "Adding more items increases spending when you already decided you don't want the first one."
            }
        ]
    },


    /* =====================================================
       49
    ===================================================== */

    {
        icon: "🌟",
        category: "REWARD",

        question:
            "You want to reward yourself after completing something difficult.",

        description:
            "You have a limited budget.",

        choices: [
            {
                icon: "🎨",
                title: "Choose an affordable reward",
                description: "Enjoy something without overspending.",
                correct: true,
                points: 10,
                money: -5,
                feedback:
                    "Great! Rewards don't have to be expensive to feel meaningful."
            },
            {
                icon: "💎",
                title: "Buy the most expensive thing",
                description: "I deserve it!",
                correct: false,
                points: 0,
                money: -35,
                feedback:
                    "A reward can be enjoyable without using a large part of your budget."
            },
            {
                icon: "🛍️",
                title: "Buy several things",
                description: "Maximum reward!",
                correct: false,
                points: 0,
                money: -40,
                feedback:
                    "Using too much money on a reward can make future spending harder."
            }
        ]
    },


    /* =====================================================
       50
    ===================================================== */

    {
        icon: "🏆",
        category: "FINAL CHALLENGE",

        question:
            "You have RM50. You want something fun for RM20, but you know you will need RM15 later.",

        description:
            "You could buy the fun item and still have RM15, or keep more money available.",

        choices: [
            {
                icon: "🎯",
                title: "Set aside the RM15 first, then decide",
                description: "Protect the future need.",
                correct: true,
                points: 10,
                money: 0,
                feedback:
                    "🏆 Excellent! You considered both your present want and future need before spending."
            },
            {
                icon: "🛍️",
                title: "Spend everything on fun",
                description: "I'll worry later.",
                correct: false,
                points: 0,
                money: -40,
                feedback:
                    "A good spending decision considers both what you want now and what you may need later."
            },
            {
                icon: "💸",
                title: "Buy several things",
                description: "Use the whole RM50.",
                correct: false,
                points: 0,
                money: -50,
                feedback:
                    "Using your whole budget leaves no flexibility for future needs."
            }
        ]
    }

];


/* =========================================================
   START GAME
========================================================= */

function startGame() {

    budget = 50;

    score = 0;

    streak = 0;

    bestStreak = 0;

    level = 1;

    currentQuestion = 0;

    answered = false;


    document
        .getElementById("intro-screen")
        .classList.add("hidden");


    document
        .getElementById("result-screen")
        .classList.add("hidden");


    document
        .getElementById("game-screen")
        .classList.remove("hidden");


    updateHUD();

    loadQuestion();

}


/* =========================================================
   LOAD QUESTION
========================================================= */

function loadQuestion() {

    const question =
        questions[currentQuestion];


    answered = false;


    document.getElementById(
        "round-number"
    ).textContent =
        "ROUND "
        + (currentQuestion + 1)
        + " / "
        + questions.length;


    document.getElementById(
        "question-category"
    ).textContent =
        question.category;


    document.getElementById(
        "question-icon"
    ).textContent =
        question.icon;


    document.getElementById(
        "question"
    ).textContent =
        question.question;


    document.getElementById(
        "question-description"
    ).textContent =
        question.description;


    document
        .getElementById("feedback")
        .classList.add("hidden");


    document
        .getElementById("next-button")
        .classList.add("hidden");


    const choices =
        document.getElementById("choices");


    choices.innerHTML = "";


    question.choices.forEach(
        function(choice) {

            const button =
                document.createElement("button");


            button.className =
                "choice-button";


            button.innerHTML =

                "<span>"
                + choice.icon
                + "</span>"

                +

                "<strong>"
                + choice.title
                + "</strong>"

                +

                "<small>"
                + choice.description
                + "</small>";


            button.onclick =
                function() {

                    chooseAnswer(
                        choice,
                        button
                    );

                };


            choices.appendChild(button);

        }
    );

}


/* =========================================================
   CHOOSE ANSWER
========================================================= */

function chooseAnswer(
    choice,
    button
) {

    if (answered) {
        return;
    }


    answered = true;


    const allButtons =
        document.querySelectorAll(
            ".choice-button"
        );


    allButtons.forEach(
        function(item) {

            item.disabled = true;

        }
    );


    budget += choice.money;


    if (budget < 0) {
        budget = 0;
    }


    /* CORRECT */

    if (choice.correct) {

        score += choice.points;

        streak++;


        if (streak > bestStreak) {

            bestStreak = streak;

        }


        button.style.background =
            "#e8f5e2";


        button.style.borderColor =
            "#8fba7f";


        showFeedback(
            "🌟",
            "Smart Choice!",
            choice.feedback + " +10 points!"
        );

    }


    /* WRONG */

    else {

        streak = 0;


        button.style.background =
            "#fff0df";


        button.style.borderColor =
            "#d7b27c";


        showFeedback(
            "💡",
            "Think About It!",
            choice.feedback
        );

    }


    updateLevel();

    updateHUD();

}


/* =========================================================
   SHOW FEEDBACK
========================================================= */

function showFeedback(
    icon,
    title,
    text
) {

    document.getElementById(
        "feedback-icon"
    ).textContent =
        icon;


    document.getElementById(
        "feedback-title"
    ).textContent =
        title;


    document.getElementById(
        "feedback-text"
    ).textContent =
        text;


    document
        .getElementById("feedback")
        .classList.remove("hidden");


    document
        .getElementById("next-button")
        .classList.remove("hidden");

}


/* =========================================================
   NEXT QUESTION
========================================================= */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        questions.length
    ) {

        finishGame();

        return;

    }


    loadQuestion();


    document
        .getElementById("game-screen")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}


/* =========================================================
   LEVEL SYSTEM
========================================================= */

function updateLevel() {

    if (score >= 400) {

        level = 6;

    }

    else if (score >= 300) {

        level = 5;

    }

    else if (score >= 200) {

        level = 4;

    }

    else if (score >= 100) {

        level = 3;

    }

    else if (score >= 50) {

        level = 2;

    }

    else {

        level = 1;

    }

}


/* =========================================================
   UPDATE HUD
========================================================= */

function updateHUD() {

    document.getElementById(
        "budget"
    ).textContent =
        "RM" + budget;


    document.getElementById(
        "score"
    ).textContent =
        score;


    document.getElementById(
        "streak"
    ).textContent =
        streak;


    document.getElementById(
        "level"
    ).textContent =
        level;


    updateMoneyBar();

}


/* =========================================================
   MONEY BAR
========================================================= */

function updateMoneyBar() {

    let percentage =
        (budget / 50) * 100;


    if (percentage < 0) {
        percentage = 0;
    }


    if (percentage > 100) {
        percentage = 100;
    }


    document.getElementById(
        "money-fill"
    ).style.width =
        percentage + "%";


    document.getElementById(
        "budget-percent"
    ).textContent =
        Math.round(percentage) + "%";

}


/* =========================================================
   FINISH GAME
========================================================= */

function finishGame() {

    document
        .getElementById("game-screen")
        .classList.add("hidden");


    document
        .getElementById("result-screen")
        .classList.remove("hidden");


    let title;
    let description;
    let icon;
    let tip;


    if (score >= 450) {

        icon = "👑";

        title =
            "Ultimate Money Master!";

        description =
            "Incredible! You made thoughtful decisions almost every time.";

        tip =
            "You consistently considered needs, wants, saving, planning and future expenses.";

    }

    else if (score >= 400) {

        icon = "🏆";

        title =
            "Money Master!";

        description =
            "Amazing! You showed excellent money decision-making skills.";

        tip =
            "Keep practising the habit of pausing and thinking before spending.";

    }

    else if (score >= 300) {

        icon = "🌟";

        title =
            "Smart Spender!";

        description =
            "Great job! You made many thoughtful choices.";

        tip =
            "Keep comparing options and thinking about future needs.";

    }

    else if (score >= 200) {

        icon = "🌱";

        title =
            "Money Learner!";

        description =
            "You're building strong money habits.";

        tip =
            "Try asking: Do I need this, do I want this, or should I save the money?";

    }

    else if (score >= 100) {

        icon = "💡";

        title =
            "Getting Smarter!";

        description =
            "You're learning how different choices affect your budget.";

        tip =
            "Keep practising before making spending decisions.";

    }

    else {

        icon = "🌱";

        title =
            "Keep Practising!";

        description =
            "Every decision is a chance to learn something new.";

        tip =
            "Pause before spending and think about whether the purchase is really worth it.";

    }


    document.getElementById(
        "result-icon"
    ).textContent =
        icon;


    document.getElementById(
        "result-title"
    ).textContent =
        title;


    document.getElementById(
        "result-description"
    ).textContent =
        description;


    document.getElementById(
        "final-score"
    ).textContent =
        score;


    document.getElementById(
        "final-budget"
    ).textContent =
        "RM" + budget;


    document.getElementById(
        "final-streak"
    ).textContent =
        bestStreak;


    document.getElementById(
        "final-tip"
    ).textContent =
        tip;


    document
        .getElementById("result-screen")
        .scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

}


/* =========================================================
   RESTART
========================================================= */

function restartGame() {

    document
        .getElementById("result-screen")
        .classList.add("hidden");


    document
        .getElementById("game-screen")
        .classList.add("hidden");


    document
        .getElementById("intro-screen")
        .classList.remove("hidden");


    document
        .getElementById("intro-screen")
        .scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

}
