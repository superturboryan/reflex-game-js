//2700 DeocdeMTL april2019 workshop
//Ryan Forsyth

//Imports

//Document variables
let body = document.querySelector("body");
let status = document.getElementById("status");
let timerLabel = document.getElementById("timerLabel");
let reload = document.getElementById("reload");

//Hide reload button on loading
reload.style.display = "none";

//Game variables
let lost = false;
let won = false;
// let buttonCount = 2;

let buttonCount = Math.floor(1 + Math.random() * 3);

let clicked = [];
let timer = Math.floor(1400 + Math.random() * 800);

//Function that uses every to check that array2 only contains elements of array1
function containsOnly(array1, array2) {
  return array2.every(elem => array1.includes(elem));
}

//Game setup functions

let hideButtons = () => {
  for (button of buttons) {
    button.style.display = "none";
  }
};

let loadClicked = num => {
  for (let i = 0; i < num; i++) {
    clicked.push("false");
  }
};

let addButton = index => {
  let button = document.createElement("button");

  button.className = "button w3 h3 ma2 br4";

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

  console.log(`Label for index ${index} is "${label}"`);

  button.innerText = label;
  button.addEventListener("click", () => {
    if (won || lost) return;
    clicked[index - 1] = true;
    //If clicked array contains only true...
    if (containsOnly([true], clicked)) {
      won = true;
      status.innerText = "You won!";
      reload.style.display = "block";
      hideButtons();
    }
  });

  body.appendChild(button);
};

//Setup UI

//Populate clicked array
loadClicked(buttonCount);
console.log(clicked);
//Add timer label
timerLabel.innerText = `You have ${timer} ms to tap all ${buttonCount} buttons!`;
//Add buttons according to button count, starting at index 1 - no 0 button!
for (let x = 1; x < buttonCount + 1; x++) {
  addButton(x);
}
//Select all created buttons into one array so they can be hidden together
let buttons = document.getElementsByClassName("button");

//Start game with timer variable setting game length
setTimeout(() => {
  if (won || lost) return;
  lost = true;
  status.innerText = "You lost!";
  reload.style.display = "block";
  hideButtons();
}, timer);
