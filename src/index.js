const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let results = "";
  if (playerChoice === computerChoice) {
    results = "It's a Tie";
  } else {
    switch (playerChoice) {
      case "rock":
        results = computerChoice === "scissors" ? "YOU WIN !" : "YOU LOSE !";
        break;
      case "paper":
        results = computerChoice === "rock" ? "YOU WIN !" : "YOU LOSE !";
        break;
      case "scissors":
        results = computerChoice === "paper" ? "YOU WIN !" : "YOU LOSE !";
        break;
    }
  }
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `PLAYER: ${computerChoice}`;
  resultsDisplay.textContent = results;
}
