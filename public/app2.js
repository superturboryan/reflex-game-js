//2700 DeocdeMTL april2019 workshop
//Ryan Forsyth

//Imports

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
let goal = Math.floor(2 + Math.random() * 4);
let buttAppear = Math.floor(Math.random() * 3000);

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

  let id = "";

  switch (buttPosition) {
    case 1:
      id = "one";
      break;
    case 2:
      id = "two";
      break;
    case 3:
      id = "three";
      break;
    case 4:
      id = "four";
      break;
    case 5:
      id = "five";
      break;
    case 6:
      id = "six";
      break;
    case 7:
      id = "seven";
      break;
    case 8:
      id = "eight";
      break;
    case 9:
      id = "nine";
      break;
    default:
      id = "one";
      break;
  }

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

//Set button position after random amount of time
setTimeout(() => {
  setPosition();
}, buttAppear);

setTimeout(() => {
  if (won || lost) return;
  lost = true;
  status.innerText = "You lost!";
  reload.style.display = "block";
  hideGrid();
}, buttAppear + 3000);
