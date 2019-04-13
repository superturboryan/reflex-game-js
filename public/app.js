let body = document.querySelector("body");
let lost = false;
let won = false;
let buttonNum = 3;
let clicked = [false, false, false];
//////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////
//
//Random value between 500 and 1300
let timer = Math.floor(500 + Math.random() * 800);
//
//Select the timer label and update with random time
let timerLabel = document.getElementById("timerLabel");
timerLabel.innerText = "You have " + timer + "ms to tap all the buttons!";

let status = document.getElementById("status");
//
//Add buttons
for (let x = 1; x < buttonNum + 1; x++) {
  addButton(x);
}

setTimeout(() => {
  if (won || lost) return;
  lost = true;
  status.innerText = "You lost!";
}, timer);
