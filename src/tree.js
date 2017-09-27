function Node(data) {
  this.data = data;
  this.right = null;
  this.left = null;
}

class Tree {
  constructor() {
    this.root = null;
    this.numberOfNodes = 0;
  }

  add(data) {
    if (!this.root) {
      this.root = new Node(data);
      this.numberOfNodes++;
      return;
    } else {
      return this.insertNode(this.root, data);
    }
  }

  insertNode(root, data) {
    let current = root;
    if (data < current.data) {
      if (current.left) return this.insertNode(current.left, data);
      else current.left = new Node(data);
    } else {
      if (current.right) return this.insertNode(current.right, data);
      else current.right = new Node(data);
    }
    this.numberOfNodes++;
  }

  contains(data, root = this.root) {
    let current = root;

    if (
      !current // Not Found
    )
      return false;
    else if (
      current.data === data // Found
    )
      return true;
    else if (data < current.data) {
      // Smaller
      return this.contains(data, current.left);
    } else {
      // Bigger
      return this.contains(data, current.right);
    }
  }

  preOrder(node = this.root, array = []) {
    let current = node;
    if (current) {
      array.push(current.data); // Root case
      this.preOrder(current.left, array); // Left case
      this.preOrder(current.right, array); // Rigth case
    }
    return array.join(" ");
  }

  inOrder(node = this.root, array = []) {
    let current = node;

    if (current) {
      this.inOrder(current.left, array); // Left
      array.push(current.data); // Root
      this.inOrder(current.right, array); // Right
    }
    return array.join(" ");
  }

  postOrder(node = this.root, array = []) {
    let current = node;

    if (current) {
      this.postOrder(current.left, array); // Left
      this.postOrder(current.right, array); // Right
      array.push(current.data); // Root
    }
    return array.join(" ");
  }

  findNode(data, node = this.root) {
    if (!node) return null;
    else if (node.data === data) {
      return node;
    } else if (data < node.data) return this.findNode(data, node.left);
    else return this.findNode(data, node.right);
  }

  findParenNode(data, node = this.root) {
    if (!node) return null;

    if (data < node.data) {
      if (!node.left) return null;
      else if (node.left.data === data) return node;
      else return this.findParenNode(data, node.left);
    } else {
      if (!node.right) return null;
      else if (node.right.data === data) return node;
      else return this.findParenNode(data, node.right);
    }
  }

  remove(data) {
    if (!this.root) return false;
    let nodeToRemove = this.findNode(data);
    if (!nodeToRemove) return false;

    let parentNode = this.findParenNode(data);

    if (this.numberOfNodes == 1) this.root = null;
    else if (!nodeToRemove.left && !nodeToRemove.right) {
      // One node

      // Leaf node
      if (nodeToRemove.data < parentNode.data) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
    } else if (!nodeToRemove.left && nodeToRemove.right) {
      // Right Subtree
      if (nodeToRemove.data < parentNode.data) {
        parentNode.right = nodeToRemove.left;
      } else {
        parentNode.left = nodeToRemove.right;
      }
    } else if (nodeToRemove.left && !nodeToRemove.right) {
      // Left Subtree
      if (nodeToRemove.data < parentNode.data) {
        parentNode.right = nodeToRemove.left;
      } else {
        parentNode.left = nodeToRemove.right;
      }
    } else {
      // Subtrees in both sides
      let largestNode = nodeToRemove.left;

      while (largestNode.right) {
        largestNode = largestNode.right;
      }
      this.findParenNode(largestNode.data).right = null;
      nodeToRemove.data = largestNode.data;
    }

    this.numberOfNodes--;
    return true;
  }

  findMin(node = this.root) {
    if (node.left) {
      return this.findMin(node.left);
    }

    return node.data;
  }

  findMax(node = this.root) {
    if (node.right) {
      return this.findMax(node.right);
    }
    return node.data;
  }

  length() {
    return this.numberOfNodes;
  }
}

let tree = new Tree();
tree.add(50);
tree.add(25);
tree.add(40);
tree.add(15);
tree.add(75);
tree.add(60);
tree.add(90);
tree.contains(50);
// tree.remove(50);
tree.preOrder();
tree.findNode(25);
tree.findParenNode(50);
