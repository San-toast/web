// array = [3, 5, -4, 8, 11, 1, -1, 6];
// targetSum = 10;
// result = [];
// const twoSum = () => {
//   for (let x = 0; x < array.length; x++) {
//     for (let y = x + 1; y < array.length; y++) {
//       if (array[x] + array[y] === targetSum) {
//         result.push([array[x], array[y]]);
//       }
//     }
//   }
//   return result;
// };
// twoSum();

const twoSum = (arr, target) => {
  let arrSorted = arr.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  let left = 0;
  let right = arr.length - 1;
  for (i = 0; i < arrSorted.length; i++) {
    if (arrSorted[left] + arrSorted[right] === target) {
      let answerArray = [arrSorted[left], arrSorted[right]];
      return answerArray;
    }
    if (arrSorted[left] + arrSorted[right] > target) {
      right = right - 1;
    }
    if (arrSorted[left] + arrSorted[right] < target) {
      left = left + 1;
    }
  }
  return [];
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
target = 3;
result = [];

function binarySearch(array, target) {
  // Write your code here.
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let potentialMatch = array[middle];
    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

const palindrome = "tacocat";
const pal = () => {
  for (let x = 0, y = -1; x < palindrome.length; x++) {
    console.log(palindrome[x]);
    console.log(palindrome[y]);
    if (palindrome[x] === palindrome[y]) {
      y--;
      return true;
    }
  }
};
pal();
