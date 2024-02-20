// Linked List Class
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // First node of the list
    this.tail = null; // Last node of the list
    this.length = 0; // Length of the list
  }

  // Add a new node to the end of the list
  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Add a new node to the beginning of the list
  prepend(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length++;
  }

  // Print the list values
  printList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  // Insert a new node at the given index
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new ListNode(value);
    let currentNode = this.head;
    let previousNode;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    newNode.next = currentNode;
    if (previousNode) {
      previousNode.next = newNode;
    } else {
      this.head = newNode;
    }
    this.length++;
  }

  // Remove a node by index
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    let previousNode;
    if (index === 0) {
      this.head = currentNode.next;
    } else {
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
      if (index === this.length - 1) {
        this.tail = previousNode;
      }
    }
    this.length--;
    return currentNode.value;
  }

  addMultiple(values) {
    values.forEach((value) => {
      this.append(value); // Assuming 'append' is a method to add a new node to the end of the list
    });
  }
}

const list = new LinkedList();
// Add multiple things to the list
list.addMultiple(["apple", "orange", "kiwi", "banana", "peach", "grape"]);

// Append a new node to the end of the list
function append(foo) {
  list.append(foo);
}
// Add a new node to the beginning of the list
function prepend(foo) {
  list.prepend(foo);
}
// Return the length of the list
function size() {
  return list.length;
}
// Print the list values
function printList() {
    list.printList();
}
// Return the value of the head node
function head() {
  return list.head.value;
}

// Return the value of the tail node
function tail() {
  return list.tail.value;
}

// Return the value of the node at the given index
function at(index) {
  let currentNode = list.head;
  for (let i = 0; i < index; i++) {
    currentNode = currentNode.next;
  }
  return currentNode.value;
}

// Remove the node at the end of the list
function pop() {
  return list.remove(list.length - 1);
}

// Check if the list contains a certain value
function contains(value) {
  let currentNode = list.head;
  while (currentNode) {
    if (currentNode.value === value) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}

function find(value) {
    let currentNode = list.head;
    let index = 0;
  
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.next; 
      index++;
    }
  
    return null; 
  }
  
