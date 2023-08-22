class BST{
    insert(data){
        if(this.root) // Check for Root Node
        this.root.insert(data); // If we DO have a Root Node, Call insert Method, Begin the search for the place for us to Insert the data at.
    else // Otherwise that means our tree is Empty.
        this.root = new Node(data) // Set the Root Node to the node we wanted to Insert within our tree.
    }
}

class Node{
    insert(data){
        if(this.data == data) // Check if there are Duplicates.
            throw new Error("Data already exists within tree");
        else if(this.data > data){ // If not a Duplicate, we can test data is less than current node
            if(this.left) // Check if the current node has a Left Child (Either it will or not, not=null)
                this.left.insert(data); // 
            else
                this.left = new Node(data) // If there is no node, create new one.
        }
        else { // If data is not bigger than what we're current at
            if(this.right) // Check if there is Right Child
                this.right.insert(data); // If there IS a Right Child, we need to go down the right Subtree. continue searching
            else // if there is no Right Child
                this.right = new Node(data); // Insert new Node on right side.
        }
    }
}

const bst = new BST();

bst.insert(83)
bst.insert(8)
bst.insert(28)
bst.insert(1)

const array = bst.toArray();

console.log(array)