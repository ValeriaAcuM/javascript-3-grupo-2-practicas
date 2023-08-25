import Publisher from "./publisher.js";
import state from "../source/default.js";
import products from "../source/config.js";
import { infoProductModal } from "../modules/modal.js";

const informationChange = new Publisher();

const handleInfoChange = () => {
  const btnProducts = document.querySelectorAll('.products_img');
  btnProducts.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const product = event.currentTarget.dataset.id;
      informationChange.publish(product);
    })
  })
};

function mainImgChange(product) {
  const mainImageProducts = document.getElementById("mainImage");
  mainImageProducts.setAttribute("src", `../../img/product-${product}-${state.color}.jpg`);

  const title = document.getElementById('title');
  title.innerHTML = `${state.color} ${product} with joke`;

  const price = document.getElementById('price');
  price.innerHTML = products[product][state.color];

  state.price = products[product][state.color];
  state.image = `../../img/product-${product}-${state.color}.jpg`;
  state.product = product;
};

function storage() {
  const addCartBtn = document.getElementById('addCartBtn');
  addCartBtn.addEventListener('click', () => {
    let objectProducts = JSON.stringify(state);

    localStorage.setItem("myObject", objectProducts);

    let product = JSON.parse(localStorage.getItem("myObject"));
    infoProductModal(product);

    const btnRemove = document.getElementById("btnRemove");
    btnRemove.addEventListener("click", () => {
      localStorage.removeItem("myObject");
      infoProductModal({});
    });
  });
}

function initProduct() {
  storage();
  handleInfoChange();
  informationChange.subscribe(mainImgChange);
};

export default initProduct;

