function prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
        tree.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        tree.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
}

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
console.log("utils.js Loaded.")
export { buildTree, prettyPrint };
