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
    clicked[index] = true;
    if (!clicked.includes(false)) {
      won = true;
      status.innerText = "You won! Reload to try again";
    }
  });
  body.appendChild(button);
};
