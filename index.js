let handEl = document.getElementById("hand-el")
let handElPlayer2 = document.getElementById("hand-elPlayer2")
let hands = ["Rock", "Paper", "Scissors"]

//PLAYER 1
function generateHand() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}


function showHand(){
    showHandPlayer2()
    let generatedImg = generateHand()
    handEl.innerHTML = `<img alt=${generatedImg} src="./images/${generatedImg}.png">`
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