var playerScore = 0;
var computerScore = 0;

function playGame(playerChoice) {
  var choices = ['rock', 'paper', 'scissors'];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  var result = '';

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
    playerScore++;
  } else {
    result = 'Computer wins!';
    computerScore++;
  }

  document.getElementById('result').innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
  updateScore();
}

function updateScore() {
  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('computer-score').innerText = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  document.getElementById('result').innerText = '';
}
