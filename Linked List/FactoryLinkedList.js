function LinkedList() {
    let length = 0;
    let head = null;

    let Node = function(element){
        this.value = element;
        this.nextNode = null;
    };

    this.size = function(){
        return length;
    };

    this.head = function(){
        return head;
    };

    this.tail = function(){
        let nextNode = this.head;
        if (nextNode) {
            while (nextNode.next) {
                nextNode = nextNode.next
            }
        }
        return nextNode
    };

    this.index = function(index) {

    };
    
    this.prepend = function(element) {
        let node = new Node(element)
        if (head === null) { 
            head = node;
        } else {
            node.next = head;
            head = node;
        }

        length++;
    };

    this.append = function(element) {
        let node = new Node(element);
        if(head === null){
            head = node;
        } else {
            let currentNode = head;

            while(currentNode.next){
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    }

    this.remove = function(element){
        let currentNode = head;
        let previousNode;
        if(currentNode.value === element){
            head = currentNode.next;
        } else {
            while(currentNode.value !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        length--;
    };
    this.clear = function(element) {
        this.head = null;
    };

    this.pop = function(element){
        let currentNode = head;
    };

    this.contains = function(element){

    };

    this.find = function(element){

    };
}

const linkedList = new LinkedList();
linkedList.append("cat");
linkedList.append("dog");
linkedList.append("fish");
linkedList.append("mouse");
linkedList.append("rabbit");

console.log(linkedList.size()) // 5
console.log(linkedList.head().value) // cat

console.log(linkedList.index(1)) // fish

linkedList.remove("cat")
console.log(linkedList.head().value) // dog

linkedList.prepend("Frog")
console.log(linkedList.head().value) // Frog

linkedList.append("Llama")
console.log(linkedList.size()) // 6

console.log(linkedList.tail()) // Last in the list

linkedList.clear(linkedList)
console.log(linkedList.size())