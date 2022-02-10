let buttons = document.querySelectorAll(".button");
let buttonsPressed = [];

function getValue(e) {
  if (e.target.innerText != "=") {
    value = e.target.innerText;
    buttonsPressed.push(value);
    console.log("button pressed:", buttonsPressed);
  } else {
    operation = buttonsPressed[1];
    if (operation === "+") {
      console.log("result:", buttonsPressed[0] + buttonsPressed[2]);
      return buttonsPressed[0] + buttonsPressed[2];
    }
  }
}

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    getValue(e);
  });
}
