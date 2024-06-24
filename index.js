let handEl = document.getElementById("hand-el");
let handElPlayer2 = document.getElementById("hand-elPlayer2");
let rockEl = document.getElementById("rock-el");
let paperEl = document.getElementById("paper-el");
let scissorsEl = document.getElementById("scissors-el");
let choiceEl = document.getElementById("choice-el");
let hideEl = document.querySelector(".hide");
let player1PointsEl = document.getElementById("player1-points-el");
let player2PointsEl = document.getElementById("player2-points-el");
let semicolonPointsId = document.getElementById("semicolon-points-id");
let playEl = document.getElementById("play-el");

let hands = ["Rock", "Paper", "Scissors"];

// Initial setup of event listeners
rockEl.addEventListener("click", () => {
    selectedHand = hands[0];
    showHand(selectedHand);
});

paperEl.addEventListener("click", () => {
    selectedHand = hands[1];
    showHand(selectedHand);
});

scissorsEl.addEventListener("click", () => {
    selectedHand = hands[2];
    showHand(selectedHand);
});

// PLAYER 1

rockEl.innerHTML = `<button style="border:none;background-color: #9B97A2;"><img alt=${hands[0]} src="./images/${hands[0]}.png"></button>`;
paperEl.innerHTML = `<button style="border:none;background-color: #9B97A2;"><img alt=${hands[1]} src="./images/${hands[1]}.png"></button>`;
scissorsEl.innerHTML = `<button style="border:none;background-color: #9B97A2;"><img alt=${hands[2]} src="./images/${hands[2]}.png"></button>`;

let selectedHand;
let player1choice;
let player2choice;

function startGame() {
    hideEl.classList.remove("hide");
    playEl.classList.add("hide");
    choiceEl.classList.remove("hide");
    handEl.innerHTML = "";
    handElPlayer2.innerHTML = "";
    resultImageEl.innerHTML = "";
}

function showHand(selectedHand) {
    choiceEl.classList.add("hide");
    player1choice = selectedHand;
    handEl.innerHTML = `<img alt=${player1choice} src="./images/${player1choice}.png">`;
    showHandPlayer2();
    defineWinner();
}

// PLAYER 2
function generateHandPlayer2() {
    let randomIndex = Math.floor(Math.random() * 3);
    return hands[randomIndex];
}

function showHandPlayer2() {
    player2choice = generateHandPlayer2();
    handElPlayer2.innerHTML = `<img alt=${player2choice} src="./images/${player2choice}.png">`;
}

// SUMMARY OF POINTS
let resultImageEl = document.getElementById("result-image-el");
let player1Points = 0;
let player2Points = 0;

function defineWinner() {
    // TIE
    if ((player1choice === "Rock" && player2choice === "Rock") || (player1choice === "Paper" && player2choice === "Paper") || (player1choice === "Scissors" && player2choice === "Scissors")) {
        console.log("It's a tie");
        player1Points += 0;
        player2Points += 0;
    }
    // PLAYER 1 WINS
    else if ((player1choice === "Rock" && player2choice === "Scissors") || (player1choice === "Paper" && player2choice === "Rock") || (player1choice === "Scissors" && player2choice === "Paper")) {
        console.log("Player 1 wins");
        player1Points++;
    }
    // Player 2 WINS
    else {
        console.log("Player 2 wins");
        player2Points++;
    }

    semicolonPointsId.innerHTML = " : ";
    player1PointsEl.innerHTML = player1Points;
    player2PointsEl.innerHTML = player2Points;
    playEl.classList.remove("hide");
}

function playAgain() {
    selectedHand = null;
    player1choice = null;
    player2choice = null;
    startGame(); // Reset game state
}
