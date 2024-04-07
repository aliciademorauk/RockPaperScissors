function getComputerChoice() {
    const choiceIndex = Math.floor(Math.random() * listOfChoices.length);
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
    let playerSelection;
    let userWins = 0;
    let computerWins = 0;

    for (let i = 1; i <= 5; i++) {
        do {
            playerSelection = prompt(`ROUND ${i}: Rock, paper or scissors?\nPlease, type your choice with no spacing and ensure to check your spelling.`)
        } while (!listOfChoices.includes(playerSelection));
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result.startsWith("You have won!")) {
            userWins++;
        } else if (result.startsWith("You have lost!")) {
            computerWins++;
        }
    }

    return userWins > computerWins 
    ? `You have won! You won ${userWins} times against the computer.`
    : (computerWins > userWins 
        ? `You have lost! The computer won ${computerWins} times against you.` 
        : "There is no winner!")
}
  

const listOfChoices = ["rock", "paper", "scissors"];
console.log(playGame());
  