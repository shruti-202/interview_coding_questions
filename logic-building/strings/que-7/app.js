const checkAlphanumeric = (userInput) => {
  let hasLetter = false;
  let hasNumber = false;
  for (let i = 0; i < userInput.length; i++) {
    const ch = userInput[i];
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) hasLetter = true;
    else if (ch >= "0" && ch <= "9") hasNumber = true;
  }
  if (hasLetter && hasNumber) {
    return "Contains letters and numbers";
  } else if (hasLetter) {
    return "Contains letters only";
  } else if (hasNumber) {
    return "Contains numbers only";
  } else {
    return "Contains neither letters nor numbers";
  }
};

console.log(checkAlphanumeric("Shru@1234"));
console.log(checkAlphanumeric("Shru"));
