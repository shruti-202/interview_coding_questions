const removeTime = (userInput) => {
  const parts = userInput.split(" ");
  parts.pop();
  return parts.join(" ");
};

console.log(removeTime("Wed April 15, 7pm"));
