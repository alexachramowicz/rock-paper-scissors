function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection + " vs " + computerSelection);
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("You Lose! Rock loses to paper!");
            return 0;
        } else if (computerSelection === "scissors") {
            console.log("You Win! Rock beats scissors!");
            return 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log("You Lose! Paper loses to scissors!");
            return 0;
        } else if (computerSelection === "rock") {
            console.log("You Win! Paper beats rock!");
            return 1;
        }
    } else {    // playerSelection === "scissors"
        if (computerSelection === "rock") {
            console.log("You Lose! Scissors loses to rock!");
            return 0;
        } else if (computerSelection === "paper") {
            console.log("You Win! Scissors beats paper!");
            return 1;
        }
    }
    console.log(`Push! ${playerSelection} ties to ${computerSelection}`);
    return 2;
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
    let winner = 0;
    for(let i = 0; i < 5; i++) {
        winner = playRound(getPlayerSelection(), getComputerChoice());
        if(winner === 1)
            ++playerWins;
        else if (winner === 0)
            ++computerWins;
        else
            continue;
    }
    if (playerWins > computerWins) 
        return `Player wins ${playerWins} to ${computerWins}`;
    else if (computerWins > playerWins)
        return  `Computer wins ${computerWins} to ${playerWins}`;
    else
        return `It's a tie! ${playerWins} to ${computerWins}`
}

console.log(game());