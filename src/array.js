
export default class MyArray {
    constructor() {
        this.array = [];
    }

    /**
     * 
     * @param {number} data Add value to the array
     */
    add(data) {
        this.array.push(data);
    }

    /**
     * 
     * @param {number} data Search value and remove the value
     */
    remove(data) {
        this.array = this.array.filter(current => current !== data);
    }

    /**
     * 
     * @param {number} data Search the value and get the index of the value
     */
    search(data) {
        const foundIndex = this.array.indexOf(data);
        if (~foundIndex) {
            return foundIndex;
        }
        return null;
    }

    /**
     * 
     * @param {number} index Get the value of the index
     */
    getAtIndex(index) {
        return this.array[index];
    }

    /**
     * Get the size of the array
     */
    length() {
        return this.array.length;
    }

    /**
     * Print the array
     */
    print() {
        let string = this.array.join('');
        console.log(string.trim());
    }
}
