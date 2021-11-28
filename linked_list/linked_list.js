const util = require('util')


// implementation of linked list
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
        let current = this.head
        let pervious = this.head
        while (current.next !== null) {
            pervious = current
            current = current.next
        }
        pervious.next = null
        this.tail = pervious
        this.length--
        return this
    }
    middleValue() {
        const middleNumber = Math.floor(this.length / 2)
        let i = 1, current = this.head
        while (i < middleNumber) {
            current = current.next
            i++
        }
        return current.value
    }
    shift() {
        const value = this.head.next
        this.head = value
        this.length--
        return this
    }
    unshift(value) {
        const newNode = new Node(value)
        let temp = this.head
        newNode.next = temp
        this.head = newNode
        this.length++
        return this
    }
    set(value, position) {
        // improvement required
        const newNode = new Node(value)
        let temp, pervious, current = this.head
        let i = 0
        while (i < position) {
            pervious = current
            current = current.next
            i++
        }
        temp = pervious.next
        pervious.next = newNode
        pervious.next.next = temp
        this.length++
        return this
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
linkedList.pop()
linkedList.middleValue()
linkedList.shift()
linkedList.unshift(10)
console.log(util.inspect(linkedList.set(100, 0), false, null, true))