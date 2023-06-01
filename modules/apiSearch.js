export default searchForJokes

//// API CONNECT AND SEARCH BAR //// 
function searchForJokes() {
  const input = document.querySelector("#searchInput");
  const button = document.querySelector("#searchButton");
  const results = document.querySelector("#searchResults");

  button.addEventListener("click", function () {
    const searchTerm = input.value;

    fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        const resultWords = document.querySelector("#searchResults");

        resultWords.innerHTML = "";
        results.forEach(result => {
          const jokeElement = document.createElement("li");
          jokeElement.textContent = result.joke;
          resultWords.appendChild(jokeElement);
        });
      })
      .catch(err => console.error(err));
  });
}
searchForJokes();