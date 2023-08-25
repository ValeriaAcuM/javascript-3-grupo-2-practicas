const state = {
  product: 'shirt',
  color: 'black'
};

let objectProducts = JSON.stringify(state);
console.log("objectProducts", objectProducts);

localStorage.setItem("myObject", objectProducts);
console.log("localStorage", localStorage);

let product = JSON.parse(localStorage.getItem("myObject"));
console.log("product", product);

export default state;