let body = document.querySelector("body");
let scoreLabel = document.getElementById("scoreLabel");
let insructLabel = document.getElementById("instructLabel");
let winnerLabel = document.getElementById("winner");
let indicator = document.getElementById("indicator");
let qScore = 0;
let pScore = 0;

indicator.style.width = "400px";
indicator.style.height = "400px";

let go = false;

insructLabel.innerText = `The game is "Q vs P"\nWait for the signal, then strike your opponent before he strikes you in order to win! 
Be careful now, early strikes will disqualify you >:)
Controls are real simple: Player Q strikes with keyCode 81 and player P strikes with keyCode 80.
The winner taps the spacebar (32) when they are ready to begin the next match`;

scoreLabel.innerText = `Current Score: \nPlayer Q has ${qScore} points \nPlayer P has ${pScore} points`;

let popup = () => {
  indicator.style.backgroundColor = "green";
  go = true;
};

let attack = input => {
  if (go === false) {
    if (input.keyCode === 81) {
      indicator.innerText = "Player Q false start!";
      pScore++;
      gameOver();
    } else if (input.keyCode === 80) {
      indicator.innerText = "Player P false start!";
      qScore++;
      gameOver();
    }
  } else if (go === true) {
    if (input.keyCode === 81) {
      indicator.innerText = "Player Q wins!";
      qScore++;
      gameOver();
    } else if (input.keyCode === 80) {
      indicator.innerText = "Player P wins!";
      pScore++;
      gameOver();
    }
  }
};

let resetGame = () => {
  go = false;
  indicator.style.backgroundColor = "red";
  indicator.innerText = "";

  console.log(`Current score: ${qScore}`);
  window.removeEventListener("keydown", nextMatch);
  startGame();
};

let nextMatch = input => {
  if (input.keyCode === 32) {
    resetGame();
  }
};

let gameOver = () => {
  scoreLabel.innerText = `Current Score: \nPlayer Q has ${qScore} points \nPlayer P has ${pScore} points`;

  window.removeEventListener("keydown", attack);
  window.addEventListener("keydown", nextMatch);
};

let startGame = () => {
  let randomDelay = Math.floor(Math.random() * 2000);

  window.addEventListener("keydown", attack);
  setTimeout(() => {
    indicator.style.backgroundColor = "orange";
  }, 3000);

  setTimeout(popup, 3000 + randomDelay);
};

startGame();
