function setupColorSelector() {
  var colorSelector = {
    state: "black",
    observers: [],
    setState: function (state) {
      this.state = state;
      this.notifyObservers();
    },
    notifyObservers: function () {
      for (var i = 0; i < this.observers.length; i++) {
        this.observers[i].update(this.state);
      }
    },
    addObserver: function (observer) {
      this.observers.push(observer);
    }
  };
  return colorSelector;
}
const myColorSelector = setupColorSelector();

function ImageObserverColor(element, blackImageSrc, whiteImageSrc) {
  this.element = element;
  this.blackImageSrc = blackImageSrc;
  this.whiteImageSrc = whiteImageSrc;
}

ImageObserverColor.prototype = {
  constructor: ImageObserverColor,
  update: function (state) {
    if (state === "black") {
      this.element.src = this.blackImageSrc;
    } else {
      this.element.src = this.whiteImageSrc;
    }
  }
};

const imageShirt = new ImageObserverColor(document.getElementById("img_shirt"), "./img/store_products/product-shirt-black.jpg", "./img/store_products/product-shirt-white.jpg");
myColorSelector.addObserver(imageShirt);

const imagePillow = new ImageObserverColor(document.getElementById("img_pillow"), "./img/store_products/product-pillow-black.jpg", "./img/store_products/product-pillow-white.jpg");
myColorSelector.addObserver(imagePillow);

const imagePoster = new ImageObserverColor(document.getElementById("img_poster"), "./img/store_products/product-poster-black.jpeg", "./img/store_products/product-poster-white.jpg");
myColorSelector.addObserver(imagePoster);

const imageCase = new ImageObserverColor(document.getElementById("img_case"), "./img/store_products/product-case-black.jpg", "./img/store_products/product-case-white.jpg");
myColorSelector.addObserver(imageCase);

document.getElementById("black").addEventListener('click', function () {
  myColorSelector.setState("black");
});

document.getElementById("white").addEventListener('click', function () {
  myColorSelector.setState("white");
});

export { setupColorSelector }