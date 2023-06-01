export default getJoke

//// API CONNECT AND SHOW JOKE WITH THE BUTON ////
const getJokeBtn = document.querySelector("#get_btn");
const showJoke = document.querySelector("#show_joke");

function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      "Accept": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      showJoke.textContent = data.joke;
    });
}

getJokeBtn.addEventListener("click", getJoke);