function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
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
      return "It's a tie!";
    } else if (outcomes[playerSelection].beats === computerSelection.toLowerCase()) {
      return 'You Win! ' + outcomes[playerSelection].message;
    } else {
      return 'You Lose! ' + outcomes[computerSelection.toLowerCase()].message;
    }
  }
  
  
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt('Round ' + round + ': Choose Rock, Paper, or Scissors');
    const computerSelection = getComputerChoice(); 

    const result = playRound(playerSelection, computerSelection);

    console.log(result);

    if (result.includes('You Win!')) {
      playerScore++;
    } else if (result.includes('You Lose!')) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log('You win the game! Your score: ' + playerScore + ' Computer score: ' + computerScore);
  } else if (computerScore > playerScore) {
    console.log('You lose the game. Your score: ' + playerScore + ' Computer score: ' + computerScore);
  } else {
    console.log('It\'s a tie game! Your score: ' + playerScore + ' Computer score: ' + computerScore);
  }
}

game();
