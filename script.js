function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection + " vs " + computerSelection);
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Rock loses to paper!";
        } else if (computerSelection === "scissors") {
            return "You Win! Rock beats scissors!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! Paper loses to scissors!";
        } else if (computerSelection === "rock") {
            return "You Win! Paper beats rock!";
        }
    } else {    // playerSelection === "scissors"
        if (computerSelection === "rock") {
            return "You Lose! Scissors loses to rock!";
        } else if (computerSelection === "paper") {
            return "You Win! Scissors beats paper!";
        }
    }
    return `Push! ${playerSelection} ties to ${computerSelection}`;
}

function getPlayerSelection() {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection !== "rock" && playerSelection !== "paper"
        && playerSelection !== "scissors") {
            location.reload();
    }
    return playerSelection;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++) {
        playRound(getPlayerSelection(), getComputerChoice());
    }
    
}

game();