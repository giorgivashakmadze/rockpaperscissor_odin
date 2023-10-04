// rps.js

const choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let draws = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  const outcomes = {
    rock: { beats: 'scissors', message: 'Rock beats Scissors' },
    paper: { beats: 'rock', message: 'Paper beats Rock' },
    scissors: { beats: 'paper', message: 'Scissors beats Paper' },
  };

  if (playerSelection === computerSelection.toLowerCase()) {
    draws++;
    return "It's a tie!";
  } else if (outcomes[playerSelection].beats === computerSelection.toLowerCase()) {
    playerScore++;
    return 'You Win! ' + outcomes[playerSelection].message;
  } else {
    computerScore++;
    return 'You Lose! ' + outcomes[computerSelection.toLowerCase()].message;
  }
}

function updateScore() {
  const scoreDisplay = document.getElementById('results');
  scoreDisplay.innerHTML = `
    Player: ${playerScore} | Computer: ${computerScore} | Draws: ${draws}
  `;

  if (playerScore === 5) {
    scoreDisplay.innerHTML += '<br>You win the game!';
  } else if (computerScore === 5) {
    scoreDisplay.innerHTML += '<br>You lose the game.';
  }
}

function game(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  updateScore();
}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => game('rock'));
paperButton.addEventListener('click', () => game('paper'));
scissorsButton.addEventListener('click', () => game('scissors'));
