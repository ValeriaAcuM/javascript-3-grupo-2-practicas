function modal() {
  const openModalButton = document.getElementById("openModalButton");
  const closeModalButton = document.getElementById("closeModalButton");
  const updateModal = document.getElementById("updateModal");

  openModalButton.addEventListener("click", function () {
    updateModal.style.display = "block";
  });

  closeModalButton.addEventListener("click", function () {
    updateModal.style.display = "none";
  });
}

function infoProductModal(state) {
  const modalProduct = document.getElementById("productCartContainer");
  let { image, product, price, joke } = state;

  modalProduct.innerHTML = `
<div class="modalInfo">
  <img src="${image}" alt="">
<h3>${product}</h3>
<p>${price}</p>
<p>${joke}</p>
<button id="btnRemove" type="reset">Remove</button>
</div>
`;
}

export {
  modal,
  infoProductModal
}