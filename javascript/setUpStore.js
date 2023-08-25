import { getJoke } from "./modules/randomJoke.js";
import initColor from "./config/color.js";
import initProduct from "./config/details.js";
import { modal } from "./modules/modal.js";

initColor();
initProduct();
modal();
getJoke();

const init = () => {
  const getJokeBtn = document.querySelector("#get_btn");
  getJokeBtn.addEventListener("click", getJoke);
}

export default init;