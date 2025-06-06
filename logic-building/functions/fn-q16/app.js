const reverseCharactersOfWord = (userInput) =>
  userInput
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join("");

console.log(reverseCharactersOfWord("we are neoGrammers"));
