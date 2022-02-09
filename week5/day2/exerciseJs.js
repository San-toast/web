// 1. create a function that returns your name
// will receive (frist,last)
// Uppercase entire name

function uppercaseName(first, last) {
  let upperFirst = first.toUpperCase();
  let upperLast = last.toUpperCase();
  return upperFirst + " " + upperLast;
}
console.log(uppercaseName("ciara", "cloud"));

// be given an array called array
// [1,2,3,4,5,6,7,8,9,10]
// print only odds
// print only evens
// print double of every number
// each done in different functions

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function onlyOdds(array) {
  for (index = 1; index < array.length; index += 2) {
    console.log(index);
  }
}
onlyOdds(array);

function onlyEvens(array) {
  for (index = 0; index < array.length; index += 2) {
    console.log(index + 2);
  }
}
onlyEvens(array);

function doubleElement(array) {
  for (index = 0; index < array.length; index++) {
    console.log((index + 1) * 2);
  }
}
doubleElement(array);

function double(array) {
  for (index = 0; index < array.length; index++) {
    console.log(index + 1);
    console.log(index + 1);
  }
}

double(array);
