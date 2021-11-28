const util = require('util')


// implemetation of linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this
    }
    pop() {

    }
}
const linkedList = new LinkedList()
linkedList.push(10)
linkedList.push(20)
linkedList.push(30)
linkedList.push(40)
linkedList.push(50)
linkedList.push(60)
linkedList.push(70)
console.log(util.inspect(linkedList.push(80), false, null, true))