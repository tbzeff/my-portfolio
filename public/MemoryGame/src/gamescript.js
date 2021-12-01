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
    this.style.boxShadow = "inset 5px 5px 5px 5px orange";
    playTone(this.style.backgroundColor);
}

function stripHighlight() {
    this.style.boxShadow = "";
    stopTone(this.style.backgroundColor);
}

function playTone(color) {
    switch (color) {
        case "red": A.play();
            break;
        case "blue": B.play();
            break;
        case "yellow": C.play();
            break;
        case "green": D.play();
            break;
        case "violet": E.play();
            break;
    }
}

function stopTone(color) {
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

    // Generate Sequence
    for (var i = 0; i < currentSeq.length; ++i) {

        let highlightIndex = colorIndex(currentSeq[i]);
        selectBoxes[highlightIndex].style.boxShadow = "inset 5px 5px 5px 5px orange";
        
        playTone(currentSeq[i]); // play tone

        await sleep(1000); // sleep 1 second

        stopTone(currentSeq[i]);

        selectBoxes[highlightIndex].style.boxShadow = "";

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

        $("highest-level-label").innerHTML = "Highest Level Completed: " + (level - 1).toString();
        $("score-label").innerHTML = "Score: " + score.toString();
        $("game-screen").style.visibility = "hidden";
        $("GameOverScreen").style.visibility = "visible";
        $("player-turn-label").style.visibility = "hidden";
    } 
    else { // Handle PASS

        ++guess;
        if (guess == level) { // We're done guessing for this round

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
    
    let blockBox = $("block-box");

    sequence = [];

    // Setup selection box
    if (document.getElementsByClassName("select-block").length == 0) {
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

const colors = ["red","blue","yellow","green","violet"];
var sequence = [];

var score = 0;
var guess = 0;
var level = 1;

initialSetup();
