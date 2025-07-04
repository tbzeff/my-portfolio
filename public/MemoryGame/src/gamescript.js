'use strict';

function $(id) { return document.getElementById(id); }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function initialSetup() {
    // Initialize event listeners for start and try-again buttons
    $("start-button").addEventListener("click", function() {
        $("StartScreen").style.visibility = "hidden";
        $("game-screen").style.visibility = "visible";
        startGame();
    });

    $("again-button").addEventListener("click", function() {
        $("GameOverScreen").style.visibility = "hidden";
        $("game-screen").style.visibility = "visible";
        startGame();
    });
}

function colorIndex(color) {
    let selectBoxes = document.getElementsByClassName("select-block");
    for (var i = 0; i < selectBoxes.length; ++i) {
        if (selectBoxes[i].style.backgroundColor == color) {
            return i;
        }
    }
    return -1;
}

function applyHighlight() {
    // Use a white glow for better contrast, and add a scale animation
    this.style.boxShadow = "0 0 24px 8px #fff, 0 0 0 4px rgba(0,0,0,0.15)";
    this.style.transform = "scale(1.08)";
    this.style.transition = "box-shadow 0.15s, transform 0.15s";
    playTone(this.style.backgroundColor);
}

function stripHighlight() {
    this.style.boxShadow = "";
    this.style.transform = "scale(1)";
    this.style.transition = "box-shadow 0.2s, transform 0.2s";
    stopTone(this.style.backgroundColor);
}

function playTone(color) {
    if (!soundEnabled) return;
    // Always restart the tone from the beginning for clarity
    let audio;
    switch (color) {
        case "red": audio = A; break;
        case "blue": audio = B; break;
        case "yellow": audio = C; break;
        case "green": audio = D; break;
        case "violet": audio = E; break;
        default:
            console.error("Invalid color for playing tone: " + color);
            return;
    }
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

function stopTone(color) {
    if (!soundEnabled) return;
    switch (color) {
        case "red": 
            A.pause();
            A.currentTime = 0;
            break;
        case "blue": 
            B.pause();
            B.currentTime = 0;
            break;
        case "yellow": 
            C.pause();
            C.currentTime = 0;
            break;
        case "green": 
            D.pause();
            D.currentTime = 0;
            break;
        case "violet": 
            E.pause();
            E.currentTime = 0;
            break;
        default:
            console.error("Invalid color for stopping tone: " + color);
    }
}

async function generateSequence(level) {

    let currentSeq = sequence;
    let selectBoxes = document.getElementsByClassName("select-block");
    var randIndex = 0;

    $("player-turn-label").style.visibility = "hidden";
    $("generation-label").style.visibility = "visible";

    randIndex = Math.floor(Math.random() * 5); // get random index 0 - 4
    currentSeq.push(colors[randIndex]); // add color to current sequence

    await sleep(1000); // sleep 1 second

    // Calculate speedup: every 2 levels, decrease durations by 8% (minimum 250ms note, 100ms pause)
    let speedFactor = Math.pow(0.92, Math.floor((level - 1) / 2));
    let noteDuration = Math.max(250, Math.round(700 * speedFactor));
    let pauseDuration = Math.max(100, Math.round(350 * speedFactor));

    // Generate Sequence
    for (var i = 0; i < currentSeq.length; ++i) {
        let highlightIndex = colorIndex(currentSeq[i]);
        selectBoxes[highlightIndex].style.boxShadow = "0 0 24px 8px #fff, 0 0 0 4px rgba(0,0,0,0.15)";
        selectBoxes[highlightIndex].style.transform = "scale(1.08)";
        selectBoxes[highlightIndex].style.transition = "box-shadow 0.15s, transform 0.15s";

        playTone(currentSeq[i]); // play tone

        await sleep(noteDuration);

        stopTone(currentSeq[i]);

        selectBoxes[highlightIndex].style.boxShadow = "";
        selectBoxes[highlightIndex].style.transform = "scale(1)";
        selectBoxes[highlightIndex].style.transition = "box-shadow 0.2s, transform 0.2s";

        // Add a pause between notes for clarity, except after the last note
        if (i < currentSeq.length - 1) {
            await sleep(pauseDuration);
        }
    }

    $("generation-label").style.visibility = "hidden";
    $("player-turn-label").style.visibility = "visible";
    return currentSeq;
}

async function handleGuess() {
    // These two variables for debugging purposes
    // Variables should be replaced with literal values in the if condition later on
    var seqcolor = sequence[guess];
    var blockcolor = this.style.backgroundColor;

    if (blockcolor != seqcolor) { // Handle FAIL
        // High score check
        let highScore = getHighScore();
        if (score > highScore) {
            setHighScore(score);
            highScore = score;
        }
        $("highest-level-label").innerHTML = "Highest Level Completed: " + (level - 1).toString();
        $("score-label").innerHTML = "Score: " + score.toString() + "<br>High Score: " + highScore;
        $("game-screen").style.visibility = "hidden";
        $("GameOverScreen").style.visibility = "visible";
        $("player-turn-label").style.visibility = "hidden";
    } 
    else { // Handle PASS
        ++guess;
        if (guess === level) { // We're done guessing for this round
            // Update score, level and game logic
            guess = 0;
            score += level;
            ++level;
            // Set label text
            $("level-label").innerHTML = "Level: " + level.toString();
            $("current-score-label").innerHTML = "Current Score: " + score.toString();
            sequence = await generateSequence(level);
        }
    }
}

async function startGame() {
    sequence = [];
    score = 0;
    guess = 0;
    level = 1;

    // Set label text
    var levelLabel = $("level-label");
    var currScoreLabel = $("current-score-label");
    levelLabel.innerHTML = "Level: " + level.toString();
    currScoreLabel.innerHTML = "Current Score: " + score.toString();

    // Show high score if available
    let highScore = getHighScore();
    if ($("score-label")) {
        $("score-label").innerHTML = "High Score: " + highScore;
    }

    let blockBox = $("block-box");
    sequence = [];
    // Setup selection box
    if (document.getElementsByClassName("select-block").length === 0) {
        for (var i = 0; i < colors.length; ++i) {
            var selectBlock = document.createElement("div"); // create getElementById
            selectBlock.setAttribute("class", "select-block"); // set attributes
            selectBlock.style.backgroundColor = colors[i];
            selectBlock.onclick = handleGuess; // add click listeners
            selectBlock.onmousedown = applyHighlight;
            selectBlock.onmouseup = stripHighlight;
            blockBox.appendChild(selectBlock); // append element
        }
    }
    // Generate the random sequence for player to memorize
    sequence = await generateSequence(level);
}


const A = $("A-tone");
const B = $("B-tone");
const C = $("C-tone");
const D = $("D-tone");
const E = $("E-tone");

// Set initial volume lower for all tones
A.volume = 0.3;
B.volume = 0.3;
C.volume = 0.3;
D.volume = 0.3;
E.volume = 0.3;

// Sound toggle state
let soundEnabled = true;

const colors = ["red","blue","yellow","green","violet"];
var sequence = [];

var score = 0;
var guess = 0;
var level = 1;

// High score tracker
function getHighScore() {
    return parseInt(localStorage.getItem("memorygame_highscore") || "0", 10);
}

function setHighScore(newScore) {
    localStorage.setItem("memorygame_highscore", newScore);
}

// Add sound toggle button logic
function setupSoundToggle() {
    const toggle = document.getElementById("sound-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function() {
        soundEnabled = !soundEnabled;
        toggle.textContent = soundEnabled ? "🔊 Sound: On" : "🔇 Sound: Off";
    });
    // Set initial label
    toggle.textContent = soundEnabled ? "🔊 Sound: On" : "🔇 Sound: Off";
}

initialSetup();
setupSoundToggle();
