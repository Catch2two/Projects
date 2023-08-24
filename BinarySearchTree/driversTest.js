import BinarySearchTree from './Tree.js';
import mergeSort from './mergeSort.js';

// Arrays1
const array = [60, 77, 89, 12, 23, 89]
const array2 = [1, 22, 3, 8, 0, 12]
// Driver Tests
const tree = new BinarySearchTree(); // Create new BST
const testArray = tree.buildTree(mergeSort(array));
tree.root = testArray;


// 1st Driver Test
console.log("Test #1")
console.log("tree.insert(17): ")
console.log("tree.remove(77): ")
tree.remove(77)
tree.insert(17)
BinarySearchTree.prettyPrint(tree.root)

// 2nd Driver Test
console.log("Test #2")
const testArray2 = tree.buildTree(mergeSort(array2));
tree.root = testArray2;
console.log("tree.insert(88): ")
console.log("tree.remove(22): ")
tree.remove(22)
tree.insert(88)
BinarySearchTree.prettyPrint(tree.root)