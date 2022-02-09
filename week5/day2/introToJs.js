// reverse a string that is given
// use .reverse

function dotReverse(word) {
  let splitWord = word.split("").reverse().join("");
  console.log(splitWord);
}

dotReverse("howdy");

// using a for loop

function forReverseString(word) {
  let reversedWord = "";
  for (let index = word.length; index >= 0; index--) {
    console.log(word[index]);
    reversedWord += word[index];
  }
  console.log(reversedWord);
}

forReverseString("Kumusta");

let array1 = ["hi"];
let array2 = ["howdy"];
let array3 = [...array1, ...array2];
let object1 = { name: "Santos" };
let object2 = { eyes: "brown" };
let object3 = { ...object1, ...object2 };
console.log(array3);
console.log(object3);
