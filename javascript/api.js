const getJokeBtn = document.querySelector("#get_btn");
const showJoke = document.querySelector("#show_joke");

//// API CONNECT AND SHOW JOKE WITH THE BUTON ////
getJokeBtn.addEventListener("click", function () {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      "Accept": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      showJoke.textContent = data.joke;
    });
});


const searchBar = document.querySelector("#input_search");
const searchBtn = document.querySelector("#search_btn");
searchBtn.addEventListener("click", function () {
  searchBar.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value;
    fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        const resultWords = document.querySelector("#result_words");

        resultWords.innerHTML = '';
        results.forEach(result => {
          const jokeElement = document.createElement('div');
          jokeElement.innerHTML = result.joke;
          resultWords.appendChild(jokeElement);
        });
      })
  })
});