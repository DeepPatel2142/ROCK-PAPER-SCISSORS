const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoise;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoise = e.target.id;
    userChoiceDisplay.innerHTML = userChoise;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }

  if (randomNumber === 2) {
    computerChoice = "scissors";
  }

  if (randomNumber === 3) {
    computerChoice = "paper";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (userChoise === computerChoice) {
    result = "It's a draw!";
  }

  if (userChoise === "rock" && computerChoice === "paper") {
    result = "You lost!";
  }

  if (userChoise === "paper" && computerChoice === "scissors") {
    result = "You lost!";
  }

  if (userChoise === "scissors" && computerChoice === "rock") {
    result = "You lost!";
  }

  if (userChoise === "paper" && computerChoice === "rock") {
    result = "You win!";
  }

  if (userChoise === "scissors" && computerChoice === "paper") {
    result = "You win!";
  }

  if (userChoise === "rock" && computerChoice === "scissors") {
    result = "You win!";
  }

  resultDisplay.innerHTML = result;
}
