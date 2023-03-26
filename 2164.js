// eslint-disable-next-line max-classes-per-file
const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.size++;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }

  getSize() {
    return this.size;
  }
}

const cards = new LinkedList();
for (let i = 1; i <= input; i++) {
  cards.addNode(i);
}

while (cards.getSize() !== 1) {
  cards.removeHead();
  cards.addNode(cards.getHead());
  cards.removeHead();
}

console.log(cards.getHead());
