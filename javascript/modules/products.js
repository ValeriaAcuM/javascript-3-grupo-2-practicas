import { MainImagen } from "./productImgChange.js";

export default class Imagen {
  constructor(image, nombre, precio) {
    this.image = image;
    this.nombre = nombre;
    this.precio = precio;
    this.observadores = [];
  }

  agregarObservador(observador) {
    this.observadores.push(observador);
  }

  eliminarObservador(observador) {
    this.observadores = this.observadores.filter((o) => o !== observador);
  }

  notificar() {
    this.observadores.forEach((observador) => observador.actualizar(this));
  }
}

export class NombreImagen {
  actualizar(imagen) {
    document.getElementById("title").innerHTML = imagen.nombre;
  }
}

export class PrecioImagen {
  actualizar(imagen) {
    document.getElementById("price").innerHTML = imagen.precio;
  }
}

const mainImagen = new MainImagen();
const nombre = new NombreImagen();
const precio = new PrecioImagen();

const imagen1 = new Imagen();
imagen1.agregarObservador(nombre);
imagen1.agregarObservador(precio);
document.getElementById("img_shirt").addEventListener("click", () => {
  imagen1.nombre = "Black Shirt";
  imagen1.precio = "$7";
  imagen1.notificar();
  mainImagen.actualizar(imagen1);
});

const imagen2 = new Imagen();
imagen2.agregarObservador(nombre);
imagen2.agregarObservador(precio);
document.getElementById("img_pillow").addEventListener("click", () => {
  imagen2.nombre = "Black Pillow";
  imagen2.precio = "$15";
  imagen2.notificar();
  mainImagen.actualizar(imagen2);
});

const imagen3 = new Imagen();
imagen3.agregarObservador(nombre);
imagen3.agregarObservador(precio);
document.getElementById("img_poster").addEventListener("click", () => {
  imagen3.nombre = "Black Poster";
  imagen3.precio = "$5";
  imagen3.notificar();
  mainImagen.actualizar(imagen3);
});

const imagen4 = new Imagen();
imagen4.agregarObservador(nombre);
imagen4.agregarObservador(precio);
document.getElementById("img_case").addEventListener("click", () => {
  imagen4.nombre = "Black Case";
  imagen4.precio = "$7";
  imagen4.notificar();
  mainImagen.actualizar(imagen4);
});