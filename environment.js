/* =========================================================
   SHOW / HIDE SOLUTION
========================================================= */

function showSolution(id) {

    const solution =
        document.getElementById(id);


    if (!solution) {
        return;
    }


    if (solution.style.display === "block") {

        solution.style.display = "none";

    }

    else {

        solution.style.display = "block";

    }

}


/* =========================================================
   ECO CHALLENGE
========================================================= */

let ecoScore = 0;


function completeChallenge(element) {

    if (
        element.classList.contains(
            "completed"
        )
    ) {

        return;

    }


    element.classList.add(
        "completed"
    );


    ecoScore++;


    document.getElementById(
        "ecoScore"
    ).textContent =
        "🌱 Eco Actions Completed: "
        + ecoScore;


    if (ecoScore === 4) {

        document.getElementById(
            "ecoScore"
        ).textContent =
            "🌎 Amazing! You completed all 4 eco actions! 🌱";

    }

}
