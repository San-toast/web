//Addition Funtcion
function printSum() {
  let sum = 2 * 2;
  return sum;
}

let outerSum = printSum();
console.log(outerSum);

//Division Function
function divideSum(num1, num2) {
  let sum = num1 / num2;
  console.log(sum);
}
let num1 = 10;
let num2 = 5;

divideSum(num1, num2);

//Full Name Function
function fullName() {
  let firstName = "Santos";
  let lastName = "Gutierrez";

  return console.log(
    "I AM",
    firstName.toUpperCase(),
    lastName.toUpperCase(),
    "from Keaau"
  );
}

let myName = fullName();

console.log(myName);
