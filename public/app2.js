//2700 DeocdeMTL april2019 workshop
//Ryan Forsyth

//Imports
import NumWord from "./NumWord.js";

//Document variables
let body = document.querySelector("body");
let instructLabel = document.getElementById("instructLabel");
let status = document.getElementById("status");
let reload = document.getElementById("reload");
let buttonGrid = document.getElementById("buttonGrid");

//Hide reload when page loads
reload.style.display = "none";

//Game variables
let won = false;
let lost = false;
let clicks = 0;
let goal = Math.floor(2 + Math.random() * 4); //Random amount of clicks between 2 and 5
let buttAppear = Math.floor(Math.random() * 5000); //Randomly appears within 5 seconds
let timeLimit = 3000;

let clicked = () => {
  clicks++;
  button.innerText = `${goal - clicks}`;
};

let button = document.createElement("button");

button.className = "button o-40";
button.style.height = "150px";
button.style.width = "150px";
// button.style.margin = "5px";

let hideButtons = () => {
  for (button of buttons) {
    button.style.display = "none";
  }
};

let hideGrid = () => {
  buttonGrid.style.display = "none";
};

button.innerText = `${goal - clicks}`;

let setPosition = () => {
  let buttPosition = Math.floor(1 + Math.random() * 9);

  let id = NumWord.translate(buttPosition);

  let square = document.getElementById(id);

  square.appendChild(button);
};

button.addEventListener("click", () => {
  clicked();
  setPosition();
  if (clicks === goal) {
    won = true;
    status.innerText = "You won!";
    reload.style.display = "block";
    hideGrid();
  }
});

console.log("Numword function" + NumWord.translate(6));

//Set button position after random amount of time
setTimeout(() => {
  setPosition();
}, buttAppear);

//If user hasn't won within time limit
setTimeout(() => {
  if (won || lost) return;
  lost = true;
  status.innerText = "You lost!";
  reload.style.display = "block";
  hideGrid();
}, buttAppear + timeLimit); //You have 3 seconds after button appears to click it
