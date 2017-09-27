
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

    /**
     * Add node to the tail of the list
     * @param {number} data 
     */
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
        this.length++;
    }

    /**
     * Contains a node with this data
     * @param {number} data 
     */
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

    /**
     * Add node to the head of the list
     * @param {number} data 
     */
    addBefore(data) {
        const node = new Node(data);

        if (this.isEmpty()) {
            this.head = this.tail = node;
        }

        else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    /**
     * Return the data of the tail
     */
    getTail(){
        return this.tail.data;
    }

    /**
     * Return the data of the head
     */
    getHead(){
        return this.head.data;
    }

    /**
     * Return a boolean value if node with data was removed
     * @param {number} data 
     */
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
            this.length--;
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
                this.length--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    /**
     * Print the list in order
     */
    traverse() {
        let current = this.head;
        let string = '';
        while (current) {
            string += `${current.data} `;
            current = current.next;
        }
        
        return string;
        
    }
    /**
     * Print the list in reverse order
     */
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

    /**
     * Return a boolean value that says if list is empty.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Reverse the linked list
     */
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

    /**
     * Return the length of node of the linked list
     */
    length(){
        return this.length;
    }

};

// console.log('Linked List')
// const linkedList = new LinkedList();
// linkedList.addLast(1); // 1
// linkedList.addLast(2); // 2
// linkedList.addLast(3); // 3
// linkedList.addLast(4); // 4
// linkedList.addLast(5); // 5
// linkedList.addBefore(0); // 0
// console.log(`is empty? : ${linkedList.isEmpty()}`); // false
// console.log(`Traverse:  ${linkedList.traverse()}`); //0  1 2 3 4 5
// console.log(`Contains 100: ${linkedList.contains(100)}`); // false
// console.log(`Contains 1: ${linkedList.contains(1)}`);// True
// console.log(`Contains 0: ${linkedList.contains(0)}`);// True
// console.log(`is empty? : ${linkedList.isEmpty()}`); // false
// console.log(`Remove 3: ${linkedList.remove(3)}`);// True
// console.log(`Traverse:  ${linkedList.traverse()}`); //0 1 2 4 5
// console.log(`TraverseReversal:  ${linkedList.traverseReversal()}`); // 5 4 2 1 0
// linkedList.reverse();
// console.log(`After Reverse:  ${linkedList.traverse()}`); //5 4 2 1 0
// linkedList.reverse();
// console.log(`Traverse:  ${linkedList.traverse()}`); //0 1 2 4 5