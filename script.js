function getComputerSelection() {
    const choices = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

function playRound(playerSelection, computerSelection) {
    
    resultPara.textContent = playerSelection + " vs " + computerSelection;

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            resultPara.textContent = "You Lose! Rock loses to paper!";
            return COMPUTER;
        } else if (computerSelection === "scissors") {
            resultPara.textContent = "You Win! Rock beats scissors!";
            return PLAYER;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            resultPara.textContent = "You Lose! Paper loses to scissors!";
            return COMPUTER;
        } else if (computerSelection === "rock") {
            resultPara.textContent = "You Win! Paper beats rock!";
            return PLAYER;
        }
    } else {    // playerSelection === "scissors"
        if (computerSelection === "rock") {
            resultPara.textContent = "You Lose! Scissors loses to rock!";
            return COMPUTER;
        } else if (computerSelection === "paper") {
            resultPara.textContent = "You win! Scissors beats paper!";
            return PLAYER;
        }
    }
    resultPara.textContent = `Push! ${playerSelection} ties to ${computerSelection}`;
    return TIE;
}

function updateScore(winner) {
    if(winner === PLAYER) {
        playerCount = parseInt(playerCounter.textContent);
        playerCounter.textContent = ++playerCount;
        playerCounter.setAttribute = ("style", "color: green");
    } else if(winner === COMPUTER) {
        computerCount = parseInt(computerCounter.textContent);
        computerCounter.textContent = ++computerCount;
    } else { // tie
        ;
    }
    return;
}

function calcWinner() {
    if(parseInt(playerCounter.textContent) === BESTOF) {
        winnerSpan.textContent = "Winner"
        resetScore();
        return true;
    } else if(parseInt(computerCounter.textContent) === BESTOF) {
        winnerSpan.textContent = "Defeat"
        resetScore();
        return true;
    }
    return false;
}

function resetScore() {
    playerCounter.textContent = 0;
    computerCounter.textContent = 0;
}

// decls n defns
const COMPUTER = 0;
const PLAYER = 1
const TIE = 2;
const BESTOF = 5;

let winner;
let playerSelection;
let computerSelection;
let playerCount;
let computerCount;

const btns = document.querySelectorAll('.btn');
const playerCounter = document.querySelector('#player-counter');
const computerCounter = document.querySelector('#computer-counter');
const resultPara = document.querySelector('#result-para');
const winnerSpan = document.querySelector('#winner');

// driver
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        playerSelection = btn.textContent.toLowerCase();
        computerSelection = getComputerSelection();
        winner = playRound(playerSelection, computerSelection);
        updateScore(winner);
        calcWinner();
    })
});
