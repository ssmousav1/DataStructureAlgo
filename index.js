class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return null; // or throw an error
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null; // or throw an error
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);
