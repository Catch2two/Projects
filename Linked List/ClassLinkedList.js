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
    };
// Add node with value to the end of the list
append(value) {
    let newNode = new ListNode(value);

    if (this.head === null) {
        this.head = newNode;
    } else {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

    this.size++;

    return this;
};
// Add node with value to the begining of the list.
prepend(value) {
    let newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;

    return this;
}
// get first node of list
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
getNodeIndexAt(index) {
    let currentNode = this.head;
    let counter = 0;

    while (currentNode && counter < index) {
        currentNode = currentNode.next;
        counter++;
    }

    if (counter === index) {
        return currentNode;
    } else {
        return null;
    }
}
getNodeValueAt(value) {
    let currentNode = this.head;
    let counter = 0;

    while (currentNode && currentNode.data !== value) {
        currentNode = currentNode.next;
        counter++;
    }

    if (currentNode) {
        return counter;
    } else {
        return null;
    }

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

// pop
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
console.log("The list:");
list.printList();
// The list size
console.log("the size of the list is:", list.getSize()) // the size of the list is: 12
// Select first node
console.log("The first node is:", list.getFirstNode().data)
// Select last node
console.log("The last node is:", list.getLastNode().data)
// Add a new node with a value to the end of the list.
console.log("Append Pikachu + Prepend Meowth:")
list.append("Pikachu");
// Add a new node with a value to the begining of the list.
list.prepend("Meowth");
list.printList();
// get node from Index(Specific location on list)
console.log(list.getNodeIndexAt(2).data, "is at node index 2 (getNodeIndex(2))")
// find the value of a node
console.log("The value of 'fish' :", list.getNodeValueAt("fish"));
// Remove last object in list
list.removeNodeFromEnd();
list.printList();

// Clear list
list.clear();
console.log("The list after clearing and appending only Meowth:");
list.append("Meowth");
list.printList(); // The list after clearing: