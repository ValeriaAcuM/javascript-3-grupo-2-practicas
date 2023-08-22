import { getJoke } from "./modules/randomJoke.js";
import initColor from "./config/color.js";
import initProduct from "./config/details.js";
import { initRandomJokeComponent } from "./modules/randomJoke.js";
import { initDetails } from "./modules/detailProduct.js";
initDetails();
initRandomJokeComponent();
initColor();
initProduct();

const init = () => {
  const getJokeBtn = document.querySelector("#get_btn");
  getJokeBtn.addEventListener("click", getJoke);
}

export default init;