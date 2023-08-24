import Publisher from "./publisher.js";
import state from "../source/default.js";
import products from "../source/config.js";

const informationChange = new Publisher();

const handleInfoChange = () => {
  const btnProducts = document.querySelectorAll('.products_img');
  btnProducts.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const product = event.currentTarget.dataset.id;
      informationChange.publish(product);
      console.log("product", product);
    })
  })
};

function mainImgChange(product) {
  console.log("mainImgChange", product);
  const mainImageProducts = document.getElementById("mainImage");
  mainImageProducts.setAttribute("src", `../../img/product-${product}-${state.color}.jpg`);
  const title = document.getElementById('title');
  title.innerHTML = `${state.color} ${product} with joke`;
  const price = document.getElementById('price');
  price.innerHTML = products[product][state.color];

  state.product = product;
};

function initProduct() {
  handleInfoChange();
  informationChange.subscribe(mainImgChange);
};

export default initProduct;

