const countVowelsAndConsonants = (userInput) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  let consonantCount = 0;

  userInput = userInput.toLowerCase();
  for (let i = 0; i < userInput.length; i++) {
    let ch = userInput[i];
    if (ch >= "a" && ch <= "z") {
      if (vowels.includes(ch)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }
  return { vowels: vowelCount, consonant: consonantCount };
};
