function Node(data){
    this.data = data;
    this.right = null;
    this.left = null;
}

export default class Tree{
    constructor(){
        this.root = null;
        this.numberOfNodes = 0;
    }

    add(data){
        if(!this.root){
            this.root = new Node(data);
            this.numberOfNodes++;
            return;
        }
        return this.insertNode(data, this.root);
        
    }
    insertNode(data, node = this.root){
        if(data < node.data){
            if(node.left){
                return this.insertNode(data, node.left);
            }
            else{
                node.left = new Node(data);
            }
        }
        else{
            if(node.right){
                return this.insertNode(data, node.right);
            }
            else{
                node.right = new Node(data);
            }
        }

        this.numberOfNodes++;
    }

    contains(data, node = this.root){
        if(!node) return false;
        else if (data === node.data) return true;
        else if( data < node.data) return this.contains(data, node.left);
        else return this.contains(data, node.right);
    }

    preOrder(node = this.root, array = []){
        if(node){
            array.push(node.data);
            this.preOrder(node.left, array);
            this.preOrder(node.right, array);
        }
        return array.join(' ');
    }
    
    inOrder(node = this.root, array = []){
        if(node){
            this.inOrder(node.left, array);
            array.push(node.data);
            this.inOrder(node.right, array);
        }
        return array.join(' ');
    }
    
    postOrder(node = this.root, array = []){
        if(node){
            this.postOrder(node.left, array);
            this.postOrder(node.right, array);
            array.push(node.data);
        }
        return array.join(' ');
    }

    findMin(node = this.root){
        if(node.left){
            return this.findMin(node.left);
        }
        return node.data;
    }

    findMax(node = this.root){
        if(node.right){
            return this.findMax(node.right);
        }
        return node.data;
    }

    findNode(data, node = this.root){
        if(!node) return null;
        else if ( data === node.data) return node;
        else if( data < node.data) return this.findNode(data, node.left);
        else return this.findNode(data, node.right);
    }

    findParent(data, node = this.root){
        if(!node) return null;
        
        if(data < node.data){
            if(!node.left)
                return null;
            
            if(node.left.data === data)
                return node;
            else
                return this.findParent(data, node.left);

        }else{
            if(!node.right)
                return null;

            if(node.right.data === data)
                return node;
            else
                return this.findParent(data, node.right);

        }
    }

    remove(data){
        if(!this.root) return false;
        
        let nodeToRemove = this.findNode(data);
        if(!nodeToRemove) return false;

        let parentNode = this.findParent(data);

        if(this.numberOfNodes === 1)
            this.root = null;
            
        else if(!nodeToRemove.left && !nodeToRemove.right){
            if (nodeToRemove.data < parentNode.data){
                parentNode.left = null;
            }else{
                parentNode.right = null;
            }
        }
        else if(!nodeToRemove.left && nodeToRemove.right){
            if(nodeToRemove.data < parentNode.data){
                parentNode.right = nodeToRemove.left;
            }else{
                parentNode.left = nodeToRemove.right;
            }
        }
        else if(nodeToRemove.left && !nodeToRemove.right){
            if(nodeToRemove.data < parentNode.data){
                parentNode.right = nodeToRemove.left;
            }else{
                parentNode.left = nodeToRemove.right;
            }
        }
        else{
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
        
} 