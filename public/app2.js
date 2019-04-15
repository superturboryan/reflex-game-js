//2700 DeocdeMTL april2019 workshop
//Ryan Forsyth

//Imports

//Document variables
let body = document.querySelector("body");
let instructLabel = document.getElementById("instructLabel");
let status = document.getElementById("status");
let reload = document.getElementById("reload");

//Hide reload when page loads
reload.style.display = "none";

//Game variables
let won = false;
let lost = false;
let clicks = 0;

let clicked = () => {
  clicks++;
  button.innerText = `${3 - clicks}`;
};

let button = document.createElement("button");

button.className = "button w3 h3 mt5 br4";

let hideButtons = () => {
  for (button of buttons) {
    button.style.display = "none";
  }
};

button.addEventListener("click", () => {
  clicked();

  if (clicks === 3) {
    won = true;
    status.innerText = "You won!";
    reload.style.display = "block";
    hideButtons();
  }
});

button.innerText = `${3 - clicks}`;

body.appendChild(button);

//Select all created buttons into one array so they can be hidden together
let buttons = document.getElementsByClassName("button");

setTimeout(() => {
  if (won || lost) return;
  lost = true;
  status.innerText = "You lost!";
  reload.style.display = "block";
  hideButtons();
}, 1500);
