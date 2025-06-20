const findLength = (userInput) => {
  let count = 0;
  for (let ch of userInput) {
    count++;
  }
  return count > 7;
};

console.log(findLength("Priya"));
console.log(findLength("Shruuuti"));
