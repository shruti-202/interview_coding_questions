const btnSubmit = document.querySelector("#btn-submit");
const userText = document.querySelector("#user-text");
const displayOutput = document.querySelector("#output");

const inputHandler = () => {
  if (userText.value === "Tanvi")
    displayOutput.innerText = "She is the Best CEO ever";
  else if (userText.value === "Tanay")
    displayOutput.innerText = "He is our Funny Mentor";
  else if (userText.value === "Swapnil")
    displayOutput.innerText = "He helps us Conquer jobs";
  else if (userText.value === "Akanksha")
    displayOutput.innerText = "She is our Cheerful Interviewer";
  else {
    displayOutput.innerText = "Hi There";
  }
};

btnSubmit.addEventListener("click", inputHandler);
