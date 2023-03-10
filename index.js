let cards = [] //cards array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    //returns random whole number between 1-13
    let randomNumber =  Math.floor(Math.random()*13) +1
    if (randomNumber === 1){
        return 11
    } else if (randomNumber > 11 ){
        return 10
    } else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i += 1){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}