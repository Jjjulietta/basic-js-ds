const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class Queue {
  constructor(){
   this.head = null;
   this.length = null
  }
  getUnderlyingList() {
    if(!this.head){return null} else { 
      let obj = {}
      let current = this.head;
      while(current.next) {
        obj[value] = current.value;
        obj[next] = current.next.value;
       current = current.next
        
      }
      return obj;
    }
    // remove line with error and write your code here
  }

  enqueue(value) {
    console.debug(value)
    if(!this.head) {
      this.head = new ListNode(value)
    }
      let current = this.head;
    while(current.next) {
      current = current.next
    }
   return  current.next = new ListNode(value);
  
   
    // remove line with error and write your code here
  }

  dequeue() {
    if(!this.head) {return null;} 
    let current = this.head;
    if(current.next) {
      this.head = current.next;
      
    }  else { this.head = null; }
    this.length --;
   
  
    
    
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
