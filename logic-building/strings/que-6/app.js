const excludeVowels = (userInput) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let result = "";

  for (let i = 0; i < userInput.length; i++) {
    if (!vowels.includes(userInput[i])) result += userInput[i];
  }
  return result;
};

console.log(excludeVowels("Shrutii"));
