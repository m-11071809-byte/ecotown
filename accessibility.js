/* =========================================================
   ACCESSIBILITY
   ACCESS QUEST
========================================================= */


/* =========================================================
   GAME VARIABLES
========================================================= */

let points = 0;

let streak = 0;

let bestStreak = 0;

let level = 1;

let solved = 0;

let currentQuestion = 0;

let answered = false;


/* =========================================================
   50 SITUATIONS
========================================================= */

const situations = [

    /* =====================================================
       SCHOOL & LEARNING
    ===================================================== */

    {
        icon: "🏫",
        category: "🏫 SCHOOL",
        question:
            "A teacher writes important information only on the board.",
        description:
            "What could make the information easier for more students to access?",
        options: [
            {
                icon: "📝",
                title: "Provide the information in another format",
                description: "For example, give students a copy.",
                correct: true,
                feedback:
                    "Correct! Providing information in different formats can remove barriers."
            },
            {
                icon: "🚫",
                title: "Erase it immediately",
                description: "Students can remember it.",
                correct: false,
                feedback:
                    "Important information should remain accessible rather than being removed."
            },
            {
                icon: "🤷",
                title: "Tell students to figure it out",
                description: "Everyone should manage alone.",
                correct: false,
                feedback:
                    "Providing accessible information helps more students participate."
            }
        ]
    },

    {
        icon: "⏰",
        category: "🏫 SCHOOL",
        question:
            "A student needs more time to understand a complicated set of instructions.",
        description:
            "What is a helpful approach?",
        options: [
            {
                icon: "🧩",
                title: "Break the instructions into smaller steps",
                description: "Make each step clear.",
                correct: true,
                feedback:
                    "Correct! Clear, manageable steps can make information easier to understand."
            },
            {
                icon: "⚡",
                title: "Give the instructions even faster",
                description: "Finish quickly.",
                correct: false,
                feedback:
                    "Giving information faster may make it harder to process."
            },
            {
                icon: "❌",
                title: "Skip the instructions",
                description: "Let them guess.",
                correct: false,
                feedback:
                    "Clear instructions are important for everyone."
            }
        ]
    },

    {
        icon: "🏢",
        category: "🏫 SCHOOL",
        question:
            "A school event is held upstairs, but there is no accessible route to the room.",
        description:
            "What would be a better solution?",
        options: [
            {
                icon: "♿",
                title: "Use an accessible location",
                description: "Make sure everyone can reach it.",
                correct: true,
                feedback:
                    "Correct! Choosing an accessible location helps everyone participate."
            },
            {
                icon: "🚫",
                title: "Tell some students not to attend",
                description: "They can miss the event.",
                correct: false,
                feedback:
                    "People should not be excluded simply because a location creates a barrier."
            },
            {
                icon: "🤷",
                title: "Ignore the problem",
                description: "It is too difficult.",
                correct: false,
                feedback:
                    "Accessibility should be considered when planning events."
            }
        ]
    },

    {
        icon: "📺",
        category: "🏫 SCHOOL",
        question:
            "A teacher shows an important educational video with no captions.",
        description:
            "What could improve accessibility?",
        options: [
            {
                icon: "💬",
                title: "Use a captioned version",
                description: "Make spoken information available as text.",
                correct: true,
                feedback:
                    "Correct! Captions provide another way to access spoken content."
            },
            {
                icon: "🔇",
                title: "Turn the video volume down",
                description: "Make it quieter.",
                correct: false,
                feedback:
                    "Reducing volume does not make spoken content more accessible."
            },
            {
                icon: "⏩",
                title: "Play it faster",
                description: "Finish sooner.",
                correct: false,
                feedback:
                    "Speeding up a video doesn't solve the accessibility barrier."
            }
        ]
    },

    {
        icon: "🔤",
        category: "🏫 SCHOOL",
        question:
            "A worksheet uses extremely small text.",
        description:
            "What could make it easier to read?",
        options: [
            {
                icon: "🔎",
                title: "Use a clearer, readable text size",
                description: "Make the information easier to see.",
                correct: true,
                feedback:
                    "Correct! Readable text helps more people access written information."
            },
            {
                icon: "📄",
                title: "Make the text even smaller",
                description: "Fit more words.",
                correct: false,
                feedback:
                    "Smaller text can make reading harder."
            },
            {
                icon: "❌",
                title: "Remove the worksheet",
                description: "No one needs it.",
                correct: false,
                feedback:
                    "The better solution is to make the information accessible."
            }
        ]
    },


    /* =====================================================
       TRANSPORT
    ===================================================== */

    {
        icon: "🚌",
        category: "🚌 TRANSPORT",
        question:
            "A bus stop has unclear information about which buses stop there.",
        description:
            "What would help?",
        options: [
            {
                icon: "🪧",
                title: "Provide clear route information",
                description: "Make the information easy to find.",
                correct: true,
                feedback:
                    "Correct! Clear transport information helps passengers plan their journey."
            },
            {
                icon: "❓",
                title: "Remove the signs",
                description: "Passengers can ask someone.",
                correct: false,
                feedback:
                    "Clear signs can help people travel independently."
            },
            {
                icon: "🤷",
                title: "Give no information",
                description: "People will figure it out.",
                correct: false,
                feedback:
                    "Accessible transport requires clear information."
            }
        ]
    },

    {
        icon: "♿",
        category: "🚌 TRANSPORT",
        question:
            "A pathway to a bus stop is blocked by objects.",
        description:
            "What should happen?",
        options: [
            {
                icon: "🧹",
                title: "Clear the pathway",
                description: "Keep the route usable.",
                correct: true,
                feedback:
                    "Correct! Keeping pathways clear helps people move safely and independently."
            },
            {
                icon: "📦",
                title: "Add more objects",
                description: "Use the space.",
                correct: false,
                feedback:
                    "More obstacles would make the route less accessible."
            },
            {
                icon: "🚧",
                title: "Block the whole path",
                description: "Nobody uses it.",
                correct: false,
                feedback:
                    "The solution should remove barriers, not create more."
            }
        ]
    },

    {
        icon: "🚆",
        category: "🚌 TRANSPORT",
        question:
            "A train announcement is audio-only.",
        description:
            "What could make the information more accessible?",
        options: [
            {
                icon: "📺",
                title: "Also show the information visually",
                description: "Use screens or signs.",
                correct: true,
                feedback:
                    "Correct! Providing information in multiple formats gives passengers more ways to access it."
            },
            {
                icon: "🔊",
                title: "Make the announcement louder",
                description: "Only use sound.",
                correct: false,
                feedback:
                    "Louder audio does not help someone who cannot access the audio information."
            },
            {
                icon: "❌",
                title: "Remove announcements",
                description: "No information needed.",
                correct: false,
                feedback:
                    "Passengers still need important travel information."
            }
        ]
    },

    {
        icon: "🚏",
        category: "🚌 TRANSPORT",
        question:
            "A station has signs that are difficult to understand.",
        description:
            "What would improve them?",
        options: [
            {
                icon: "🪧",
                title: "Use clear words and familiar symbols",
                description: "Make directions easier to follow.",
                correct: true,
                feedback:
                    "Correct! Clear language and recognizable symbols can make navigation easier."
            },
            {
                icon: "🎨",
                title: "Add random decorations",
                description: "Make it colourful.",
                correct: false,
                feedback:
                    "Decoration alone does not make directions clearer."
            },
            {
                icon: "🔤",
                title: "Use more complicated words",
                description: "Sound professional.",
                correct: false,
                feedback:
                    "Complicated language can make information harder to understand."
            }
        ]
    },

    {
        icon: "🛗",
        category: "🚌 TRANSPORT",
        question:
            "An accessible lift at a station is blocked.",
        description:
            "What should people do?",
        options: [
            {
                icon: "🚫",
                title: "Keep the lift entrance clear",
                description: "Remove the obstacle.",
                correct: true,
                feedback:
                    "Correct! Accessible facilities need to remain usable."
            },
            {
                icon: "📦",
                title: "Store more items there",
                description: "Use the empty space.",
                correct: false,
                feedback:
                    "Storage should not block an accessibility facility."
            },
            {
                icon: "🤷",
                title: "Ignore it",
                description: "Someone else will fix it.",
                correct: false,
                feedback:
                    "Reporting or removing barriers helps keep facilities accessible."
            }
        ]
    },


    /* =====================================================
       BUILDINGS & PUBLIC SPACES
    ===================================================== */

    {
        icon: "🚪",
        category: "🏢 PUBLIC SPACE",
        question:
            "A building entrance has stairs but no accessible route.",
        description:
            "What is a better design?",
        options: [
            {
                icon: "♿",
                title: "Provide an accessible entrance",
                description: "For example, a suitable ramp or lift.",
                correct: true,
                feedback:
                    "Correct! People need an accessible way to enter the building."
            },
            {
                icon: "🚫",
                title: "Tell people to use another building",
                description: "Avoid the problem.",
                correct: false,
                feedback:
                    "People should not be excluded because of an inaccessible entrance."
            },
            {
                icon: "🪜",
                title: "Add more stairs",
                description: "Make it bigger.",
                correct: false,
                feedback:
                    "More stairs would not solve the access barrier."
            }
        ]
    },

    {
        icon: "📦",
        category: "🏢 PUBLIC SPACE",
        question:
            "Boxes are left in a hallway.",
        description:
            "Why should they be moved?",
        options: [
            {
                icon: "🧹",
                title: "Keep the pathway clear",
                description: "Make movement easier.",
                correct: true,
                feedback:
                    "Correct! Clear pathways reduce barriers and improve safety."
            },
            {
                icon: "📦",
                title: "Add more boxes",
                description: "Use the hallway for storage.",
                correct: false,
                feedback:
                    "More obstacles would make the route harder to use."
            },
            {
                icon: "🚪",
                title: "Close the hallway",
                description: "Nobody uses it.",
                correct: false,
                feedback:
                    "Closing an important route can create another barrier."
            }
        ]
    },

    {
        icon: "🛒",
        category: "🏢 PUBLIC SPACE",
        question:
            "A shop aisle is too crowded for people to move through comfortably.",
        description:
            "What should the shop do?",
        options: [
            {
                icon: "🧹",
                title: "Keep aisles clear",
                description: "Leave enough usable space.",
                correct: true,
                feedback:
                    "Correct! Clear aisles make shops easier to navigate."
            },
            {
                icon: "📦",
                title: "Add another display",
                description: "Use every centimetre.",
                correct: false,
                feedback:
                    "Extra displays can create more barriers."
            },
            {
                icon: "🚫",
                title: "Close the aisle permanently",
                description: "Avoid the problem.",
                correct: false,
                feedback:
                    "The better solution is to make the aisle accessible."
            }
        ]
    },

    {
        icon: "🛎️",
        category: "🏢 PUBLIC SPACE",
        question:
            "A service counter is too high for some customers.",
        description:
            "What could help?",
        options: [
            {
                icon: "↔️",
                title: "Provide an accessible counter option",
                description: "Offer a suitable height.",
                correct: true,
                feedback:
                    "Correct! Different counter heights can make services easier to access."
            },
            {
                icon: "⬆️",
                title: "Make every counter higher",
                description: "Increase the height.",
                correct: false,
                feedback:
                    "Making the counter higher would not solve the barrier."
            },
            {
                icon: "🚫",
                title: "Tell customers to leave",
                description: "They can come back later.",
                correct: false,
                feedback:
                    "Services should be designed so more people can use them."
            }
        ]
    },

    {
        icon: "💡",
        category: "🏢 PUBLIC SPACE",
        question:
            "A public room has very confusing signs.",
        description:
            "What would make navigation easier?",
        options: [
            {
                icon: "🪧",
                title: "Use simple signs and symbols",
                description: "Make directions obvious.",
                correct: true,
                feedback:
                    "Correct! Clear signs can make public spaces easier to navigate."
            },
            {
                icon: "🌀",
                title: "Add more confusing arrows",
                description: "More signs must be better.",
                correct: false,
                feedback:
                    "More signs are not useful if they make navigation more confusing."
            },
            {
                icon: "❌",
                title: "Remove all signs",
                description: "People can guess.",
                correct: false,
                feedback:
                    "Removing useful information can make navigation harder."
            }
        ]
    },


    /* =====================================================
       WEBSITE & TECHNOLOGY
    ===================================================== */

    {
        icon: "💻",
        category: "💻 TECHNOLOGY",
        question:
            "A website has buttons labelled only with symbols that are difficult to understand.",
        description:
            "What could improve the buttons?",
        options: [
            {
                icon: "🏷️",
                title: "Use clear descriptive labels",
                description: "Tell users what each button does.",
                correct: true,
                feedback:
                    "Correct! Clear labels make controls easier to understand."
            },
            {
                icon: "❓",
                title: "Remove the buttons",
                description: "Users can guess.",
                correct: false,
                feedback:
                    "Removing controls does not solve the usability problem."
            },
            {
                icon: "🔀",
                title: "Change symbols randomly",
                description: "Keep it interesting.",
                correct: false,
                feedback:
                    "Random symbols can make interfaces harder to understand."
            }
        ]
    },

    {
        icon: "🖼️",
        category: "💻 TECHNOLOGY",
        question:
            "An important image on a website contains information but has no text alternative.",
        description:
            "What could help?",
        options: [
            {
                icon: "📝",
                title: "Provide alternative text",
                description: "Describe useful image information.",
                correct: true,
                feedback:
                    "Correct! Alternative text can provide important image information in another form."
            },
            {
                icon: "🖼️",
                title: "Add more images",
                description: "More pictures solve it.",
                correct: false,
                feedback:
                    "More images do not provide an alternative for the information."
            },
            {
                icon: "❌",
                title: "Delete the page",
                description: "No one needs it.",
                correct: false,
                feedback:
                    "The useful information should remain available in an accessible way."
            }
        ]
    },

    {
        icon: "🎨",
        category: "💻 TECHNOLOGY",
        question:
            "A website uses only colour to show which items are important.",
        description:
            "What should the designer do?",
        options: [
            {
                icon: "🔤",
                title: "Also use text, icons or patterns",
                description: "Give another visual cue.",
                correct: true,
                feedback:
                    "Correct! Important information should not depend on colour alone."
            },
            {
                icon: "🌈",
                title: "Use even more colours",
                description: "Make it brighter.",
                correct: false,
                feedback:
                    "More colours do not solve the problem of relying only on colour."
            },
            {
                icon: "❌",
                title: "Remove all information",
                description: "Simplify everything.",
                correct: false,
                feedback:
                    "The information should remain available in accessible ways."
            }
        ]
    },

    {
        icon: "⌨️",
        category: "💻 TECHNOLOGY",
        question:
            "A website can only be operated with a mouse.",
        description:
            "What accessibility improvement would help?",
        options: [
            {
                icon: "⌨️",
                title: "Support keyboard navigation",
                description: "Make controls usable without a mouse.",
                correct: true,
                feedback:
                    "Correct! Keyboard access gives users another way to navigate."
            },
            {
                icon: "🖱️",
                title: "Make the mouse mandatory",
                description: "Everyone must use one.",
                correct: false,
                feedback:
                    "Requiring a mouse can create a barrier."
            },
            {
                icon: "🖱️",
                title: "Make the cursor smaller",
                description: "Reduce its size.",
                correct: false,
                feedback:
                    "Cursor size does not solve the keyboard-access problem."
            }
        ]
    },

    {
        icon: "⚠️",
        category: "💻 TECHNOLOGY",
        question:
            "An online form gives an error but doesn't explain what went wrong.",
        description:
            "What should the form do?",
        options: [
            {
                icon: "💬",
                title: "Give a clear error message",
                description: "Explain how to fix the problem.",
                correct: true,
                feedback:
                    "Correct! Clear error messages help users understand what needs to be changed."
            },
            {
                icon: "❌",
                title: "Show only 'ERROR'",
                description: "No explanation.",
                correct: false,
                feedback:
                    "A vague error message doesn't tell the user how to solve the problem."
            },
            {
                icon: "🔄",
                title: "Delete everything",
                description: "Start over.",
                correct: false,
                feedback:
                    "Deleting the user's information can create unnecessary frustration."
            }
        ]
    },


    /* =====================================================
       COMMUNICATION
    ===================================================== */

    {
        icon: "🗣️",
        category: "🗣️ COMMUNICATION",
        question:
            "Someone asks you to repeat what you said.",
        description:
            "What is a respectful response?",
        options: [
                {
                    icon: "🔁",
                    title: "Repeat it calmly",
                    description: "Give them another chance to hear it.",
                    correct: true,
                    feedback:
                        "Correct! Being patient helps make communication more accessible."
                },
                {
                    icon: "😠",
                    title: "Get annoyed",
                    description: "They should have heard you.",
                    correct: false,
                    feedback:
                        "Getting annoyed can make communication more difficult."
                },
                {
                    icon: "🏃",
                    title: "Walk away",
                    description: "End the conversation.",
                    correct: false,
                    feedback:
                        "A little patience can help the conversation continue."
                }
            ]
        },

    {
        icon: "📖",
        category: "🗣️ COMMUNICATION",
        question:
            "Instructions contain lots of complicated jargon.",
        description:
            "What could make them easier to understand?",
        options: [
                {
                    icon: "💬",
                    title: "Use clear, simple language",
                    description: "Explain unfamiliar terms.",
                    correct: true,
                    feedback:
                        "Correct! Clear language can make information easier for more people to understand."
                },
                {
                    icon: "📚",
                    title: "Add even more jargon",
                    description: "Sound more technical.",
                    correct: false,
                    feedback:
                        "More complicated language can increase confusion."
                },
                {
                    icon: "❌",
                    title: "Remove all instructions",
                    description: "People can guess.",
                    correct: false,
                    feedback:
                        "Clear instructions are useful."
                }
            ]
        },

    {
        icon: "🔇",
        category: "🗣️ COMMUNICATION",
        question:
            "A conversation is happening in an extremely noisy room.",
        description:
            "What could help?",
        options: [
                {
                    icon: "🤫",
                    title: "Move somewhere quieter",
                    description: "Reduce background noise.",
                    correct: true,
                    feedback:
                        "Correct! A quieter environment can make communication easier."
                },
                {
                    icon: "🔊",
                    title: "Make everyone shout",
                    description: "Talk louder.",
                    correct: false,
                    feedback:
                        "Shouting in a noisy environment may not solve the communication barrier."
                },
                {
                    icon: "🎵",
                    title: "Add music",
                    description: "Make it more exciting.",
                    correct: false,
                    feedback:
                        "More background noise would make communication harder."
                }
            ]
        },

    {
        icon: "⏳",
        category: "🗣️ COMMUNICATION",
        question:
            "Someone communicates differently from you and takes longer to respond.",
        description:
            "What is a respectful choice?",
        options: [
                {
                    icon: "⏳",
                    title: "Give them time",
                    description: "Let them finish.",
                    correct: true,
                    feedback:
                        "Correct! Giving people enough time can make communication more comfortable."
                },
                {
                    icon: "💬",
                    title: "Finish their sentences",
                    description: "Help them quickly.",
                    correct: false,
                    feedback:
                        "Finishing someone's sentences can prevent them from communicating what they intended."
                },
                {
                    icon: "🏃",
                    title: "Walk away",
                    description: "Don't wait.",
                    correct: false,
                    feedback:
                        "Patience can make communication more inclusive."
                }
            ]
        },

    {
        icon: "📢",
        category: "🗣️ COMMUNICATION",
        question:
            "An important announcement is available in only one communication format.",
        description:
            "What would improve accessibility?",
        options: [
                {
                    icon: "🔄",
                    title: "Provide multiple communication formats",
                    description: "Use suitable alternatives.",
                    correct: true,
                    feedback:
                        "Correct! Multiple formats give people more ways to access important information."
                },
                {
                    icon: "📢",
                    title: "Repeat the same format louder",
                    description: "Only use one method.",
                    correct: false,
                    feedback:
                        "Repeating one inaccessible format does not remove the barrier."
                },
                {
                    icon: "❌",
                    title: "Cancel the announcement",
                    description: "No one needs it.",
                    correct: false,
                    feedback:
                        "Important information should remain available."
                }
            ]
        },


    /* =====================================================
       SHOPPING & SERVICES
    ===================================================== */

    {
        icon: "🛍️",
        category: "🛍️ SERVICES",
        question:
            "Product labels in a shop are difficult to read.",
        description:
            "What could make the information more accessible?",
        options: [
                {
                    icon: "🔤",
                    title: "Use readable text and clear information",
                    description: "Make labels easier to read.",
                    correct: true,
                    feedback:
                        "Correct! Readable labels help customers access product information."
                },
                {
                    icon: "🔎",
                    title: "Make the text smaller",
                    description: "Fit more words.",
                    correct: false,
                    feedback:
                        "Smaller text can make information harder to read."
                },
                {
                    icon: "❌",
                    title: "Remove the labels",
                    description: "Customers don't need them.",
                    correct: false,
                    feedback:
                        "Removing useful information creates another barrier."
                }
            ]
        },

    {
        icon: "🎟️",
        category: "🛍️ SERVICES",
        question:
            "A queue system only announces customer numbers through speakers.",
        description:
            "What could improve it?",
        options: [
            {
                icon: "📺",
                title: "Also display the number visually",
                description: "Use a screen or sign.",
                correct: true,
                feedback:
                    "Correct! Visual information provides another way to access the queue system."
            },
            {
                icon: "🔊",
                title: "Make the speaker louder",
                description: "Only use sound.",
                correct: false,
                feedback:
                    "Louder audio does not provide another communication method."
            },
            {
                icon: "❌",
                title: "Remove the queue system",
                description: "Everyone waits randomly.",
                correct: false,
                feedback:
                    "A clear queue system can be useful when designed accessibly."
            }
        ]
    },

    {
        icon: "🧑‍💼",
        category: "🛍️ SERVICES",
        question:
            "A staff member gives a customer complicated instructions.",
        description:
            "What could they do?",
        options: [
            {
                icon: "💬",
                title: "Explain the instructions clearly",
                description: "Use simple language.",
                correct: true,
                feedback:
                    "Correct! Clear explanations make services easier to use."
            },
            {
                icon: "📚",
                title: "Use even more technical words",
                description: "Sound professional.",
                correct: false,
                feedback:
                    "More technical language may make instructions harder to understand."
            },
            {
                icon: "🤷",
                title: "Tell the customer to guess",
                description: "They'll figure it out.",
                correct: false,
                feedback:
                    "Customers should receive clear information."
            }
        ]
    },

    {
        icon: "💳",
        category: "🛍️ SERVICES",
        question:
            "A payment machine has tiny buttons and unclear labels.",
        description:
            "What could make it easier to use?",
        options: [
                {
                    icon: "🔤",
                    title: "Use clear, readable controls",
                    description: "Make buttons easy to identify.",
                    correct: true,
                    feedback:
                        "Correct! Clear controls can make payment systems easier to use."
                },
                {
                    icon: "🔠",
                    title: "Make buttons smaller",
                    description: "Save space.",
                    correct: false,
                    feedback:
                        "Smaller controls can make them harder to use."
                },
                {
                    icon: "❌",
                    title: "Remove instructions",
                    description: "Users can guess.",
                    correct: false,
                    feedback:
                        "Clear instructions are useful for operating unfamiliar equipment."
                }
            ]
        },

    {
        icon: "📞",
        category: "🛍️ SERVICES",
        question:
            "A company offers customer support through only one communication method.",
        description:
            "What could make support more accessible?",
        options: [
            {
                icon: "🔄",
                title: "Offer more than one contact method",
                description: "Provide suitable alternatives.",
                correct: true,
                feedback:
                    "Correct! Different communication methods can help more customers access support."
            },
            {
                icon: "❌",
                title: "Remove customer support",
                description: "Customers don't need it.",
                correct: false,
                feedback:
                    "Removing support doesn't solve accessibility barriers."
            },
            {
                icon: "📢",
                title: "Only make phone calls louder",
                description: "Keep one method.",
                correct: false,
                feedback:
                    "Different communication methods are more useful than simply changing volume."
            }
        ]
    },


    /* =====================================================
       HOME & EVERYDAY LIFE
    ===================================================== */

    {
        icon: "🏠",
        category: "🏠 HOME",
        question:
            "A frequently used item is stored somewhere very difficult to reach.",
        description:
            "What could make the home easier to use?",
        options: [
                {
                    icon: "📦",
                    title: "Place frequently used items somewhere reachable",
                    description: "Make everyday tasks easier.",
                    correct: true,
                    feedback:
                        "Correct! Organising items around people's needs can reduce everyday barriers."
                },
                {
                    icon: "⬆️",
                    title: "Move it even higher",
                    description: "Store it out of the way.",
                    correct: false,
                    feedback:
                        "Moving an important item farther away can create another barrier."
                },
                {
                    icon: "❌",
                    title: "Throw it away",
                    description: "Problem solved.",
                    correct: false,
                    feedback:
                        "The item may still be useful; accessibility is about making it easier to use."
                }
            ]
        },

    {
        icon: "🧼",
        category: "🏠 HOME",
        question:
            "A home's entrance becomes slippery after rain.",
        description:
            "What would be a helpful improvement?",
        options: [
                {
                    icon: "🧹",
                    title: "Keep the entrance clear and safe",
                    description: "Reduce unnecessary hazards.",
                    correct: true,
                    feedback:
                        "Correct! Safer, well-maintained entrances can reduce barriers."
                },
                {
                    icon: "💧",
                    title: "Leave more water there",
                    description: "It will dry eventually.",
                    correct: false,
                    feedback:
                        "Leaving water can increase the hazard."
                },
                {
                    icon: "🚫",
                    title: "Block the entrance",
                    description: "Nobody uses it.",
                    correct: false,
                    feedback:
                        "Blocking an entrance creates another access problem."
                }
            ]
        },

    {
        icon: "🎛️",
        category: "🏠 HOME",
        question:
            "Important controls have tiny labels that are difficult to identify.",
        description:
            "What could help?",
        options: [
                {
                    icon: "🔤",
                    title: "Use clear and readable labels",
                    description: "Make controls easier to identify.",
                    correct: true,
                    feedback:
                        "Correct! Clear labels can make everyday controls easier to use."
                },
                {
                    icon: "✏️",
                    title: "Make the labels smaller",
                    description: "Use less space.",
                    correct: false,
                    feedback:
                        "Smaller labels may make the controls harder to identify."
                },
                {
                    icon: "❌",
                    title: "Remove all labels",
                    description: "Guess what they do.",
                    correct: false,
                    feedback:
                        "Removing labels can make controls confusing."
                }
            ]
        },

    {
        icon: "🔊",
        category: "🏠 HOME",
        question:
            "A room is extremely noisy during an important conversation.",
        description:
            "What could help?",
        options: [
                {
                    icon: "🤫",
                    title: "Reduce unnecessary background noise",
                    description: "Create a calmer environment.",
                    correct: true,
                    feedback:
                        "Correct! Reducing background noise can make communication easier."
                },
                {
                    icon: "🎵",
                    title: "Turn the music louder",
                    description: "Add more sound.",
                    correct: false,
                    feedback:
                        "More background sound can make communication harder."
                },
                {
                    icon: "📢",
                    title: "Make everyone shout",
                    description: "Solve it with volume.",
                    correct: false,
                    feedback:
                        "Shouting isn't a good replacement for a suitable environment."
                }
            ]
        },

    {
        icon: "🗺️",
        category: "🏠 HOME",
        question:
            "A visitor needs help understanding the layout of a large building.",
        description:
            "What could help them navigate?",
        options: [
                {
                    icon: "🗺️",
                    title: "Provide clear directions or a map",
                    description: "Show where important areas are.",
                    correct: true,
                    feedback:
                        "Correct! Clear navigation information helps people find their way."
                },
                {
                    icon: "❓",
                    title: "Give no directions",
                    description: "Let them explore.",
                    correct: false,
                    feedback:
                        "A lack of information can make navigation unnecessarily difficult."
                },
                {
                    icon: "🔀",
                    title: "Change the layout randomly",
                    description: "Keep it surprising.",
                    correct: false,
                    feedback:
                        "Unpredictable layouts can make navigation harder."
                }
            ]
        },


    /* =====================================================
       ENTERTAINMENT & RECREATION
    ===================================================== */

    {
        icon: "🎬",
        category: "🎬 ENTERTAINMENT",
        question:
            "A cinema only offers one version of a film with no caption option.",
        description:
            "What would improve accessibility?",
        options: [
                {
                    icon: "💬",
                    title: "Offer captioned viewing options",
                    description: "Provide another way to access dialogue.",
                    correct: true,
                    feedback:
                        "Correct! Caption options can make films more accessible."
                },
                {
                    icon: "🔊",
                    title: "Only make the film louder",
                    description: "Increase the volume.",
                    correct: false,
                    feedback:
                        "Louder sound does not provide a text alternative."
                },
                {
                    icon: "❌",
                    title: "Remove the film",
                    description: "Nobody watches it.",
                    correct: false,
                    feedback:
                        "The better solution is to offer accessible viewing options."
                }
            ]
        },

    {
        icon: "🎮",
        category: "🎮 ENTERTAINMENT",
        question:
            "A game uses only colour to show which team a player belongs to.",
        description:
            "What could make the game more accessible?",
        options: [
            {
                icon: "🔷",
                title: "Add symbols, patterns or labels",
                description: "Give players another visual cue.",
                correct: true,
                feedback:
                    "Correct! Important information should not rely only on colour."
            },
            {
                icon: "🌈",
                title: "Use more colours",
                description: "Add many more colours.",
                correct: false,
                feedback:
                    "More colours don't solve the problem of colour-only information."
            },
            {
                icon: "❌",
                title: "Remove team information",
                description: "Nobody needs it.",
                correct: false,
                feedback:
                    "The information should remain available in another form."
            }
        ]
    },

    {
        icon: "🛝",
        category: "🎬 ENTERTAINMENT",
        question:
            "A playground has equipment that can only be used in one way.",
        description:
            "What could make the playground more inclusive?",
        options: [
                {
                    icon: "♿",
                    title: "Include different ways to participate",
                    description: "Provide varied play options.",
                    correct: true,
                    feedback:
                        "Correct! Different activity options allow more children to participate."
                },
                {
                    icon: "🚫",
                    title: "Remove the whole playground",
                    description: "No one plays there.",
                    correct: false,
                    feedback:
                        "Removing activities doesn't create more opportunities to participate."
                },
                {
                    icon: "🔒",
                    title: "Make the equipment harder to use",
                    description: "Increase the challenge.",
                    correct: false,
                    feedback:
                        "Making equipment harder doesn't address accessibility."
                }
            ]
        },

    {
        icon: "🧘",
        category: "🎬 ENTERTAINMENT",
        question:
            "A large event has no quieter area available.",
        description:
            "What could organisers consider?",
        options: [
                {
                    icon: "🌿",
                    title: "Provide a quieter space",
                    description: "Give people another environment option.",
                    correct: true,
                    feedback:
                        "Correct! A quieter area can give people another way to participate comfortably."
                },
                {
                    icon: "🔊",
                    title: "Make the event louder",
                    description: "More energy.",
                    correct: false,
                    feedback:
                        "More noise doesn't provide an alternative environment."
                },
                {
                    icon: "❌",
                    title: "Tell people not to attend",
                    description: "Problem solved.",
                    correct: false,
                    feedback:
                        "The goal should be to remove barriers to participation."
                }
            ]
        },

    {
        icon: "⚽",
        category: "🎬 ENTERTAINMENT",
        question:
            "A sports centre has an entrance that is difficult for some visitors to use.",
        description:
            "What should the centre consider?",
        options: [
                {
                    icon: "♿",
                    title: "Provide an accessible route",
                    description: "Make the facility easier to enter.",
                    correct: true,
                    feedback:
                        "Correct! Accessible routes help more people participate."
                },
                {
                    icon: "🚫",
                    title: "Close the entrance",
                    description: "Avoid using it.",
                    correct: false,
                    feedback:
                        "Closing an entrance doesn't create an accessible alternative."
                },
                {
                    icon: "🪜",
                    title: "Add more stairs",
                    description: "Make the entrance bigger.",
                    correct: false,
                    feedback:
                        "More stairs don't solve the access barrier."
                }
            ]
        },


    /* =====================================================
       SAFETY & EMERGENCIES
    ===================================================== */

    {
        icon: "🚨",
        category: "🚨 SAFETY",
        question:
            "An emergency alarm can only be heard.",
        description:
            "What would make the warning more accessible?",
        options: [
                {
                    icon: "💡",
                    title: "Use multiple types of alerts",
                    description: "For example, sound and visual signals.",
                    correct: true,
                    feedback:
                        "Correct! Multiple alert methods can help more people receive important warnings."
                },
                {
                    icon: "🔊",
                    title: "Only make the alarm louder",
                    description: "Use sound alone.",
                    correct: false,
                    feedback:
                        "Louder sound does not help everyone access the warning."
                },
                {
                    icon: "❌",
                    title: "Remove the alarm",
                    description: "No warning needed.",
                    correct: false,
                    feedback:
                        "Emergency warnings are important and should be accessible."
                }
            ]
        },

    {
        icon: "🚪",
        category: "🚨 SAFETY",
        question:
            "An emergency exit is blocked by furniture.",
        description:
            "What should happen?",
        options: [
            {
                icon: "🧹",
                title: "Keep the exit clear",
                description: "Make the emergency route usable.",
                correct: true,
                feedback:
                    "Correct! Emergency routes should remain clear and usable."
            },
            {
                icon: "🪑",
                title: "Add more furniture",
                description: "Use the space.",
                correct: false,
                feedback:
                    "Furniture should never block an emergency route."
            },
            {
                icon: "🔒",
                title: "Lock the exit",
                description: "Keep it closed.",
                correct: false,
                feedback:
                    "Emergency exits need to remain available."
            }
        ]
    },

    {
        icon: "📋",
        category: "🚨 SAFETY",
        question:
            "Emergency instructions use complicated language.",
        description:
            "What could improve them?",
        options: [
            {
                icon: "💬",
                title: "Use clear and simple instructions",
                description: "Make important steps easy to understand.",
                correct: true,
                feedback:
                    "Correct! Emergency information should be as clear and understandable as possible."
            },
            {
                icon: "📚",
                title: "Add more complicated terms",
                description: "Make it technical.",
                correct: false,
                feedback:
                    "Complicated wording can make urgent information harder to understand."
            },
            {
                icon: "❌",
                title: "Remove the instructions",
                description: "People know what to do.",
                correct: false,
                feedback:
                    "Clear instructions are important during emergencies."
            }
        ]
    },

    {
        icon: "📢",
        category: "🚨 SAFETY",
        question:
            "A fire drill announcement is communicated in only one way.",
        description:
            "What could organisers do?",
        options: [
            {
                icon: "🔄",
                title: "Use multiple communication methods",
                description: "Give people more than one way to receive it.",
                correct: true,
                feedback:
                    "Correct! Multiple communication methods can make safety information more accessible."
            },
            {
                icon: "📢",
                title: "Repeat the same method only",
                description: "Do exactly the same thing.",
                correct: false,
                feedback:
                    "Repeating one method doesn't remove barriers for people who cannot access it."
            },
            {
                icon: "❌",
                title: "Cancel the drill",
                description: "No one needs to practise.",
                correct: false,
                feedback:
                    "Safety drills can be important and should be communicated accessibly."
            }
        ]
    },

    {
        icon: "🪧",
        category: "🚨 SAFETY",
        question:
            "Emergency signs are difficult to see.",
        description:
            "What should be improved?",
        options: [
            {
                icon: "👀",
                title: "Make signs clear and visible",
                description: "Use suitable size and contrast.",
                correct: true,
                feedback:
                    "Correct! Emergency signs need to be easy to notice and understand."
            },
            {
                icon: "🔎",
                title: "Make them smaller",
                description: "Save space.",
                correct: false,
                feedback:
                    "Smaller signs may make important information harder to see."
            },
            {
                icon: "❌",
                title: "Remove signs",
                description: "People can guess.",
                correct: false,
                feedback:
                    "Removing emergency signs can create a serious information barrier."
            }
        ]
    },


    /* =====================================================
       COMMUNITY & INCLUSION
    ===================================================== */

    {
        icon: "🤝",
        category: "🤝 COMMUNITY",
        question:
            "A community event is held somewhere difficult for some people to access.",
        description:
            "What should organisers consider?",
        options: [
                {
                    icon: "♿",
                    title: "Choose an accessible venue",
                    description: "Consider access before the event.",
                    correct: true,
                    feedback:
                        "Correct! Accessibility should be considered when choosing an event location."
                },
                {
                    icon: "🚫",
                    title: "Tell some people not to come",
                    description: "They can skip it.",
                    correct: false,
                    feedback:
                        "People shouldn't be excluded because a venue creates an avoidable barrier."
                },
                {
                    icon: "🤷",
                    title: "Ignore the problem",
                    description: "It will be fine.",
                    correct: false,
                    feedback:
                        "Planning ahead can prevent accessibility barriers."
                }
            ]
        },

    {
        icon: "🎲",
        category: "🤝 COMMUNITY",
        question:
            "A group activity can only be completed in one specific way.",
        description:
            "What could make it more inclusive?",
        options: [
                {
                    icon: "🔄",
                    title: "Offer different ways to participate",
                    description: "Allow suitable alternatives.",
                    correct: true,
                    feedback:
                        "Correct! Different participation methods can help more people join."
                },
                {
                    icon: "🚫",
                    title: "Exclude anyone who needs another method",
                    description: "Keep one rule.",
                    correct: false,
                    feedback:
                        "A single method can create unnecessary barriers."
                },
                {
                    icon: "❌",
                    title: "Cancel the activity",
                    description: "Nobody participates.",
                    correct: false,
                    feedback:
                        "The goal should be to adapt activities where possible."
                }
            ]
        },

    {
        icon: "💬",
        category: "🤝 COMMUNITY",
        question:
            "A community meeting gives people only one way to ask questions.",
        description:
            "What could improve participation?",
        options: [
            {
                icon: "📝",
                title: "Offer different ways to ask questions",
                description: "For example, written and spoken options.",
                correct: true,
                feedback:
                    "Correct! Multiple ways to participate can make meetings more inclusive."
            },
            {
                icon: "🚫",
                title: "Don't allow questions",
                description: "Keep the meeting short.",
                correct: false,
                feedback:
                    "Removing questions reduces participation rather than improving access."
            },
            {
                icon: "📢",
                title: "Only allow shouting",
                description: "Everyone speaks loudly.",
                correct: false,
                feedback:
                    "A single communication method can create unnecessary barriers."
            }
        ]
    },

    {
        icon: "📄",
        category: "🤝 COMMUNITY",
        question:
            "A public poster uses extremely small text.",
        description:
            "What could make it more accessible?",
        options: [
            {
                icon: "🔤",
                title: "Use readable text",
                description: "Make important information easy to see.",
                correct: true,
                feedback:
                    "Correct! Public information should be readable."
            },
            {
                icon: "🔎",
                title: "Make it smaller",
                description: "Fit more information.",
                correct: false,
                feedback:
                    "Smaller text can make public information harder to access."
            },
            {
                icon: "❌",
                title: "Remove the poster",
                description: "No information needed.",
                correct: false,
                feedback:
                    "The better solution is to make the information accessible."
            }
        ]
    },

    {
        icon: "🤔",
        category: "🤝 COMMUNITY",
        question:
            "You notice someone may need support, but you don't know what kind of help they want.",
        description:
            "What is the most respectful approach?",
        options: [
                {
                    icon: "💬",
                    title: "Ask respectfully",
                    description: "Let the person explain what would help.",
                    correct: true,
                    feedback:
                        "Correct! Asking respectfully avoids making assumptions about someone's needs."
                },
                {
                    icon: "🏃",
                    title: "Take over immediately",
                    description: "Decide for them.",
                    correct: false,
                    feedback:
                        "It's better to ask rather than assume what another person needs."
                },
                {
                    icon: "🤷",
                    title: "Ignore them completely",
                    description: "Never offer help.",
                    correct: false,
                    feedback:
                        "A respectful offer and allowing the person to decide can be more inclusive."
                }
            ]
        }

];


/* =========================================================
   START GAME
========================================================= */

function startGame() {

    points = 0;

    streak = 0;

    bestStreak = 0;

    level = 1;

    solved = 0;

    currentQuestion = 0;

    answered = false;


    document
        .getElementById("intro")
        .classList.add("hidden");


    document
        .getElementById("result")
        .classList.add("hidden");


    document
        .getElementById("game")
        .classList.remove("hidden");


    updateHUD();

    loadQuestion();


    document
        .getElementById("game")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}


/* =========================================================
   LOAD QUESTION
========================================================= */

function loadQuestion() {

    const situation =
        situations[currentQuestion];


    answered = false;


    document.getElementById(
        "question-number"
    ).textContent =

        "SITUATION "
        + (currentQuestion + 1)
        + " / "
        + situations.length;


    document.getElementById(
        "category"
    ).textContent =
        situation.category;


    document.getElementById(
        "situation-icon"
    ).textContent =
        situation.icon;


    document.getElementById(
        "question"
    ).textContent =
        situation.question;


    document.getElementById(
        "description"
    ).textContent =
        situation.description;


    document
        .getElementById("feedback")
        .classList.add("hidden");


    document
        .getElementById("next-button")
        .classList.add("hidden");


    const optionBox =
        document.getElementById(
            "options"
        );


    optionBox.innerHTML = "";


    situation.options.forEach(
        function(option) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "option-button";


            button.innerHTML =

                '<span class="option-icon">'
                + option.icon
                + '</span>'

                +

                '<span class="option-title">'
                + option.title
                + '</span>'

                +

                '<span class="option-description">'
                + option.description
                + '</span>';


            button.onclick =
                function() {

                    chooseOption(
                        option,
                        button
                    );

                };


            optionBox.appendChild(
                button
            );

        }
    );


    updateProgress();

}


/* =========================================================
   CHOOSE OPTION
========================================================= */

function chooseOption(
    option,
    button
) {

    if (answered) {

        return;

    }


    answered = true;


    const buttons =
        document.querySelectorAll(
            ".option-button"
        );


    buttons.forEach(
        function(item) {

            item.disabled = true;

        }
    );


    if (option.correct) {

        points += 10;

        streak++;

        solved++;


        if (
            streak > bestStreak
        ) {

            bestStreak = streak;

        }


        button.style.background =
            "#e9f6ff";

        button.style.borderColor =
            "#8fb2cf";


        showFeedback(

            "🌟",

            "Great choice!",

            option.feedback
            + " +10 Access Points!"

        );

    }

    else {

        streak = 0;


        button.style.background =
            "#fff3e5";

        button.style.borderColor =
            "#d8b886";


        showFeedback(

            "💡",

            "Think About the Barrier",

            option.feedback

        );

    }


    updateLevel();

    updateHUD();

}


/* =========================================================
   FEEDBACK
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
        situations.length
    ) {

        finishGame();

        return;

    }


    loadQuestion();


    document
        .getElementById("game")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}


/* =========================================================
   LEVEL
========================================================= */

function updateLevel() {

    if (points >= 400) {

        level = 5;

    }

    else if (points >= 300) {

        level = 4;

    }

    else if (points >= 200) {

        level = 3;

    }

    else if (points >= 100) {

        level = 2;

    }

    else {

        level = 1;

    }

}


/* =========================================================
   HUD
========================================================= */

function updateHUD() {

    document.getElementById(
        "points"
    ).textContent =
        points;


    document.getElementById(
        "streak"
    ).textContent =
        streak;


    document.getElementById(
        "level"
    ).textContent =
        level;


    document.getElementById(
        "solved"
    ).textContent =
        solved;


    updateProgress();

}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

    const completed =
        currentQuestion;


    const percent =
        (completed /
            situations.length) * 100;


    document.getElementById(
        "progress-fill"
    ).style.width =
        percent + "%";


    document.getElementById(
        "progress-percent"
    ).textContent =
        Math.round(percent)
        + "%";


    document.getElementById(
        "progress-text"
    ).textContent =

        "Situation "
        + Math.min(
            currentQuestion + 1,
            situations.length
        )
        + " of "
        + situations.length;

}


/* =========================================================
   FINISH GAME
========================================================= */

function finishGame() {

    document
        .getElementById("game")
        .classList.add("hidden");


    document
        .getElementById("result")
        .classList.remove("hidden");


    updateLevel();


    let icon;

    let title;

    let description;

    let message;


    if (points >= 450) {

        icon = "🌈";

        title =
            "Inclusion Legend!";

        description =
            "Outstanding! You showed a strong understanding of how everyday barriers can be removed.";

        message =
            "Accessibility is about creating environments where more people can participate.";

    }

    else if (points >= 350) {

        icon = "🏆";

        title =
            "Accessibility Champion!";

        description =
            "Fantastic work! You spotted many accessibility-friendly solutions.";

        message =
            "Keep looking for barriers and thinking about how they can be removed.";

    }

    else if (points >= 250) {

        icon = "🌟";

        title =
            "Inclusion Hero!";

        description =
            "Great job! You understand many important accessibility ideas.";

        message =
            "Small changes can sometimes make a big difference.";

    }

    else if (points >= 150) {

        icon = "♿";

        title =
            "Access Explorer!";

        description =
            "Nice work! You're learning how accessibility can improve everyday life.";

        message =
            "Keep practising by noticing barriers around you.";

    }

    else {

        icon = "🌱";

        title =
            "Accessibility Beginner!";

        description =
            "You've started learning how different environments can create barriers.";

        message =
            "Accessibility starts with noticing problems and thinking about inclusive solutions.";

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
        "final-points"
    ).textContent =
        points;


    document.getElementById(
        "final-streak"
    ).textContent =
        bestStreak;


    document.getElementById(
        "final-level"
    ).textContent =
        level;


    document.getElementById(
        "final-message"
    ).textContent =
        message;


    document.getElementById(
        "progress-fill"
    ).style.width =
        "100%";


    document.getElementById(
        "progress-percent"
    ).textContent =
        "100%";


    document.getElementById(
        "progress-text"
    ).textContent =
        "50 situations completed!";


    document
        .getElementById("result")
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
        .getElementById("result")
        .classList.add("hidden");


    document
        .getElementById("game")
        .classList.add("hidden");


    document
        .getElementById("intro")
        .classList.remove("hidden");


    document.getElementById(
        "progress-fill"
    ).style.width =
        "0%";


    document.getElementById(
        "progress-percent"
    ).textContent =
        "0%";


    document.getElementById(
        "progress-text"
    ).textContent =
        "Ready to begin";


    document
        .getElementById("intro")
        .scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

}
