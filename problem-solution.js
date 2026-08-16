/* =========================================================
   SHOW SOLUTION
========================================================= */

function showSolution(number) {

    const solution =
        document.getElementById(
            "solution-" + number
        );


    if (!solution) {
        return;
    }


    if (solution.style.display === "block") {

        solution.style.display = "none";

        return;

    }


    solution.style.display = "block";

}


/* =========================================================
   CREATE YOUR OWN SOLUTION
========================================================= */

function createSolution() {

    const input =
        document.getElementById(
            "problemInput"
        );

    const result =
        document.getElementById(
            "customSolution"
        );


    const problem =
        input.value.trim();


    if (problem === "") {

        result.style.display = "block";

        result.innerHTML =
            "🧐 Tell me about the problem first!";

        return;

    }


    const solutions = [

        "Break the problem into smaller steps and solve one part at a time. 🧩",

        "Talk to someone you trust and ask for another perspective. 🗣️",

        "Think of three possible solutions, then choose the simplest one to try first. 💡",

        "Ask yourself: \"What is one small thing I can change today?\" 🌱",

        "Write down what is causing the problem and what you can control. ✍️"

    ];


    const randomSolution =
        solutions[
            Math.floor(
                Math.random() *
                solutions.length
            )
        ];


    result.style.display = "block";


    result.innerHTML = `

        <h3>
            🔎 Problem:
        </h3>

        <p>
            ${escapeHTML(problem)}
        </p>

        <h3>
            💡 Possible Solution:
        </h3>

        <p>
            ${randomSolution}
        </p>

        <p>
            ⭐ Remember: A possible solution doesn't
            have to be perfect. Start small!
        </p>

    `;

}


/* =========================================================
   SAFELY DISPLAY USER TEXT
========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}
