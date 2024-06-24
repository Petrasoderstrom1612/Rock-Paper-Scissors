let handEl = document.getElementById("hand-el");
let handElPlayer2 = document.getElementById("hand-elPlayer2");
let rockEl = document.getElementById("rock-el");
let paperEl = document.getElementById("paper-el");
let scissorsEl = document.getElementById("scissors-el");
let choiceEl = document.getElementById("choice-el");
let hideEl = document.querySelector(".hide");
let hideFirstEl = document.querySelector(".hide-first");
let scoreEl = document.getElementById("score-el")
let semicolonPointsId = document.getElementById("semicolon-points-id");
let playEl = document.getElementById("play-el");

let hands = ["Rock", "Paper", "Scissors"];


// PLAYER 1
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

rockEl.innerHTML = `<button style="border:none;background-color: #9B97A2;"><img alt=${hands[0]} src="./images/${hands[0]}.png"></button>`;
paperEl.innerHTML = `<button style="border:none;background-color: #9B97A2;"><img alt=${hands[1]} src="./images/${hands[1]}.png"></button>`;
scissorsEl.innerHTML = `<button style="border:none;background-color: #9B97A2;"><img alt=${hands[2]} src="./images/${hands[2]}.png"></button>`;

let selectedHand;
let player1choice;
let player2choice;

function startGame() {
    hideEl.classList.remove("hide"); //show game plan
    playEl.classList.add("hide"); //hide play button
    choiceEl.classList.remove("hide"); //show hand choices
    handEl.innerHTML = "";
    handElPlayer2.innerHTML = "";
    resultImageEl.innerHTML = "";
}

function showHand(selectedHand) {
    choiceEl.classList.add("hide"); //hide hand choices
    player1choice = selectedHand;
    handEl.innerHTML = `<img alt=${player1choice} src="./images/${player1choice}.png">`;
    showHandPlayer2(); //Activating player 2 computer to play
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
let player1DivEl = document.querySelector(".player-1-div-el")
let player2DivEl = document.querySelector(".player-2-div-el")
let player1PointsEl = document.getElementById("player1-points-el");
let player2PointsEl = document.getElementById("player2-points-el");
let player1Points = 0;
let player2Points = 0;

function defineWinner() {
    // TIE
    if ((player1choice === "Rock" && player2choice === "Rock") || (player1choice === "Paper" && player2choice === "Paper") || (player1choice === "Scissors" && player2choice === "Scissors")) {

    }
    // PLAYER 1 WINS
    else if ((player1choice === "Rock" && player2choice === "Scissors") || (player1choice === "Paper" && player2choice === "Rock") || (player1choice === "Scissors" && player2choice === "Paper")) {
        player1Points++;
        player1PointsEl.classList.add("green")
        player1DivEl.classList.add("winner-background")
        player2DivEl.classList.add("looser-background")
    }
    // Player 2 WINS
    else {
        player2Points++;
        player2PointsEl.classList.add("green")
        player2DivEl.classList.add("winner-background")
        player1DivEl.classList.add("looser-background")
    }

    scoreEl.innerText = "Score"
    semicolonPointsId.innerHTML = " : ";
    player1PointsEl.innerHTML = player1Points;
    player2PointsEl.innerHTML = player2Points;
    hideFirstEl.classList.remove("hide-first") //show play again button

    if (((player1choice === "Rock" && player2choice === "Scissors") || (player1choice === "Scissors" && player2choice === "Rock"))) {
        resultImageEl.innerHTML = `<h2>RESULT</h2><p>Rock wins over Scissors</p><img alt="Rock wins over Scissors" src="./images/scissors-lost.png"/>`;
    } else if (((player1choice === "Paper" && player2choice === "Rock") || (player1choice === "Rock" && player2choice === "Paper"))) {
        resultImageEl.innerHTML = `<h2>RESULT</h2><p>Paper wins over Rock</p><img alt="Paper wins over Rock" src="./images/rock-lost.png"/>`;
    } else if (((player1choice === "Scissors" && player2choice === "Paper") || (player1choice === "Paper" && player2choice === "Scissors"))) {
        resultImageEl.innerHTML = `<h2>RESULT</h2><p>Scissors win over Paper</p><img alt="Scissors win over Paper" src="./images/paper-lost.png"/>`;
    }
    
}

function playAgain() {
    selectedHand = null;
    player1choice = null;
    player2choice = null;
    player1PointsEl.classList.remove("green")
    player2PointsEl.classList.remove("green")
    player1DivEl.classList.remove("winner-background", "looser-background");
    player2DivEl.classList.remove("winner-background", "looser-background");
    startGame(); // Reset game state
}
