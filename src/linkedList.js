
function Node(data) {
    this.data = data;
    this.next = null;
}


export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    addLast(data) {

        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    contains(data) {

        if (this.isEmpty()) return false;
        let current = this.head;

        while (current) {
            if (current.data === data)
                return true;
            current = current.next;
        }
        return false;

    }

    addBefore(data) {
        const node = new Node(data);

        if (this.isEmpty()) {
            this.head = this.tail = node;
        }

        else {
            node.next = this.head;
            this.head = node;
        }
    }

    remove(data) {

        if (this.isEmpty()) return false; // empty list

        let current = this.head;
        if (current.data === data) {
            if (this.head === this.tail) { // Just One node
                this.head = null;
                this.tail = null;
            }
            else if (this.head === current) { //Remove HEAD
                this.head = current.next;
            }
            return true;
        }

        while (current.next) {
            if (current.next.data === data) {
                if (current.next === this.tail) {
                    current.next = null;
                    this.tail = current;
                } else {
                    current.next = current.next.next;
                }
                return true;
            }
            current = current.next;
        }
        return false;
    }

    traverse() {
        let current = this.head;
        let string = '';
        while (current) {
            string += `${current.data} `;
            current = current.next;
        }
        
        return string;
        
    }
    traverseReversal() {
        let string = ''; 
        
        if (this.tail) {
            let current = this.tail;
            while (this.head !== current) {
                let prev = this.head;
                while(prev.next !== current){
                    prev = prev.next;
                }
                string += `${current.data} `;
                current = prev;
            }
            string += `${current.data} `;
        }
        return string;
    }

    isEmpty() {
        return this.head === null;
    }

    reverse(){
        if(this.isEmpty() || this.tail === this.head) return;

    
        let current = this.head;
        let prev = null, tmp = null;
        this.tail = this.head;

        while(current){
            tmp = current.next;
            current.next = prev;
            prev = current;
            current = tmp;
        }
        this.head = prev;
    }

};

console.log('Linked List')
const linkedList = new LinkedList();
linkedList.addLast(1); // 1
linkedList.addLast(2); // 2
linkedList.addLast(3); // 3
linkedList.addLast(4); // 4
linkedList.addLast(5); // 5
linkedList.addBefore(0); // 0
console.log(`is empty? : ${linkedList.isEmpty()}`); // false
console.log(`Traverse:  ${linkedList.traverse()}`); //0  1 2 3 4 5
console.log(`Contains 100: ${linkedList.contains(100)}`); // false
console.log(`Contains 1: ${linkedList.contains(1)}`);// True
console.log(`Contains 0: ${linkedList.contains(0)}`);// True
console.log(`is empty? : ${linkedList.isEmpty()}`); // false
console.log(`Remove 3: ${linkedList.remove(3)}`);// True
console.log(`Traverse:  ${linkedList.traverse()}`); //0 1 2 4 5
console.log(`TraverseReversal:  ${linkedList.traverseReversal()}`); // 5 4 2 1 0
linkedList.reverse();
console.log(`After Reverse:  ${linkedList.traverse()}`); //5 4 2 1 0
linkedList.reverse();
console.log(`Traverse:  ${linkedList.traverse()}`); //0 1 2 4 5