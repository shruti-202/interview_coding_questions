const btnFetch = document.querySelector("#btn-fetch");
const displayOutput = document.querySelector("#output");

const getData = () => {
  fetch("https://mystery-api.kushanksriraj.repl.co/get")
    .then((response) => {
      if (response.status === 200) displayOutput.innerText = "Api is working";
      else if (response.status === 404)
        displayOutput.innerText = "Page not found";
      else response.status === 401;
      displayOutput.innerText = "You are not Logged it";
    })
    .catch((error) => (displayOutput.innerText = "Something went wrong"));
};

btnFetch.addEventListener("click", getData);
