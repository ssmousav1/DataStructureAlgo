new class Stack {
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

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items.toString());
  }
}