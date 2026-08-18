/* =========================================================
   SAFETY QUEST DATA
========================================================= */

const quests = {

    road: {

        title: "🚦 Road Quest",

        question:
            "You are about to cross a busy road. What is the safest choice?",

        answers: [

            {
                text: "🏃 Run across quickly",
                correct: false,
                explanation:
                    "Speed isn't the important part. You need to check the road carefully and follow safe crossing practices."
            },

            {
                text: "👀 Stop, look and listen before crossing",
                correct: true,
                explanation:
                    "Correct! Staying alert and checking for traffic helps you make a safer decision."
            },

            {
                text: "📱 Look at your phone while crossing",
                correct: false,
                explanation:
                    "Phones can distract you from traffic and other hazards."
            }

        ]

    },


    online: {

        title: "📱 Online Quest",

        question:
            "Someone you don't know online asks for your personal information. What should you do?",

        answers: [

            {
                text: "📤 Send it to them",
                correct: false,
                explanation:
                    "Personal information should not be shared casually with strangers online."
            },

            {
                text: "🔒 Keep it private and ask a trusted adult if needed",
                correct: true,
                explanation:
                    "Correct! Protecting personal information is an important part of online safety."
            },

            {
                text: "🤫 Keep talking but hide it from everyone",
                correct: false,
                explanation:
                    "If something online makes you uncomfortable or concerned, getting help from a trusted adult is a safer choice."
            }

        ]

    },


    home: {

        title: "🏠 Home Quest",

        question:
            "You notice something at home that could be dangerous, but you don't know how to deal with it. What should you do?",

        answers: [

            {
                text: "🧪 Experiment with it",
                correct: false,
                explanation:
                    "Trying unfamiliar things can create unnecessary risks."
            },

            {
                text: "🧑‍🏫 Ask a trusted adult for help",
                correct: true,
                explanation:
                    "Correct! When you're unsure about a potential hazard, asking a trusted adult is a sensible choice."
            },

            {
                text: "🙈 Ignore it completely",
                correct: false,
                explanation:
                    "If something could be dangerous, it is better to tell someone responsible."
            }

        ]

    },


    emergency: {

        title: "🆘 Emergency Quest",

        question:
            "You are in an emergency situation. What should you do first?",

        answers: [

            {
                text: "😎 Pretend nothing happened",
                correct: false,
                explanation:
                    "Ignoring an emergency can make the situation worse."
            },

            {
                text: "🧠 Stay as calm as possible and follow safety instructions",
                correct: true,
                explanation:
                    "Correct! Staying as calm as possible and following instructions can help you respond safely."
            },

            {
                text: "📸 Stop to record everything",
                correct: false,
                explanation:
                    "During an emergency, your priority should be getting to safety and following instructions."
            }

        ]

    }

};



/* =========================================================
   PLAYER DATA
========================================================= */

let score = 0;

let currentQuest = null;



/* =========================================================
   START QUEST
========================================================= */

function startQuest(type) {

    const quest =
        quests[type];

    if (!quest) {

        return;

    }


    currentQuest = quest;


    document.getElementById(
        "question-title"
    ).textContent =
        quest.title;


    document.getElementById(
        "question-text"
    ).textContent =
        quest.question;


    document.getElementById(
        "feedback"
    ).textContent = "";


    const answers =
        document.getElementById(
            "answers"
        );


    answers.innerHTML = "";


    quest.answers.forEach(
        function(answer) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-button";


            button.textContent =
                answer.text;


            button.onclick =
                function() {

                    checkAnswer(
                        answer,
                        button
                    );

                };


            answers.appendChild(
                button
            );

        }
    );


    document.getElementById(
        "question-area"
    ).scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}



/* =========================================================
   CHECK ANSWER
========================================================= */

function checkAnswer(
    answer,
    selectedButton
) {

    const buttons =
        document.querySelectorAll(
            ".answer-button"
        );


    buttons.forEach(
        function(button) {

            button.disabled = true;

        }
    );


    const feedback =
        document.getElementById(
            "feedback"
        );


    if (answer.correct) {

        score += 10;


        feedback.textContent =
            "🌟 Correct! +10 Safety XP — "
            + answer.explanation;


        feedback.style.color =
            "#4d8a62";


        selectedButton.style.background =
            "#e3f5e8";


        selectedButton.style.borderColor =
            "#83b997";


        updateScore();

    }

    else {

        feedback.textContent =
            "💡 Good try! "
            + answer.explanation;


        feedback.style.color =
            "#9a713d";


        selectedButton.style.background =
            "#fff1df";


        selectedButton.style.borderColor =
            "#d7b47b";

    }

}



/* =========================================================
   UPDATE SCORE
========================================================= */

function updateScore() {

    document.getElementById(
        "score"
    ).textContent =
        score + " XP";


    const maxXP = 40;


    let percentage =
        (score / maxXP) * 100;


    if (percentage > 100) {

        percentage = 100;

    }


    document.getElementById(
        "xp-fill"
    ).style.width =
        percentage + "%";


    updateRank();

}



/* =========================================================
   UPDATE RANK
========================================================= */

function updateRank() {

    let rank;


    if (score >= 40) {

        rank =
            "🏆 Safety Master";

    }

    else if (score >= 30) {

        rank =
            "🛡️ Safety Guardian";

    }

    else if (score >= 20) {

        rank =
            "⭐ Safety Scout";

    }

    else if (score >= 10) {

        rank =
            "🌿 Safety Learner";

    }

    else {

        rank =
            "🌱 Beginner";

    }


    document.getElementById(
        "rank"
    ).textContent =
        rank;

}



/* =========================================================
   DAILY MISSIONS
========================================================= */

const missions = [

    "👀 Notice one potential safety hazard around you.",

    "📱 Check whether your important accounts have strong privacy settings.",

    "🚦 Pay extra attention to traffic when travelling today.",

    "🏠 Find one possible hazard at home and tell a trusted adult.",

    "🧠 Think of one emergency situation and what you would do.",

    "🤝 Remind a friend about a safety rule in a friendly way."

];



function newMission() {

    const randomIndex =
        Math.floor(
            Math.random()
            * missions.length
        );


    document.getElementById(
        "mission-text"
    ).textContent =
        missions[randomIndex];

}



/* =========================================================
   START WITH A RANDOM MISSION
========================================================= */

newMission();
