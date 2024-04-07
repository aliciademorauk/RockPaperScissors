function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * listOfChoices.length);
    return listOfChoices[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "You have tied!";
    } else if (computerSelection === "paper" && playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper" || computerSelection === "rock" && playerSelection === "scissors") {
        return `You have lost! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return `You have won! ${playerSelection} beats ${computerSelection}!`;
    }
}

function playGame() {
    let computerSelection = getComputerChoice();
    let playerSelection;
    let userWins = 0;
    let computerWins = 0;
    do {playerSelection = prompt("Rock, paper or scissors? Please type your choice with no spacing and ensure to check your spelling.")
    } while (!listOfChoices.includes(playerSelection));
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection);
        if (result.startsWith("You have won!")) {
            userWins++;
        } else if (result.startsWith("You have lost!")) {
            computerWins++;
        }
    }
    if (userWins > computerWins) {
        return `You have won! You won ${userWins} times against the computer.`;
    } else if (computerWins > userWins) {
        return `You have lost! The computer won ${computerWins} times against you.`;
    } else {return "There is no winner!";}
}
  

const listOfChoices = ["rock", "paper", "scissors"];
console.log(playGame());
  