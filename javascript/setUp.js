import { getJoke } from "./modules/randomJoke.js";
import { searchForJokes } from "./modules/searchJoke.js";

const init = () => {
  //// JOKES ////
  const getJokeBtn = document.querySelector("#get_btn");
  const button = document.querySelector("#searchButton");

  getJokeBtn.addEventListener("click", getJoke);
  button.addEventListener("click", searchForJokes );
}

export default init;