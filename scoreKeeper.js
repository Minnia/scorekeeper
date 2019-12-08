let playerOneButton = document.querySelector("#p1");
let playerOneScore = 0;
let playerOneScoreBoard = document.querySelector("#p1Display");

let playerTwoButton = document.querySelector("#p2");
let playerTwoScore = 0;
let playerTwoScoreBoard = document.querySelector("#p2Display");

let gameOver = false;
let winningScore = 5;
let resetButton = document.querySelector("#reset");

function addToPlayerOneScore() {
  playerOneButton.addEventListener("click", function() {
    if (!gameOver) {
      playerOneScore++;
      if (playerOneScore === winningScore) {
        gameOver = true;
        console.log("Game over!");
      }
      playerOneScoreBoard.textContent = playerOneScore;
    }
  });
}
addToPlayerOneScore();

function addToPlayerTwoScore() {
  playerTwoButton.addEventListener("click", function() {
    if (!gameOver) {
      playerTwoScore++;
      if (playerTwoScore === winningScore) {
        gameOver = true;
        console.log("Game over!");
      }
      playerTwoScoreBoard.textContent = playerTwoScore;
    }
  });
}
addToPlayerTwoScore();

function reset() {
  resetButton.addEventListener("click", function() {
    playerOneScore = 0;
    playerOneScoreBoard.textContent = playerOneScore;
    playerTwoScore = 0;
    playerTwoScoreBoard.textContent = playerTwoScore;
    gameOver = gameOver;
  });
}
reset();
