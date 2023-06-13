import { getRandomJoke } from "../services/api.js";

function getJoke() {
  const showJoke = document.querySelector("#show_joke");

  return getRandomJoke()
    .then(data => {
      showJoke.textContent = data;
    });
}

export { getJoke }