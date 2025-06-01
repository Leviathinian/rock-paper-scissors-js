let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    console.log(num);
    if (num <= .33) {
        console.log("Opponent Chose Rock!");
        return 0;
    } else if (num <= 0.66) {
        console.log("Opponent Chose Paper!");
        return 1;
    } else {
        console.log("Opponent Chose Scissors!");
        return 2;
    }
};

function getHumanChoice() {
    let input = prompt("Rock, Paper, or Scissors?")
    if (input === null) {
        input = "";
    }
    switch (input.toLowerCase()) {
        case "rock":
            console.log("Rock Selected.");
            return 0;
        case "paper":
            console.log("Paper Selected.");
            return 1;
        case "scissors":
            console.log("Scissors Selected");
            return 2;
        default:
            console.log("Invalid Input... Defaulting to Rock.");
            return 0;
    }
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let win = 0;
    if (humanChoice === computerChoice) {
        console.log("This Round's a Draw!");
        return;
    } else {
        if (humanChoice === 0) {
            if (computerChoice === 2) {
                humanScore++;
                console.log("Rock Beats Scissors! You Win This Round!");
                return;
            } else {
                computerScore++;
                console.log("Paper Beats Rock... You Lose This Round.");
                return;
            }
        } else if (humanChoice === 1) {
            if (computerChoice === 0) {
                humanScore++;
                console.log("Paper Beats Rock! You Win This Round!");
                return;
            } else {
                computerScore++;
                console.log("Scissors Beat Rock... You Lose This Round");
                return;
            }
        } else {
            if (computerChoice === 2) {
                humanChoice++;
                console.log("Scissors Beat Paper! You Win This Round!");
                return;
            } else {
                computerChoice++;
                console.log("Rock Beats Scissors... You Lose This Round...");
                return;
            }
        }
    }
}

function playGame() {
    for(let i = 0; i < 5; i++){
        playRound();
        if (humanScore === 3 || computerScore === 3);
    }
    console.log("Player Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    if (humanScore > computerScore) {
        console.log("You Win The Game!");
    } else if (computerScore > humanScore) {
        console.log("You Lose The Game...");
    } else {
        console.log("This Game's a Draw!");
    }
}

playGame();