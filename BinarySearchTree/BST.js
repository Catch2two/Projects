class Node {
    constructor(data) {
        this.data = data
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    // Get root
    getRootNode() {
        return this.root;
    }
    insert(data) {
        const node = this.root;
        if(node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) { //Recursive Function
                if(data < node.data) {
                    if(node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left)
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node); // Initially call searchTree()
        }
    }
    findMin() {
        let current = this.root;
        while (current.left !== null) { // If the left number is not Null, move onto the next number until it is Null.
            current = current.left;
        }
        return current.data;
    }
    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
    isPresent(data) {
        let current = this.root;
        while (current) { // While there IS a current node...
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right
            }
        }
        return false;
    }
    remove(data) {
        const removeNode = function(node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) { // If we found the node with the data...
                // node has no children
                if (node.left == null && node.right == null) {
                    return null;
                }
                // node has no left child
                if(node.left == null) {
                    return node.right;
                }
                // node has no right child
                if (node.right == null) {
                    return node.left;
                }
                // node has TWO children
                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}

const bst = new BST();

bst.insert(1);
bst.insert(2);
bst.insert(4);
bst.insert(8);
bst.insert(16);
bst.insert(32);
bst.insert(64);
bst.insert(128);
bst.remove(4)
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(8)
console.log(bst.findMin());
console.log(bst.isPresent(69))
console.log(bst.getRootNode().data)
