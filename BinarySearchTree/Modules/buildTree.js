import Node from './node';

function buildTree(array) {
    if (array.length === 0) {
        return null;
    }

    mid = Math.floor(array.length / 2);
    root = new Node(array[mid]);
    root.left = buildTree(array.slice(0, mid));
    root.right = buildTree(array.slice(mid + 1));

    return root;
}
