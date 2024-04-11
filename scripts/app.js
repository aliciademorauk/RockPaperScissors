const game = () => {

    let userWins = 0;
    let computerWins = 0;
    let rounds = 1;
    const winningConditions = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };

    function playGame() {
        const possibleChoice = document.querySelectorAll(".choice");
        possibleChoice.forEach(function(button) {
            button.addEventListener('click', function () {
                if (rounds >= 5) {
                    finishGame();
                } else {
                    let playerChoice = getPlayerChoice(this);
                    let computerChoice = getComputerChoice(possibleChoice);
                    playRound(playerChoice, computerChoice);
                }
            });
        });
    }
    
    function playRound(playerSelection, computerSelection) {
        let roundWinner = document.querySelector(".round-winner");
        if (playerSelection === computerSelection) {
            roundWinner.textContent = "You have tied!";
        } else if (winningConditions[computerSelection] === playerSelection) {
            roundWinner.textContent = `You have lost! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}!`;
            computerWins++;
        } else {
            roundWinner.textContent = `You have won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!`;
            userWins++;
        }
        rounds++;
    }

    function getPlayerChoice(choiceClicked) {
        let playerChoice = choiceClicked.classList[1];
        return playerChoice;
    }

    function getComputerChoice(options) {
        let choices = [];
        options.forEach(button => {
            choices.push(button.classList[1]);
        });
        const choiceIndex = Math.floor(Math.random() * choices.length);
        return choices[choiceIndex];
    }

    function finishGame() {
        disableChoiceButtons();
        printWinner();
        let restartBtn = createRestartOption();
        restartBtn.addEventListener("click", () => {
            location.reload();
        })
    }

    function disableChoiceButtons() {
        let choiceButtons = document.querySelectorAll(".choice");
        choiceButtons.forEach(button => button.disabled = true);
    }

    function printWinner() {
        let winner = userWins > computerWins ? "YOU WIN!" : "YOU LOSE!";
        document.querySelector(".winner-print").textContent = winner;
    }

    function createRestartOption() {
        const gameWinner = document.querySelector(".game-winner");
        const restart = document.querySelector(".restart-text");
        const okButton = document.createElement("button");
        restart.textContent = "Press OK to restart the game:";
        okButton.textContent = "OK";
        gameWinner.appendChild(okButton);
        return okButton;
    }

    playGame();
}

game();