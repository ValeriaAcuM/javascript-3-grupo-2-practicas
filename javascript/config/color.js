import Publisher from "./publisher.js";
import state from "../source/default.js";
import products from "../source/config.js";

const colorChange = new Publisher();

const handleColorChange = () => {
  const inputColor = document.querySelectorAll(".input-color");
  inputColor.forEach((input) => {
    input.addEventListener("change", (event) => {
      const color = event.currentTarget.dataset.id;
      colorChange.publish(color);
    })
})
};

function mainImageColorChange(color) {
  const imgColorProducts = document.getElementById("mainImage");
  imgColorProducts.setAttribute("src", `/img/product-${state.product}-${color}.jpg`);
  const title = document.getElementById('title');
  title.innerHTML = `${color} ${state.product} with joke`;
  const price = document.getElementById('price');
  price.innerHTML = products[state.product][color];
  state.color = color;
};

function initColor() {
  handleColorChange();
  colorChange.subscribe(mainImageColorChange);
};

export default initColor;
