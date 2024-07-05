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
let playAgainEl = document.getElementById("play-again-el")
let displayNumberEl = document.getElementById("display-number-el")
let resultImageEl = document.getElementById("result-image-el");
let player1DivEl = document.querySelector(".player-1-div-el")
let player2DivEl = document.querySelector(".player-2-div-el")
let player1PointsEl = document.getElementById("player1-points-el");
let player2PointsEl = document.getElementById("player2-points-el");
let userNumberEl = document.getElementById("user-number-el")
let victoriesLimitEl = document.getElementById("victories-limit-el")
let victoriesEl = document.getElementById("victories-el")
let gamePlanEl = document.getElementById("game-plan-el")
let winnerNrEl = document.getElementById("winner-nr-el")
let winnerGameplanEl = document.getElementById("winner-gameplan-el")
let noneEl = document.getElementById("none-el")
let totalSummaryEl = document.getElementById("total-summary-el")

let hands = ["Rock", "Paper", "Scissors"];
let player1Points = 0;
let player2Points = 0;

let totaltVictoriesPlayer1 = 0
let totalGamesPlayed = 0

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
let victoriesLimit

//select the number of victories needed to win
function saveNumber() {
    let userNumber = userNumberEl.value;
    victoriesLimit = parseInt(userNumber);
    console.log(victoriesLimit)
    displayNumberEl.innerText = victoriesLimit;
}

//player 1 chooses
function startGame() {
    victoriesLimitEl.classList.add("hide") //hide # of rounds choice
    playEl.classList.add("hide"); //hide play button
    hideEl.classList.remove("hide"); //show game plan
    choiceEl.classList.remove("hide"); //show hand choices
    noneEl.classList.remove("none")
    playAgainEl.classList.remove("none")
    gamePlanEl.classList.remove("hide")
    victoriesEl.classList.remove("hide")
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


function defineWinner() {
// INDIVIDUAL GAME
// TIE
if ((player1choice === "Rock" && player2choice === "Rock") || (player1choice === "Paper" && player2choice === "Paper") || (player1choice === "Scissors" && player2choice === "Scissors")) {
}
// PLAYER 1 WINS
else if ((player1choice === "Rock" && player2choice === "Scissors") || (player1choice === "Paper" && player2choice === "Rock") || (player1choice === "Scissors" && player2choice === "Paper")) {
    player1Points++;
    player1DivEl.classList.add("winner-background")
    player2DivEl.classList.add("looser-background")
}
// Player 2 WINS
else {
    player2Points++;
    player2DivEl.classList.add("winner-background")
    player1DivEl.classList.add("looser-background")
}

player1PointsEl.classList.remove("red", "green", "black");
player2PointsEl.classList.remove("red", "green", "black");    
if (player1Points > player2Points){
    player2PointsEl.classList.add("red")
    player1PointsEl.classList.add("green")
} else if (player2Points > player1Points){
    player2PointsEl.classList.add("green")
    player1PointsEl.classList.add("red")
} else if (player2Points === player1Points) {
    player2PointsEl.classList.add("black")
    player1PointsEl.classList.add("black")
}

scoreEl.innerText = "Score"
semicolonPointsId.innerHTML = " : ";
player1PointsEl.innerHTML = player1Points;
player2PointsEl.innerHTML = player2Points;
hideFirstEl.classList.remove("hide-first") //show play again button

if (((player1choice === "Rock" && player2choice === "Scissors") || (player1choice === "Scissors" && player2choice === "Rock"))) {
    resultImageEl.innerHTML = `<h2>RESULT</h2><p>Rock wins over scissors</p><img alt="Rock wins over Scissors" src="./images/scissors-lost.png"/>`;
} else if (((player1choice === "Paper" && player2choice === "Rock") || (player1choice === "Rock" && player2choice === "Paper"))) {
    resultImageEl.innerHTML = `<h2>RESULT</h2><p>Paper wins over rock</p><img alt="Paper wins over Rock" src="./images/rock-lost.png"/>`;
} else if (((player1choice === "Scissors" && player2choice === "Paper") || (player1choice === "Paper" && player2choice === "Scissors"))) {
    resultImageEl.innerHTML = `<h2>RESULT</h2><p>Scissors win over paper</p><img alt="Scissors win over Paper" src="./images/paper-lost.png"/>`;
}

if (victoriesLimit === player1Points || victoriesLimit === player2Points){
    totalGamesPlayed ++
  gameOver()
  if (player1Points > player2Points) {
    totaltVictoriesPlayer1 ++
  }
  } 
}


function gameOver(){
    victoriesEl.classList.add("hide");
    gamePlanEl.classList.add("hide")
    winnerGameplanEl.classList.remove("hide")
    if(player1Points > player2Points){
        winnerNrEl.innerHTML = "Player 1"
    } else {
        winnerNrEl.innerHTML = "Computer"
    }
    playAgainEl.classList.add("none")
}

function playAgain() {
    selectedHand = null;
    player1choice = null;
    player2choice = null;
    player1DivEl.classList.remove("winner-background", "looser-background");
    player2DivEl.classList.remove("winner-background", "looser-background");
    startGame(); // Reset game state
}

function reset(){
    player1Points = 0
    player2Points = 0
    player1PointsEl.innerHTML = player1Points;
    player2PointsEl.innerHTML = player2Points;
    player1PointsEl.classList.remove("red", "green", "black");
    player2PointsEl.classList.remove("red", "green", "black");    
    player1DivEl.classList.remove("winner-background", "looser-background");
    player2DivEl.classList.remove("winner-background", "looser-background");
    winnerGameplanEl.classList.add("hide")
    noneEl.classList.add("none")
    victoriesLimitEl.classList.remove("hide")
    playEl.classList.remove("hide")
    totalSummaryEl.textContent = `Total of sets won ${totaltVictoriesPlayer1}/${totalGamesPlayed}`
}

function annulateAll(){
    totaltVictoriesPlayer1 = 0
    totalGamesPlayed = 0
    reset()
}