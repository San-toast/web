const array = [1, 2, 233, 4, 5, 2, 3, 2, 1, 1];
const array2 = [];
array.sort();
for (let index = 0; index < array.length; index++) {
  if (array[index] === array[index + 1]) {
    array.push();
  }
}

const arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10];

const array2 = [];
arr.sort();
for (let index = 0; index < arr.length; index++) {
  if (arr[index] === arr[index + 1]) {
    array2.push(arr[index]);
  }
}
console.log(array2);
