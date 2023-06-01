class TextSubject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) =>
      observer.update(data));
  }
}

class Div1Observer {
  update(data) {
    document.getElementById("show_Joke2").innerHTML = data;
  }
}

fetch("https://icanhazdadjoke.com/", {
  headers: {
    "Accept": "application/json"
  }
})
  .then(response => response.json())
  .then(data => {
    const textSubject = new TextSubject();
    const div1Observer = new Div1Observer();
    textSubject.subscribe(div1Observer);
    textSubject.notify(data);
    document.getElementById("show_joke").addEventListener("click", (event) => {
      textSubject.notify(event.target.value);

    })
  })
  .catch(error => console.error(error));
