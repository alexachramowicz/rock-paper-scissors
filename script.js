function getComputerSelection() {
    const choices = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

function playRound(playerSelection, computerSelection) {
    const winnerPara = document.querySelector('#winner-para');
    
    winnerPara.textContent = playerSelection + " vs " + computerSelection;

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            winnerPara.textContent = "You Lose! Rock loses to paper!";
            return COMPUTER;
        } else if (computerSelection === "scissors") {
            winnerPara.textContent = "You Win! Rock beats scissors!";
            return PLAYER;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            winnerPara.textContent = "You Lose! Paper loses to scissors!";
            return COMPUTER;
        } else if (computerSelection === "rock") {
            winnerPara.textContent = "You Win! Paper beats rock!";
            return PLAYER;
        }
    } else {    // playerSelection === "scissors"
        if (computerSelection === "rock") {
            winnerPara.textContent = "You Lose! Scissors loses to rock!";
            return COMPUTER;
        } else if (computerSelection === "paper") {
            winnerPara.textContent = "You win! Scissors beats paper!";
            return PLAYER;
        }
    }
    winnerPara.textContent = `Push! ${playerSelection} ties to ${computerSelection}`;
    return TIE;
}

function updateScore(winner) {
    if(winner === PLAYER) {
        playerCount = parseInt(playerCounter.textContent);
        playerCounter.textContent = ++playerCount;
    } else if(winner === COMPUTER) {
        computerCount = parseInt(computerCounter.textContent);
        computerCounter.textContent = ++computerCount;
    } else { // tie
        ;
    }

    calcWinner();
    return;
}

function calcWinner() {

    if(parseInt(playerCounter.textContent) === 5) {
        winner.textContent = "Winner"
        playerCounter.textContent = 0;
        computerCounter.textContent = 0;
    } else if(parseInt(computerCounter.textContent) === 5) {
        winner.textContent = "Defeat"
        playerCounter.textContent = 0;
        computerCounter.textContent = 0;
    }
    return;
}

// decls n defns
const COMPUTER = 0;
const PLAYER = 1
const TIE = 2;

let result;
let playerSelection;
let computerSelection;
let playerCount;
let computerCount;

const btns = document.querySelectorAll('.btn');
const playerCounter = document.querySelector('#player-counter');
const computerCounter = document.querySelector('#computer-counter');
const winnerSpan = document.querySelector('#winner');

// driver
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        playerSelection = btn.textContent.toLowerCase();
        computerSelection = getComputerSelection();
        result = playRound(playerSelection, computerSelection);
        updateScore(result);
    })
});
