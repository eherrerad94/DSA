import { describe, it, beforeEach } from 'mocha';
import { assert } from 'chai'

import MyArray from '../src/array';


describe('Array', () => {

    let array;

    beforeEach(() => {
        array = new MyArray();
    })

    it('Should be empty', () => {
        assert.equal(array.length(), 0);
    })

    it('Add value', () => {

        array.add(10);
        assert.equal(array.print(),10);
    })
})