let playerScore = 0;
let computerScore = 0;

function computerPlay() {

    let weapons = ["rock", "paper", "scissors"];
    return weapons[Math.floor(Math.random()*weapons.length)]
}

function playerPlay() {
    let pick =  prompt("Make a pick: rock, paper, scissors!");
    pick = pick.toLowerCase();
    if (pick === "rock" || pick === "paper" || pick === "scissors") {
        return pick;
    } else {
        alert("Wrong pick! Make a pick again, choose rock, paper or scissors!");
        playerPlay();
    }
}

function playRound(computerSelection, playerSelection) {

    if (computerSelection === playerSelection) {
        alert("It's a draw!");
    } else if (computerSelection === "rock", playerSelection === "paper") {
        alert("Computer wins!");
        computerScore = computerScore +1;
    } else if (computerSelection === "rock", playerSelection === "scissors") {
        alert("Computer wins!");
        computerScore = computerScore +1;
    } else if (computerSelection === "paper", playerSelection === "rock") {
        alert("Player wins!");
        playerScore = playerScore + 1;
    } else if (computerSelection === "paper", playerSelection === "scissors") {
        alert("Player wins!");
        playerScore = playerScore + 1;
    } else if (computerSelection === "scissors", playerSelection === "paper") {
        alert("Computer wins!");
        computerScore = computerScore +1;
    } else {
        alert("Player wins!");
        playerScore = playerScore + 1;
    }
    }

function game() {
    playRound(computerPlay(), playerPlay());
    playRound(computerPlay(), playerPlay());
    playRound(computerPlay(), playerPlay());
    playRound(computerPlay(), playerPlay());
    playRound(computerPlay(), playerPlay());
    if (computerScore > playerScore) {
        alert("Computer wins! LOSER!");
    } else if (playerScore > computerScore) {
        alert("You win!");
    } else {
        alert("It's a draw!");
    }
    console.log(computerScore);
    console.log(playerScore);
    }

 