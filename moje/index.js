const rollDiceBtn = document.getElementById("rollDice-btn")
const restartBtn = document.getElementById("restart-btn")
let playerOneScore = document.getElementById("playerOneScore")
let playerTwoScore = document.getElementById("playerTwoScore")
let playerTurn = document.getElementById("playerTurn")

let scoreOne = document.getElementById("scoreOne")
let scoreTwo = document.getElementById("scoreTwo")

let first = document.getElementById("first")
let second = document.getElementById("second")

let won1 = 0
let won2 = 0

let sumOne = 0
let sumTwo = 0
let playerOne = true

rollDiceBtn.addEventListener("click", rollDice)
restartBtn.addEventListener("click", restart)

function rollDice(){
    let radnomNum= radnomNumber()
    playerTurn.style.animation = ""
    if(playerOne){
        playerOneScore.textContent = radnomNum
        sumOne += radnomNum
        scoreOne.textContent = sumOne
        message()
        activeClass(playerOneScore, playerTwoScore)
    }
    else{
        playerTwoScore.textContent = radnomNum
        sumTwo += radnomNum
        scoreTwo.textContent = sumTwo
        message()
        activeClass(playerTwoScore, playerOneScore)
    }
    if(sumOne >= 20){
        playerTurn.textContent = "Player 1 Won"
        won1++
        first.textContent = won1
    }else if(sumTwo >= 20){
        playerTurn.textContent = "Player 2 Won"
        won2++
        second.textContent = won2
    }
    if(sumOne >= 20 || sumTwo >= 20){        
        sumOne = 0
        sumTwo = 0
        rollDiceBtn.classList.add("visible")
        restartBtn.classList.remove("visible")
        playerTurn.style.animation = "win 3s"
        
    }
    if(won1 > won2)
    {
        activeClass(second, first)
    }
    else if(won1 < won2)
    {
        activeClass(first, second)
    }
    else{
        first.classList.remove("active")
        second.classList.remove("active")
    }
    playerOne = !playerOne
}

function radnomNumber(){
    return Math.floor(Math.random() * 6 + 1)
}

function restart(){
    playerOne = !playerOne
    rollDiceBtn.classList.remove("visible")
    restartBtn.classList.add("visible")
    playerOneScore.textContent = "-"
    playerTwoScore.textContent = "-"
    message()
    playerOne = !playerOne
    scoreOne.textContent = sumOne
    scoreTwo.textContent = sumTwo
}


function activeClass(playerX, playerY){
    playerX.classList.remove("active")
    playerY.classList.add("active")
}

function message(){
    if(playerOne){
        playerTurn.textContent = "Player 2 Turn"
    }
    else {
        playerTurn.textContent = "Player 1 Turn"
    }
}

function scoreUp(){
    playerOneScore.textContent = radnomNum
    sumOne += radnomNum
    scoreOne.textContent = sumOne
}