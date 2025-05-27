const getNum = (num) => {
  for (let i = 1; i <= 12; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
};

console.log(getNum(4));
