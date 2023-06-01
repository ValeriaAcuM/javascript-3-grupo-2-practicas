export { changeProductImage }

//// CHANGE PRODUCT IMAGES ////
function changeProductImage() {
  const mainImg = document.querySelector(".main_img");
  const imgProducts = document.querySelectorAll(".products_img");

  imgProducts.forEach(img => {
    img.addEventListener("click", function () {
      mainImg.src = img.src
    })
  });
}
changeProductImage();