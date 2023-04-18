class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    let tmp;
    if (this.head !== null) tmp = this.head;
    this.head = new Node(value);
    this.head.nextNode = tmp;
  }

  append(value) {
    if (this.head == null) this.prepend(value);
    else {
      let tmp = this.head;
      while (tmp.nextNode != null) tmp = tmp.nextNode;
      tmp.nextNode = new Node(value);
    }
  }

  size() {
    let tmp = this.head;
    let count = 0;
    while (tmp !== null) {
      count++;
      tmp = tmp.nextNode;
    }

    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    let tmp = this.head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  at(index) {
    let tmp = this.head;
    for (let i = 0; i < index; i++) {
      tmp = tmp.nextNode;
      if (tmp === null) return 'item in this index is undefined';
    }
    return tmp;
  }

  pop() {
    let cur = this.head;
    let prev = null;
    while (cur.nextNode != null) {
      prev = cur;
      cur = cur.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    let tmp = this.head;
    while (tmp !== null) {
      if (tmp.value === value) return true;
      tmp = tmp.nextNode;
    }
    return false;
  }

  find(value) {
    let tmp = this.head;
    let index = 0;
    while (tmp !== null) {
      count++;
      if (tmp.value === value) return count;
      tmp = tmp.nextNode;
    }
    return null;
  }

  toString() {
    let resString = '';
    let tmp = this.head;

    while (tmp !== null) {
      resString += `(${tmp.value}) -> `;
      tmp = tmp.nextNode;
    }

    return resString;
  }
}
