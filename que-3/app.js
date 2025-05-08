const btnFetch = document.querySelector("#btn-fetch");
const displayOutput = document.querySelector("#output");

const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const output = data.map(({title})=>`<li>${title}</li>`).join("")
        displayOutput.innerHTML = output
    })
}

btnFetch.addEventListener("click",getData);


// Note: Join removes the commas