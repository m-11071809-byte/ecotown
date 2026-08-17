/* =========================================================
   SIMPLE WEBSITE SOUND EFFECTS
   No MP3 files needed!
========================================================= */

let audioContext;

function getAudioContext() {
    if (!audioContext) {
        audioContext = new (
            window.AudioContext ||
            window.webkitAudioContext
        )();
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    return audioContext;
}


function playTone(frequency, duration, type = "sine", volume = 0.08) {

    const ctx = getAudioContext();

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;

    gain.gain.setValueAtTime(volume, ctx.currentTime);

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + duration
    );

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start();

    oscillator.stop(
        ctx.currentTime + duration
    );
}


/* =========================================================
   SOUND EFFECTS
========================================================= */

function soundClick() {
    playTone(600, 0.06, "sine", 0.06);
}


function soundSelect() {
    playTone(750, 0.08, "sine", 0.07);
}


function soundOpen() {
    playTone(500, 0.08, "sine", 0.06);

    setTimeout(function() {
        playTone(700, 0.10, "sine", 0.06);
    }, 70);
}


function soundCorrect() {

    playTone(600, 0.08, "sine", 0.07);

    setTimeout(function() {
        playTone(850, 0.12, "sine", 0.08);
    }, 90);

}


function soundWrong() {

    playTone(220, 0.12, "square", 0.04);

    setTimeout(function() {
        playTone(180, 0.15, "square", 0.04);
    }, 100);

}


function soundComplete() {

    playTone(600, 0.10, "sine", 0.07);

    setTimeout(function() {
        playTone(750, 0.10, "sine", 0.07);
    }, 100);

    setTimeout(function() {
        playTone(950, 0.18, "sine", 0.08);
    }, 200);

}
