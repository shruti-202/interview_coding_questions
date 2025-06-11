const getSum = (userInput) => {
  let sum = 0;
  for (let i = 0; i < userInput.length; i++) {
    sum += Number(userInput[i]);
  }
  return sum;
};

console.log(getSum("1234"));
