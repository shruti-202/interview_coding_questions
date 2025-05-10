const btnFetch = document.querySelector("#btn-fetch");
const displayOutput = document.querySelector("#output");

const getData = () => {
  console.log("clicked");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      const items = data
        .map((item, key) => `<li key=${key}>${item.title}</li>`)
        .join("");
      displayOutput.innerHTML = `<ul>${items}</ul>`;
    });
};

btnFetch.addEventListener("click", getData);
