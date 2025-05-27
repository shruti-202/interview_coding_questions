const countWord = (userInput) => {
  const words = userInput.trim().split(/\s+/);
  return words.length;
};

console.log(countWord("We, are neoGrammers!"));

//split(/\s+/) splits the string by one or more spaces/tabs/newlines
