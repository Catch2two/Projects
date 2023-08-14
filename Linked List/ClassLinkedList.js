class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }
getFirstNode() {
    if (this.head !== null) {
        return this.head;
    } else {
        return null;
    }
};
getLastNode() {
    let currentNode = this.head;
    while (currentNode.next) {
        currentNode = currentNode.next
    }
    return currentNode
}
addNodeToEnd(data) {
    let newNode = new ListNode(data);

    // If the list is empty, make the new Node the head of the list
    if (this.head === null) {
        this.head = newNode;
    } else {
        // Find the last node
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        // Add new node to end.
        currentNode.next = newNode;
    }

    this.size++;

    return this;
};

removeNodeFromEnd() {
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
    }

    if (previousNode !== null) {
        previousNode.next = null;
    } else {
        this.head = null;
    }

    this.size--;
}

clear() {
    this.head = null;
    this.size = 0;
};

getSize() {
    return this.size;
}

printList() {
    let currentNode = this.head;
    while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}
}

// Lists
let animals = ["dog", "cat", "bird", "horse", "monkey", "fish", "snake", "turtle", "rabbit", "hamster", "panda", "bear"];
let numbers = ["100", "89", "9", "78"]

let list = new LinkedList();
for (let animal of animals) {
    list.addNodeToEnd(animal);
}

// Use LinkedList() to create another list of Numbers
let list2 = new LinkedList();
for (let number of numbers) {
    list2.addNodeToEnd(number);
}
// list2.printList() // 100 89 9 78

// This list
console.log("The list before clearing:");
list.printList();
// The list size
console.log("the size of the list is:", list.getSize()) // the size of the list is: 12
// Select first node
console.log("The first node is:", list.getFirstNode().data)
// Select last node
console.log("The last node is:", list.getLastNode().data)
// Remove last object in list
list.removeNodeFromEnd();
list.printList();
// Clear list
list.clear();
console.log("The list after clearing:");
list.printList(); // The list after clearing: