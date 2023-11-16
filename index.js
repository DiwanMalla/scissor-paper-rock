const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceBtns = document.querySelectorAll(".choiceBtn");

let player, computer, result;

choiceBtns.forEach((button) => {
  button.addEventListener("click", () => {
    player = button.textContent.toUpperCase();
    console.log(player);
    computerTurn();
    checkResult();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = `Result: ${result}`;
  });
});
function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSOR";
      break;
  }
}

function checkResult() {
  if (player == computer) {
    result = "Draw";
  } else if (computer == "ROCK") {
    result = player == "PAPER" ? "You Win" : "You Lose";
  } else if (computer == "PAPER") {
    result = player == "SCISSOR" ? "You Win" : "You Lose";
  } else {
    result = player == "ROCK" ? "You win" : "You Lose";
  }
}
