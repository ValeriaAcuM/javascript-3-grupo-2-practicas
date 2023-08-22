import Publisher from "./publisher.js";
import state from "../source/default.js";

const colorChange = new Publisher();

const handleColorChange = () => {
  const inputColor = document.querySelectorAll(".input-color");
  inputColor.forEach((input) => {
    input.addEventListener("change", (event) => {
      const color = event.currentTarget.dataset.id;
      colorChange.publish(color);
      console.log("color", color);
    })
})
};

function mainImageColorChange(color) {
  console.log("mainImageColorChange", color);
  const imgColorProducts = document.getElementById("mainImage");
  imgColorProducts.setAttribute("src", `/img/product-${state.product}-${color}.jpg`);
  state.color = color;
};

function initColor() {
  handleColorChange();
  colorChange.subscribe(mainImageColorChange);
};

export default initColor;
