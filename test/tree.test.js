import { assert, should } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import Tree from '../src/tree';
describe('Tree', () => {

    let tree;

    beforeEach(() => {
        tree = new Tree();
    })

    it('Root should be empty', () => {
        assert.equal(tree.root, null);
    });

    it('Add root node', () => {
        tree.add(10);
        assert.equal(tree.root.data, 10);
    });

    it('Should return value if data is present', () => {
        fillTree(tree);
        assert.equal(tree.contains(10), false);
    });


    it('InOrder', () => {
        fillTree(tree);
        let string = tree.inOrder();
        assert.equal(string, '2 3 4 5 6 8 9');
    });
    
    it('PreOrder', () => {
        fillTree(tree);
        let string = tree.preOrder();
        assert.equal(string, '5 3 2 4 8 6 9');
    });

    it('PostOrder', () => {
        fillTree(tree);
        let string = tree.preOrder();
        assert.equal(string, '5 3 2 4 8 6 9');
    });


});

const fillTree = (tree) =>{
    tree.add(5);
    tree.add(8);
    tree.add(3);
    tree.add(4);
    tree.add(2);
    tree.add(9);
    tree.add(6);
}
