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
  isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }
    // Method to rebalance an unbalanced tree.
  reBalance() {
    // Check if the tree is unbalanced.
    if (!this.isBalanced()) {
      // Get the root node of the tree.
      const root = this.root;
  
      // Recursively rebalance the tree, starting from the root node.
      this.reBalanceNode(root);
    }
  }
  
  // Method to rebalance a single node in the tree.
  reBalanceNode(node) {
    // Get the height of the left and right subtrees of the node.
    const leftHeight = this.findHeight(node.left);
    const rightHeight = this.findHeight(node.right);
  
    // Check if the node is unbalanced.
    if (Math.abs(leftHeight - rightHeight) > 1) {
      // The node is unbalanced.
  
      // Determine the type of imbalance and perform the appropriate rebalancing operation.
      if (leftHeight > rightHeight) {
        // The node is left-heavy.
        this.leftRotate(node);
      } else {
        // The node is right-heavy.
        this.rightRotate(node);
      }
    }
  }
  
  // Method to find the height of a subtree.
  findHeight(node) {
    // If the node is null, then the height of the subtree is 0.
    if (node === null) {
      return 0;
    }
  
    // Get the heights of the left and right subtrees of the node.
    const leftHeight = this.findHeight(node.left);
    const rightHeight = this.findHeight(node.right);
  
    // Return the maximum of the heights of the left and right subtrees, plus 1.
    return Math.max(leftHeight, rightHeight) + 1;
  }
  
  // Method to rotate the tree left at the given node.
  leftRotate(node) {
    // Get the right child of the node.
    const rightChild = node.right;
  
    // Set the node's right child to be the right child's left child.
    node.right = rightChild.left;
  
    // Set the right child's left child to be the node.
    rightChild.left = node;
  
    // Update the heights of the node and the right child.
    this.updateHeight(node);
    this.updateHeight(rightChild);
  }
  
  // Method to rotate the tree right at the given node.
  rightRotate(node) {
    // Get the left child of the node.
    const leftChild = node.left;
  
    // Set the node's left child to be the left child's right child.
    node.left = leftChild.right;
  
    // Set the left child's right child to be the node.
    leftChild.right = node;
  
    // Update the heights of the node and the left child.
    this.updateHeight(node);
    this.updateHeight(leftChild);
  }
  
  // Method to update the height of a node.
  updateHeight(node) {
    // Get the heights of the left and right subtrees of the node.
    const leftHeight = this.findHeight(node.left);
    const rightHeight = this.findHeight(node.right);
  
    // Update the height of the node.
    node.height = Math.max(leftHeight, rightHeight) + 1;
  }
}