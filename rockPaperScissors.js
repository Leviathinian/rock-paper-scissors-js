let humanScore = 0;
let computerScore = 0;

const container = document.querySelector('.container');
const info = document.createElement('h2');
const cLog = document.createElement('h2');
const hScore = document.createElement('h3');
hScore.textContent = "Your Score: " + humanScore;
const cScore = document.createElement('h3');
cScore.textContent = "Computer Score: " + computerScore;
container.appendChild(cLog);
container.appendChild(info);
container.appendChild(hScore);
container.appendChild(cScore);

function getComputerChoice() {
    let num = Math.random();
    if (num <= .33) {
        cLog.textContent = "Opponent Chose Rock!";
        return 0;
    } else if (num <= 0.66) {
        cLog.textContent = "Opponent Chose Paper!";
        return 1;
    } else {
        cLog.textContent = "Opponent Chose Scissors!";
        return 2;
    }
};

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        info.textContent = "This Round's a Draw!";
    } else {
        if (humanChoice === 0) {
            if (computerChoice === 2) {
                humanScore++;
                info.textContent = "Rock Beats Scissors! You Win This Round!";
            } else {
                computerScore++;
                info.textContent = "Paper Beats Rock... You Lose This Round.";
            }
        } else if (humanChoice === 1) {
            if (computerChoice === 0) {
                humanScore++;
                info.textContent = "Paper Beats Rock! You Win This Round!";
            } else {
                computerScore++;
                info.textContent = "Scissors Beat Rock... You Lose This Round";
            }
        } else {
            if (computerChoice === 2) {
                humanScore++;
                info.textContent = "Scissors Beat Paper! You Win This Round!";
            } else {
                computerScore++;
                info.textContent = "Rock Beats Scissors... You Lose This Round...";
            }
        }
    }
    hScore.textContent = "Player Score: " + humanScore;
    cScore.textContent = "Computer Score: " + computerScore;
    if (humanScore === 5) {
        info.textContent = "You Win The Game! Make Another Selection to Restart.";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        info.textContent = "You Lose The Game... Make Another Selection to Restart.";
        humanScore = 0;
        computerScore = 0;
    }
}