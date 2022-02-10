console.log("Hi");

function printMessage() {
  console.log("I printed a message");
}
// select element to manipulate or change
let button = document.querySelector(".printButton");
console.log(button);

button.addEventListener("click", () => {
  printMessage();
});
