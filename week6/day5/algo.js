const list2 = [1, 3, 4];
const list1 = [1, 2, 4];
const list3 = [];
const theFunction = () => {
  list3.push(...list1, ...list2);
  console.log(list3.sort());
};

theFunction();

const list2 = [1, 3, 4];
const list1 = [1, 2, 4];
const theFunction2 = () => {
  list1.push(...list2);
  return list1.sort();
};

theFunction2();
const num = 20;
if (num % 2 == 0 && num % 5 == 0) {
  console.log("fizzbuzz");
} else if (num % 5 == 0) {
  console.log("buzz");
} else if (num % 2 == 0) {
  console.log("fizz");
}

const prices = [7, 1, 5, 3, 6, 4];
let buy = prices[0];
console.log(buy);
for (let price of prices) {
  console.log(price);
  if (price < buy) {
    buy = price;
    console.log(buy);
  }
}
