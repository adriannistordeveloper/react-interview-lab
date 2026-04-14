class Node {
    value: any;
    nextNode: any;

    constructor(value: any) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList{

    head: Node | null;

    constructor() {
        this.head = null;
    }

    add(value: any) {

        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            return;
        }

        let currentNode = this.head;

        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
        }

        currentNode.nextNode = newNode;
    }

    reverse(){
        let prev: Node | null = null;
        let current: Node | null = this.head;

        while(current){
            let next = current.nextNode;
            current.nextNode = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }
}


/* 
  [head]                           [tail]
[1, next], [2, next], [3, next], [4, null]
*/