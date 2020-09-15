const LinkedList = require('./LinkedList');
const LinkedListNode = require('./LinkedListNode')

console.log(new LinkedListNode(3))
console.log(new LinkedListNode(3, 10))
console.log(new LinkedListNode('string', true));

let list = new LinkedList([1, 2, 3, 4, 5, 6]);

console.log(list.toArray())
console.log(list.toArray(true))
console.log(list.includes(2))
console.log(list.includes(7))
console.log(list.deleteTail())
console.log(list.toArray(true))
console.log(list.deleteHead())
console.log(list.toArray(true))
console.log(list.toArray(true))
console.log(list.delete(3))
console.log(list.toArray(true))
console.log(list.toArray(true))
console.log(list.prepend(1))
console.log(list.prepend(0))
console.log(list.toArray(true))
