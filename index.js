let firstCard = 10;
let secondCard = 4;
let cards =[firstCard,secondCard]
let sum = firstCard + secondCard;
let isAlive = true;
let message =""
let hasBlackJack = false
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
function startGame(){
    renderGame()
}
function renderGame(){
    sumEL.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards " + cards[0]+ " & " + cards[1]
    if(sum <= 20){
        message ="Do you want to add a card ?"
    }else if(sum === 21){
        message = "Congrats you have a BlackJack"
        hasBlackJack = true
    }else{
        message = "Unfortunetly you are out of the game !"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard(){
    message = "Picking a new card"
    messageEl.textContent = message
    let card = 7
    sum += card
    cards.push(card)
    console.log(cards);
    renderGame()
}
