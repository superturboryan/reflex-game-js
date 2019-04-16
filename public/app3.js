let body = document.querySelector("body");
let scoreLabel = document.getElementById("scoreLabel");
let rtLabel = document.getElementById("rtLabel");
let insructLabel = document.getElementById("instructLabel");
let winnerLabel = document.getElementById("winner");
let indicator = document.getElementById("indicator");
let qScore = 0;
let pScore = 0;
let rt = 0;
let pb;
let startTime;

indicator.style.width = "400px";
indicator.style.height = "400px";

let go = false;

insructLabel.innerText = `You're at the red light.

You hear the adjacent motorcycle revving its engine -
it's a nice bike, looks to be of similar performance.
only one way to beat this guy to the next light...

Controls are real simple: 
Player Q lets it rip with keyCode 81 and Player P with 80.
When you're at the next intersection, the winner starts the 
countdown with the spacebar (32).`;

let updateLabels = () => {
  scoreLabel.innerText = `Current Score: \nQ - ${qScore} wins \nP - ${pScore} wins`;
  rtLabel.innerText = `RT: ${rt}ms \nFastest: ${
    pb ? pb + "ms" : "You gotta try once to be the fastest..."
  }`;
};

let popup = () => {
  startTime = new Date();
  indicator.style.backgroundColor = "green";
  indicator.innerText = "GO GO GO!";
  go = true;
};

let attack = input => {
  if (go === false) {
    if (input.keyCode === 81) {
      indicator.innerText = "Player Q ran the light!";
      pScore++;
      gameOver();
    } else if (input.keyCode === 80) {
      indicator.innerText = "Player P ran the light!";
      qScore++;
      gameOver();
    }
  } else if (go === true) {
    if (input.keyCode === 81) {
      indicator.innerText = "Player Q was quicker!";
      qScore++;
      gameOver();
    } else if (input.keyCode === 80) {
      indicator.innerText = "Player P was quicker!";
      pScore++;
      gameOver();
    }
  }
};

let resetGame = () => {
  go = false;
  indicator.style.backgroundColor = "red";
  indicator.innerText = "";

  //   console.log(`Current score: ${qScore}`);
  window.removeEventListener("keydown", nextMatch);
  startGame();
};

let nextMatch = input => {
  if (input.keyCode === 32) {
    resetGame();
  }
};

let gameOver = () => {
  let endTime = new Date();
  rt = endTime - startTime;
  if (pb === undefined) pb = rt;
  if (rt < pb) pb = rt;
  updateLabels();

  window.removeEventListener("keydown", attack);
  window.addEventListener("keydown", nextMatch);
};

let startGame = () => {
  let randomDelay = Math.floor(Math.random() * 2000);

  window.addEventListener("keydown", attack);
  setTimeout(() => {
    indicator.style.backgroundColor = "orange";
  }, 3000);

  setTimeout(popup, 3300 + randomDelay);
};

updateLabels();
startGame();
