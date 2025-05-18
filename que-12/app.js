const userInput = document.querySelector("#user-input");
const btnSubmit = document.querySelector("#check-btn");
const displayOutput = document.querySelector("#output");

const btnHandler = () => {
  const num = Number(userInput.value.trim());

  if (isNaN(num) || userInput.value.trim() === "") {
    displayOutput.innerText = "Please enter a valid number.";
    return;
  }

  const square = Number(num * num);
  const isAutomorphic = square.toString().endsWith(num.toString());
  const message = isAutomorphic
    ? `${num} is Automorphic`
    : `${num} is not Automorphic`;
  displayOutput.innerText = message;
};

btnSubmit.addEventListener("click", btnHandler);
