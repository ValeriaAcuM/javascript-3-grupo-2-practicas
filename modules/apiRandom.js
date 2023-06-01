export default getRandomJoke

//// API CONNECT AND SHOW JOKE WITH THE BUTON ////
const getJokeBtn = document.querySelector("#get_btn");
const showJoke = document.querySelector("#show_joke");

function getRandomJoke() {
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

getJokeBtn.addEventListener("click", getRandomJoke);