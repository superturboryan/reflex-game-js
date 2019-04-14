//2700 DeocdeMTL april2019 workshop
//Ryan Forsyth

//Document variables
let body = document.querySelector("body");
let status = document.getElementById("status");
let timerLabel = document.getElementById("timerLabel");

//Game variables
let lost = false;
let won = false;
let buttonCount = 3;
let clicked = [];
let timer = Math.floor(500 + Math.random() * 800);

//Game setup functions
let loadClicked = num => {
  for (let i = 0; i < num; i++) {
    clicked.push("false");
  }
};

let addButton = index => {
  let button = document.createElement("button");

  let label = index;

  switch (label) {
    case 1:
      label = "one";
      break;
    case 2:
      label = "two";
      break;
    case 3:
      label = "three";
      break;
    case 4:
      label = "four";
      break;
    case 5:
      label = "five";
      break;
    default:
      break;
  }

  button.innerText = label;
  button.addEventListener("click", () => {
    if (won || lost) return;
    clicked[index - 1] = true;
    if (!clicked.includes(false)) {
      won = true;
      status.innerText = "You won! Reload to try again";
    }
  });
  body.appendChild(button);
};

//Setup UI

//Add timer label
timerLabel.innerText = "You have " + timer + "ms to tap all the buttons!";
//Add buttons according to button count, starting at index 1 - no 0 button!
for (let x = 1; x < buttonCount + 1; x++) {
  addButton(x);
}

//Start game with timer variable setting game length
setTimeout(() => {
  if (won || lost) return;
  lost = true;
  status.innerText = "You lost!";
}, timer);
