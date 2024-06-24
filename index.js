let handEl = document.getElementById("hand-el")
let handElPlayer2 = document.getElementById("hand-elPlayer2")
let rockEl = document.getElementById("rock-el")
let paperEl = document.getElementById("paper-el")
let scissorsEl = document.getElementById("scissors-el")
let choiceEl = document.getElementById("choice-el")
let hideEl = document.querySelector(".hide")

let hands = ["Rock", "Paper", "Scissors"]

rockEl.innerHTML = `<button style="border:none;background-color: #9B97A2;"><img alt=${hands[0]} src="./images/${hands[0]}.png"></button>`
paperEl.innerHTML = `<button style="border:none;background-color: #9B97A2;"><img alt=${hands[1]} src="./images/${hands[1]}.png"></button>`
scissorsEl.innerHTML = `<button style="border:none;background-color: #9B97A2;"><img alt=${hands[2]} src="./images/${hands[2]}.png"></button>`

let selectedHand  


//PLAYER 1

function startGame(){
    hideEl.classList.remove("hide")
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
}

function showHand(selectedHand){
    choiceEl.classList.add("hide")
    let generatedImg = selectedHand
    handEl.innerHTML = `<img alt=${generatedImg} src="./images/${generatedImg}.png">`
    console.log (generatedImg)
    showHandPlayer2()
}


//PLAYER 2
function generateHandPlayer2() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}


function showHandPlayer2(){
    let generatedImg = generateHandPlayer2()
    handElPlayer2.innerHTML = `<img alt=${generatedImg} src="./images/${generatedImg}.png">`
}