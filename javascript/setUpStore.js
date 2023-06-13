import { getJoke } from "./modules/randomJoke.js";
import { setupColorSelector } from "./modules/colorChange.js"
import Imagen from "./modules/products.js";

const init = () => {
  //// JOKES ////
  const getJokeBtn = document.querySelector("#get_btn");
  getJokeBtn.addEventListener("click", getJoke);

  //// COLOR CHANGE ////
  const colorBlack = document.getElementById("black");
  const colorWhite = document.getElementById("white");

  colorBlack.addEventListener("click", setupColorSelector);
  colorWhite.addEventListener("click", setupColorSelector);
}

export default init;