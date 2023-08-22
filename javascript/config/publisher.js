class Publisher {
  constructor() {
    this.subscribers = [];
  }
  subscribe(fn) { 
    this.subscribers.push(fn);
  }
  publish(data) {
    this.subscribers.forEach(fn => fn(data));
  }
}

export default Publisher;