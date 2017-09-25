export default class Queue{
    constructor(){
        this.array = [];
    }

    /**
     * 
     * @param {number} value Add value to queue
     */
    enqueue(value){
        this.array.push(value);
    }

    /**
     *  Remove the head of the queue
     */
    dequeue(){
        return this.array.shift();
    }

    /**
     *  Get the head of the queue
     */
    peek(){
        return this.array[0];
    }

    /**
     *  Get the size of the queue
     */
    length(){
        return this.array.length;
    }

    /**
     * Print the queue
     */
    print(){
        console.log(this.array.join(' <- '));
    }

}




let queue = new Queue();
console.log('Queue: ')
queue.enqueue(10);
queue.enqueue(32);
queue.enqueue(53);
queue.enqueue(51);
queue.print();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
console.log();
