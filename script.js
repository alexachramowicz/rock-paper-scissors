function getComputerSelection() {
    const choices = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

function playRound(playerSelection, computerSelection) {
    const winnerPara = document.querySelector('#winner-para');
    console.log(playerSelection + " vs " + computerSelection);

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            winnerPara.textContent = "You Lose! Rock loses to paper!";
            console.log("You Lose! Rock loses to paper!");
            return 0;
        } else if (computerSelection === "scissors") {
            winnerPara.textContent = "You Win! Rock beats scissors!";
            console.log("You Win! Rock beats scissors!");
            return 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            winnerPara.textContent = "You Lose! Paper loses to scissors!";
            console.log("You Lose! Paper loses to scissors!");
            return 0;
        } else if (computerSelection === "rock") {
            winnerPara.textContent = "You Win! Paper beats rock!";
            console.log("You Win! Paper beats rock!");
            return 1;
        }
    } else {    // playerSelection === "scissors"
        if (computerSelection === "rock") {
            winnerPara.textContent = "You Lose! Scissors loses to rock!";
            console.log("You Lose! Scissors loses to rock!");
            return 0;
        } else if (computerSelection === "paper") {
            winnerPara.textContent = "You win! Scissors beats paper!";
            console.log("You Win! Scissors beats paper!");
            return 1;
        }
    }
    console.log(`Push! ${playerSelection} ties to ${computerSelection}`);
    return 2;
}

// function calcScore(result) {
//     if(result === 1) {
//         playerCount++;
//     } else if(result === 0) {
//         computerCount++;
//     } else {
//         //tie?
//         ;
//     }
// }

// decls n defns
const btns = document.querySelectorAll('.btn');
let playerSelection;
let computerSelection;
const playerCounter = document.querySelector('#player-counter');
const computerCounter = document.querySelector('#computer-counter');
let playerCount = 0;
let computerCount = 0;

// driver
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        playerSelection = btn.textContent.toLowerCase();
        computerSelection = getComputerSelection();
        let result = playRound(playerSelection, computerSelection);
    })
});
