console.log("Driver.js Loaded.")

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; // Holds the root node, single most top of the tree node.    
    }
    buildTree(array) {
        if (array.length === 0) {
          return null;
        }
    
        const middleIndex = Math.floor(array.length / 2);
        const root = new Node(array[middleIndex]);
        this.root = root;
    
        root.left = this.buildTree(array.slice(0, middleIndex));
        root.right = this.buildTree(array.slice(middleIndex + 1));
    
        return root;
    }
    insert(data){
        let newNode = new Node(data);

        if(!this.root){ // Check if there isn't already a Root Node on the tree
            this.root = newNode; // Creates the root node.
            return this; // End process here.
        }

        let tree = this.root; // Find the right position for the new Node.

        while(true){
            if(data < tree.data){ // If new Node is less than the current node...
                if(!tree.left){ // ...and if there is no node on the left (less than current Node)
                    tree.left = newNode; // Create newNode
                    return this; // End process here.
                }
                tree = tree.left // If there is a node on the left, continue...
            } else { // Repeat above, but for right side AKA Greater Than current Node.
                if(!tree.right){
                    tree.right = newNode;
                    return this;
                }
                tree = tree.right;
            }
        }
    }
    // The static keyword in JavaScript means that the method belongs to the class itself, not to any instance of the class. 
    // This means that the method can be called without creating an instance of the class.
    // Call it like this: BinarySearchTree.prettyPrint(tree.root);
    static prettyPrint(node, prefix = "", isLeft = true) {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
    lookup(data) {
        if(!this.root){  // If there isn't a tree to search, return false.
            return false;
        }
        let tree = this.root; // The Root Node.
        while(tree) {  // Loop through the tree looking for searched data...
            if(data < tree.data){  // Traverse left side...
                tree = tree.left;
            } else if(data > tree.data){ // Traverse right side...
                tree = tree.right;
            } else if (tree.data === data) { // If match found, return.
                return true;
            }
        }

        return false;
    }
    remove(data) {
        if(!this.root) { // Check if there is a tree
            return false;
        }

        let currentNode = this.root;
        let parentNode = null; // Previous node... Null because Root has no parent node. It's the starting point.

        while(currentNode) { // Loop through...
            if(data < currentNode.data){ // If the data is less than current Node...
                parentNode = currentNode; // currentNode becomes parentNode...
                currentNode = currentNode.left; // new node moves to left node (Because it's less than the previous node).
            } else if(data > currentNode.data){ // Same as above, except if the node is greater than the current Node, move to the right.
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.data === data) {
                // Match found
                // If there is No RIGHT Child
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        // If parentNode > currentNode, make current left child a child of parent...
                        if(currentNode.data < parentNode.data) {
                            parentNode.left = currentNode.left;

                        // if parentNode < currentNode, mkae left child a right child of parent...    
                        } else if(currentNode.data > parentNode.data) {
                            parentNode.right = currentNode.left;
                        }
                    }
                // if Right child doesnt have a LEFT Child...  
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if(parentNode === null) {
                        this.root = currentNode.right;
                    } else {

                        // if parent > current, make right child of the left parent
                        if(currentNode.data < parentNode.data) {
                            parentNode.left = currentNode.right;

                        // if parent < current, make right child a right child of the parent...    
                        } else if (currentNode.data > parentNode.data) {
                            parentNode.right = currentNode.right;
                        }

                    }
                // Right child that has a LEFT child...    
                } else {
                    // Find the Right child's LEFT MOST child...
                    let leftMost = currentNode.right.left;
                    let leftMostParent = currentNode.right;
                    while (leftMost.left !== null) {
                        leftMostParent = leftMost;
                        leftMost = leftMost.left;
                    }
                    // Parent's left subtree is now leftMost's right subtree
                    leftMostParent.left = leftMost.right;
                    leftMost.left = currentNode.left;
                    leftMost.right = currentNode.right;

                    if(parentNode === null) {
                        this.root = leftMost;
                    } else {
                        if(currentNode.data < parentNode.value) {
                            parentNode.left = leftMost;
                        } else if(currentNode.data > parentNode.data) {
                            parentNode.right = leftMost;
                        }
                    }
                }
                return true;
            }
        }
    }

}

// Functions
function buildTree(array) {
    if (array.length === 0) {
        return null;
    }

    const middleIndex = Math.floor(array.length / 2);
    const root = {
        value: array[middleIndex],
        left: buildTree(array.slice(0, middleIndex)),
        right: buildTree(array.slice(middleIndex + 1)),
    };

    return root
}
// Drivers

// Arrays to convert

const binarySearchTree = new BinarySearchTree();
const array = [10, 5, 30, 50, 20, 15, 25];
const array2 = [66, 12, 0, 11, 99, 298, 67];
const array3 = [4, 2, 5, 6, 3, 1, 8]

const arrays = [array, array2, array3]

arrays.forEach((array) => {
    const root = binarySearchTree.buildTree(array);
    console.log(BinarySearchTree.prettyPrint(root))
})


// tests
/*
tree.insert(15);
tree.insert(5);
tree.insert(25);
tree.insert(50);
tree.insert(20);

BinarySearchTree.prettyPrint(tree.root)
*/
console.log("lookup(11): " + binarySearchTree.lookup(11))
console.log("lookup(67): " + binarySearchTree.lookup(67))

console.log("binarySearchTree.remove(11): ")
binarySearchTree.remove(11);
BinarySearchTree.prettyPrint(binarySearchTree.root)