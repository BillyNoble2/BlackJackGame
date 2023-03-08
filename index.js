let firstCard = 10
let secondCard = 9
let cards = [firstCard, secondCard] //cards array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame();
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    if (sum < 21){
    message = "Do you want to draw a new card?"

    } else if(sum === 21){ 
        message = "Woohoo! You've got Blackjack!"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    let card = 6
    sum += card
    renderGame()
}