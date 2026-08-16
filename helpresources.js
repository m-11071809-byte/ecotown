/* =========================================================
   50 QUESTS
========================================================= */

const quests = [

    /* =========================
       SCHOOL
    ========================== */

    {
        id: 1,
        title: "The Forgotten Homework",
        category: "School",
        icon: "📚",
        situation:
            "You arrive at school and suddenly remember that you forgot to finish an important piece of homework.",
        choices: [
            {
                text: "Be honest with your teacher and explain what happened.",
                good: true,
                result:
                    "Being honest gives you a chance to explain the situation and find a responsible solution."
            },
            {
                text: "Pretend that you completed it.",
                good: false,
                result:
                    "Pretending may create a bigger problem later."
            },
            {
                text: "Copy someone else's homework quickly.",
                good: false,
                result:
                    "Copying does not solve the underlying problem and is unfair to the other student."
            }
        ]
    },

    {
        id: 2,
        title: "Group Project Trouble",
        category: "School",
        icon: "👥",
        situation:
            "Your group project is due soon, but one group member has not completed their part.",
        choices: [
            {
                text: "Talk to them calmly and find out what is preventing them from finishing.",
                good: true,
                result:
                    "Communication can help your group understand the problem and divide the remaining work fairly."
            },
            {
                text: "Immediately blame them in the group chat.",
                good: false,
                result:
                    "Blaming someone can make cooperation more difficult."
            },
            {
                text: "Do nothing and hope they finish.",
                good: false,
                result:
                    "Ignoring the problem could leave the entire group unprepared."
            }
        ]
    },

    {
        id: 3,
        title: "The Difficult Topic",
        category: "School",
        icon: "🧩",
        situation:
            "You have studied a topic several times but still cannot understand an important concept.",
        choices: [
            {
                text: "Ask your teacher or another trusted person for an explanation.",
                good: true,
                result:
                    "Asking for help is a useful learning strategy."
            },
            {
                text: "Give up completely.",
                good: false,
                result:
                    "Difficulty with one concept does not mean you cannot learn it."
            },
            {
                text: "Memorise the words without understanding them.",
                good: false,
                result:
                    "Understanding the idea is usually more useful than memorising isolated words."
            }
        ]
    },

    {
        id: 4,
        title: "Exam Tomorrow",
        category: "School",
        icon: "📝",
        situation:
            "You have an exam tomorrow and several chapters still need revision.",
        choices: [
            {
                text: "Make a short priority list and focus on the most important topics.",
                good: true,
                result:
                    "Prioritising helps you use your available study time more effectively."
            },
            {
                text: "Spend all night studying without planning.",
                good: false,
                result:
                    "A lack of planning can make revision less effective."
            },
            {
                text: "Do not study because there is too much to cover.",
                good: false,
                result:
                    "Even partial preparation can still be useful."
            }
        ]
    },

    {
        id: 5,
        title: "Distracted Study",
        category: "School",
        icon: "📱",
        situation:
            "You are trying to study but your phone keeps distracting you.",
        choices: [
            {
                text: "Put the phone somewhere away from your study area.",
                good: true,
                result:
                    "Reducing distractions can make it easier to concentrate."
            },
            {
                text: "Keep checking it every few minutes.",
                good: false,
                result:
                    "Frequent interruptions can make it harder to maintain focus."
            },
            {
                text: "Stop studying completely.",
                good: false,
                result:
                    "Removing one distraction does not require giving up on studying."
            }
        ]
    },

    {
        id: 6,
        title: "Helping a Classmate",
        category: "School",
        icon: "🤝",
        situation:
            "A classmate asks you to explain a concept they are struggling with.",
        choices: [
            {
                text: "Explain the idea using a simple example.",
                good: true,
                result:
                    "Explaining concepts in your own words can help both people understand them."
            },
            {
                text: "Give them your answers without explanation.",
                good: false,
                result:
                    "Answers alone may not help someone understand the concept."
            },
            {
                text: "Tell them to figure it out themselves.",
                good: false,
                result:
                    "A little help can make learning more approachable."
            }
        ]
    },

    {
        id: 7,
        title: "Messy Notes",
        category: "School",
        icon: "📒",
        situation:
            "Your notes are scattered across several pages and you cannot find important information.",
        choices: [
            {
                text: "Organise the important information into clear sections.",
                good: true,
                result:
                    "Organised notes make information easier to find and review."
            },
            {
                text: "Throw everything away.",
                good: false,
                result:
                    "You may lose useful information."
            },
            {
                text: "Ignore the problem until the exam.",
                good: false,
                result:
                    "Leaving organisation until the last minute can increase stress."
            }
        ]
    },

    {
        id: 8,
        title: "Missed Instructions",
        category: "School",
        icon: "👂",
        situation:
            "Your teacher gives important instructions while you are distracted.",
        choices: [
            {
                text: "Check the instructions with your teacher or classmates.",
                good: true,
                result:
                    "Clarifying information helps prevent mistakes."
            },
            {
                text: "Guess what the instructions were.",
                good: false,
                result:
                    "Guessing can lead to unnecessary errors."
            },
            {
                text: "Ignore the assignment.",
                good: false,
                result:
                    "Ignoring the task does not solve the missing-information problem."
            }
        ]
    },

    {
        id: 9,
        title: "Low Motivation",
        category: "School",
        icon: "🔋",
        situation:
            "You need to study but feel like you have no motivation to begin.",
        choices: [
            {
                text: "Start with one small, manageable task.",
                good: true,
                result:
                    "Starting small can make a large task feel more manageable."
            },
            {
                text: "Wait until you suddenly feel motivated.",
                good: false,
                result:
                    "Sometimes beginning with a small action is more useful than waiting."
            },
            {
                text: "Decide that studying is impossible.",
                good: false,
                result:
                    "A lack of motivation at one moment does not determine what you can accomplish."
            }
        ]
    },

    {
        id: 10,
        title: "Sharing Study Resources",
        category: "School",
        icon: "📖",
        situation:
            "You find a useful study resource that could help your classmates.",
        choices: [
            {
                text: "Share it with classmates and explain why it is useful.",
                good: true,
                result:
                    "Sharing useful resources can help create a supportive learning environment."
            },
            {
                text: "Keep it secret so nobody else can use it.",
                good: false,
                result:
                    "Learning does not have to be a competition."
            },
            {
                text: "Share it without checking whether it is reliable.",
                good: false,
                result:
                    "It is better to check information before recommending it."
            }
        ]
    },


    /* =========================
       ENVIRONMENT
    ========================== */

    {
        id: 11,
        title: "The Unnecessary Light",
        category: "Environment",
        icon: "💡",
        situation:
            "You notice a light is switched on in an empty room.",
        choices: [
            {
                text: "Switch it off if it is safe to do so.",
                good: true,
                result:
                    "Avoiding unnecessary electricity use is a simple energy-saving action."
            },
            {
                text: "Leave it on because someone might use the room later.",
                good: false,
                result:
                    "If the room is currently empty, the electricity may be unnecessary."
            },
            {
                text: "Switch on more lights.",
                good: false,
                result:
                    "That would increase unnecessary electricity use."
            }
        ]
    },

    {
        id: 12,
        title: "Plastic Bottle",
        category: "Environment",
        icon: "♻️",
        situation:
            "You have finished using a plastic bottle and see recycling bins nearby.",
        choices: [
            {
                text: "Check the recycling instructions and place it in the appropriate bin.",
                good: true,
                result:
                    "Sorting waste correctly can help recycling systems work better."
            },
            {
                text: "Throw it on the ground.",
                good: false,
                result:
                    "Litter can harm the environment."
            },
            {
                text: "Put it into any bin without checking.",
                good: false,
                result:
                    "Different recycling systems accept different materials."
            }
        ]
    },

    {
        id: 13,
        title: "Water Running",
        category: "Environment",
        icon: "💧",
        situation:
            "You notice a tap has been left running unnecessarily.",
        choices: [
            {
                text: "Turn the tap off.",
                good: true,
                result:
                    "Stopping unnecessary water flow helps avoid wasting water."
            },
            {
                text: "Ignore it.",
                good: false,
                result:
                    "Ignoring waste does not solve it."
            },
            {
                text: "Leave it running longer.",
                good: false,
                result:
                    "That would increase water waste."
            }
        ]
    },

    {
        id: 14,
        title: "Food Waste",
        category: "Environment",
        icon: "🍎",
        situation:
            "You have more food than you can reasonably finish.",
        choices: [
            {
                text: "Save suitable leftovers for later.",
                good: true,
                result:
                    "Using suitable leftovers can help reduce food waste."
            },
            {
                text: "Throw everything away immediately.",
                good: false,
                result:
                    "Food waste can sometimes be avoided through better planning."
            },
            {
                text: "Take even more food.",
                good: false,
                result:
                    "Taking more than you need can increase waste."
            }
        ]
    },

    {
        id: 15,
        title: "Reusable Bag",
        category: "Environment",
        icon: "🛍️",
        situation:
            "You are going shopping and have a reusable bag available.",
        choices: [
            {
                text: "Bring the reusable bag.",
                good: true,
                result:
                    "Reusing bags can reduce the need for additional disposable bags."
            },
            {
                text: "Take several new bags even though you do not need them.",
                good: false,
                result:
                    "Using more disposable items than necessary creates additional waste."
            },
            {
                text: "Buy another bag every time.",
                good: false,
                result:
                    "Reusing what you already have can be more resource-efficient."
            }
        ]
    },

    {
        id: 16,
        title: "Paper Problem",
        category: "Environment",
        icon: "📄",
        situation:
            "You only need to write a short note and have a partially used piece of paper.",
        choices: [
            {
                text: "Use the blank side of the existing paper.",
                good: true,
                result:
                    "Reusing paper can reduce unnecessary consumption."
            },
            {
                text: "Throw it away and take a new sheet.",
                good: false,
                result:
                    "The existing paper still has usable space."
            },
            {
                text: "Use several new sheets.",
                good: false,
                result:
                    "Using more paper than necessary creates avoidable waste."
            }
        ]
    },

    {
        id: 17,
        title: "The Litter Challenge",
        category: "Environment",
        icon: "🗑️",
        situation:
            "You notice litter in an area and there is a suitable bin nearby.",
        choices: [
            {
                text: "If it is safe and appropriate, pick it up and dispose of it correctly.",
                good: true,
                result:
                    "Small responsible actions can help keep shared spaces cleaner."
            },
            {
                text: "Add another piece of rubbish.",
                good: false,
                result:
                    "Adding more litter makes the problem worse."
            },
            {
                text: "Move the litter somewhere else.",
                good: false,
                result:
                    "Moving litter does not properly solve the problem."
            }
        ]
    },

    {
        id: 18,
        title: "Nature Walk",
        category: "Environment",
        icon: "🌳",
        situation:
            "You visit a natural area with signs asking visitors to stay on marked paths.",
        choices: [
            {
                text: "Stay on the marked path.",
                good: true,
                result:
                    "Following paths can help protect plants and habitats."
            },
            {
                text: "Walk wherever you want.",
                good: false,
                result:
                    "Leaving paths can disturb plants or sensitive areas."
            },
            {
                text: "Take plants home.",
                good: false,
                result:
                    "Natural areas should be treated with care."
            }
        ]
    },

    {
        id: 19,
        title: "Energy Check",
        category: "Environment",
        icon: "⚡",
        situation:
            "You leave a room containing devices that are no longer needed.",
        choices: [
            {
                text: "Switch off devices that are safe to turn off.",
                good: true,
                result:
                    "Turning off unnecessary equipment can reduce energy use."
            },
            {
                text: "Leave everything running.",
                good: false,
                result:
                    "Unused devices may consume unnecessary energy."
            },
            {
                text: "Turn on additional devices.",
                good: false,
                result:
                    "That would increase unnecessary energy use."
            }
        ]
    },

    {
        id: 20,
        title: "Eco Decision",
        category: "Environment",
        icon: "🌎",
        situation:
            "You have two options for completing a simple task: one uses unnecessary disposable materials and the other uses an item you already have.",
        choices: [
            {
                text: "Use the item you already have if it is suitable.",
                good: true,
                result:
                    "Reusing suitable items can help reduce unnecessary consumption."
            },
            {
                text: "Always choose the disposable option.",
                good: false,
                result:
                    "Disposable options are not always necessary."
            },
            {
                text: "Use both options at the same time.",
                good: false,
                result:
                    "Using more resources than necessary is usually avoidable."
            }
        ]
    },


    /* =========================
       TECHNOLOGY
    ========================== */

    {
        id: 21,
        title: "Suspicious Message",
        category: "Technology",
        icon: "⚠️",
        situation:
            "You receive a message asking you to click an unfamiliar link and provide personal information.",
        choices: [
            {
                text: "Do not click the link and verify the message through a trusted source.",
                good: true,
                result:
                    "Unexpected requests for personal information deserve careful verification."
            },
            {
                text: "Click immediately.",
                good: false,
                result:
                    "Unknown links can be risky."
            },
            {
                text: "Send the message to everyone you know.",
                good: false,
                result:
                    "Forwarding suspicious messages can spread the risk."
            }
        ]
    },

    {
        id: 22,
        title: "Weak Password",
        category: "Technology",
        icon: "🔐",
        situation:
            "You realise that several important accounts use the same simple password.",
        choices: [
            {
                text: "Ask a trusted adult for help and improve account security using unique strong passwords.",
                good: true,
                result:
                    "Using unique strong passwords can improve account security."
            },
            {
                text: "Post the password online.",
                good: false,
                result:
                    "Passwords should never be publicly shared."
            },
            {
                text: "Make the password even simpler.",
                good: false,
                result:
                    "Simpler passwords are generally easier to guess."
            }
        ]
    },

    {
        id: 23,
        title: "Computer Freeze",
        category: "Technology",
        icon: "💻",
        situation:
            "Your computer stops responding while you are working on an important task.",
        choices: [
            {
                text: "Wait briefly, check for obvious causes and use safe troubleshooting steps.",
                good: true,
                result:
                    "Calm troubleshooting can help identify the cause without making the situation worse."
            },
            {
                text: "Immediately hit every key repeatedly.",
                good: false,
                result:
                    "Random actions may make troubleshooting harder."
            },
            {
                text: "Delete important files.",
                good: false,
                result:
                    "Deleting files without understanding the problem can cause data loss."
            }
        ]
    },

    {
        id: 24,
        title: "Unknown App",
        category: "Technology",
        icon: "📱",
        situation:
            "You find an unfamiliar app installed on a device you use.",
        choices: [
            {
                text: "Ask a trusted adult or device owner about it before changing anything.",
                good: true,
                result:
                    "It is safer to understand an unfamiliar app before removing or using it."
            },
            {
                text: "Immediately give the app every permission.",
                good: false,
                result:
                    "Apps should not automatically receive unnecessary permissions."
            },
            {
                text: "Share the app with everyone.",
                good: false,
                result:
                    "You should understand an app before recommending it."
            }
        ]
    },

    {
        id: 25,
        title: "Online Information",
        category: "Technology",
        icon: "🔎",
        situation:
            "You find a surprising claim online and want to know whether it is true.",
        choices: [
            {
                text: "Check reliable sources and compare the information.",
                good: true,
                result:
                    "Comparing trustworthy sources can help identify inaccurate information."
            },
            {
                text: "Believe it immediately.",
                good: false,
                result:
                    "Online information is not automatically accurate."
            },
            {
                text: "Share it before checking.",
                good: false,
                result:
                    "Unverified claims can spread misinformation."
            }
        ]
    },

    {
        id: 26,
        title: "Public Computer",
        category: "Technology",
        icon: "🖥️",
        situation:
            "You use a shared computer to access an account.",
        choices: [
            {
                text: "Log out when finished and avoid saving private login details.",
                good: true,
                result:
                    "Logging out helps protect your account on shared devices."
            },
            {
                text: "Leave the account open.",
                good: false,
                result:
                    "Someone else could potentially access the account."
            },
            {
                text: "Save the password in the browser without checking the settings.",
                good: false,
                result:
                    "Shared computers require extra care with private information."
            }
        ]
    },

    {
        id: 27,
        title: "Important File",
        category: "Technology",
        icon: "📁",
        situation:
            "You have an important school project stored on one device.",
        choices: [
            {
                text: "Keep an appropriate backup in another safe location.",
                good: true,
                result:
                    "Backups can protect against accidental loss."
            },
            {
                text: "Delete the original.",
                good: false,
                result:
                    "Deleting the only copy creates unnecessary risk."
            },
            {
                text: "Never save the project.",
                good: false,
                result:
                    "Important work should be saved appropriately."
            }
        ]
    },

    {
        id: 28,
        title: "Too Many Notifications",
        category: "Technology",
        icon: "🔔",
        situation:
            "Your device constantly interrupts you with notifications while you are working.",
        choices: [
            {
                text: "Turn off unnecessary notifications or use a focus setting.",
                good: true,
                result:
                    "Reducing unnecessary interruptions can improve concentration."
            },
            {
                text: "Turn on even more notifications.",
                good: false,
                result:
                    "More notifications create more interruptions."
            },
            {
                text: "Stop working permanently.",
                good: false,
                result:
                    "Managing notifications is a better solution."
            }
        ]
    },

    {
        id: 29,
        title: "Unknown USB",
        category: "Technology",
        icon: "💾",
        situation:
            "Someone offers you an unknown USB device and asks you to connect it to your computer.",
        choices: [
            {
                text: "Do not connect it unless you can verify that it is safe.",
                good: true,
                result:
                    "Unknown devices can present security risks."
            },
            {
                text: "Connect it immediately.",
                good: false,
                result:
                    "Unknown devices should be treated cautiously."
            },
            {
                text: "Give it to another person to try first.",
                good: false,
                result:
                    "Passing a potential risk to someone else is not a solution."
            }
        ]
    },

    {
        id: 30,
        title: "Digital Footprint",
        category: "Technology",
        icon: "👣",
        situation:
            "You are about to post something publicly online.",
        choices: [
            {
                text: "Pause and consider whether you are comfortable with it being public.",
                good: true,
                result:
                    "Thinking before posting can help you make more responsible digital choices."
            },
            {
                text: "Post it without thinking.",
                good: false,
                result:
                    "Online posts can sometimes be difficult to undo."
            },
            {
                text: "Share private information.",
                good: false,
                result:
                    "Private information should be protected."
            }
        ]
    },


    /* =========================
       LIFE SKILLS
    ========================== */

    {
        id: 31,
        title: "Busy Morning",
        category: "Life Skills",
        icon: "⏰",
        situation:
            "You wake up late and have limited time before school.",
        choices: [
            {
                text: "Prioritise the essential tasks and prepare calmly.",
                good: true,
                result:
                    "Prioritising helps you use limited time effectively."
            },
            {
                text: "Spend most of the time worrying.",
                good: false,
                result:
                    "Worrying does not create more time."
            },
            {
                text: "Forget everything and leave without planning.",
                good: false,
                result:
                    "A quick plan can prevent avoidable problems."
            }
        ]
    },

    {
        id: 32,
        title: "Lost Item",
        category: "Life Skills",
        icon: "🔍",
        situation:
            "You cannot find an important item that you recently used.",
        choices: [
            {
                text: "Think back to where you last used it and search systematically.",
                good: true,
                result:
                    "A systematic search is often more effective than searching randomly."
            },
            {
                text: "Immediately accuse someone of taking it.",
                good: false,
                result:
                    "There may be many innocent explanations."
            },
            {
                text: "Give up immediately.",
                good: false,
                result:
                    "A systematic search may help you find it."
            }
        ]
    },

    {
        id: 33,
        title: "Unexpected Problem",
        category: "Life Skills",
        icon: "🧩",
        situation:
            "Your original plan suddenly becomes impossible because something unexpected happens.",
        choices: [
            {
                text: "Pause, identify the new problem and create another realistic plan.",
                good: true,
                result:
                    "Adaptability is an important everyday problem-solving skill."
            },
            {
                text: "Assume everything is ruined.",
                good: false,
                result:
                    "Unexpected problems do not always mean the entire plan has failed."
            },
            {
                text: "Ignore the situation.",
                good: false,
                result:
                    "Ignoring a problem can make it harder to solve."
            }
        ]
    },

    {
        id: 34,
        title: "Misunderstanding",
        category: "Life Skills",
        icon: "💬",
        situation:
            "A friend seems upset because they misunderstood something you said.",
        choices: [
            {
                text: "Talk calmly and explain what you meant.",
                good: true,
                result:
                    "Clear communication can help resolve misunderstandings."
            },
            {
                text: "Immediately start an argument.",
                good: false,
                result:
                    "Arguments can make misunderstandings worse."
            },
            {
                text: "Spread the story to other people.",
                good: false,
                result:
                    "Sharing private conflicts can increase the problem."
            }
        ]
    },

    {
        id: 35,
        title: "Too Many Tasks",
        category: "Life Skills",
        icon: "📋",
        situation:
            "You have several tasks to complete and do not know which one to start.",
        choices: [
            {
                text: "List the tasks and identify which are most urgent or important.",
                good: true,
                result:
                    "Prioritising gives you a clearer starting point."
            },
            {
                text: "Do random tasks without a plan.",
                good: false,
                result:
                    "A lack of priorities can waste time."
            },
            {
                text: "Do none of them.",
                good: false,
                result:
                    "Avoiding the tasks does not solve the problem."
            }
        ]
    },

    {
        id: 36,
        title: "Forgotten Appointment",
        category: "Life Skills",
        icon: "📅",
        situation:
            "You suddenly realise that you forgot about an important appointment.",
        choices: [
            {
                text: "Communicate honestly and ask what can be done next.",
                good: true,
                result:
                    "Taking responsibility helps you handle mistakes constructively."
            },
            {
                text: "Pretend nothing happened.",
                good: false,
                result:
                    "Ignoring the situation may make it harder to resolve."
            },
            {
                text: "Blame someone else immediately.",
                good: false,
                result:
                    "Blaming others does not solve the missed appointment."
            }
        ]
    },

    {
        id: 37,
        title: "Budget Choice",
        category: "Life Skills",
        icon: "🪙",
        situation:
            "You have limited money and want to buy several things.",
        choices: [
            {
                text: "Decide which purchases are actually necessary before spending.",
                good: true,
                result:
                    "Thinking about priorities can help you make better spending decisions."
            },
            {
                text: "Spend everything immediately.",
                good: false,
                result:
                    "Spending without considering priorities can leave you without money for important needs."
            },
            {
                text: "Buy the most expensive item automatically.",
                good: false,
                result:
                    "Price alone does not determine what is most useful."
            }
        ]
    },

    {
        id: 38,
        title: "Broken Plan",
        category: "Life Skills",
        icon: "🛠️",
        situation:
            "Something you planned does not work as expected.",
        choices: [
            {
                text: "Identify what went wrong and adjust the plan.",
                good: true,
                result:
                    "Reviewing mistakes can help improve future decisions."
            },
            {
                text: "Refuse to change anything.",
                good: false,
                result:
                    "Flexibility can be useful when circumstances change."
            },
            {
                text: "Give up immediately.",
                good: false,
                result:
                    "A failed approach can provide information for a better second attempt."
            }
        ]
    },

    {
        id: 39,
        title: "Important Reminder",
        category: "Life Skills",
        icon: "🔔",
        situation:
            "You often forget small but important tasks.",
        choices: [
            {
                text: "Use a calendar, checklist or reminder system.",
                good: true,
                result:
                    "External reminders can reduce the chance of forgetting tasks."
            },
            {
                text: "Just try harder to remember everything.",
                good: false,
                result:
                    "A reminder system can be more reliable than memory alone."
            },
            {
                text: "Ignore the forgotten tasks.",
                good: false,
                result:
                    "Ignoring tasks does not prevent future problems."
            }
        ]
    },

    {
        id: 40,
        title: "Learning From Mistakes",
        category: "Life Skills",
        icon: "🌟",
        situation:
            "You make a mistake while completing a task.",
        choices: [
            {
                text: "Identify what caused the mistake and think about how to improve.",
                good: true,
                result:
                    "Reflecting on mistakes can turn them into learning opportunities."
            },
            {
                text: "Decide you can never improve.",
                good: false,
                result:
                    "One mistake does not determine your future ability."
            },
            {
                text: "Hide the mistake and repeat it.",
                good: false,
                result:
                    "Recognising mistakes makes improvement easier."
            }
        ]
    },


    /* =========================
       COMMUNITY
    ========================== */

    {
        id: 41,
        title: "Helping a Neighbour",
        category: "Community",
        icon: "🤝",
        situation:
            "You notice a neighbour struggling with a simple task and they ask whether you can help.",
        choices: [
            {
                text: "Help if it is safe and within your ability.",
                good: true,
                result:
                    "Small acts of helpfulness can strengthen communities."
            },
            {
                text: "Make fun of them.",
                good: false,
                result:
                    "Respect is important when helping others."
            },
            {
                text: "Make the problem harder.",
                good: false,
                result:
                    "Helping should reduce problems rather than create them."
            }
        ]
    },

    {
        id: 42,
        title: "Someone Left Out",
        category: "Community",
        icon: "🫶",
        situation:
            "You notice someone sitting alone while a group activity is happening.",
        choices: [
            {
                text: "If appropriate, invite them to participate.",
                good: true,
                result:
                    "A small invitation can help someone feel included."
            },
            {
                text: "Make jokes about them.",
                good: false,
                result:
                    "Making someone uncomfortable does not help inclusion."
            },
            {
                text: "Tell others not to talk to them.",
                good: false,
                result:
                    "Excluding someone can make the situation worse."
            }
        ]
    },

    {
        id: 43,
        title: "Shared Space",
        category: "Community",
        icon: "🏫",
        situation:
            "You finish using a shared area and notice that your belongings are scattered around.",
        choices: [
            {
                text: "Clean up your belongings before leaving.",
                good: true,
                result:
                    "Leaving shared spaces tidy helps the next person."
            },
            {
                text: "Leave everything behind.",
                good: false,
                result:
                    "Someone else may have to clean up after you."
            },
            {
                text: "Move everything into another person's space.",
                good: false,
                result:
                    "That simply moves the problem to someone else."
            }
        ]
    },

    {
        id: 44,
        title: "Public Queue",
        category: "Community",
        icon: "🚶",
        situation:
            "You are waiting in a queue and someone tries to move ahead of everyone.",
        choices: [
            {
                text: "Remain calm and follow the queue system.",
                good: true,
                result:
                    "Respecting shared rules helps public spaces work fairly."
            },
            {
                text: "Start pushing people.",
                good: false,
                result:
                    "Aggressive behaviour can create conflict."
            },
            {
                text: "Encourage everyone to ignore the queue.",
                good: false,
                result:
                    "That makes the system less fair."
            }
        ]
    },

    {
        id: 45,
        title: "Community Clean-Up",
        category: "Community",
        icon: "🧹",
        situation:
            "Your community is organising a clean-up event.",
        choices: [
            {
                text: "Participate if you can do so safely.",
                good: true,
                result:
                    "Community activities can improve shared spaces and encourage cooperation."
            },
            {
                text: "Create more litter.",
                good: false,
                result:
                    "That works against the purpose of the event."
            },
            {
                text: "Stop other people from helping.",
                good: false,
                result:
                    "Cooperation makes community projects more effective."
            }
        ]
    },

    {
        id: 46,
        title: "Different Opinions",
        category: "Community",
        icon: "🗣️",
        situation:
            "Someone in your group has a different opinion from yours.",
        choices: [
            {
                text: "Listen to their reasoning and explain your own view respectfully.",
                good: true,
                result:
                    "Respectful disagreement can help people understand different perspectives."
            },
            {
                text: "Insult them.",
                good: false,
                result:
                    "Insults do not improve discussion."
            },
            {
                text: "Refuse to let them speak.",
                good: false,
                result:
                    "Everyone should have a reasonable opportunity to express their view."
            }
        ]
    },

    {
        id: 47,
        title: "Shared Responsibility",
        category: "Community",
        icon: "🏠",
        situation:
            "A shared household task needs to be done, but everyone is waiting for someone else to do it.",
        choices: [
            {
                text: "Discuss the task and divide the responsibility fairly.",
                good: true,
                result:
                    "Clear responsibility makes shared tasks easier to manage."
            },
            {
                text: "Leave it forever.",
                good: false,
                result:
                    "Ignoring shared responsibilities creates bigger problems."
            },
            {
                text: "Blame everyone else.",
                good: false,
                result:
                    "Blaming does not distribute the responsibility."
            }
        ]
    },

    {
        id: 48,
        title: "Community Information",
        category: "Community",
        icon: "📢",
        situation:
            "You receive an important community announcement but are not sure whether it is genuine.",
        choices: [
            {
                text: "Check an official or trusted source before sharing it.",
                good: true,
                result:
                    "Verification helps prevent the spread of false information."
            },
            {
                text: "Share it immediately.",
                good: false,
                result:
                    "Unverified information can cause confusion."
            },
            {
                text: "Change the information before sharing.",
                good: false,
                result:
                    "Changing information can make it misleading."
            }
        ]
    },

    {
        id: 49,
        title: "Respecting Public Property",
        category: "Community",
        icon: "🏛️",
        situation:
            "You are using a public facility and notice that something is already damaged.",
        choices: [
            {
                text: "Use it carefully and report the damage through the appropriate channel.",
                good: true,
                result:
                    "Reporting damage can help the responsible people repair it."
            },
            {
                text: "Make the damage worse.",
                good: false,
                result:
                    "Additional damage creates more problems."
            },
            {
                text: "Pretend you caused the damage.",
                good: false,
                result:
                    "Being truthful is important when reporting problems."
            }
        ]
    },

    {
        id: 50,
        title: "The Helpful Choice",
        category: "Community",
        icon: "⭐",
        situation:
            "You have a free moment and notice there is a small problem in your community that you can safely help with.",
        choices: [
            {
                text: "Take a useful action if it is safe and appropriate.",
                good: true,
                result:
                    "Positive change often begins with small responsible actions."
            },
            {
                text: "Make the problem bigger.",
                good: false,
                result:
                    "Creating additional problems does not help the community."
            },
            {
                text: "Tell everyone else to solve it while you do nothing.",
                good: false,
                result:
                    "Taking reasonable responsibility can make a difference."
            }
        ]
    }

];


/* =========================================================
   PLAYER DATA
========================================================= */

let completedQuests = [];

let coins = 0;

let xp = 0;

let currentCategory = "All";

let currentQuest = null;


/* =========================================================
   LOAD PLAYER DATA SAFELY
========================================================= */

function loadPlayer() {

    try {

        const savedCompleted =
            localStorage.getItem(
                "questHubCompleted"
            );

        const savedCoins =
            localStorage.getItem(
                "questHubCoins"
            );

        const savedXP =
            localStorage.getItem(
                "questHubXP"
            );


        completedQuests =
            savedCompleted
                ? JSON.parse(savedCompleted)
                : [];


        if (!Array.isArray(completedQuests)) {

            completedQuests = [];

        }


        coins =
            savedCoins !== null
                ? Number(savedCoins)
                : 0;


        xp =
            savedXP !== null
                ? Number(savedXP)
                : 0;


        if (!Number.isFinite(coins)) {

            coins = 0;

        }


        if (!Number.isFinite(xp)) {

            xp = 0;

        }


    } catch (error) {

        console.error(
            "Could not load player data:",
            error
        );

        completedQuests = [];

        coins = 0;

        xp = 0;

    }

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadPlayer();

        loadDarkMode();

        displayQuests();

        updatePlayer();

        setupModal();

    }
);


/* =========================================================
   PAGE SWITCHING
========================================================= */

function showPage(page) {

    const home =
        document.getElementById(
            "homePage"
        );

    const questsPage =
        document.getElementById(
            "questsPage"
        );

    const knowledge =
        document.getElementById(
            "knowledgePage"
        );


    if (home) {

        home.classList.add(
            "hidden"
        );

    }


    if (questsPage) {

        questsPage.classList.add(
            "hidden"
        );

    }


    if (knowledge) {

        knowledge.classList.add(
            "hidden"
        );

    }


    if (page === "home") {

        if (home) {

            home.classList.remove(
                "hidden"
            );

        }

    }


    if (page === "quests") {

        if (questsPage) {

            questsPage.classList.remove(
                "hidden"
            );

            displayQuests();

        }

    }


    if (page === "knowledge") {

        if (knowledge) {

            knowledge.classList.remove(
                "hidden"
            );

        }

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   DISPLAY QUESTS
========================================================= */

function displayQuests() {

    const grid =
        document.getElementById(
            "questGrid"
        );


    if (!grid) {

        return;

    }


    const searchInput =
        document.getElementById(
            "questSearch"
        );


    const search =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";


    const filtered =
        quests.filter(
            function (quest) {

                const categoryMatch =
                    currentCategory === "All" ||
                    quest.category ===
                        currentCategory;


                const searchText =
                    (
                        quest.title +
                        " " +
                        quest.category +
                        " " +
                        quest.situation
                    )
                    .toLowerCase();


                const searchMatch =
                    searchText.includes(
                        search
                    );


                return (
                    categoryMatch &&
                    searchMatch
                );

            }
        );


    grid.innerHTML = "";


    filtered.forEach(
        function (quest) {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "quest-card";


            const isCompleted =
                completedQuests.includes(
                    quest.id
                );


            if (isCompleted) {

                card.classList.add(
                    "completed"
                );

            }


            card.addEventListener(
                "click",
                function () {

                    openQuest(
                        quest.id
                    );

                }
            );


            card.innerHTML = `

                <span class="quest-number">
                    #${quest.id}
                </span>

                <div class="quest-icon">
                    ${quest.icon}
                </div>

                <span class="quest-category">
                    ${quest.category.toUpperCase()}
                </span>

                <h3>
                    ${quest.title}
                </h3>

                <p>
                    ${quest.situation}
                </p>

                ${
                    isCompleted
                    ?
                    `
                    <span class="completed-badge">
                        ✓ COMPLETED
                    </span>
                    `
                    :
                    ""
                }

            `;


            grid.appendChild(card);

        }
    );


    if (filtered.length === 0) {

        grid.innerHTML = `

            <div style="
                grid-column: 1 / -1;
                text-align: center;
                padding: 60px;
            ">

                <div style="
                    font-size: 50px;
                ">
                    🔎
                </div>

                <h2>
                    No quests found
                </h2>

                <p>
                    Try another search.
                </p>

            </div>

        `;

    }

}


/* =========================================================
   SEARCH
========================================================= */

function searchQuests() {

    displayQuests();

}


/* =========================================================
   FILTER
========================================================= */

function filterQuests(category) {

    currentCategory =
        category;


    document
        .querySelectorAll(
            ".category-button"
        )
        .forEach(
            function (button) {

                button.classList.remove(
                    "active"
                );

            }
        );


    document
        .querySelectorAll(
            ".category-button"
        )
        .forEach(
            function (button) {

                const buttonText =
                    button.textContent
                        .trim();


                if (
                    buttonText ===
                    category
                ) {

                    button.classList.add(
                        "active"
                    );

                }

            }
        );


    displayQuests();

}


/* =========================================================
   OPEN QUEST
========================================================= */

function openQuest(id) {

    currentQuest =
        quests.find(
            function (quest) {

                return quest.id === id;

            }
        );


    if (!currentQuest) {

        return;

    }


    const modal =
        document.getElementById(
            "questModal"
        );


    const modalIcon =
        document.getElementById(
            "modalIcon"
        );


    const modalCategory =
        document.getElementById(
            "modalCategory"
        );


    const modalTitle =
        document.getElementById(
            "modalTitle"
        );


    const modalSituation =
        document.getElementById(
            "modalSituation"
        );


    const choiceContainer =
        document.getElementById(
            "choiceContainer"
        );


    const questResult =
        document.getElementById(
            "questResult"
        );


    if (!modal) {

        console.error(
            "questModal was not found."
        );

        return;

    }


    if (modalIcon) {

        modalIcon.textContent =
            currentQuest.icon;

    }


    if (modalCategory) {

        modalCategory.textContent =
            currentQuest.category
                .toUpperCase();

    }


    if (modalTitle) {

        modalTitle.textContent =
            currentQuest.title;

    }


    if (modalSituation) {

        modalSituation.textContent =
            currentQuest.situation;

    }


    if (choiceContainer) {

        choiceContainer.innerHTML = "";


        currentQuest.choices.forEach(
            function (choice, index) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "choice-button";


                button.textContent =
                    choice.text;


                button.addEventListener(
                    "click",
                    function () {

                        chooseAnswer(
                            index
                        );

                    }
                );


                choiceContainer.appendChild(
                    button
                );

            }
        );


        choiceContainer.classList.remove(
            "hidden"
        );

    }


    if (questResult) {

        questResult.classList.add(
            "hidden"
        );

    }


    modal.classList.remove(
        "hidden"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   ANSWER QUEST
========================================================= */

function chooseAnswer(index) {

    if (!currentQuest) {

        return;

    }


    const choice =
        currentQuest.choices[index];


    if (!choice) {

        return;

    }


    const choiceContainer =
        document.getElementById(
            "choiceContainer"
        );


    const result =
        document.getElementById(
            "questResult"
        );


    const resultIcon =
        document.getElementById(
            "resultIcon"
        );


    const resultTitle =
        document.getElementById(
            "resultTitle"
        );


    const resultText =
        document.getElementById(
            "resultText"
        );


    if (choiceContainer) {

        choiceContainer.classList.add(
            "hidden"
        );

    }


    if (result) {

        result.classList.remove(
            "hidden"
        );

    }


    if (choice.good) {

        if (resultIcon) {

            resultIcon.textContent =
                "🎉";

        }


        if (resultTitle) {

            resultTitle.textContent =
                "Quest Complete!";

        }


        const alreadyCompleted =
            completedQuests.includes(
                currentQuest.id
            );


        if (!alreadyCompleted) {

            completedQuests.push(
                currentQuest.id
            );


            xp += 20;

            coins += 10;


            const oldLevel =
                getLevel();


            const newLevel =
                getLevel();


            if (
                newLevel >
                oldLevel
            ) {

                coins += 25;

            }


            savePlayer();

            updatePlayer();


            if (resultText) {

                resultText.textContent =
                    choice.result +
                    " You earned +20 XP and +10 coins.";

                if (
                    newLevel >
                    oldLevel
                ) {

                    resultText.textContent +=
                        " 🎊 You also reached Level " +
                        newLevel +
                        " and earned +25 bonus coins!";

                }

            }

        } else {

            if (resultText) {

                resultText.textContent =
                    choice.result +
                    " You already completed this quest, so no additional XP or coins were awarded.";

            }

        }

    } else {

        if (resultIcon) {

            resultIcon.textContent =
                "💭";

        }


        if (resultTitle) {

            resultTitle.textContent =
                "Think About It";

        }


        if (resultText) {

            resultText.textContent =
                choice.result +
                " Try thinking about another approach.";

        }

    }

}


/* =========================================================
   LEVEL SYSTEM
========================================================= */

function checkLevel() {

    return getLevel();

}


/* =========================================================
   GET LEVEL
========================================================= */

function getLevel() {

    return (
        Math.floor(
            xp / 100
        ) + 1
    );

}


/* =========================================================
   GET CURRENT XP
========================================================= */

function getCurrentXP() {

    return xp % 100;

}


/* =========================================================
   UPDATE PLAYER
========================================================= */

function updatePlayer() {

    const level =
        getLevel();


    const currentXP =
        getCurrentXP();


    const playerLevel =
        document.getElementById(
            "playerLevel"
        );


    const completedCount =
        document.getElementById(
            "completedCount"
        );


    const coinCount =
        document.getElementById(
            "coinCount"
        );


    const xpText =
        document.getElementById(
            "xpText"
        );


    const xpBar =
        document.getElementById(
            "xpBar"
        );


    if (playerLevel) {

        playerLevel.textContent =
            "Level " + level;

    }


    if (completedCount) {

        completedCount.textContent =
            completedQuests.length;

    }


    if (coinCount) {

        coinCount.textContent =
            coins;

    }


    if (xpText) {

        xpText.textContent =
            currentXP +
            " / 100 XP";

    }


    if (xpBar) {

        xpBar.style.width =
            currentXP + "%";

    }

}


/* =========================================================
   SAVE PLAYER
========================================================= */

function savePlayer() {

    try {

        localStorage.setItem(
            "questHubCompleted",
            JSON.stringify(
                completedQuests
            )
        );


        localStorage.setItem(
            "questHubCoins",
            String(coins)
        );


        localStorage.setItem(
            "questHubXP",
            String(xp)
        );

    } catch (error) {

        console.error(
            "Could not save player data:",
            error
        );

    }

}


/* =========================================================
   CLOSE QUEST
========================================================= */

function closeQuest() {

    const modal =
        document.getElementById(
            "questModal"
        );


    if (modal) {

        modal.classList.add(
            "hidden"
        );

    }


    document.body.style.overflow =
        "";


    currentQuest = null;


    displayQuests();

}


/* =========================================================
   MODAL SETUP
========================================================= */

function setupModal() {

    const modal =
        document.getElementById(
            "questModal"
        );


    if (!modal) {

        return;

    }


    modal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                modal
            ) {

                closeQuest();

            }

        }
    );

}


/* =========================================================
   ESCAPE KEY CLOSES MODAL
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            const modal =
                document.getElementById(
                    "questModal"
                );


            if (
                modal &&
                !modal.classList.contains(
                    "hidden"
                )
            ) {

                closeQuest();

            }

        }

    }
);


/* =========================================================
   EXTRA KNOWLEDGE
========================================================= */

function showFact(button) {

    if (!button) {

        return;

    }


    const fact =
        button.nextElementSibling;


    if (!fact) {

        return;

    }


    const isVisible =
        fact.style.display ===
        "block";


    if (isVisible) {

        fact.style.display =
            "none";

        button.textContent =
            "Show More";

    } else {

        fact.style.display =
            "block";

        button.textContent =
            "Hide";

    }

}


/* =========================================================
   DARK MODE
========================================================= */

function toggleDarkMode() {

    const isDark =
        document.body.classList.toggle(
            "dark"
        );


    localStorage.setItem(
        "questHubDark",
        String(isDark)
    );


    updateDarkButton(
        isDark
    );

}


/* =========================================================
   UPDATE DARK BUTTON
========================================================= */

function updateDarkButton(isDark) {

    const darkButton =
        document.getElementById(
            "darkButton"
        );


    if (!darkButton) {

        return;

    }


    darkButton.textContent =
        isDark
            ? "☀️"
            : "🌙";

}


/* =========================================================
   LOAD DARK MODE
========================================================= */

function loadDarkMode() {

    const savedDark =
        localStorage.getItem(
            "questHubDark"
        );


    const isDark =
        savedDark === "true";


    if (isDark) {

        document.body.classList.add(
            "dark"
        );

    } else {

        document.body.classList.remove(
            "dark"
        );

    }


    updateDarkButton(
        isDark
    );

}


/* =========================================================
   RESET PLAYER
========================================================= */

function resetPlayer() {

    const confirmed =
        confirm(
            "Are you sure you want to reset all quest progress?"
        );


    if (!confirmed) {

        return;

    }


    completedQuests = [];

    coins = 0;

    xp = 0;


    savePlayer();

    updatePlayer();

    displayQuests();

}


/* =========================================================
   NEXT QUEST
========================================================= */

function nextQuest() {

    if (!currentQuest) {

        return;

    }


    const currentIndex =
        quests.findIndex(
            function (quest) {

                return (
                    quest.id ===
                    currentQuest.id
                );

            }
        );


    if (
        currentIndex === -1
    ) {

        return;

    }


    const nextIndex =
        currentIndex + 1;


    if (
        nextIndex >=
        quests.length
    ) {

        closeQuest();

        return;

    }


    openQuest(
        quests[nextIndex].id
    );

}


/* =========================================================
   PREVIOUS QUEST
========================================================= */

function previousQuest() {

    if (!currentQuest) {

        return;

    }


    const currentIndex =
        quests.findIndex(
            function (quest) {

                return (
                    quest.id ===
                    currentQuest.id
                );

            }
        );


    if (
        currentIndex <= 0
    ) {

        return;

    }


    openQuest(
        quests[currentIndex - 1].id
    );

}
