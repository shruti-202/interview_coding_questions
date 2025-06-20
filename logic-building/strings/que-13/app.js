const getString = (userInput) => {
  const firstInput = userInput.slice(0, 6).toUpperCase();
  const secondInput = userInput.slice(6);
  return firstInput + secondInput;
};

console.log(getString("tic tac toe is a fun game"));
