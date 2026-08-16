/* =========================================================
   HEALTHY HABITS
   HABIT QUEST
========================================================= */


/* =========================================================
   GAME VARIABLES
========================================================= */

let habitXP = 0;

let habitStreak = 0;

let bestHabitStreak = 0;

let habitLevel = 1;

let completedHabits = 0;

let currentHabit = 0;

let habitAnswered = false;


/* =========================================================
   HABIT QUESTIONS
========================================================= */

const habitQuestions = [

    /* =====================================================
       1. SLEEP
    ===================================================== */

    {

        icon: "😴",

        category: "REST",

        question:
            "You have school tomorrow and it is getting late. What would be a helpful choice?",

        description:
            "You still have things you could do, but you also need enough time to rest.",

        choices: [

            {

                icon: "🌙",

                title:
                    "Start winding down for sleep",

                description:
                    "Prepare for tomorrow and rest.",

                correct: true,

                points: 10,

                feedback:
                    "Great choice! Having enough time for rest can help you feel more ready for the next day."

            },


            {

                icon: "📱",

                title:
                    "Stay on my phone for hours",

                description:
                    "One more video...",

                correct: false,

                points: 0,

                feedback:
                    "It can be helpful to put the phone aside when it is time to wind down."

            },


            {

                icon: "🎮",

                title:
                    "Keep playing until I feel tired",

                description:
                    "I'll sleep eventually.",

                correct: false,

                points: 0,

                feedback:
                    "Fun activities are great, but making room for regular rest is important too."

            }

        ]

    },


    /* =====================================================
       2. WATER
    ===================================================== */

    {

        icon: "💧",

        category: "HYDRATION",

        question:
            "You've been busy studying and realise you haven't had anything to drink for a while.",

        description:
            "What could you do?",

        choices: [

            {

                icon: "💧",

                title:
                    "Get some water",

                description:
                    "Take a quick hydration break.",

                correct: true,

                points: 10,

                feedback:
                    "Nice! Keeping water nearby can make it easier to remember to drink throughout the day."

            },


            {

                icon: "🥤",

                title:
                    "Ignore it completely",

                description:
                    "I'll remember later.",

                correct: false,

                points: 0,

                feedback:
                    "Regularly drinking water is a useful everyday habit."

            },


            {

                icon: "📚",

                title:
                    "Keep studying without a break",

                description:
                    "No breaks today!",

                correct: false,

                points: 0,

                feedback:
                    "Short breaks can make long study sessions easier to manage."

            }

        ]

    },


    /* =====================================================
       3. MOVEMENT
    ===================================================== */

    {

        icon: "🚶",

        category: "MOVEMENT",

        question:
            "You've been sitting for a long time doing homework.",

        description:
            "You have a few minutes available before starting the next task.",

        choices: [

            {

                icon: "🚶",

                title:
                    "Stand up and move around",

                description:
                    "Take a little movement break.",

                correct: true,

                points: 10,

                feedback:
                    "Great! A short movement break can be a refreshing way to break up long periods of sitting."

            },


            {

                icon: "🪑",

                title:
                    "Stay in the same position",

                description:
                    "No need to move.",

                correct: false,

                points: 0,

                feedback:
                    "Changing position and moving around occasionally can make your day more comfortable."

            },


            {

                icon: "📱",

                title:
                    "Use the break to scroll",

                description:
                    "More screen time!",

                correct: false,

                points: 0,

                feedback:
                    "A break can also be a chance to stand up, stretch, or walk around."

            }

        ]

    },


    /* =====================================================
       4. SCREEN BREAK
    ===================================================== */

    {

        icon: "📱",

        category: "SCREEN TIME",

        question:
            "You've been looking at a screen for a long study session.",

        description:
            "Your eyes and mind could use a short change of pace.",

        choices: [

            {

                icon: "👀",

                title:
                    "Look away and take a short break",

                description:
                    "Give myself a reset.",

                correct: true,

                points: 10,

                feedback:
                    "Good choice! Short breaks can help you reset during long periods of screen use."

            },


            {

                icon: "📱",

                title:
                    "Open another app",

                description:
                    "Keep looking at screens.",

                correct: false,

                points: 0,

                feedback:
                    "Switching apps doesn't really give your eyes or mind a break from the screen."

            },


            {

                icon: "🎬",

                title:
                    "Watch a long video",

                description:
                    "Break time = more screen time.",

                correct: false,

                points: 0,

                feedback:
                    "Try giving yourself a genuine screen break instead."

            }

        ]

    },


    /* =====================================================
       5. FOOD
    ===================================================== */

    {

        icon: "🍎",

        category: "BALANCED CHOICES",

        question:
            "You're choosing what to eat for a meal. What is a helpful approach?",

        description:
            "You have several different foods available.",

        choices: [

            {

                icon: "🥗",

                title:
                    "Choose a variety of foods",

                description:
                    "Aim for a balanced meal.",

                correct: true,

                points: 10,

                feedback:
                    "Great! Variety can help you get different nutrients and makes meals more enjoyable."

            },


            {

                icon: "🚫",

                title:
                    "Skip the meal",

                description:
                    "I don't have time.",

                correct: false,

                points: 0,

                feedback:
                    "Regular meals can be an important part of keeping your energy up during the day."

            },


            {

                icon: "🍬",

                title:
                    "Only choose one type of food",

                description:
                    "Nothing else needed.",

                correct: false,

                points: 0,

                feedback:
                    "A variety of foods can make it easier to have a more balanced meal."

            }

        ]

    },


    /* =====================================================
       6. RELAXATION
    ===================================================== */

    {

        icon: "🧘",

        category: "MIND RESET",

        question:
            "You feel overwhelmed by a busy list of things to do.",

        description:
            "You have a few minutes before your next task.",

        choices: [

            {

                icon: "🌿",

                title:
                    "Take a quiet reset",

                description:
                    "Pause and breathe for a moment.",

                correct: true,

                points: 10,

                feedback:
                    "Nice! A short pause can help you reset before returning to your tasks."

            },


            {

                icon: "🏃",

                title:
                    "Rush through everything",

                description:
                    "Do everything at once.",

                correct: false,

                points: 0,

                feedback:
                    "When things feel overwhelming, breaking tasks into smaller steps can be more manageable."

            },


            {

                icon: "📱",

                title:
                    "Keep scrolling to avoid everything",

                description:
                    "Forget the tasks.",

                correct: false,

                points: 0,

                feedback:
                    "A short break can help, but completely avoiding responsibilities may make them feel bigger later."

            }

        ]

    },


    /* =====================================================
       7. OUTDOORS
    ===================================================== */

    {

        icon: "🌤️",

        category: "FRESH AIR",

        question:
            "The weather is comfortable and you have some free time.",

        description:
            "What could be a refreshing activity?",

        choices: [

            {

                icon: "🌳",

                title:
                    "Spend some time outdoors",

                description:
                    "Walk, sit outside, or enjoy nature.",

                correct: true,

                points: 10,

                feedback:
                    "Wonderful! Time outdoors can be a refreshing part of an everyday routine."

            },


            {

                icon: "🛏️",

                title:
                    "Stay indoors all day",

                description:
                    "Never leave the room.",

                correct: false,

                points: 0,

                feedback:
                    "Indoor time is fine, but adding some outdoor time can make your day more varied."

            },


            {

                icon: "📺",

                title:
                    "Watch videos for the whole afternoon",

                description:
                    "Maximum screen time.",

                correct: false,

                points: 0,

                feedback:
                    "Screens can be fun, but balancing them with other activities is helpful."

            }

        ]

    },


    /* =====================================================
       8. ROUTINE
    ===================================================== */

    {

        icon: "☀️",

        category: "DAILY ROUTINE",

        question:
            "You want to build healthier habits. What is a good place to start?",

        description:
            "You don't need to change everything at once.",

        choices: [

            {

                icon: "🌱",

                title:
                    "Start with one small habit",

                description:
                    "Build gradually.",

                correct: true,

                points: 10,

                feedback:
                    "Excellent! Small, realistic habits can be easier to maintain than trying to change everything at once."

            },


            {

                icon: "⚡",

                title:
                    "Change everything overnight",

                description:
                    "A complete life reset!",

                correct: false,

                points: 0,

                feedback:
                    "Trying to change too many things at once can feel overwhelming. Starting small is okay."

            },


            {

                icon: "❌",

                title:
                    "Do nothing until I'm perfect",

                description:
                    "I'll start someday.",

                correct: false,

                points: 0,

                feedback:
                    "You don't need to be perfect. Small steps still count."

            }

        ]

    }

];


/* =========================================================
   START GAME
========================================================= */

function startHabitGame() {

    habitXP = 0;

    habitStreak = 0;

    bestHabitStreak = 0;

    habitLevel = 1;

    completedHabits = 0;

    currentHabit = 0;

    habitAnswered = false;


    document
        .getElementById("intro-screen")
        .classList.add("hidden");


    document
        .getElementById("result-screen")
        .classList.add("hidden");


    document
        .getElementById("game-screen")
        .classList.remove("hidden");


    updateHabitHUD();

    loadHabit();


    document
        .getElementById("game-screen")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}


/* =========================================================
   LOAD HABIT
========================================================= */

function loadHabit() {

    const habit =
        habitQuestions[currentHabit];


    habitAnswered = false;


    document.getElementById(
        "habit-round"
    ).textContent =

        "HABIT "
        + (currentHabit + 1)
        + " / "
        + habitQuestions.length;


    document.getElementById(
        "habit-category"
    ).textContent =
        habit.category;


    document.getElementById(
        "habit-icon"
    ).textContent =
        habit.icon;


    document.getElementById(
        "habit-question"
    ).textContent =
        habit.question;


    document.getElementById(
        "habit-description"
    ).textContent =
        habit.description;


    document
        .getElementById("habit-feedback")
        .classList.add("hidden");


    document
        .getElementById("habit-next-button")
        .classList.add("hidden");


    const choiceBox =
        document.getElementById(
            "habit-choices"
        );


    choiceBox.innerHTML = "";


    habit.choices.forEach(
        function(choice) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "habit-choice";


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

                    chooseHabit(
                        choice,
                        button
                    );

                };


            choiceBox.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   CHOOSE HABIT
========================================================= */

function chooseHabit(
    choice,
    button
) {

    if (habitAnswered) {

        return;

    }


    habitAnswered = true;


    const buttons =
        document.querySelectorAll(
            ".habit-choice"
        );


    buttons.forEach(
        function(item) {

            item.disabled = true;

        }
    );


    if (choice.correct) {

        habitXP += choice.points;

        habitStreak += 1;

        completedHabits += 1;


        if (
            habitStreak >
            bestHabitStreak
        ) {

            bestHabitStreak =
                habitStreak;

        }


        button.style.background =
            "#e9f6e4";

        button.style.borderColor =
            "#91b982";


        showHabitFeedback(

            "🌟",

            "Healthy Choice!",

            choice.feedback
            + " +10 Habit XP!"

        );

    }

    else {

        habitStreak = 0;


        button.style.background =
            "#fff2df";

        button.style.borderColor =
            "#d8b684";


        showHabitFeedback(

            "💡",

            "Keep Learning!",

            choice.feedback

        );

    }


    updateHabitLevel();

    updateHabitHUD();

    growGarden();

}


/* =========================================================
   FEEDBACK
========================================================= */

function showHabitFeedback(
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
        .getElementById("habit-feedback")
        .classList.remove("hidden");


    document
        .getElementById("habit-next-button")
        .classList.remove("hidden");

}


/* =========================================================
   NEXT HABIT
========================================================= */

function nextHabit() {

    currentHabit++;


    if (
        currentHabit
        >= habitQuestions.length
    ) {

        finishHabitGame();

        return;

    }


    loadHabit();


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

function updateHabitLevel() {

    if (habitXP >= 70) {

        habitLevel = 4;

    }

    else if (habitXP >= 50) {

        habitLevel = 3;

    }

    else if (habitXP >= 30) {

        habitLevel = 2;

    }

    else {

        habitLevel = 1;

    }

}


/* =========================================================
   HUD
========================================================= */

function updateHabitHUD() {

    document.getElementById(
        "habit-xp"
    ).textContent =
        habitXP;


    document.getElementById(
        "habit-streak"
    ).textContent =
        habitStreak;


    document.getElementById(
        "habit-level"
    ).textContent =
        habitLevel;


    document.getElementById(
        "habit-count"
    ).textContent =
        completedHabits;


    updateXPBar();

}


/* =========================================================
   XP BAR
========================================================= */

function updateXPBar() {

    let percent =
        (habitXP / 80) * 100;


    if (percent > 100) {

        percent = 100;

    }


    document.getElementById(
        "xp-fill"
    ).style.width =
        percent + "%";


    document.getElementById(
        "xp-percent"
    ).textContent =
        Math.round(percent)
        + "%";

}


/* =========================================================
   GARDEN GROWTH
========================================================= */

function growGarden() {

    const plants =
        document.querySelectorAll(
            ".plant, .flower"
        );


    plants.forEach(
        function(plant, index) {

            if (
                index < completedHabits
            ) {

                plant.style.transform =
                    "scale(1.25)";

            }

        }
    );


    const gardenLevel =
        document.getElementById(
            "garden-level"
        );


    if (habitLevel === 1) {

        gardenLevel.textContent =
            "🌱";

    }

    else if (habitLevel === 2) {

        gardenLevel.textContent =
            "🌿";

    }

    else if (habitLevel === 3) {

        gardenLevel.textContent =
            "🌳";

    }

    else {

        gardenLevel.textContent =
            "🌸";

    }

}


/* =========================================================
   FINISH GAME
========================================================= */

function finishHabitGame() {

    document
        .getElementById("game-screen")
        .classList.add("hidden");


    document
        .getElementById("result-screen")
        .classList.remove("hidden");


    let icon;

    let title;

    let description;

    let tip;


    if (habitXP >= 70) {

        icon = "🌳";

        title =
            "Habit Hero!";

        description =
            "Amazing! You made thoughtful choices throughout Habit Quest.";

        tip =
            "Keep building small habits that fit naturally into your everyday routine.";

    }

    else if (habitXP >= 50) {

        icon = "🌸";

        title =
            "Healthy Habit Pro!";

        description =
            "Great job! You showed strong everyday habit awareness.";

        tip =
            "Remember that consistency matters more than perfection.";

    }

    else if (habitXP >= 30) {

        icon = "🌿";

        title =
            "Growing Strong!";

        description =
            "You're making progress. Keep practising small, realistic habits.";

        tip =
            "Pick one small habit to practise regularly before adding another.";

    }

    else {

        icon = "🌱";

        title =
            "Habit Beginner!";

        description =
            "Every good habit starts with one small step.";

        tip =
            "You don't have to change everything at once. Start small and keep going.";

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
        "final-xp"
    ).textContent =
        habitXP;


    document.getElementById(
        "final-streak"
    ).textContent =
        bestHabitStreak;


    document.getElementById(
        "final-level"
    ).textContent =
        habitLevel;


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
   PLANTING GAME
========================================================= */


/* =========================================================
   GAME DATA
========================================================= */

let plants = [];

let water = Infinity;

let sunlight = Infinity;

let gardenPoints = 0;

let gardenLevel = 1;


/* =========================================================
   PLANT STAGES
========================================================= */

const plantStages = [

    "🌰",   // Stage 0 - Seed

    "🌱",   // Stage 1 - Small bud

    "🌿",   // Stage 2 - Growing plant

    "🌳",   // Stage 3 - Tree

    "🌻"    // Stage 4 - Flower

];


/* =========================================================
   GROWTH REQUIREMENTS
========================================================= */

const waterNeeded = 2;

const sunlightNeeded = 2;


/* =========================================================
   DRAGGING DATA
========================================================= */

let draggedPlant = null;

let draggedElement = null;

let gardenElement = null;

let pointerOffsetX = 0;

let pointerOffsetY = 0;


/* =========================================================
   PLANT SEED
========================================================= */

function plantSeed() {

    /* =====================================================
       MAXIMUM PLANTS
    ===================================================== */

    if (plants.length >= 12) {

        showGardenMessage(
            "🌳 Your garden is full! Your little garden is thriving!"
        );

        return;

    }


    /* =====================================================
       CREATE NEW PLANT
    ===================================================== */

    const plant = {

        name:
            "Plant " +
            (plants.length + 1),

        stage: 0,

        water: 0,

        sunlight: 0,

        /* Random starting position */

        x:
            15 +
            Math.random() * 70,

        y:
            45 +
            Math.random() * 35

    };


    /* =====================================================
       ADD PLANT
    ===================================================== */

    plants.push(plant);


    /* =====================================================
       REWARD
    ===================================================== */

    gardenPoints += 2;


    showGardenMessage(
        "🌰✨ A new seed has been planted!"
    );


    updateGarden();

}


/* =========================================================
   WATER ALL PLANTS
   UNLIMITED WATER
========================================================= */

function waterAllPlants() {

    /* =====================================================
       CHECK FOR PLANTS
    ===================================================== */

    if (plants.length === 0) {

        showGardenMessage(
            "🌱 You don't have any plants yet!"
        );

        return;

    }


    /* =====================================================
       GIVE WATER TO EVERY PLANT
       
       IMPORTANT:
       Water does NOT decrease.
    ===================================================== */

    plants.forEach(function(plant) {

        plant.water =
            (plant.water || 0) + 1;


        checkPlantGrowth(plant);

    });


    /* =====================================================
       MESSAGE
    ===================================================== */

    showGardenMessage(
        "💧✨ All your plants got watered!"
    );


    updateGarden();

}


/* =========================================================
   GIVE SUNLIGHT TO ALL PLANTS
   UNLIMITED SUNLIGHT
========================================================= */

function giveSunlightToAll() {

    /* =====================================================
       CHECK FOR PLANTS
    ===================================================== */

    if (plants.length === 0) {

        showGardenMessage(
            "🌱 You don't have any plants yet!"
        );

        return;

    }


    /* =====================================================
       GIVE SUNLIGHT TO EVERY PLANT

       IMPORTANT:
       Sunlight does NOT decrease.
    ===================================================== */

    plants.forEach(function(plant) {

        plant.sunlight =
            (plant.sunlight || 0) + 1;


        checkPlantGrowth(plant);

    });


    /* =====================================================
       MESSAGE
    ===================================================== */

    showGardenMessage(
        "☀️✨ All your plants got sunshine!"
    );


    updateGarden();

}


/* =========================================================
   CHECK PLANT GROWTH
========================================================= */

function checkPlantGrowth(plant) {

    /* =====================================================
       MAKE SURE VALUES EXIST
    ===================================================== */

    if (plant.water === undefined) {

        plant.water = 0;

    }


    if (plant.sunlight === undefined) {

        plant.sunlight = 0;

    }


    /* =====================================================
       FULLY GROWN
    ===================================================== */

    if (
        plant.stage >=
        plantStages.length - 1
    ) {

        return;

    }


    /* =====================================================
       CHECK REQUIREMENTS

       Plant needs:

       💧 2 water
       ☀️ 2 sunlight
    ===================================================== */

    if (
        plant.water >= waterNeeded &&
        plant.sunlight >= sunlightNeeded
    ) {

        /* =================================================
           GROW ONE STAGE
        ================================================= */

        plant.stage++;


        /* =================================================
           RESET WATER AND SUNLIGHT
        ================================================= */

        plant.water = 0;

        plant.sunlight = 0;


        /* =================================================
           GIVE POINTS
        ================================================= */

        gardenPoints += 10;


        /* =================================================
           GROW MESSAGE
        ================================================= */

        showGardenMessage(
            `🌱✨ ${plant.name} grew into ${plantStages[plant.stage]}!`
        );

    }

}


/* =========================================================
   UPDATE GARDEN
========================================================= */

function updateGarden() {

    const garden =
        document.getElementById(
            "garden"
        );


    /* =====================================================
       GARDEN DOES NOT EXIST
    ===================================================== */

    if (!garden) {

        return;

    }


    /* =====================================================
       CLEAR OLD GARDEN
    ===================================================== */

    garden.innerHTML = "";


    /* =====================================================
       EMPTY GARDEN
    ===================================================== */

    if (plants.length === 0) {

        garden.innerHTML = `

            <div class="empty-garden">

                🌱

                <p>
                    Your garden is waiting!
                </p>

            </div>

        `;


        updateGardenStats();

        return;

    }


    /* =====================================================
       CREATE EVERY PLANT
    ===================================================== */

    plants.forEach(
        function(
            plant,
            index
        ) {


            /* =================================================
               CREATE ELEMENT
            ================================================= */

            const plantElement =
                document.createElement(
                    "div"
                );


            /* =================================================
               CLASS
            ================================================= */

            plantElement.className =
                "plant";


            /* =================================================
               INDEX
            ================================================= */

            plantElement.dataset.index =
                index;


            /* =================================================
               PLANT HTML
            ================================================= */

            plantElement.innerHTML = `

                <span class="plant-emoji">

                    ${
                        plantStages[
                            plant.stage
                        ] || "🌱"
                    }

                </span>

                <span class="plant-name">

                    ${
                        plant.name ||
                        "My Plant"
                    }

                </span>

            `;


            /* =================================================
               POSITION
            ================================================= */

            if (
                plant.x === undefined
            ) {

                plant.x =
                    15 +
                    Math.random() * 70;

            }


            if (
                plant.y === undefined
            ) {

                plant.y =
                    45 +
                    Math.random() * 35;

            }


            /* =================================================
               APPLY POSITION
            ================================================= */

            plantElement.style.left =
                plant.x + "%";


            plantElement.style.top =
                plant.y + "%";


            /* =================================================
               DRAGGING
            ================================================= */

            plantElement.addEventListener(
                "pointerdown",
                function(event) {

                    startPlantDrag(
                        event,
                        plantElement,
                        plant,
                        garden
                    );

                }
            );


            /* =================================================
               ADD TO GARDEN
            ================================================= */

            garden.appendChild(
                plantElement
            );

        }
    );


    /* =====================================================
       UPDATE STATS
    ===================================================== */

    updateGardenStats();

}


/* =========================================================
   START PLANT DRAGGING
========================================================= */

function startPlantDrag(
    event,
    element,
    plant,
    garden
) {

    /* =====================================================
       STOP DEFAULT BROWSER DRAGGING
    ===================================================== */

    event.preventDefault();


    /* =====================================================
       SAVE DRAGGING DATA
    ===================================================== */

    draggedPlant =
        plant;


    draggedElement =
        element;


    gardenElement =
        garden;


    /* =====================================================
       GET PLANT POSITION
    ===================================================== */

    const plantRect =
        element.getBoundingClientRect();


    /* =====================================================
       REMEMBER GRAB POSITION
    ===================================================== */

    pointerOffsetX =
        event.clientX -
        (
            plantRect.left +
            plantRect.width / 2
        );


    pointerOffsetY =
        event.clientY -
        (
            plantRect.top +
            plantRect.height / 2
        );


    /* =====================================================
       DRAGGING VISUAL
    ===================================================== */

    element.classList.add(
        "being-dragged"
    );


    /* =====================================================
       CAPTURE POINTER
    ===================================================== */

    try {

        element.setPointerCapture(
            event.pointerId
        );

    } catch (error) {

        /* Ignore pointer capture errors */

    }


    /* =====================================================
       ADD MOVEMENT LISTENER
    ===================================================== */

    element.addEventListener(
        "pointermove",
        movePlant
    );


    /* =====================================================
       ADD RELEASE LISTENER
    ===================================================== */

    element.addEventListener(
        "pointerup",
        stopPlantDrag
    );


    /* =====================================================
       ADD CANCEL LISTENER
    ===================================================== */

    element.addEventListener(
        "pointercancel",
        stopPlantDrag
    );


    /* =====================================================
       HIGHLIGHT GARDEN
    ===================================================== */

    garden.classList.add(
        "drag-over"
    );

}


/* =========================================================
   MOVE PLANT
========================================================= */

function movePlant(event) {

    /* =====================================================
       CHECK DRAGGING
    ===================================================== */

    if (
        !draggedPlant ||
        !draggedElement ||
        !gardenElement
    ) {

        return;

    }


    event.preventDefault();


    /* =====================================================
       GET GARDEN POSITION
    ===================================================== */

    const gardenRect =
        gardenElement.getBoundingClientRect();


    /* =====================================================
       CALCULATE X
    ===================================================== */

    let x =
        event.clientX -
        gardenRect.left -
        pointerOffsetX;


    /* =====================================================
       CALCULATE Y
    ===================================================== */

    let y =
        event.clientY -
        gardenRect.top -
        pointerOffsetY;


    /* =====================================================
       CONVERT X TO %
    ===================================================== */

    let xPercent =
        (
            x /
            gardenRect.width
        ) * 100;


    /* =====================================================
       CONVERT Y TO %
    ===================================================== */

    let yPercent =
        (
            y /
            gardenRect.height
        ) * 100;


    /* =====================================================
       KEEP INSIDE GARDEN
    ===================================================== */

    xPercent =
        Math.max(
            5,
            Math.min(
                95,
                xPercent
            )
        );


    yPercent =
        Math.max(
            20,
            Math.min(
                90,
                yPercent
            )
        );


    /* =====================================================
       MOVE PLANT
    ===================================================== */

    draggedElement.style.left =
        xPercent + "%";


    draggedElement.style.top =
        yPercent + "%";


    /* =====================================================
       SAVE POSITION
    ===================================================== */

    draggedPlant.x =
        xPercent;


    draggedPlant.y =
        yPercent;

}


/* =========================================================
   STOP PLANT DRAGGING
========================================================= */

function stopPlantDrag(event) {

    /* =====================================================
       CHECK DRAGGING
    ===================================================== */

    if (!draggedElement) {

        return;

    }


    /* =====================================================
       REMOVE DRAGGING STYLE
    ===================================================== */

    draggedElement.classList.remove(
        "being-dragged"
    );


    /* =====================================================
       REMOVE GARDEN HIGHLIGHT
    ===================================================== */

    if (gardenElement) {

        gardenElement.classList.remove(
            "drag-over"
        );

    }


    /* =====================================================
       REMOVE MOVEMENT LISTENER
    ===================================================== */

    draggedElement.removeEventListener(
        "pointermove",
        movePlant
    );


    /* =====================================================
       REMOVE POINTER UP
    ===================================================== */

    draggedElement.removeEventListener(
        "pointerup",
        stopPlantDrag
    );


    /* =====================================================
       REMOVE POINTER CANCEL
    ===================================================== */

    draggedElement.removeEventListener(
        "pointercancel",
        stopPlantDrag
    );


    /* =====================================================
       RELEASE POINTER
    ===================================================== */

    try {

        draggedElement.releasePointerCapture(
            event.pointerId
        );

    } catch (error) {

        /* Pointer already released */

    }


    /* =====================================================
       MESSAGE
    ===================================================== */

    showGardenMessage(
        "🌱 Plant placed! Perfect spot!"
    );


    /* =====================================================
       CLEAR DRAGGING DATA
    ===================================================== */

    draggedPlant =
        null;


    draggedElement =
        null;


    gardenElement =
        null;

}


/* =========================================================
   UPDATE GARDEN STATS
========================================================= */

function updateGardenStats() {

    const plantCount =
        document.getElementById(
            "plant-count"
        );


    const waterCount =
        document.getElementById(
            "water-count"
        );


    const sunCount =
        document.getElementById(
            "sun-count"
        );


    const points =
        document.getElementById(
            "garden-points"
        );


    const level =
        document.getElementById(
            "garden-level"
        );


    /* =====================================================
       PLANT COUNT
    ===================================================== */

    if (plantCount) {

        plantCount.textContent =
            plants.length;

    }


    /* =====================================================
       WATER
    ===================================================== */

    if (waterCount) {

        waterCount.textContent =
            "∞";

    }


    /* =====================================================
       SUNLIGHT
    ===================================================== */

    if (sunCount) {

        sunCount.textContent =
            "∞";

    }


    /* =====================================================
       POINTS
    ===================================================== */

    if (points) {

        points.textContent =
            gardenPoints;

    }


    /* =====================================================
       LEVEL
    ===================================================== */

    gardenLevel =
        Math.floor(
            gardenPoints / 50
        ) + 1;


    if (level) {

        level.textContent =
            gardenLevel;

    }

}


/* =========================================================
   GARDEN MESSAGE
========================================================= */

function showGardenMessage(
    message
) {

    const messageBox =
        document.getElementById(
            "garden-message"
        );


    /* =====================================================
       MESSAGE BOX DOES NOT EXIST
    ===================================================== */

    if (!messageBox) {

        return;

    }


    /* =====================================================
       SET MESSAGE
    ===================================================== */

    messageBox.textContent =
        message;


    /* =====================================================
       LITTLE ANIMATION
    ===================================================== */

    messageBox.style.transform =
        "scale(1.04)";


    setTimeout(
        function() {

            messageBox.style.transform =
                "scale(1)";

        },
        180
    );

}


/* =========================================================
   START GAME
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateGarden();

    }
);


/* =========================================================
   RESTART GAME
========================================================= */

function restartHabitGame() {

    const resultScreen =
        document.getElementById(
            "result-screen"
        );


    const gameScreen =
        document.getElementById(
            "game-screen"
        );


    const introScreen =
        document.getElementById(
            "intro-screen"
        );


    /* =====================================================
       HIDE RESULT
    ===================================================== */

    if (resultScreen) {

        resultScreen.classList.add(
            "hidden"
        );

    }


    /* =====================================================
       HIDE GAME
    ===================================================== */

    if (gameScreen) {

        gameScreen.classList.add(
            "hidden"
        );

    }


    /* =====================================================
       SHOW INTRO
    ===================================================== */

    if (introScreen) {

        introScreen.classList.remove(
            "hidden"
        );


        introScreen.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }

}
