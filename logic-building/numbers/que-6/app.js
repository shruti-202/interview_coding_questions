const calculateSum = (userInput) => {
  if (userInput > 0) {
    const sum = (userInput * (userInput + 1)) / 2;
    return "The sum of Al Natural Number", sum;
  } else {
    return "Enter Positive Number";
  }
};

console.log(calculateSum(100));
