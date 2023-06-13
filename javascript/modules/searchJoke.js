import { getSearchJokes } from "../services/api.js";

function searchForJokes() {
  const input = document.querySelector("#searchInput");
  const results = document.querySelector("#searchResults");
  const searchTerm = input.value;

  getSearchJokes(searchTerm)
    .then(jokes => {
      results.innerHTML = '';

      jokes.forEach(joke => {
        const jokeElement = document.createElement('li');
        jokeElement.textContent = joke;
        results.appendChild(jokeElement);
      });
    });
}

export { searchForJokes }