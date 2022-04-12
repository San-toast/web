let red = [5, 5, 9, 3, 1];
let blue = [6, 7, 1, 2, 3];
fastest = true;

const tandemBicycle = (red, blue, fastest) => {
  //   blue.sort(function (a, b) {
  //     return b - a;
  //   });
  //   red.sort();
  //   let pair = [];
  let combine = red.concat(blue);
  combine.sort();
  console.log(combine);

  if (fastest === false) {
    let minSpeed =
      combine[0] + combine[1] + combine[2] + combine[3] + combine[4];
    return minSpeed;
  } else {
    let maxSpeed =
      combine[5] + combine[6] + combine[7] + combine[8] + combine[9];
    return maxSpeed;
  }
};

tandemBicycle(red, blue, fastest);
