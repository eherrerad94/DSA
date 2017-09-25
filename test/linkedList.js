import { assert } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import LinkedList from '../src/linkedList';

describe('LinkedList Testing', () => {
    let linkedList;
    beforeEach(() => {
        linkedList = new LinkedList();

    });
    it('Should start empty', () => {
        assert.equal(linkedList.length, 0);
    });
    it('Add node to the tail', () => {
        linkedList.addLast(5);
        assert.equal(linkedList.length, 1);
    });
    it('Tail data should be 5', () => {
        linkedList.addLast(5);
        let tail = linkedList.getTail()
        assert.equal(tail, 5);
    });
    it('Contains 5', () => {
        linkedList.addLast(5);
        assert.equal(linkedList.contains(5), true)
    });
    it('Contains 15', () => {
        linkedList.addLast(5);
        assert.equal(linkedList.contains(15), false)
    });
    it('Traverse should return a string', () => {
        let string = linkedList.traverse();
        assert.typeOf(string, 'string');
    });
    it('Add node to the head', () => {
        linkedList.addLast(5);
        linkedList.addBefore(0);
        let string = linkedList.traverse().trim();
        assert.equal(string, '0 5');
    });
    it('Remove node', () => {
        linkedList.addBefore(0);
        assert.equal(linkedList.remove(0), true);
    });
});