const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;

  }
}

class BinarySearchTree {
   constructor(){
    this.rootNode = null
   }
  root() {
    if(!this.rootNode) {return null} else{
    return this.rootNode;}
   
    // remove line with error and write your code here
  }

  add(data) {
   this.rootNode = addNode(this.rootNode, data);
   function addNode(node, data){
     if(!node) {return new Node(data)}
     if(node.data === data){
      return node;
     }
     if(node.data > data){
      node.left = addNode(node.left, data)
     } else {node.right = addNode(node.right, data)}
     return node;
   }
    // remove line with error and write your code here
  }

  has(data) {
    return searchData(this.rootNode, data)
    function searchData(node, data) {
      if(!node) { return false}
      if(node.data === data) {
        return true
      }
      if(data < node.data) {
        return searchData(node.left, data)
      } else {return searchData(node.right, data)}
    }
    
    // remove line with error and write your code here
  }

  find(data) {
  
    return findData(this.rootNode, data);
    function findData(node, data) {
     if(!node) {return null} 
      
    if(data < node.data) {
      return findData(node.left, data)
    } else if(data > node.data){return findData(node.right, data)} else {return node}
    }
    
    
    // remove line with error and write your code here
  }

  remove(data) {
    return deleteData(this.rootNode, data);
    function deleteData(node, data) {
      if(!node){
        return null
      }
      if(data < node.data) { 
        node.left = deleteData(node.left, data);
        return node;
      } else if(data> node.data) {
        node.right = deleteData(node.right, data);
        return node;
      } else { if(!node.left && !node.right) {
        return null
      } if(!node.right){
        node = node.left;
        return node;
      } if(!node.left){
        node = node.right;
        return node;
      }
      let minRight = node.right;
      while(minRight.left) {
        minRight = minRight.left;
      }
        node.data = minRight.data
        node.right = deleteData(node.right, minRight.data);
        return node;
    }

    }
    // remove line with error and write your code here
  }

  min() {
    if(!this.rootNode) {return;}
    let node = this.rootNode;
    while(node.left){
      node = node.left;
    }
    return node.data;
    // remove line with error and write your code here
  }

  max() {
    
      if(!this.rootNode) {return;}
      let node = this.rootNode;
      while(node.right){
        node = node.right;
      }
      return node.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};