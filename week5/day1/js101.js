// madlib
function madlib(name, subject) {
  return console.log(name + "'s", "favorite subject is", subject);
}

console.log(madlib("Santos", "math"));
// tip calculator
function tipAmount(bill, rating) {
  if (rating === "good") {
    tip = bill * 0.2;
    return tip;
  } else if (rating === "fair") {
    tip = bill * 0.15;
    return tip;
  } else if (rating === "bad") {
    tip = bill * 0.1;
    return tip;
  }
}

console.log(tipAmount(100, "good"));
console.log(tipAmount(100, "fair"));
console.log(tipAmount(100, "bad"));
// tip calc 2
function totalAmount(bill, rating) {
  if (rating === "good") {
    tip = bill * 0.2;
    total = tip + bill;
    return total;
  } else if (rating === "fair") {
    tip = bill * 0.15;
    total = tip + bill;
    return total;
  } else if (rating === "bad") {
    tip = bill * 0.1;
    total = tip + bill;
    return total;
  }
}

console.log(totalAmount(100, "good"));
console.log(totalAmount(100, "fair"));
console.log(totalAmount(100, "bad"));

// print numbers while loop
function printNumbers(num1, num2) {
  let numLoop = num1;
  while (numLoop <= num2) {
    console.log(numLoop);
    numLoop++;
  }
}

console.log(printNumbers(1, 10));

//print numbers for loop

function forNumbers(nums) {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    console.log(element);
  }
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(forNumbers(nums));

// print a square
function printSquare(num) {
  let square = "****";
  let start = 1;
  while (start <= num) {
    console.log(square);
    start++;
  }
}

console.log(printSquare(5));

// print a box

function printBox(width, height) {
  let topBottom = " ";
  let leftRight = "|";
  let counter = 1;
  console.log(topBottom);
  while (counter <= width) {
    let top = "*";
    counter++;
  }
  console.log(top1);
  while (counter <= height) {
    console.log(leftRight);
    counter++;
  }
  console.log(topBottom);
}

console.log(printBox(5, 5));

// leetspeak

function leetSpeak(word) {
  let leet = "";
  for (let index = 0; index < word.length; index++) {
    if (word.charAt(index) === "A") {
      let leet = leet + "4";
      console.log(leet);
    } else if (word.charAt(index) === "E") {
      let leet = leet + "3";
      console.log(leet);
    } else if (word.charAt(index) === "G") {
      let leet = leet + "6";
      console.log(leet);
    } else if (word.charAt(index) === "I") {
      let leet = leet + "1";
      console.log(leet);
    } else if (word.charAt(index) === "O") {
      let leet = leet + "0";
      console.log(leet);
    } else if (word.charAt(index) === "S") {
      let leet = leet + "5";
      console.log(leet);
    } else if (word.charAt(index) === "T") {
      let leet = leet + "7";
      console.log(leet);
    } else {
      let leet = leet + word.charAt(index);
      console.log(word.charAt(index));
    }
  }
  console.log(leet);
}
let theWord = "ELLO";

console.log(leetSpeak(theWord));
