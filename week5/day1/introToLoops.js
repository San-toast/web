// List = Array []

let studentNames = ["Santos", "etc"];
studentNames[0];

//Dictionaries = Object {}
let student = {
  name: "Santos",
};
console.log(student["name"]);
console.log(student.name);

// while

// while (condition) {

// }

// for
//original for loop
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

// for..in
// for objects, not arrays

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
  }
}

const houses = ["123 st", "321 st"];
// for..of
for (const iterator of houses) {
  console.log(house);
}

const dcInstructors = ["name1", "name2", "name3"];
console.log(dcInstructors);
const dcInstructorsFormatted = dcInstructors.map((instrctor) =>
  instrctor.toLocaleUpperCase()
);
console.log(dcInstructorsFormatted);

let num1 = 50;
let num2 = 20;
let sum = num1 + num2;
if (sum >= 50 && sum <= 80) {
  console.log(65);
} else {
  console.log(80);
}

function isVowel(letter) {
  if (
    letter === "a" ||
    (letter === "e") | (letter === "i") | (letter === "o") | (letter === "u")
  )
    return true;
  else {
    return false;
  }
}
console.log(isVowel("a"));
console.log(isVowel("e"));
console.log(isVowel("i"));
console.log(isVowel("o"));
console.log(isVowel("u"));
console.log(isVowel("b"));
console.log(isVowel("c"));
console.log(isVowel("d"));
console.log(isVowel("f"));
