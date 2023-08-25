const apiRandomJokeURL = "https://icanhazdadjoke.com/";

//// RANDOM ////
function getApiRandom(url) {
  return fetch(url, {
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`¡Error HTTP! Estado: ${response.status}`);
    }

    return response.json();
  })
  .catch(error => {
    console.error(error);
  });
};

function getRandomJoke() {
  return getApiRandom(apiRandomJokeURL)
    .then(data => {
      return data.joke;
    })
    .catch(error => {
      console.error(error);
    });
};

//// SEARCH ////
function getSearchJokes(searchInput) {
  if (!searchInput) {
    return;
  }
  return fetch(`https://icanhazdadjoke.com/search?term=${searchInput}`, {
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    const results = data.results;
    return results.map(result => result.joke);
  })
  .catch(err => console.error(err));
}

export { getRandomJoke, getSearchJokes };