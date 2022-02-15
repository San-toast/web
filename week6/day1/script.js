// ES6

// declaring ES6 variables
// let, const
// block scope
// let lets you adssign a new value
const santos = [];
let santos2 = ""; // can be reassigned at any point in time

// function printVairableName() {
//   let variableName = { name: "Santos" };
//   let thingToPrint = variableName;
//   thingToPrint = 1;
// }

//function in ES6
function nameOfFunction() {}
nameOfFunction = 0;
// fat arrow, arrow functions
const myFavFunction = () => {};

// Set
const names = new Set();
console.log(names);
// Map
const mapName = new Map();
console.log(mapName);

// Destructuring, syntactic sugar
const Santos = {
  name: "santos",
  age: "27",
  height: "5.8",
};
// let name = Santos.name;
// let age = Santos.age;
// let height = Santos.height;
const { name, age, height } = Santos;
console.log(name);

// for (let index = 0; index < array.length; index++) {
//   const student = array[index];
//   const { name, age, height } = student;
//   console.log(age);
// }

// loops
// for of, ARRAYS
const arrayStuff = [1, 2, 3, 4];
for (let number of arrayStuff) {
  console.log(number);
}
// for in, OBJECTS
const studentObject = { name: "jason", height: "5.9" };
for (let student in studentObject) {
  console.log(studentObject[student]);
}

// const arrayStuff = [1, 2, 3, 4];
// arrayStuff.forEach((element) => console.log(element));

const arrayOfFood = ["apple", "banana"];
const [x, y] = arrayOfFood;
console.log(x);
console.log(y);
