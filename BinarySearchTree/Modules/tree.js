import Node from './node.js'
class Tree {
    constructor(data) {
      this.root = buildTree(data);
    }
  }
  
  // Function to build a tree from an array
  function buildTree(data) {
    if (data.length === 0) {
      return null;
    }
  
    const mid = data.length / 2;
    const root = createNode(data[mid]);
    root.left = buildTree(data.slice(0, mid));
    root.right = buildTree(data.slice(mid + 1));
  
    return root;
  }
  const data = [1, 2, 3, 4, 5];
const tree = new Tree(data);

console.log(tree.root.data); // 3
console.log(tree.root.left.data); // 2
console.log(tree.root.right.data); // 4