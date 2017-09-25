class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

export default class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addBack(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return newNode;
    }

    addAfter(data, node) {
        let current = this.head;
        let newNode = new Node(data);
        while (current) {
            if (current.data === node) {
                if (current === this.tail) {
                    this.addBack(data);
                } else {
                    current.next.prev = newNode;
                    newNode.prev = current;
                    newNode.next = current.next;
                    current.next = newNode;
                    this.length++;
                }

            }
        }
        current = current.next;
        return newNode;

    }

    remove() {

    }

    length() {
        return this.length;
    }

    isEmpty() {
        return !this.head ? true : false;
    }


    print() {
        let string = '';
        let current = this.head;
        while (current) {
            string += `${current.data} `;
            current = current.next;
        }
        console.log(string.trim());
    }

}

let doubleLinkedList = new DoubleLinkedList();
console.log('Double Linked List: ')
doubleLinkedList.addBack(10);
doubleLinkedList.addBack(20);
doubleLinkedList.addBack(30);
doubleLinkedList.addBack(40);
doubleLinkedList.print()
console.log();

//https://github.com/benoitvallon/computer-science-in-javascript/blob/master/data-structures-in-javascript/binary-search-tree.es6.js