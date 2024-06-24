let handEl = document.getElementById("hand-el")
let hands = ["rock", "paper", "scissor"]


function generateHand () {
    let randomIndex = Math.floor(Math.random() * 3)
    console.log(randomIndex)
    return hands[randomIndex]
}
console.log(generateHand ())

function showHand(){
    handEl.textContent = generateHand ()
}

