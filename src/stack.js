export default class Stack{
    constructor() {
        this.array = [];
    }

    /**
     * 
     * @param {number} value  Add value to the stack
     */
    push(value){
        this.array.push(value);
    }

    /**
     * Remove the top of the stack
     */
    pop(){
        return this.array.pop();
    }

    /**
     * Get the top of the stack
     */
    peek(){
        return this.array[this.array.length - 1];
        
    }

    /**
     * Get the size of the stack
     */
    length(){
        return this.array.length;
    }

    /**
     *  Print the stack
     */
    display(){
        let string = this.array.join(' -> ');
        console.log(string.trim());
    }

}

// STACK
console.log('Stack:');
let myStack = new Stack();
myStack.push(1);
myStack.push(10);
myStack.push(100);
myStack.push(1000);
myStack.pop();
myStack.push(10000);
myStack.push(100000);
myStack.display();
console.log(`Top: ${myStack.peek()}`);
myStack.pop();
console.log(`Top: ${myStack.peek()}`);
myStack.pop();
console.log(`Top: ${myStack.peek()}`);
myStack.pop();
console.log(`Top: ${myStack.peek()}`);
myStack.pop();
console.log(`Top: ${myStack.peek()}`);
myStack.pop();
console.log();

