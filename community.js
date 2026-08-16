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
   COMMUNITY CHALLENGE
========================================================= */

let communityScore = 0;


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


    communityScore++;


    document.getElementById(
        "communityScore"
    ).textContent =
        "🤝 Kind Actions Completed: "
        + communityScore;


    if (communityScore === 4) {

        document.getElementById(
            "communityScore"
        ).textContent =
            "🌟 Amazing! You completed all 4 community actions! 🤝";

    }

}
