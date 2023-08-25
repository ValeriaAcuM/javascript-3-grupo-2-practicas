import { getRandomJoke } from "../services/api.js";
import state from "../source/default.js";

function getJoke() {
  const showJoke = document.querySelectorAll(".show_joke");

  return getRandomJoke()
    .then(data => {
      showJoke.forEach((p) => {
        p.innerHTML = data;
      });
      state.joke = data;
    });
}

export { getJoke }