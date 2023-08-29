import BinarySearchTree from './Tree.js';
import mergeSort from './mergeSort.js';

// Array 1
const array = [60, 77, 89, 12, 23, 89, 98, 200, 55, 78, 600]
// Array 2
const array2 = [1, 22, 3, 8, 0, 12]
// Array 3 (randomize Array)
const randomArray = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
};
// Driver Tests
const tree = new BinarySearchTree(); // Create new BST
const testArray = tree.buildTree(mergeSort(array));
tree.root = testArray;

// 1st Driver Test
console.log("Test #1")
console.log("tree.remove(77): ")
tree.remove(77)
BinarySearchTree.prettyPrint(tree.root)

// 2nd Driver Test
console.log("Test #2")
const testArray2 = tree.buildTree(mergeSort(array2));
tree.root = testArray2; // Swap Array****
console.log("tree.insert(88): ")
console.log("tree.remove(22): ")
console.log("tree.insert(1002): ")
tree.remove(22)
tree.insert(88)
tree.insert(1002)
BinarySearchTree.prettyPrint(tree.root)

// 3rd Driver Test (randomize array)
console.log("Test Random Array")
console.log("mergeSort(randomArray(20)), this will create 20 nodes. Then MergeSort them.", )
const testRandomArray = tree.buildTree(mergeSort(randomArray(20))) 
tree.root = testRandomArray;
tree.insert(666)
BinarySearchTree.prettyPrint(tree.root)


console.log('levelOrder =>  ' + tree.levelOrder())

console.log(tree.inorder())