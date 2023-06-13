import { NombreImagen } from "./products.js";
import { PrecioImagen } from "./products.js";
import Imagen from "./products.js";

export class MainImagen {
  actualizar(imagen) {
    const mainImg = document.querySelector(".main_img");
    const imgProducts = document.querySelectorAll(".products_img");

  imgProducts.forEach(img => {
    img.addEventListener("click", function () {
      mainImg.src = img.src
    })
  });
  }
}