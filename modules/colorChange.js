export { changeColorImage }

//// CHANGE PRODUCT COLORS ////
function changeColorImage() {
  const blackBtn = document.getElementById("black");
  const whiteBtn = document.getElementById("white");
  const imgChange = document.getElementById("imgChange");
  const imgPillowColor = document.getElementById("imgPillowColor");

  blackBtn.onclick = function() {
    imgChange.src = "./img/product-shirt-black.jpg";
    imgPillowColor.src = "./img/product-pillow-black.jpg";
  }

  whiteBtn.onclick = function() {
    imgChange.src = "./img/product-shirt-white.jpg";
    imgPillowColor.src = "./img/product-pillow-white.jpg";
  }
}
changeColorImage();