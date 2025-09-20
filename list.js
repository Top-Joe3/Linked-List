class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor(head) {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    let currentFirstNode = this.head;
    newNode.nextNode = currentFirstNode;
    this.head = newNode;
  }

  size() {
    let listLength = 1;
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      listLength += 1;
    }
    return listLength;
  }

  headNode() {
    const firstNode = this.head;
    return firstNode;
  }

  tail() {
    let tailNode = this.head;
    while (tailNode.nextNode) {
      tailNode = tailNode.nextNode;
    }
    return tailNode;
  }

  at(index) {
    let currentNode = this.head;
    let counter = 1;
    while (counter <= index) {
      currentNode = currentNode.nextNode;
      counter += 1;
    }
    return currentNode;
  }

  pop() {
    if (!this.head) return null;
    if (!this.head.nextNode) {
      this.head = null;
      return;
    }
    let listLength = this.size();
    let counter = 1;
    let currentNode = this.head;
    while (counter < listLength - 1) {
      currentNode = currentNode.nextNode;
      counter++;
    }
    currentNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode.nextNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    if (!this.head) return null;
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return counter;
      }
      currentNode = currentNode.nextNode;
      counter++;
    }
    return null;
  }

  insert(value, index) {
    const newNode = new Node(value);
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    let counter = 0;
    while (currentNode && counter < index - 1) {
      currentNode = currentNode.nextNode;
      counter++;
    }

    if (!currentNode) {
      throw new Error("Index out of bounds");
    }

    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
  }

  remove(index) {
    if (!this.head) {
      throw new Error("List is empty");
    }
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let currentNode = this.head;
    let counter = 0;
    while (currentNode && counter < index - 1) {
      currentNode = currentNode.nextNode;
      counter++;
    }
    if (!currentNode || !currentNode.nextNode) {
      throw new Error("Index out of bounds");
    }
    currentNode.nextNode = currentNode.nextNode.nextNode;
  }

  toString() {
    let currentNode = this.head;
    let allNodes = "";
    while (currentNode) {
      allNodes += currentNode.value + "->";
      currentNode = currentNode.nextNode;
    }
    console.log(allNodes + "null");
  }
}
