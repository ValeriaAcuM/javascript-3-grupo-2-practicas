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
  /* const mainImageProducts = document.getElementById("mainImage");
  mainImageProducts.setAttribute("src", `../../img/product-${state.product}-${color}.jpg`); */
  const title = document.getElementById('title');
  // title.innerHTML = products.product;
  title.innerHTML = `${state.color} ${products.product} with joke`;
  const price = document.getElementById('price');
  //price.innerHTML = state.price;
  //price.innerHTML = `$ ${state.price}`;
  price.innerHTML = `${state.color} `;

  products.product = product;
};

function initProduct() {
  handleInfoChange();
  informationChange.subscribe(mainImgChange);
};

export default initProduct;

