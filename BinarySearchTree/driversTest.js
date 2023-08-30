import BinarySearchTree from './Tree.js';
import mergeSort from './mergeSort.js';


const tree = new BinarySearchTree(); // Create new BST


// Array 1
const array = [60, 77, 89, 12, 23, 89, 98, 200, 55, 78, 600]
// Array 2
const array2 = [1, 22, 3, 8, 0, 12]
// Array 3 (randomize Array)
const randomArray = (sizeOfArray) => {
    return Array.from({ length: sizeOfArray }, () => Math.floor(Math.random() * 100));
};
// Driver Tests
/*
const testArray = tree.buildTree(mergeSort(array)); // Create then Sort array
tree.root = testArray;

// 1st Driver Test
console.log("Test #1")
console.log("tree.remove(77): ")
tree.remove(77)
console.log('Find Min Height: ' + tree.findMinHeight())
console.log('Find Max Height: ' + tree.findMaxHeight())
console.log('Check if Balanced: ' + tree.isBalanced())
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
console.log('Find Min Height: ' + tree.findMinHeight())
console.log('Find Max Height: ' + tree.findMaxHeight())
console.log('Check if Balanced: ' + tree.isBalanced())
BinarySearchTree.prettyPrint(tree.root)
*/
// 3rd Driver Test (randomize array)
console.log("Test Random Array")
console.log("mergeSort(randomArray(20)), this will create 20 nodes. Then MergeSort them.", )
const testRandomArray = tree.buildTree(mergeSort(randomArray(10))) 
tree.root = testRandomArray;
tree.insert(666)

BinarySearchTree.prettyPrint(tree.root)


console.log('levelOrder =>  ' + tree.levelOrder())
console.log("\n")
console.log('reBalance =>  ' + tree.reBalance())
console.log("\n")
console.log('inOrder =>  ' + tree.inorder())
console.log("\n")
console.log('preOrder =>  ' + tree.preorder())
console.log("\n")
console.log('postOrder =>  ' + tree.postorder())
console.log('Find Min Height: ' + tree.findMinHeight())
console.log('Find Max Height: ' + tree.findMaxHeight())
console.log('Check if Balanced: ' + tree.isBalanced())