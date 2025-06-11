const findOdd = (num) => {
  let currentNum = 2 * num - 1;

  for (let i = 0; i < num; i++) {
    console.log(currentNum);
    currentNum -= 2;
  }
};

console.log(findOdd(4));
